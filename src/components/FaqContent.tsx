'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { useT } from '@/i18n/LanguageContext';

export default function FaqContent() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="relative z-20 max-w-3xl mx-auto px-7 py-16 lg:px-8 lg:py-24">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brand-500">
          FAQ
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {t.faq.title}
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-7">
          {t.faq.description}
        </p>
      </Reveal>

      <div className="mt-12 space-y-3">
        {t.faq.items.map((item, index) => {
          const isOpen = open === index;
          return (
            <Reveal key={index} delay={index * 70}>
              <div
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? 'border-brand-500/60 bg-white/80 dark:bg-neutral-900/80'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:border-brand-500/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-neutral-900 dark:text-white">
                    {item.q}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-brand-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
