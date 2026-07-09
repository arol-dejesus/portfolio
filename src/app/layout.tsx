import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import ThemeProvider from '@/components/ThemeProvider'
import { LanguageProvider } from '@/i18n/LanguageContext'

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = 'https://aroldejesus.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Arol Dejesus — Développeur Full-Stack (Web & Mobile)',
    template: '%s | Arol Dejesus',
  },
  description:
    "Arol Dejesus (Arol Sorelle Djoutsop) — ingénieur logiciel et développeur full-stack web & mobile (React, Node.js, Flutter, DevOps). Portfolio, projets et contact.",
  keywords: [
    'Arol Dejesus',
    'Arol Djoutsop',
    'Arol Sorelle Djoutsop',
    'développeur full-stack',
    'développeur web',
    'développeur mobile',
    'React',
    'Node.js',
    'Flutter',
    'DevOps',
    'Cameroun',
    'portfolio',
  ],
  authors: [{ name: 'Arol Dejesus', url: SITE_URL }],
  creator: 'Arol Dejesus',
  publisher: 'Arol Dejesus',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Arol Dejesus',
    title: 'Arol Dejesus — Développeur Full-Stack (Web & Mobile)',
    description:
      "Ingénieur logiciel et développeur full-stack web & mobile (React, Node.js, Flutter). Découvre mes projets et contacte-moi.",
    locale: 'fr_FR',
    images: [{ url: '/assets/images/og.png', width: 1200, height: 630, alt: 'Arol Dejesus — Développeur Full-Stack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arol Dejesus — Développeur Full-Stack',
    description:
      "Ingénieur logiciel & développeur full-stack web & mobile (React, Node.js, Flutter).",
    images: ['/assets/images/og.png'],
  },
  icons: {
    icon: '/assets/images/favicon.png',
    shortcut: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arol Dejesus',
  alternateName: ['Arol Sorelle Djoutsop', 'Arol Djoutsop'],
  url: SITE_URL,
  image: `${SITE_URL}/assets/images/about/arol.jpg`,
  jobTitle: 'Développeur Full-Stack (Web & Mobile)',
  description:
    'Ingénieur logiciel et développeur full-stack web & mobile (React, Node.js, Flutter, DevOps).',
  address: { '@type': 'PostalAddress', addressCountry: 'CM' },
  email: 'mailto:aroldjoutsop19@gmail.com',
  knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Flutter', 'DevOps', 'CI/CD'],
  sameAs: [
    'https://github.com/arol-dejesus',
    'https://www.linkedin.com/in/arol-dejesus-5175182a2',
    'https://www.facebook.com/share/15yX33PE6kP/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <div className="relative h-screen">
              <div className="relative z-10 flex flex-col h-full">
                {children}
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 