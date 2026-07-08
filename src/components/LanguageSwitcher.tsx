'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-lg border border-neutral-200 dark:border-neutral-700 p-0.5 text-xs font-semibold">
      <button
        type="button"
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
        className={`px-2 py-1 rounded-md transition-colors ${
          lang === 'fr'
            ? 'bg-brand-500 text-white'
            : 'text-neutral-500 hover:text-brand-500'
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`px-2 py-1 rounded-md transition-colors ${
          lang === 'en'
            ? 'bg-brand-500 text-white'
            : 'text-neutral-500 hover:text-brand-500'
        }`}
      >
        EN
      </button>
    </div>
  );
}
