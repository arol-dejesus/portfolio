import { promises as fs } from 'fs';
import path from 'path';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { postsConfig } from "@/config/posts";
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const SITE_URL = 'https://aroldejesus.vercel.app';

// Generate static paths
export async function generateStaticParams() {
  return postsConfig.posts.map((post) => ({
    slug: post.slug.replace('posts/', ''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postsConfig.posts.find((p) => p.slug === `posts/${slug}`);
  if (!post) return {};

  const url = `${SITE_URL}/posts/${slug}/`;
  const imageUrl = `${SITE_URL}${post.image}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      tags: post.tags ? [...post.tags] : undefined,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsConfig.posts.find(p => p.slug === `posts/${slug}`);

  if (!post) {
    notFound();
  }

  const postSlug = post.slug.replace('posts/', '');
  const postHtmlPath = path.join(
    process.cwd(),
    'generated',
    'posts',
    `${postSlug}.html`
  );
  let postHtml: string = post.html;

  try {
    postHtml = await fs.readFile(postHtmlPath, 'utf8');
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Falling back to config HTML for ${postSlug}:`, error);
    }
  }

  const url = `${SITE_URL}/posts/${postSlug}/`;
  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url,
    image: `${SITE_URL}${post.image}`,
    author: { '@type': 'Person', name: 'Arol Dejesus', url: SITE_URL },
    publisher: { '@type': 'Person', name: 'Arol Dejesus', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.tags?.join(', '),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
      </div>

      <Navbar />

      <main className="flex-grow">
        <article className="relative z-20 w-[896px] mx-auto mt-32 mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: postHtml }} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
} 