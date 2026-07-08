'use client';

import Image from "next/image";
import { aboutConfig } from "@/config/about";
import { useT } from "@/i18n/LanguageContext";

export default function AboutContent() {
  const t = useT();
  return (
    <section className="relative z-20 w-full max-w-[896px] mx-auto mt-20 sm:mt-28 lg:mt-32 mb-12 px-6 lg:px-0">
      <div className="relative z-20 w-full mx-auto lg:mx-0">
        <span className="block w-12 h-1.5 mb-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-green"></span>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {t.about.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-3 sm:mt-4 lg:mt-6">
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {t.about.description}
            </p>
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              {aboutConfig.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-sm bg-brand-green/10 dark:bg-brand-green/20 text-brand-green dark:text-brand-green-light border border-brand-green/20 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[360px] aspect-square">
              <Image
                src="/assets/images/about/arol.jpg"
                alt="Arol Dejesus"
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-cover object-center rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-16 sm:mt-20">
        <div className="relative flex-1 min-w-0">
          {/* Panneau qui atténue le quadrillage derrière le parcours */}
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-white/60 dark:bg-neutral-900/60" />
          <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">
            {t.about.experienceTitle}
          </h2>
          <div className="py-10">
            {t.about.experience.map((item, index) => (
              <div key={index} className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                <div className="relative flex flex-col justify-start pl-12">
                  <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-brand-500/50">
                    <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">{item.period}</p>
                  <h3 className="my-1 text-lg font-bold dark:text-neutral-100">{item.role}</h3>
                  <p className="mb-1 text-sm font-medium dark:text-neutral-300">{item.company}</p>
                  <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[320px] md:flex-shrink-0">
          <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">{t.about.connectTitle}</h2>
          <div className="py-[30px]">
            <p className="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {(() => {
                const [before, after] = t.about.connectDescription.split(t.about.connectEmailText);
                return (
                  <>
                    {before}
                    <a href={aboutConfig.connect.links.email.url} className="text-brand-600 dark:text-brand-400 underline">
                      {t.about.connectEmailText}
                    </a>
                    {after}
                  </>
                );
              })()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 