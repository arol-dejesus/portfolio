export const contactConfig = {
  title: "Me contacter",
  description:
    "Une idée de projet, une mission freelance ou simplement une question ? Écris-moi, je réponds rapidement.",
  email: "aroldjoutsop19@gmail.com",
  phone: "+237 696 41 02 09",
  phoneHref: "+237696410209",
  location: "Cameroun",
  // Backend PHP sur Hostinger, frontend sur hébergeur gratuit (Vercel/Netlify).
  // ⚠️ Remplace par l'URL ABSOLUE de ton backend Hostinger, puis rebuild le frontend.
  //    Ex : "https://ton-domaine-hostinger.com/contact.php"
  // (Si backend + frontend sont sur le même domaine, tu peux remettre "/contact.php".)
  // En local, si l'URL n'est pas joignable → repli automatique mailto.
  endpoint: "https://ton-domaine-hostinger.com/contact.php",
  // Alternative sans PHP : clé Web3Forms (gratuite, https://web3forms.com).
  // Utilisée seulement si `endpoint` est vide.
  web3formsAccessKey: "",
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
    error: "Oups, une erreur est survenue. Réessaie ou écris-moi directement par email."
  }
} as const;
