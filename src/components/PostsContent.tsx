'use client';

import { articlesConfig } from "@/config/articles";
import Reveal from "./Reveal";
import { useT } from "@/i18n/LanguageContext";

export default function PostsContent() {
  const t = useT();
  return (
    <section className="relative z-20 max-w-5xl mx-auto mt-20 sm:mt-28 lg:mt-32 mb-12 px-7 lg:px-0">
      <Reveal>
        <span className="block w-12 h-1.5 mb-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-green" />
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {t.articles.title}
        </h2>

        {/* Mention : sélection externe, pas mes articles */}
        <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-brand-500/20 bg-brand-500/5 px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
          <svg className="w-5 h-5 flex-shrink-0 text-brand-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{t.articles.disclaimer}</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {articlesConfig.items.map((article, index) => (
          <Reveal key={article.url} delay={index * 80} className="h-full">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/60 dark:bg-neutral-900/60 hover:border-brand-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={t.articles.items[index]?.title ?? ''}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[0.7rem] font-medium px-2.5 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-300 backdrop-blur-sm">
                  {article.source}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  {t.articles.items[index]?.topic ?? ''}
                </span>
                <h3 className="mt-1.5 text-lg font-semibold leading-snug text-neutral-900 dark:text-neutral-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {t.articles.items[index]?.title ?? ''}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400 flex-1">
                  {t.articles.items[index]?.description ?? ''}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                  {t.articles.readMore}
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
                  </svg>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
