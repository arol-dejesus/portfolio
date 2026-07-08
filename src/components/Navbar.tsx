'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import Wordmark from './Wordmark';
import { globalConfig } from '@/config/global';
import { useT } from '@/i18n/LanguageContext';

export default function Navbar() {
  const t = useT();
  const navLabel: Record<string, string> = {
    home: t.nav.home,
    projects: t.nav.projects,
    posts: t.nav.articles,
    about: t.nav.about,
    contact: t.nav.contact,
  };
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Solidify the header once the page is scrolled a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the nav item of the section currently in view
  useEffect(() => {
    const sections = globalConfig.navigation.items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  const linkBase =
    'relative px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-colors duration-200';

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4 select-none">
      <div className="mx-auto max-w-6xl">
        <div
          className={`flex items-center justify-between gap-3 rounded-2xl border px-3 py-2 transition-all duration-300 ${
            scrolled
              ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-neutral-200/80 dark:border-neutral-800 shadow-lg shadow-black/5'
              : 'bg-white/50 dark:bg-neutral-900/40 backdrop-blur-sm border-transparent'
          }`}
        >
          <Wordmark />

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {globalConfig.navigation.items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkBase} ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  {navLabel[item.id]}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <LanguageSwitcher />
            <ThemeToggle />

            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-brand-500/30 hover:bg-brand-600 hover:scale-[1.03] transition-all duration-200"
            >
              {t.header.contactBtn}
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-lg shadow-black/5 p-2 flex flex-col gap-1">
            {globalConfig.navigation.items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  {navLabel[item.id]}
                </Link>
              );
            })}
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              {t.header.contactBtn}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
