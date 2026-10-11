'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { useT } from '@/i18n/LanguageContext';
import { testimonialsConfig } from '@/config/testimonials';

export default function TestimonialsContent() {
  const t = useT();

  if (testimonialsConfig.items.length === 0) {
    return null;
  }

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-7 py-16 lg:px-8 lg:py-24">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brand-500">
          Testimonials
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {t.testimonials.title}
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-7">
          {t.testimonials.description}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsConfig.items.map((item, index) => (
          <Reveal key={index} delay={index * 100} variant="scale">
            <figure className="h-full flex flex-col p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70">
              <svg className="w-8 h-8 text-brand-500/40" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>
              <blockquote className="mt-4 flex-grow text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {item.avatarUrl && (
                  <Image
                    src={item.avatarUrl}
                    alt={item.author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10"
                  />
                )}
                <div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white">{item.author}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {item.role}{item.company ? ` · ${item.company}` : ''}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
