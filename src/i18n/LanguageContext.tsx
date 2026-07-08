'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { fr, type Dictionary } from './fr';
import { en } from './en';

export type Lang = 'fr' | 'en';

const dictionaries: Record<Lang, Dictionary> = { fr, en };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  setLang: () => {},
  t: fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');

  // Charge la langue enregistrée (ou celle du navigateur) après le montage
  useEffect(() => {
    const saved = (typeof window !== 'undefined'
      ? localStorage.getItem('lang')
      : null) as Lang | null;
    if (saved === 'fr' || saved === 'en') {
      setLangState(saved);
    } else if (typeof navigator !== 'undefined' && navigator.language.startsWith('en')) {
      setLangState('en');
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', next);
      document.documentElement.lang = next;
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Raccourci pour n'obtenir que le dictionnaire actif. */
export function useT(): Dictionary {
  return useContext(LanguageContext).t;
}
