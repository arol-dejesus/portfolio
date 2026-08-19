'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { useT } from '@/i18n/LanguageContext';
import { contactConfig } from '@/config/contact';

export default function FinalCta() {
  const t = useT();
  const message = encodeURIComponent(
    "Bonjour Arol, j'ai un projet et j'aimerais démarrer avec vous."
  );
  const whatsappUrl = `https://wa.me/${contactConfig.phoneHref.replace('+', '')}?text=${message}`;

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-green px-7 py-14 sm:px-12 sm:py-16 text-center shadow-2xl shadow-brand-500/30">
          {/* Halo décoratif animé */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-green-light/20 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-7 text-white/90">
              {t.finalCta.description}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="shine group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-600 bg-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                {t.finalCta.primaryBtn}
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/15 border border-white/40 rounded-xl backdrop-blur-sm hover:bg-white/25 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.finalCta.whatsappBtn}
              </a>
            </div>

            {/* Garanties — rassurent et lèvent les freins */}
            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {t.finalCta.guarantees.map((g, i) => (
                <li key={i} className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
