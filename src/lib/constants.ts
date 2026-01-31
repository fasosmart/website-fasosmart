/**
 * Constantes de l'application Fasosmart
 */

export const companyInfo = {
  name: "FASOSMART",
  slogan: "THINK SMART - THINK REVOLUTION",
  tagline: "L'INNOVATION AU COEUR DE NOS ACTIVITÉS !",
  description: "DES SOLUTIONS TECHNOLOGIQUES POUR STIMULER VOTRE PRODUCTIVITÉ",
  mission:
    "Développer et démocratiser l'utilisation des solutions technologiques dans la vie des gens et des sociétés afin de stimuler leur productivité. Nous nous engageons à rendre la technologie accessible à tous, en créant des pont entre innovation et besoins réels du terrain.",
  vision:
    "Devenir une entreprise panafricaine leader au service de la révolution technologique africaine. Nous aspirons à transformer le paysage numérique du continent en proposant des solutions innovantes, adaptées aux réalités locales et aux ambitions internationales de nos clients.",
  contact: {
    phone: "+224 613 15 45 45",
    email: "info@fasosmart.com",
    website: "www.fasosmart.com",
    address: "Guinée Conakry Qrt Kobaya",
  },
} as const;

export const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Nos Filiales", href: "#" },
  // { name: "Services", href: "/services" },
  { name: "Formations", href: "/formations" },
  { name: "Nos réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "5+", label: "Années d'expérience" },
  { value: "20+", label: "Clients satisfaits" },
  { value: "80+", label: "Projets réalisés" },
  { value: "10+", label: "Partenaires" },
] as const;
