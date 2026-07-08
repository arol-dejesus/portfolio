export const globalConfig = {
  site: {
    name: "Arol Dejesus — Portfolio",
    author: "Arol Dejesus",
    description: "Portfolio of Arol Dejesus, developer & creator.",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Accueil",
        href: "/#home",
        id: "home"
      },
      {
        title: "Projets",
        href: "/#projects",
        id: "projects"
      },
      {
        title: "Articles",
        href: "/#posts",
        id: "posts"
      },
      {
        title: "À propos",
        href: "/#about",
        id: "about"
      },
      {
        title: "Contact",
        href: "/#contact",
        id: "contact"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Arol Dejesus. All rights reserved ",
    social: {
      linkedin: "https://www.linkedin.com/in/arol-dejesus-5175182a2",
      github: "https://github.com/arol-dejesus",
      facebook: "https://www.facebook.com/share/15yX33PE6kP/",
      email: "aroldjoutsop19@gmail.com"
    }
  }
} as const; 