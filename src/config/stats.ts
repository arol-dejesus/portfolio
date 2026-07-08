export const statsConfig = {
  // Chiffres clés — ajuste les nombres à ta réalité
  stats: [
    { number: "3", plus: true, label: "Années d'exp." },
    { number: "9", plus: true, label: "Projets livrés" },
    { number: "10", plus: true, label: "Clients satisfaits" },
    { number: "8", plus: false, label: "Technologies" },
  ],
  toolsLabel: "Outils de travail",
  // Pastille colorée = couleur emblématique de chaque techno
  tools: [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#9CA3AF" },
    { name: "Node.js", color: "#5FA04E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Flutter", color: "#02569B" },
    { name: "Tailwind CSS", color: "#38BDF8" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "Docker", color: "#2496ED" },
    { name: "Git", color: "#F05032" },
    { name: "GitHub Actions", color: "#2088FF" },
    { name: "Codemagic", color: "#F45E3F" },
    { name: "Linux / VPS", color: "#FCC624" },
  ],
} as const;
