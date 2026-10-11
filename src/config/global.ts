export const globalConfig = {
  site: {
    name: "Arol Djoutsop — Portfolio",
    author: "Arol Djoutsop",
    description: "Portfolio of Arol Djoutsop, developer & creator.",
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
        title: "Services",
        href: "/#services",
        id: "services"
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
    copyright: "© 2026 Arol Djoutsop. All rights reserved ",
    social: {
      linkedin: "https://www.linkedin.com/in/arol-djoutsop-5175182a2",
      github: "https://github.com/aroldjoutsop",
      facebook: "https://www.facebook.com/share/1UgVtAeYqP/",
      email: "aroldjoutsop19@gmail.com"
    }
  }
} as const; 