// Dictionnaire FRANÇAIS — tout le texte traduisible du site.
// (Les données neutres — images, liens, email, tél, chiffres, techs — restent dans src/config.)

export const fr = {
  code: "fr",
  nav: {
    home: "Accueil",
    services: "Services",
    projects: "Projets",
    articles: "Articles",
    about: "À propos",
    contact: "Contact",
  },
  header: {
    contactBtn: "Me contacter",
  },
  trust: {
    label: "Ils m'ont fait confiance",
  },
  hero: {
    availability: "Disponible pour missions freelance",
    greeting: "Bonjour, je suis",
    realNameLabel: "De vrai nom :",
    realName: "Arol Sorelle Djoutsop",
    description: [
      "Ingénieur logiciel et développeur full-stack, je conçois des applications web et mobiles pensées pour durer — rapides, robustes et simples à prendre en main.",
      "J'accompagne startups, PME et porteurs de projet de la première maquette jusqu'à la mise en production : React et Node.js côté web, Flutter sur mobile, et une automatisation soignée (CI/CD, cloud & VPS) pour livrer vite et sans mauvaise surprise. Ouvert au télétravail et aux missions freelance.",
      "Je fais aussi du référencement (SEO) : je rends les entreprises visibles sur Google et booste leur présence en ligne.",
    ],
    btnAbout: "À propos",
    btnPosts: "Voir les articles",
  },
  stats: {
    labels: ["Années d'exp.", "Projets livrés", "Clients satisfaits", "Technologies"],
    toolsLabel: "Outils de travail",
    conceptsLabel: "Concepts & savoir-faire",
    concepts: [
      "REST API",
      "Microservices",
      "Monolithe modulaire",
      "Clean Architecture",
      "State management",
      "CI/CD",
      "SEO / Référencement web",
      "UI/UX Design",
      "Authentification (JWT / OAuth)",
      "Paiement en ligne",
      "Paiement Mobile Money",
      "Applications SaaS",
      "Intégration d'IA (API)",
      "Tableaux de bord & analytics",
      "Optimisation des performances (Core Web Vitals)",
      "Temps réel (WebSocket)",
      "Automatisation / Workflow",
      "Responsive design",
      "E-commerce",
      "Notifications push",
    ],
  },
  services: {
    title: "Ce que je peux faire pour vous",
    description:
      "De l'idée à la mise en ligne, je prends en charge tout le cycle de votre produit. Voici comment je peux vous aider concrètement.",
    items: [
      {
        title: "Développement Web",
        description:
          "Sites et applications web modernes, rapides et sécurisés — du site vitrine à la plateforme SaaS sur mesure.",
        points: ["React & Next.js", "API & back-end Node.js", "E-commerce & SaaS"],
      },
      {
        title: "Développement Mobile",
        description:
          "Applications iOS & Android performantes à partir d'une seule base de code, pensées pour vos utilisateurs.",
        points: ["Flutter (iOS & Android)", "Paiement Mobile Money", "Publication sur les stores"],
      },
      {
        title: "SEO & Visibilité",
        description:
          "Je rends votre entreprise visible sur Google et booste votre présence en ligne pour attirer plus de clients.",
        points: ["Référencement Google", "Performance & Core Web Vitals", "Visibilité & croissance"],
      },
      {
        title: "Déploiement & Maintenance",
        description:
          "Mise en production fiable et suivi dans la durée : votre produit reste stable, rapide et à jour.",
        points: ["Cloud & VPS", "CI/CD & automatisation", "Suivi & support"],
      },
    ],
    ctaText: "Un projet en tête ?",
    ctaButton: "Parlons-en",
  },
  process: {
    title: "Comment je travaille",
    description:
      "Un processus simple et transparent, du premier échange à la mise en ligne — vous savez toujours où en est votre projet.",
    steps: [
      { title: "Échange & cadrage", description: "On discute de votre besoin, vos objectifs et vos contraintes. Gratuit et sans engagement." },
      { title: "Devis clair", description: "Vous recevez un devis détaillé : périmètre, délais et budget. Aucune surprise en cours de route." },
      { title: "Développement", description: "Je code et je vous tiens informé régulièrement : vous voyez votre projet avancer étape par étape." },
      { title: "Livraison & suivi", description: "Mise en production, prise en main de l'outil et support. Votre projet reste entre de bonnes mains." },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    description: "Tout ce que vous voulez savoir avant de me contacter.",
    items: [
      { q: "Combien coûte un projet ?", a: "Chaque projet est unique. Après un premier échange gratuit, je vous envoie un devis clair et détaillé, adapté à votre budget et à vos objectifs." },
      { q: "En combien de temps livrez-vous ?", a: "Un site vitrine prend généralement de quelques jours à deux semaines ; une application sur mesure, quelques semaines. Je vous donne un délai précis dès le devis." },
      { q: "Travaillez-vous à distance ?", a: "Oui, je travaille en télétravail avec des clients partout dans le monde. Les échanges se font par visio, WhatsApp ou email, selon votre préférence." },
      { q: "À qui appartient le code ?", a: "À vous, entièrement. Le code source vous est livré et vous en êtes propriétaire à 100 %." },
      { q: "Assurez-vous la maintenance ?", a: "Oui. Après la livraison, je reste disponible pour les mises à jour, les corrections et les évolutions de votre produit." },
      { q: "Comment démarrer ?", a: "Écrivez-moi via le formulaire ou WhatsApp. Je réponds sous 24h et on planifie un premier échange gratuit." },
    ],
  },
  finalCta: {
    title: "Prêt à donner vie à votre projet ?",
    description:
      "Discutons de votre idée dès aujourd'hui. Premier échange gratuit, réponse sous 24h — et vous repartez avec une vision claire des prochaines étapes.",
    primaryBtn: "Démarrer mon projet",
    whatsappBtn: "Discuter sur WhatsApp",
    guarantees: ["Devis gratuit", "Réponse sous 24h", "Code source livré", "Sans engagement"],
  },
  projects: {
    title: "Mes projets",
    description:
      "Une sélection de projets sur lesquels j'ai travaillé — du système de vote en ligne à la plateforme e-learning, en passant par des applications mobiles e-commerce et des projets institutionnels.",
    items: [
      { title: "Postora — SaaS social media", description: "SaaS de gestion des réseaux sociaux pour community & social managers : publication multi-réseaux (Instagram, TikTok, LinkedIn, X…), analytics, recommandations IA et stratégies de croissance." },
      { title: "VotezPCO — Vote en ligne", description: "Système de vote en ligne transparent et sécurisé pour les élections du PCO, réalisé avec le comité d'étudiants de l'Université Alassane Ouattara (Côte d'Ivoire)." },
      { title: "Bal UAO — Vote en ligne", description: "Plateforme de vote pour l'élection du Roi & de la Reine du Bal de l'Université Alassane Ouattara : paiement Mobile Money, vote sécurisé et résultats en direct." },
      { title: "Folio E-School", description: "Plateforme de cours de langues (anglais, français, allemand, turc) avec des experts natifs — apps iOS/Android et version web, en architecture microservices." },
      { title: "NKWEL — E-commerce", description: "Application mobile e-commerce (Flutter) pour faire ses provisions du marché sans se déplacer : établissements, catégories, paiement sécurisé et livraison." },
      { title: "Saah Auto — App auto", description: "Application mobile (Flutter) de vente de voitures pour le concessionnaire Saah (Groupe Dema Residence, Yaoundé) : annonces, recherche et mise en relation." },
      { title: "NH Guide — Aide humanitaire", description: "Plateforme d'aide humanitaire et sociale (hébergement d'urgence, accès au logement, cours d'accompagnement), menée en collaboration avec le gouvernement américain." },
      { title: "Sayes Performance", description: "Plateforme de gestion pour une salle de sport dédiée à l'entraînement de sportifs professionnels (football, etc.), en collaboration avec des partenaires turcs." },
      { title: "Foliotsa — Travel & Education", description: "Site de l'agence Folio Travel & Education Services, qui accompagne les étudiants africains pour leurs études à l'étranger." },
      { title: "Folio Disticaret Limited", description: "Site vitrine d'une entreprise du secteur agricole (matériel et tracteurs)." },
    ],
  },
  articles: {
    title: "Articles & veille",
    disclaimer:
      "Une sélection de ressources qui m'inspirent et que je recommande. Ces articles ne sont pas rédigés par moi — ce sont des liens externes.",
    readMore: "Lire l'article",
    items: [
      { topic: "React", title: "React Stack Patterns (2026)", description: "Les patterns et l'architecture React modernes : Server Components, mémoïsation, rendu concurrent et bonnes pratiques d'état." },
      { topic: "Flutter", title: "Architecturer une application Flutter", description: "Le guide officiel : architecture en couches, pattern MVVM, séparation UI / logique / données pour des apps maintenables." },
      { topic: "Performance", title: "Learn Performance", description: "Cours de référence de Google sur la performance web : Core Web Vitals, chargement, rendu et optimisation." },
      { topic: "Node.js", title: "Node.js Best Practices", description: "La référence communautaire (80+ bonnes pratiques) pour écrire du backend Node.js robuste, sécurisé et performant." },
      { topic: "Sécurité", title: "Sécurité web", description: "Le hub sécurité de MDN : HTTPS, CSP, CORS, authentification et protection contre les attaques courantes." },
      { topic: "DevOps", title: "The Twelve-Factor App", description: "La méthodologie de référence pour concevoir des applications SaaS modernes, portables et prêtes pour le cloud." },
    ],
  },
  about: {
    title: "À propos",
    description:
      "Software Engineer et développeur full-stack, je conçois des applications web et mobiles de bout en bout. Côté web je travaille surtout avec React, Next.js et Node.js ; sur mobile, avec Flutter. J'attache autant d'importance à l'expérience utilisateur qu'à ce qui tourne en coulisses : déploiement sur cloud et VPS, intégration et livraison continues (CI/CD), et automatisation des tâches répétitives. Mon objectif est toujours le même : livrer un produit solide, maintenable et réellement utile, de la première ligne de code jusqu'à la mise en production.",
    experienceTitle: "Parcours",
    experience: [
      { period: "2025 - aujourd'hui", role: "Développeur mobile (Flutter)", company: "Saah Auto · Groupe Dema Residence", description: "Application mobile de vente de voitures pour le concessionnaire Saah (Yaoundé) : annonces, recherche de véhicules et mise en relation." },
      { period: "2025 - 2026", role: "Développeur full-stack — orienté frontend", company: "Conops", description: "Conception et développement d'applications web, avec un focus sur le frontend et l'expérience utilisateur." },
      { period: "2025 - 2026", role: "Développeur frontend & mobile — projets gouvernementaux", company: "Ministère des Finances du Cameroun (MINFI) · AFD", description: "Développement du frontend de projets du MINFI (dont Remondata) et d'applications mobiles (projet MINFI et AFD PAGFI), pour le Ministère des Finances camerounais et l'Agence Française de Développement." },
      { period: "2024 - 2026", role: "Développeur full-stack", company: "Folio Travel & Education Services", description: "De l'analyse et la conception jusqu'à la réalisation et au déploiement : plateforme e-learning (E-School), système de vote en ligne (VotezPCO) et applications web & mobiles." },
      { period: "2024 - 2026", role: "Développeur full-stack", company: "Folio E-School · Partenaires allemands", description: "Plateforme e-learning de cours de langues (anglais, français, allemand, turc) avec des experts natifs, développée en collaboration avec des partenaires allemands — apps iOS/Android et version web, architecture microservices." },
      { period: "2024 - 2025", role: "Développeur — projet gouvernemental", company: "NH Guide · Gouvernement américain", description: "Plateforme d'aide humanitaire (hébergement d'urgence, accès au logement, accompagnement), en collaboration avec le gouvernement américain." },
    ],
    connectTitle: "Restons en contact",
    // Le mot « email » est remplacé par un lien dans le composant.
    connectDescription: "Une idée de projet, une mission freelance ou juste envie d'échanger ? Écris-moi un email, je réponds rapidement.",
    connectEmailText: "email",
    skillsLabel: "Compétences",
  },
  contact: {
    title: "Me contacter",
    description:
      "Une idée de projet, une mission freelance ou simplement une question ? Écris-moi, je réponds rapidement.",
    location: "Cameroun",
    form: {
      nameLabel: "Nom",
      namePlaceholder: "Ton nom",
      emailLabel: "Email",
      emailPlaceholder: "toi@exemple.com",
      subjectLabel: "Sujet",
      subjectPlaceholder: "Objet de ton message",
      messageLabel: "Message",
      messagePlaceholder: "Parle-moi de ton projet…",
      submit: "Envoyer le message",
      sending: "Envoi…",
      success: "Merci ! Ton message a bien été envoyé.",
      mailtoNote: "Ton application mail va s'ouvrir avec le message pré-rempli.",
      error: "Oups, une erreur est survenue. Réessaie ou écris-moi directement par email.",
    },
  },
  footer: {
    signatureLabel: "Signature",
    headlinePre: "Je transforme des idées en applications",
    headlineGreen: "web & mobiles",
    headlineOrange: "solides",
    headlinePost: "et durables.",
    subtitle:
      "Développeur full-stack, j'aime les interfaces nettes, les architectures simples et les produits qui restent fiables longtemps après la mise en production.",
    contactLabel: "Contact",
    tags: ["Web & Mobile", "Fiable & maintenable", "Remote & Freelance"],
    explorerLabel: "Explorer",
    followLabel: "Suivre",
    builtWith: "Conçu avec Next.js & Tailwind CSS",
  },
};

export type Dictionary = typeof fr;
