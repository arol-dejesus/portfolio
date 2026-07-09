'use client';

import Link from "next/link";
import Image from "next/image";
import { useT } from '@/i18n/LanguageContext';

export default function HomeContent() {
  const t = useT();
  return (
    <div className="flex-1 flex items-center pt-28 pb-16 lg:pt-32 lg:pb-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 lg:px-8 gap-10 lg:gap-16">
        <div className="w-full lg:w-[52%] text-center lg:text-left">
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t.hero.greeting}{' '}
            <span className="text-brand-green dark:text-brand-green-light">Arol</span>
            <span className="text-brand-500">Dejesus</span>
          </h1>
          <p className="animate-fade-up mt-2 text-base font-medium text-neutral-500 dark:text-neutral-400" style={{ animationDelay: '90ms' }}>
            <span className="text-neutral-400 dark:text-neutral-500">{t.hero.realNameLabel} </span>
            {t.hero.realName}
          </p>
          {t.hero.description.map((paragraph, index) => (
            <p
              key={index}
              className="animate-fade-up mt-4 text-lg leading-7 text-neutral-600 dark:text-neutral-400"
              style={{ animationDelay: `${180 + index * 110}ms` }}
            >
              {paragraph}
            </p>
          ))}
          <div className="animate-fade-up flex flex-row flex-wrap justify-center lg:justify-start gap-4 mt-8" style={{ animationDelay: '430ms' }}>
            <Link
              href="#about"
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-500 rounded-lg shadow-lg shadow-brand-500/30 hover:bg-brand-600 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {t.hero.btnAbout}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="#posts"
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-green bg-white border border-brand-green/40 rounded-lg hover:bg-brand-green/5 hover:border-brand-green dark:bg-neutral-900 dark:text-brand-green-light dark:border-brand-green-light/40 dark:hover:bg-brand-green-light/10 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {t.hero.btnPosts}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:w-[45%] flex items-center justify-center">
          {/* Hexagonal photo with a brand gradient border */}
          <div className="animate-fade-up relative w-[260px] h-[300px] sm:w-[320px] sm:h-[368px] lg:w-[380px] lg:h-[438px]" style={{ animationDelay: '250ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-green [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
            <div className="absolute inset-[6px] overflow-hidden [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
              <Image
                src="/assets/images/about/arol-hero.jpg"
                alt="Arol Dejesus"
                fill
                sizes="(max-width: 768px) 80vw, 380px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
