import type { MetadataRoute } from 'next';
import { postsConfig } from '@/config/posts';

export const dynamic = 'force-static';

const SITE_URL = 'https://aroldjoutsop.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  const posts: MetadataRoute.Sitemap = postsConfig.posts.map((post) => ({
    url: `${SITE_URL}/posts/${post.slug.replace('posts/', '')}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...home, ...posts];
}
