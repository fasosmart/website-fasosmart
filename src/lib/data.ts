/**
 * Données centralisées de Fasosmart
 * Ce fichier contient tout le contenu statique du site
 */

import {
  Code,
  Monitor,
  Shield,
  Network,
  Megaphone,
  Radio,
  Zap,
  FileSpreadsheet,
  TrendingUp,
  Wrench,
  Terminal,
  Server,
  Video,
  Languages,
  LucideIcon,
} from "lucide-react";

// Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Formation {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  features: string[];
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
}

// Services
export const services: Service[] = [
  {
    id: "dev-apps",
    title: "Développement d'applications",
    description:
      "Conception et développement d'applications web et mobiles sur mesure pour répondre à vos besoins spécifiques.",
    icon: Code,
  },
  {
    id: "parc-info",
    title: "Gestion de parc informatique",
    description:
      "Gestion complète de votre infrastructure informatique : maintenance, support et optimisation.",
    icon: Monitor,
  },
  {
    id: "securite",
    title: "Sécurité électronique",
    description:
      "Solutions de sécurité avancées : vidéosurveillance, contrôle d'accès et systèmes d'alarme.",
    icon: Shield,
  },
  {
    id: "reseaux",
    title: "Réseaux informatiques",
    description:
      "Installation, configuration et maintenance de réseaux d'entreprise performants et sécurisés.",
    icon: Network,
  },
  {
    id: "communication",
    title: "Communication digitale",
    description:
      "Stratégies de communication digitale : sites web, réseaux sociaux et marketing en ligne.",
    icon: Megaphone,
  },
  {
    id: "telematique",
    title: "Télématique",
    description:
      "Solutions de géolocalisation et de gestion de flottes pour optimiser vos opérations.",
    icon: Radio,
  },
  {
    id: "energie",
    title: "Énergie renouvelable",
    description:
      "Installation de solutions énergétiques durables : panneaux solaires et systèmes autonomes.",
    icon: Zap,
  },
];

// Formations
export const formations: Formation[] = [
  {
    id: "bureautique",
    title: "Informatique Bureautique",
    description:
      "Maîtrisez les outils bureautiques essentiels : Word, Excel, PowerPoint et plus.",
    icon: FileSpreadsheet,
  },
  {
    id: "comptabilite",
    title: "Comptabilité & Gestion",
    description:
      "Formation aux logiciels de comptabilité et aux principes de gestion financière.",
    icon: TrendingUp,
  },
  {
    id: "marketing",
    title: "Marketing Digital",
    description:
      "Apprenez les stratégies de marketing en ligne : SEO, réseaux sociaux et publicité.",
    icon: Megaphone,
  },
  {
    id: "maintenance",
    title: "Maintenance Informatique",
    description:
      "Diagnostic, réparation et maintenance des équipements informatiques.",
    icon: Wrench,
  },
  {
    id: "programmation",
    title: "Programmation",
    description:
      "Initiez-vous à la programmation : Python, JavaScript, et développement web.",
    icon: Terminal,
  },
  {
    id: "systemes",
    title: "Système & Réseaux",
    description:
      "Administration système, configuration réseau et sécurité informatique.",
    icon: Server,
  },
  {
    id: "multimedia",
    title: "Multimédia",
    description:
      "Création graphique, montage vidéo et production de contenu multimédia.",
    icon: Video,
  },
  {
    id: "langues",
    title: "Langues",
    description:
      "Cours de langues pour améliorer votre communication professionnelle.",
    icon: Languages,
  },
];

// Partenaires
export const partners: Partner[] = [
  { id: "proline", name: "Proline" },
  { id: "alshiraa", name: "Al Shiraa Control Devices" },
  { id: "businefy", name: "Businefy" },
  { id: "ecash", name: "E-Cash" },
  { id: "spark", name: "Spark" },
  { id: "menkana", name: "Menkana" },
  { id: "plasticard", name: "Plasticard ZFT" },
  { id: "odoo", name: "Odoo" },
  { id: "teltonika", name: "Teltonika" },
  { id: "wialon", name: "Wialon" },
];

// Projets
export const projects: Project[] = [
  {
    id: "ciag",
    title: "Digitalisation de la carte d'adhésion",
    client: "CIAG - Chambre de Commerce d'Industrie et d'Artisanat de Guinée",
    description:
      "Projet BOT de digitalisation complète du système de gestion des adhésions.",
    features: [
      "Développement du système informatique",
      "Intégration des solutions de paiement",
      "Fournitures de cartes sécurisées",
      "Équipement des centres communaux et régionaux",
    ],
  },
];

// Statistiques (mockées)
export const stats: Stat[] = [
  { value: "5+", label: "Années d'expérience" },
  { value: "50+", label: "Clients satisfaits" },
  { value: "100+", label: "Projets réalisés" },
  { value: "10+", label: "Partenaires" },
];

// Valeurs de l'entreprise
export const values = [
  {
    title: "Innovation",
    description:
      "Nous adoptons les dernières technologies pour offrir des solutions avant-gardistes.",
  },
  {
    title: "Excellence",
    description:
      "Nous visons l'excellence dans chaque projet et chaque interaction client.",
  },
  {
    title: "Collaboration",
    description:
      "Nous travaillons en étroite collaboration avec nos clients pour atteindre leurs objectifs.",
  },
  {
    title: "Intégrité",
    description:
      "Nous agissons avec honnêteté et transparence dans toutes nos activités.",
  },
];

// Objectifs
export const objectives = [
  "Démocratiser l'accès aux solutions technologiques en Afrique",
  "Accompagner les entreprises dans leur transformation digitale",
  "Former les talents de demain aux métiers du numérique",
  "Contribuer au développement économique de la région",
];

