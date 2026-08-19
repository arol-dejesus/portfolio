'use client';

import { clientsConfig } from '@/config/clients';
import { useT } from '@/i18n/LanguageContext';

export default function TrustBand() {
  const t = useT();
  const items = clientsConfig.items;

  return (
    <section className="relative z-20 py-10 overflow-hidden">
      <p className="text-center text-[0.7rem] font-medium uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-6">
        {t.trust.label}
      </p>

      <div
        className="relative"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        {/* Deux copies pour une boucle sans couture */}
        <div className="flex w-max gap-4 animate-marquee">
          {[...items, ...items].map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
            >
              <svg
                className="w-4 h-4 text-brand-green dark:text-brand-green-light flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" />
              </svg>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
