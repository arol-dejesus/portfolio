'use client';

import Link from 'next/link';
import Wordmark from './Wordmark';
import { globalConfig } from '@/config/global';
import { contactConfig } from '@/config/contact';
import { useT } from '@/i18n/LanguageContext';

const iconBox =
  'flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group-hover:border-brand-500/60 transition-colors';

export default function Footer() {
  const t = useT();
  const social = globalConfig.footer.social;
  const navLabel: Record<string, string> = {
    home: t.nav.home,
    projects: t.nav.projects,
    posts: t.nav.articles,
    about: t.nav.about,
    contact: t.nav.contact,
  };

  return (
    <footer className="relative z-10 border-t border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 lg:py-12">
        {/* Signature band */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <span className="block w-10 h-1 mb-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-green" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
              {t.footer.signatureLabel}
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white">
              {t.footer.headlinePre}{' '}
              <span className="text-brand-green dark:text-brand-green-light">{t.footer.headlineGreen}</span>{' '}
              <span className="text-brand-500">{t.footer.headlineOrange}</span> {t.footer.headlinePost}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {t.footer.subtitle}
            </p>
          </div>

          <div className="md:pl-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500">
              {t.footer.contactLabel}
            </span>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${contactConfig.email}`}
                className="text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors break-all"
              >
                {contactConfig.email}
              </a>
              <a
                href={`tel:${contactConfig.phoneHref}`}
                className="text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {contactConfig.phone}
              </a>
              <span className="text-neutral-500">{t.contact.location}</span>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

        {/* Columns */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand + tags */}
          <div>
            <Wordmark />
            <div className="mt-5 flex flex-wrap gap-2">
              {t.footer.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Explorer */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500">
              {t.footer.explorerLabel}
            </span>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {globalConfig.navigation.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {navLabel[item.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suivre */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500">
              {t.footer.followLabel}
            </span>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  <span className={iconBox}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  GitHub
                </a>
              </li>
              <li>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  <span className={iconBox}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  <span className={iconBox}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </span>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>{globalConfig.footer.copyright}</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
