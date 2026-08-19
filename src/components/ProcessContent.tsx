'use client';

import Reveal from './Reveal';
import { useT } from '@/i18n/LanguageContext';

// Une icône par étape, dans l'ordre des steps du dictionnaire.
const icons = [
  // Échange & cadrage — bulle de discussion
  <path key="chat" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h8M8 14h5M21 12a8 8 0 01-8 8H7l-4 3v-4a8 8 0 018-11h2a8 8 0 018 8z" />,
  // Devis clair — document
  <path key="quote" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6M9 16h6M9 8h2M7 3h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />,
  // Développement — code
  <path key="dev" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l-3 3 3 3m8-6l3 3-3 3M13 6l-2 12" />,
  // Livraison & suivi — fusée
  <path key="ship" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 15l-2 5 5-2m6.5-13.5a9 9 0 00-9 9L9 18l3.5-.5a9 9 0 009-9c0-1-.2-2-.5-3-1-.3-2-.5-3-.5zM14 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />,
];

export default function ProcessContent() {
  const t = useT();
  return (
    <div className="relative z-20 max-w-6xl mx-auto px-7 py-16 lg:px-8 lg:py-24">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brand-500">
          Process
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {t.process.title}
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-7">
          {t.process.description}
        </p>
      </Reveal>

      <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Ligne de liaison horizontale (desktop) */}
        <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-500/40 via-brand-green/40 to-brand-500/40" />

        {t.process.steps.map((step, index) => (
          <Reveal key={index} delay={index * 120} variant="up" className="relative text-center">
            <div className="relative inline-flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-brand-500/60 text-brand-500 shadow-lg shadow-brand-500/10">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {icons[index] ?? icons[0]}
                </svg>
              </span>
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-green text-white text-xs font-bold shadow">
                {index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
