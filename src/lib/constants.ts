/**
 * Constantes de l'application Fasosmart
 */

export const companyInfo = {
  name: "FASOSMART",
  slogan: "THINK SMART - THINK REVOLUTION",
  tagline: "L'INNOVATION AU COEUR DE NOS ACTIVITÉS !",
  description:
    "DES SOLUTIONS TECHNOLOGIQUES POUR STIMULER VOTRE PRODUCTIVITÉ",
  mission:
    "Développer et démocratiser l'utilisation des solutions technologiques dans la vie des gens et des sociétés afin de stimuler leur productivité",
  vision:
    "Une entreprise panafricaine leader au service de la révolution technologique africaine",
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
  { name: "Services & Formations", href: "/services-formations" },
  { name: "Projets", href: "/projets" },
  { name: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "5+", label: "Années d'expérience" },
  { value: "20+", label: "Clients satisfaits" },
  { value: "80+", label: "Projets réalisés" },
  { value: "10+", label: "Partenaires" },
] as const;