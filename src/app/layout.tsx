import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import ThemeProvider from '@/components/ThemeProvider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ScrollProgress from '@/components/ScrollProgress'
import { LanguageProvider } from '@/i18n/LanguageContext'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = 'https://aroldjoutsop.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Arol Djoutsop — Software Engineer & Développeur Full-Stack (Web & Mobile)',
    template: '%s | Arol Djoutsop',
  },
  description:
    "Arol Djoutsop (aussi connu sous Arol Dejesus) — Software Engineer, développeur full-stack web & mobile (React, Node.js, Flutter, DevOps) et entrepreneur technologique, co-fondateur de FOLIO DISTICARET. Portfolio, projets et contact.",
  keywords: [
    'Arol Djoutsop',
    'Arol Dejesus',
    'Arol Sorelle Djoutsop',
    'Software Engineer',
    'ingénieur logiciel',
    'développeur full-stack',
    'développeur web',
    'développeur mobile',
    'React',
    'Node.js',
    'Flutter',
    'DevOps',
    'entrepreneur technologique',
    'FOLIO DISTICARET',
    'référencement SEO',
    'référencement web',
    'visibilité en ligne',
    'Cameroun',
    'portfolio',
  ],
  authors: [{ name: 'Arol Djoutsop', url: SITE_URL }],
  creator: 'Arol Djoutsop',
  publisher: 'Arol Djoutsop',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Arol Djoutsop',
    title: 'Arol Djoutsop — Software Engineer & Développeur Full-Stack',
    description:
      "Software Engineer et développeur full-stack web & mobile (React, Node.js, Flutter). Découvre mes projets et contacte-moi.",
    locale: 'fr_FR',
    images: [{ url: '/assets/images/og.png', width: 1200, height: 630, alt: 'Arol Djoutsop — Développeur Full-Stack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arol Djoutsop — Software Engineer & Full-Stack Developer',
    description:
      "Software Engineer & développeur full-stack web & mobile (React, Node.js, Flutter).",
    images: ['/assets/images/og.png'],
  },
  icons: {
    icon: '/assets/images/favicon.png',
    shortcut: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
  verification: {
    google: 'MRtmgXOSvObc60CS3Q5r50DGSBdEIucd4n3cvP6QXP0',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arol Djoutsop',
  alternateName: ['Arol Sorelle Djoutsop', 'Arol Dejesus'],
  url: SITE_URL,
  image: `${SITE_URL}/assets/images/about/arol.jpg`,
  jobTitle: ['Software Engineer', 'Développeur Full-Stack (Web & Mobile)', 'Entrepreneur technologique'],
  description:
    "Software Engineer et développeur full-stack, je conçois des applications web et mobiles de bout en bout. Côté web je travaille surtout avec React, Next.js et Node.js ; sur mobile, avec Flutter. J'attache autant d'importance à l'expérience utilisateur qu'à ce qui tourne en coulisses : déploiement cloud et VPS, intégration et livraison continues (CI/CD), et automatisation des tâches répétitives. Mon objectif est toujours le même : livrer un produit solide, maintenable et réellement utile, de la première ligne de code jusqu'à la mise en production. Entrepreneur technologique, co-fondateur de FOLIO DISTICARET.",
  disambiguatingDescription:
    "Arol Djoutsop (Arol Sorelle Djoutsop, aussi connu sous Arol Dejesus), développeur full-stack et entrepreneur technologique basé au Cameroun.",
  address: { '@type': 'PostalAddress', addressCountry: 'CM' },
  email: 'mailto:aroldjoutsop19@gmail.com',
  worksFor: [
    { '@type': 'Organization', name: 'FOLIO DISTICARET', url: 'https://foliotr.com' },
    { '@type': 'Organization', name: 'FOLIOTSA', url: 'https://foliotsa.net' },
  ],
  knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Flutter', 'DevOps', 'CI/CD', 'Référencement SEO', 'Entrepreneuriat'],
  sameAs: [
    'https://github.com/aroldjoutsop',
    'https://www.linkedin.com/in/arol-djoutsop-5175182a2',
    'https://www.facebook.com/share/15yX33PE6kP/',
    'https://www.pinterest.com/aroldjoutsop',
    'https://foliotr.com',
    'https://foliotsa.net',
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
            <ScrollProgress />
            <Analytics />
            <SpeedInsights />
            <div className="relative h-screen">
              <div className="relative z-10 flex flex-col h-full">
                {children}
                <WhatsAppButton />
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 