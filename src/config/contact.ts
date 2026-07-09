export const contactConfig = {
  title: "Me contacter",
  description:
    "Une idée de projet, une mission freelance ou simplement une question ? Écris-moi, je réponds rapidement.",
  email: "aroldjoutsop19@gmail.com",
  phone: "+237 696 41 02 09",
  phoneHref: "+237696410209",
  location: "Cameroun",
  // On utilise Web3Forms (gratuit, sans backend) — endpoint PHP désactivé.
  endpoint: "",
  // Clé Web3Forms (publique, ok en clair côté client) — messages envoyés à aroldjoutsop19@gmail.com.
  web3formsAccessKey: "2857e2d4-a7f5-4a3c-8ef1-940625530575",
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
