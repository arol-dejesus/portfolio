'use client';

import { useState } from 'react';
import { contactConfig } from '@/config/contact';
import { globalConfig } from '@/config/global';
import { useT } from '@/i18n/LanguageContext';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactContent() {
  const t = useT();
  const [status, setStatus] = useState<Status>('idle');
  const endpoint = contactConfig.endpoint;
  const web3key = contactConfig.web3formsAccessKey;
  // Le repli mailto est utilisé quand aucun backend n'est joignable (ex. en local).
  const [usedMailto, setUsedMailto] = useState(false);

  function openMailto(name: string, email: string, subject: string, message: string) {
    const mailSubject = encodeURIComponent(subject || `Contact portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${contactConfig.email}?subject=${mailSubject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string) || '';
    const email = (data.get('email') as string) || '';
    const subject = (data.get('subject') as string) || '';
    const message = (data.get('message') as string) || '';
    const company = (data.get('company') as string) || ''; // honeypot anti-spam

    // 1) Backend PHP (Hostinger mutualisé, sans VPS)
    if (endpoint) {
      try {
        setStatus('sending');
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, subject, message, company }),
        });
        const json = await res.json().catch(() => ({ success: false }));
        if (res.ok && json.success) {
          setUsedMailto(false);
          setStatus('success');
          form.reset();
          return;
        }
        throw new Error('backend');
      } catch {
        // En local (pas de PHP) ou en cas d'échec → repli mailto
        openMailto(name, email, subject, message);
        setUsedMailto(true);
        setStatus('success');
        form.reset();
        return;
      }
    }

    // 2) Web3Forms (si pas de backend PHP configuré)
    if (web3key) {
      try {
        setStatus('sending');
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3key,
            name,
            email,
            message,
            subject: subject || `Nouveau message du portfolio — ${name}`,
            from_name: 'Portfolio Arol Dejesus',
          }),
        });
        const json = await res.json();
        if (json.success) {
          setUsedMailto(false);
          setStatus('success');
          form.reset();
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
      return;
    }

    // 3) Repli mailto
    openMailto(name, email, subject, message);
    setUsedMailto(true);
    setStatus('success');
    form.reset();
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors';

  return (
    <section className="relative z-20 max-w-4xl mx-auto mt-20 sm:mt-28 lg:mt-32 mb-16 sm:mb-24 px-7 lg:px-0">
      <span className="block w-12 h-1.5 mb-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-green"></span>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
        {t.contact.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:text-base lg:text-lg">
        {t.contact.description}
      </p>

      <div className="flex flex-col md:flex-row gap-10 mt-10">
        {/* Coordonnées */}
        <div className="w-full md:w-1/3 flex flex-col gap-5">
          <a
            href={`mailto:${contactConfig.email}`}
            className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-500/10 text-brand-500 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="text-sm break-all">{contactConfig.email}</span>
          </a>

          <a
            href={`tel:${contactConfig.phoneHref}`}
            className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-500/10 text-brand-500 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span className="text-sm">{contactConfig.phone}</span>
          </a>

          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green/10 text-brand-green dark:text-brand-green-light flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="text-sm">{t.contact.location}</span>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a href={globalConfig.footer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-brand-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
            <a href={globalConfig.footer.social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-brand-500 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href={globalConfig.footer.social.facebook} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-brand-500 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 flex flex-col gap-4">
          {/* Honeypot anti-spam (caché aux humains) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block mb-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {t.contact.form.nameLabel}
              </label>
              <input id="name" name="name" type="text" required placeholder={t.contact.form.namePlaceholder} className={inputClass} />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {t.contact.form.emailLabel}
              </label>
              <input id="email" name="email" type="email" required placeholder={t.contact.form.emailPlaceholder} className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {t.contact.form.subjectLabel}
            </label>
            <input id="subject" name="subject" type="text" required placeholder={t.contact.form.subjectPlaceholder} className={inputClass} />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {t.contact.form.messageLabel}
            </label>
            <textarea id="message" name="message" required rows={5} placeholder={t.contact.form.messagePlaceholder} className={`${inputClass} resize-y`} />
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-1">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-brand-500 rounded-lg shadow-lg shadow-brand-500/30 hover:bg-brand-600 transition-all duration-300 hover:scale-[1.03] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {status === 'success' && (
              <span className="text-sm font-medium text-brand-green dark:text-brand-green-light">
                {usedMailto ? t.contact.form.mailtoNote : t.contact.form.success}
              </span>
            )}
            {status === 'error' && (
              <span className="text-sm font-medium text-red-500">{t.contact.form.error}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
