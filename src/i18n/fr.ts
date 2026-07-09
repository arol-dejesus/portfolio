// Dictionnaire FRANÇAIS — tout le texte traduisible du site.
// (Les données neutres — images, liens, email, tél, chiffres, techs — restent dans src/config.)

export const fr = {
  code: "fr",
  nav: {
    home: "Accueil",
    projects: "Projets",
    articles: "Articles",
    about: "À propos",
    contact: "Contact",
  },
  header: {
    contactBtn: "Me contacter",
  },
  hero: {
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
      "Temps réel (WebSocket)",
      "Automatisation / Workflow",
      "Responsive design",
      "E-commerce",
      "Notifications push",
    ],
  },
  projects: {
    title: "Mes projets",
    description:
      "Une sélection de projets sur lesquels j'ai travaillé — du système de vote en ligne à la plateforme e-learning, en passant par des applications mobiles e-commerce et des projets institutionnels.",
    items: [
      { title: "Postora — SaaS social media", description: "SaaS de gestion des réseaux sociaux pour community & social managers : publication multi-réseaux (Instagram, TikTok, LinkedIn, X…), analytics, recommandations IA et stratégies de croissance." },
      { title: "VotezPCO — Vote en ligne", description: "Système de vote en ligne transparent et sécurisé pour les élections du PCO, réalisé avec le comité d'étudiants de l'Université Alassane Ouattara (Côte d'Ivoire)." },
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
