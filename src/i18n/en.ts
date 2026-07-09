// ENGLISH dictionary — mirrors the shape of fr.ts.
import type { Dictionary } from "./fr";

export const en: Dictionary = {
  code: "en",
  nav: {
    home: "Home",
    projects: "Projects",
    articles: "Articles",
    about: "About",
    contact: "Contact",
  },
  header: {
    contactBtn: "Contact me",
  },
  hero: {
    greeting: "Hi, I'm",
    realNameLabel: "Real name:",
    realName: "Arol Sorelle Djoutsop",
    description: [
      "Software engineer and full-stack developer, I build web and mobile applications made to last — fast, robust and easy to use.",
      "I help startups, SMEs and project owners from the first mockup to production: React and Node.js on the web, Flutter on mobile, and careful automation (CI/CD, cloud & VPS) to ship fast without bad surprises. Open to remote work and freelance projects.",
      "I also do SEO: I make businesses visible on Google and boost their online presence.",
    ],
    btnAbout: "About",
    btnPosts: "Read articles",
  },
  stats: {
    labels: ["Years of exp.", "Projects shipped", "Happy clients", "Technologies"],
    toolsLabel: "Toolbox",
    conceptsLabel: "Concepts & know-how",
  },
  projects: {
    title: "My projects",
    description:
      "A selection of projects I've worked on — from online voting systems to e-learning platforms, e-commerce mobile apps and government projects.",
    items: [
      { title: "Postora — Social media SaaS", description: "Social media management SaaS for community & social managers: multi-network publishing (Instagram, TikTok, LinkedIn, X…), analytics, AI recommendations and growth strategies." },
      { title: "VotezPCO — Online voting", description: "Transparent and secure online voting system for the PCO elections, built with the student committee of Université Alassane Ouattara (Ivory Coast)." },
      { title: "Folio E-School", description: "Language-learning platform (English, French, German, Turkish) with native experts — iOS/Android apps and a web version, on a microservices architecture." },
      { title: "NKWEL — E-commerce", description: "E-commerce mobile app (Flutter) to do your market shopping without leaving home: vendors, categories, secure payment and delivery." },
      { title: "Saah Auto — Car app", description: "Mobile car-sales app (Flutter) for the Saah dealership (Groupe Dema Residence, Yaoundé): listings, search and matchmaking." },
      { title: "NH Guide — Humanitarian aid", description: "Humanitarian and social aid platform (emergency shelters, housing access, guidance courses), built in collaboration with the U.S. government." },
      { title: "Sayes Performance", description: "Management platform for a gym dedicated to training professional athletes (football, etc.), in collaboration with Turkish partners." },
      { title: "Foliotsa — Travel & Education", description: "Website for Folio Travel & Education Services, an agency guiding African students for their studies abroad." },
      { title: "Folio Disticaret Limited", description: "Showcase website for a company in the agricultural sector (equipment and tractors)." },
    ],
  },
  articles: {
    title: "Articles & reads",
    disclaimer:
      "A selection of resources that inspire me and that I recommend. These articles are not written by me — they are external links.",
    readMore: "Read article",
    items: [
      { topic: "React", title: "React Stack Patterns (2026)", description: "Modern React patterns and architecture: Server Components, memoization, concurrent rendering and state best practices." },
      { topic: "Flutter", title: "Architecting a Flutter app", description: "The official guide: layered architecture, the MVVM pattern, and UI / logic / data separation for maintainable apps." },
      { topic: "Performance", title: "Learn Performance", description: "Google's reference course on web performance: Core Web Vitals, loading, rendering and optimization." },
      { topic: "Node.js", title: "Node.js Best Practices", description: "The community reference (80+ best practices) to write robust, secure and performant Node.js backends." },
      { topic: "Security", title: "Web Security", description: "MDN's security hub: HTTPS, CSP, CORS, authentication and protection against common attacks." },
      { topic: "DevOps", title: "The Twelve-Factor App", description: "The reference methodology to build modern, portable and cloud-ready SaaS applications." },
    ],
  },
  about: {
    title: "About",
    description:
      "Full-stack developer, I build web and mobile applications end to end. On the web I mostly work with React, Next.js and Node.js; on mobile, with Flutter. I care as much about the user experience as about what happens behind the scenes: cloud and VPS deployment, continuous integration and delivery (CI/CD), and automating repetitive tasks. My goal is always the same: ship a solid, maintainable and genuinely useful product, from the first line of code to production.",
    experienceTitle: "Experience",
    experience: [
      { period: "2025 - present", role: "Mobile developer (Flutter)", company: "Saah Auto · Groupe Dema Residence", description: "Mobile car-sales app for the Saah dealership (Yaoundé): listings, vehicle search and matchmaking." },
      { period: "2025 - 2026", role: "Full-stack developer — frontend focused", company: "Conops", description: "Design and development of web applications, with a focus on the frontend and user experience." },
      { period: "2025 - 2026", role: "Frontend & mobile developer — government projects", company: "Cameroon Ministry of Finance (MINFI) · AFD", description: "Frontend development of MINFI projects (including Remondata) and mobile apps (MINFI project and AFD PAGFI), for the Cameroonian Ministry of Finance and the French Development Agency." },
      { period: "2024 - 2026", role: "Full-stack developer", company: "Folio Travel & Education Services", description: "From analysis and design to build and deployment: e-learning platform (E-School), online voting system (VotezPCO) and web & mobile apps." },
      { period: "2024 - 2026", role: "Full-stack developer", company: "Folio E-School · German partners", description: "Language-learning e-learning platform (English, French, German, Turkish) with native experts, built in collaboration with German partners — iOS/Android apps and web version, microservices architecture." },
      { period: "2024 - 2025", role: "Developer — government project", company: "NH Guide · U.S. Government", description: "Humanitarian aid platform (emergency shelters, housing access, guidance), in collaboration with the U.S. government." },
    ],
    connectTitle: "Let's connect",
    connectDescription: "A project idea, a freelance mission or just want to chat? Drop me an email, I reply quickly.",
    connectEmailText: "email",
    skillsLabel: "Skills",
  },
  contact: {
    title: "Contact me",
    description:
      "A project idea, a freelance mission or just a question? Drop me a message, I reply quickly.",
    location: "Cameroon",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "What's it about",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project…",
      submit: "Send message",
      sending: "Sending…",
      success: "Thanks! Your message has been sent.",
      mailtoNote: "Your mail app will open with the message pre-filled.",
      error: "Oops, something went wrong. Try again or email me directly.",
    },
  },
  footer: {
    signatureLabel: "Signature",
    headlinePre: "I turn ideas into",
    headlineGreen: "web & mobile",
    headlineOrange: "solid",
    headlinePost: "apps that last.",
    subtitle:
      "Full-stack developer, I love clean interfaces, simple architectures and products that stay reliable long after launch.",
    contactLabel: "Contact",
    tags: ["Web & Mobile", "Reliable & maintainable", "Remote & Freelance"],
    explorerLabel: "Explore",
    followLabel: "Follow",
    builtWith: "Built with Next.js & Tailwind CSS",
  },
};
