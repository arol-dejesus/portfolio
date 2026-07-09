'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({ children, ...props }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
} 