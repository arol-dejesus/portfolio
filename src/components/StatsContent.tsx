'use client';

import { statsConfig } from '@/config/stats';
import Reveal from './Reveal';
import { useT } from '@/i18n/LanguageContext';

export default function StatsContent() {
  const t = useT();
  return (
    <section className="relative z-20 max-w-5xl mx-auto px-7 py-16 lg:px-0">
      {/* Chiffres clés */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-neutral-200 dark:divide-neutral-800">
        {statsConfig.stats.map((stat, index) => (
          <Reveal key={index} delay={index * 100} className="text-center px-4 py-4">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              {stat.number}
              {stat.plus && (
                <span className="text-brand-green dark:text-brand-green-light">+</span>
              )}
            </div>
            <div className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              {t.stats.labels[index] ?? stat.label}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Outils de travail — panneau qui atténue le quadrillage */}
      <div className="relative mt-12 px-6 py-8 rounded-2xl">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-white/60 dark:bg-neutral-900/60" />

        {/* Séparateur */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
            {t.stats.toolsLabel}
          </span>
          <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Pastilles technologies */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {statsConfig.tools.map((tool, index) => (
            <Reveal key={index} delay={index * 60}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:border-brand-500/60 hover:-translate-y-0.5 transition-all duration-200">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tool.color }}
                />
                {tool.name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
