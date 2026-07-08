import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import ThemeProvider from '@/components/ThemeProvider'
import { LanguageProvider } from '@/i18n/LanguageContext'
import { siteConfig } from '@/config/content'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/assets/images/favicon.png',
    shortcut: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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