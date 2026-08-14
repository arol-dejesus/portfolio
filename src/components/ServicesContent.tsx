'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { useT } from '@/i18n/LanguageContext';

// Une icône par service, dans l'ordre des items du dictionnaire.
const icons = [
  // Web
  <path key="web" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm0 3h18M7 6.5h.01M10 6.5h.01" />,
  // Mobile
  <path key="mobile" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 4a2 2 0 012-2h6a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2V4zm4 15h2" />,
  // SEO
  <path key="seo" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />,
  // Deploy
  <path key="deploy" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 17l6-6-6-6m8 14h8" />,
];

export default function ServicesContent() {
  const t = useT();
  return (
    <div className="relative z-20 max-w-6xl mx-auto px-7 py-16 lg:px-8 lg:py-24">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brand-500">
          Services
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {t.services.title}
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-7">
          {t.services.description}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.services.items.map((service, index) => (
          <Reveal key={index} delay={index * 100} variant="scale">
            <div className="group relative h-full flex flex-col p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:border-brand-500/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/15 to-brand-green/15 text-brand-500 group-hover:from-brand-500 group-hover:to-brand-green group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {icons[index] ?? icons[0]}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400 flex-grow">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <svg className="w-4 h-4 text-brand-green dark:text-brand-green-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
          {t.services.ctaText}
        </span>
        <Link
          href="#contact"
          className="shine group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-500 rounded-lg shadow-lg shadow-brand-500/30 hover:bg-brand-600 transition-all duration-300 hover:scale-105"
        >
          {t.services.ctaButton}
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </Reveal>
    </div>
  );
}
