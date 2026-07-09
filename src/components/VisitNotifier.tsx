'use client';

import { useEffect } from 'react';
import { contactConfig } from '@/config/contact';

/**
 * Envoie un email (via Web3Forms) à chaque NOUVELLE visite du portfolio,
 * avec les infos accessibles publiquement : localisation approximative (IP),
 * page, provenance, appareil, langue, heure.
 * ⚠️ Le nom d'un visiteur anonyme n'est PAS accessible (données privées).
 * - 1 mail par session (pas de spam à chaque clic)
 * - Ne se déclenche pas en local (dev)
 */
export default function VisitNotifier() {
  useEffect(() => {
    const key = contactConfig.web3formsAccessKey;
    if (!key) return;

    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') return; // pas en dev

    if (sessionStorage.getItem('visit-notified')) return;
    sessionStorage.setItem('visit-notified', '1');

    (async () => {
      // Localisation approximative via IP (API gratuite, sans clé)
      let loc: Record<string, unknown> = {};
      try {
        const r = await fetch('https://ipwho.is/');
        const j = await r.json();
        if (j && j.success) {
          loc = {
            ip: j.ip,
            ville: j.city,
            region: j.region,
            pays: `${j.country} ${j.flag?.emoji ?? ''}`.trim(),
            fournisseur: j.connection?.isp,
          };
        }
      } catch {
        /* pas grave, on envoie sans la localisation */
      }

      const payload = {
        access_key: key,
        subject: '👀 Nouvelle visite sur ton portfolio',
        from_name: 'Portfolio — Visites',
        page: window.location.href,
        provenance: document.referrer || 'Accès direct',
        appareil: navigator.userAgent,
        langue: navigator.language,
        ecran: `${window.screen.width}×${window.screen.height}`,
        fuseau: Intl.DateTimeFormat().resolvedOptions().timeZone,
        heure: new Date().toLocaleString('fr-FR'),
        ...loc,
      };

      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        /* silencieux : ne jamais gêner le visiteur */
      }
    })();
  }, []);

  return null;
}
