// Témoignages clients — données neutres (jamais traduites : citation verbatim).
// N'ajouter QUE des citations réelles, obtenues avec l'accord de la personne/organisation citée.
// Tant que ce tableau est vide, TestimonialsContent ne s'affiche pas.
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl?: string;
}

export const testimonialsConfig = {
  items: [] as Testimonial[],
};
