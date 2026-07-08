export const articlesConfig = {
  title: "Articles & veille",
  // Mention claire : ce ne sont pas mes articles, mais une sélection externe.
  disclaimer:
    "Une sélection de ressources qui m'inspirent et que je recommande. Ces articles ne sont pas rédigés par moi — ce sont des liens externes.",
  items: [
    {
      topic: "React",
      title: "React Stack Patterns (2026)",
      description:
        "Les patterns et l'architecture React modernes : Server Components, mémoïsation, rendu concurrent et bonnes pratiques d'état.",
      source: "patterns.dev",
      url: "https://www.patterns.dev/react/react-2026/",
      image: "/assets/images/posts/article-react.jpg",
    },
    {
      topic: "Flutter",
      title: "Architecturer une application Flutter",
      description:
        "Le guide officiel : architecture en couches, pattern MVVM, séparation UI / logique / données pour des apps maintenables.",
      source: "docs.flutter.dev",
      url: "https://docs.flutter.dev/app-architecture",
      image: "/assets/images/posts/article-flutter.jpg",
    },
    {
      topic: "Performance",
      title: "Learn Performance",
      description:
        "Cours de référence de Google sur la performance web : Core Web Vitals, chargement, rendu et optimisation.",
      source: "web.dev",
      url: "https://web.dev/learn/performance/",
      image: "/assets/images/posts/article-perf.jpg",
    },
    {
      topic: "Node.js",
      title: "Node.js Best Practices",
      description:
        "La référence communautaire (80+ bonnes pratiques) pour écrire du backend Node.js robuste, sécurisé et performant.",
      source: "GitHub · goldbergyoni",
      url: "https://github.com/goldbergyoni/nodebestpractices",
      image: "/assets/images/posts/article-node.jpg",
    },
    {
      topic: "Sécurité",
      title: "Sécurité web",
      description:
        "Le hub sécurité de MDN : HTTPS, CSP, CORS, authentification et protection contre les attaques courantes.",
      source: "MDN Web Docs",
      url: "https://developer.mozilla.org/fr/docs/Web/Security",
      image: "/assets/images/posts/article-security.jpg",
    },
    {
      topic: "DevOps",
      title: "The Twelve-Factor App",
      description:
        "La méthodologie de référence pour concevoir des applications SaaS modernes, portables et prêtes pour le cloud.",
      source: "12factor.net",
      url: "https://12factor.net/fr/",
      image: "/assets/images/posts/article-devops.jpg",
    },
  ],
} as const;
