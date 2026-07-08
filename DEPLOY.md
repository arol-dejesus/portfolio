# Déploiement — Frontend gratuit + Backend Hostinger

Architecture retenue :
- **Frontend** (site statique Next export) → hébergeur **gratuit** (Vercel / Netlify / Cloudflare Pages)
- **Backend** du formulaire (`contact.php`) → **Hostinger** (mutualisé, PHP, sans VPS)

Comme les deux sont sur des domaines différents, le **CORS** est déjà géré dans `contact.php`.

---

## 1) Backend sur Hostinger

1. hPanel → **Emails** → crée `contact@ton-domaine.com`.
2. Ouvre `public/contact.php` et vérifie :
   ```php
   $TO   = 'aroldjoutsop19@gmail.com';                 // tu reçois ici
   $FROM = 'contact@' . $_SERVER['SERVER_NAME'];        // = l'adresse créée ci-dessus
   $ALLOWED_ORIGINS = [
     'https://TON-FRONTEND.vercel.app',                 // ← mets l'URL de ton frontend
     'https://TON-FRONTEND.netlify.app',
     // 'https://ton-domaine.com',
   ];
   ```
3. hPanel → **Gestionnaire de fichiers** → `public_html` → uploade **`contact.php`**
   (et éventuellement `.htaccess`). Le backend est alors accessible à :
   **`https://ton-domaine-hostinger.com/contact.php`**

## 2) Frontend sur hébergeur gratuit

1. Dans `src/config/contact.ts`, mets l'URL **absolue** du backend :
   ```ts
   endpoint: "https://ton-domaine-hostinger.com/contact.php",
   ```
2. Build :
   ```bash
   npm run build      # génère le dossier out/
   ```
3. Déploie le dossier **`out/`** :

   **Option A — Netlify (le plus simple)**
   - Va sur https://app.netlify.com/drop
   - **Glisse-dépose le dossier `out/`** → en ligne en quelques secondes.

   **Option B — Vercel (auto à chaque push)**
   - Pousse le repo sur GitHub, importe-le sur https://vercel.com
   - Vercel détecte Next.js et déploie (Output: export → `out/`).

   **Option C — Cloudflare Pages**
   - Connecte le repo, build command `npm run build`, output `out`.

4. Récupère l'URL du frontend (ex. `https://aroldejesus.netlify.app`) et **ajoute-la
   dans `$ALLOWED_ORIGINS` de `contact.php`** (étape 1.2), puis re-uploade `contact.php`.

## 3) Tester

- Ouvre l'URL du frontend → le portfolio s'affiche.
- Envoie un message → le formulaire POST vers `https://ton-domaine-hostinger.com/contact.php`
  → tu reçois l'email sur `$TO`.

---

## Notes

- **`$FROM` doit être une adresse de ton domaine Hostinger** (créée à l'étape 1) — sinon
  les emails partent en spam ou sont refusés.
- **CORS** : seule une origine listée dans `$ALLOWED_ORIGINS` peut appeler le backend.
  Pense à y mettre l'URL exacte de ton frontend (avec `https://`, sans `/` final).
- En local (`npm run dev`), si le backend n'est pas joignable, le formulaire bascule
  automatiquement sur l'ouverture de l'app mail (repli `mailto`).
- Un honeypot anti-spam est intégré.
- **Alternative tout-en-un** : si tu préfères tout mettre sur Hostinger (frontend + backend
  même domaine), remets `endpoint: "/contact.php"` et uploade tout le contenu de `out/`
  dans `public_html`.
