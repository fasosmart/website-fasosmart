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
  // Données pour le verso de la carte (flip card)
  methodology?: string[]; // Méthodologie/processus/cycle de vie du service
}

export interface Formation {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  // Données pour le verso de la carte (flip card)
  prerequisites?: string[]; // Prérequis pour suivre la formation
  skills?: string[]; // Compétences développées
  duration?: string; // Durée de la formation
  price?: string; // Prix de la formation
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
}

export interface Reference {
  id: string;
  name: string;
  services: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
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
    methodology: [
      "Analyse des besoins et cahier des charges",
      "Conception UX/UI et architecture technique",
      "Développement agile (sprints itératifs)",
      "Tests et validation qualité",
      "Déploiement et mise en production",
      "Maintenance et évolutions continues",
    ],
  },
  {
    id: "parc-info",
    title: "Gestion de parc informatique",
    description:
      "Gestion complète de votre infrastructure informatique : maintenance, support et optimisation.",
    icon: Monitor,
    methodology: [
      "Audit complet du parc existant",
      "Planification et stratégie d'optimisation",
      "Installation et configuration des équipements",
      "Monitoring et maintenance préventive",
      "Support technique 24/7",
      "Mise à jour et évolution continue",
    ],
  },
  {
    id: "securite",
    title: "Sécurité électronique",
    description:
      "Solutions de sécurité avancées : vidéosurveillance, contrôle d'accès et systèmes d'alarme.",
    icon: Shield,
    methodology: [
      "Analyse des risques et besoins sécuritaires",
      "Conception du système de sécurité",
      "Installation des équipements",
      "Configuration et paramétrage",
      "Formation des utilisateurs",
      "Maintenance et support technique",
    ],
  },
  {
    id: "reseaux",
    title: "Réseaux informatiques",
    description:
      "Installation, configuration et maintenance de réseaux d'entreprise performants et sécurisés.",
    icon: Network,
    methodology: [
      "Étude de faisabilité et planification",
      "Conception de l'architecture réseau",
      "Installation des équipements",
      "Configuration et sécurisation",
      "Tests de performance et validation",
      "Documentation et formation",
    ],
  },
  {
    id: "communication",
    title: "Communication digitale",
    description:
      "Stratégies de communication digitale : sites web, réseaux sociaux et marketing en ligne.",
    icon: Megaphone,
    methodology: [
      "Audit de présence digitale",
      "Stratégie de communication",
      "Création de contenu et design",
      "Développement et déploiement",
      "Campagnes marketing et promotion",
      "Analyse et optimisation continue",
    ],
  },
  {
    id: "telematique",
    title: "Télématique",
    description:
      "Solutions de géolocalisation et de gestion de flottes pour optimiser vos opérations.",
    icon: Radio,
    methodology: [
      "Analyse des besoins de géolocalisation",
      "Sélection des équipements adaptés",
      "Installation et configuration",
      "Intégration avec systèmes existants",
      "Formation des utilisateurs",
      "Suivi et optimisation des performances",
    ],
  },
  {
    id: "energie",
    title: "Énergie renouvelable",
    description:
      "Installation de solutions énergétiques durables : panneaux solaires et systèmes autonomes.",
    icon: Zap,
    methodology: [
      "Étude énergétique et dimensionnement",
      "Conception du système solaire",
      "Installation des panneaux et équipements",
      "Mise en service et tests",
      "Formation à l'utilisation",
      "Maintenance et suivi de performance",
    ],
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
    prerequisites: ["Aucun prérequis technique", "Connaissances de base en informatique"],
    skills: [
      "Maîtrise de Microsoft Office",
      "Rédaction de documents professionnels",
      "Création de tableaux et graphiques",
      "Présentations efficaces",
    ],
    duration: "40 heures",
    price: "Sur devis",
  },
  {
    id: "comptabilite",
    title: "Comptabilité & Gestion",
    description:
      "Formation aux logiciels de comptabilité et aux principes de gestion financière.",
    icon: TrendingUp,
    prerequisites: ["Notions de base en comptabilité", "Maîtrise de l'outil informatique"],
    skills: [
      "Utilisation de logiciels comptables (SAGE, etc.)",
      "Gestion des écritures comptables",
      "Établissement des états financiers",
      "Analyse financière de base",
    ],
    duration: "60 heures",
    price: "Sur devis",
  },
  {
    id: "marketing",
    title: "Marketing Digital",
    description:
      "Apprenez les stratégies de marketing en ligne : SEO, réseaux sociaux et publicité.",
    icon: Megaphone,
    prerequisites: ["Maîtrise des réseaux sociaux", "Intérêt pour le marketing"],
    skills: [
      "Stratégie de contenu digital",
      "SEO et référencement naturel",
      "Publicité en ligne (Google Ads, Facebook Ads)",
      "Analyse de performance (Analytics)",
    ],
    duration: "50 heures",
    price: "Sur devis",
  },
  {
    id: "maintenance",
    title: "Maintenance Informatique",
    description:
      "Diagnostic, réparation et maintenance des équipements informatiques.",
    icon: Wrench,
    prerequisites: ["Connaissances de base en informatique", "Logique technique"],
    skills: [
      "Diagnostic de pannes matérielles",
      "Installation et configuration de systèmes",
      "Maintenance préventive",
      "Résolution de problèmes courants",
    ],
    duration: "80 heures",
    price: "Sur devis",
  },
  {
    id: "programmation",
    title: "Programmation",
    description:
      "Initiez-vous à la programmation : Python, JavaScript, et développement web.",
    icon: Terminal,
    prerequisites: ["Logique algorithmique", "Maîtrise de l'anglais technique"],
    skills: [
      "Bases de la programmation (Python, JavaScript)",
      "Développement web (HTML, CSS, React)",
      "Gestion de bases de données",
      "Déploiement d'applications",
    ],
    duration: "120 heures",
    price: "Sur devis",
  },
  {
    id: "systemes",
    title: "Système & Réseaux",
    description:
      "Administration système, configuration réseau et sécurité informatique.",
    icon: Server,
    prerequisites: ["Connaissances en informatique", "Notions de réseaux"],
    skills: [
      "Administration de systèmes (Windows, Linux)",
      "Configuration de réseaux",
      "Sécurisation des infrastructures",
      "Virtualisation et cloud",
    ],
    duration: "100 heures",
    price: "Sur devis",
  },
  {
    id: "multimedia",
    title: "Multimédia",
    description:
      "Création graphique, montage vidéo et production de contenu multimédia.",
    icon: Video,
    prerequisites: ["Sens créatif", "Maîtrise de base de l'outil informatique"],
    skills: [
      "Design graphique (Photoshop, Illustrator)",
      "Montage vidéo (Premiere Pro, After Effects)",
      "Création de contenu visuel",
      "Optimisation pour le web",
    ],
    duration: "70 heures",
    price: "Sur devis",
  },
  {
    id: "langues",
    title: "Langues",
    description:
      "Cours de langues pour améliorer votre communication professionnelle.",
    icon: Languages,
    prerequisites: ["Aucun prérequis", "Motivation et assiduité"],
    skills: [
      "Communication orale et écrite",
      "Vocabulaire professionnel",
      "Compréhension et expression",
      "Préparation aux certifications",
    ],
    duration: "Variable selon le niveau",
    price: "Sur devis",
  },
];

// Partenaires (Fournisseurs - Fasosmart achète chez eux)
export const partners: Partner[] = [
    {
    id: "odoo",
    name: "odoo",
    logo: "/images/logos/Logo/Logo partenaire/odoo_logo.png",
  },
  {
    id: "teltonika",
    name: "TELTONIKA",
    logo: "/images/logos/Logo/Logo partenaire/logo-rect-teltonika.png",
  },
  {
    id: "wialon",
    name: "winlon",
    logo: "/images/logos/Logo/Logo partenaire/Wialon Logo Blue Safe Area 300.png",
  },
  { id: "proline", name: "proline" },
  { id: "alshiraa", name: "AL SHIRAA CONTROL DEVICES TR." },
  { id: "businefy", name: "businefy" },
  { id: "ecash", name: "e-CASH.com" },
  { id: "spark", name: "SPARK JT" },
  { id: "thenkana", name: "Thenkana" },
  { id: "continental", name: "CONTINENTAL" },
  { id: "plasticard", name: "plasticard ZFT" },
];

// Références (Clients - Ils achètent chez Fasosmart)
export const references: Reference[] = [
  {
    id: "cciag",
    name: "CCIAG",
    services: ["Développement du système informatique", "Intégration des solutions de paiement", "Fournitures de cartes sécurisées", "Équipement des centres communaux et régionaux"],
    logo: "/images/logos/Logo/Logo reférences/CCIAG.jpeg",
  },
  {
    id: "tdss",
    name: "TDSS",
    services: ["Développement d'un système de gestion des permis biométriques des non nationaux en Rép. de Guinée", "Communication Digitale (site web et réseaux sociaux)"],
    logo: "/images/logos/Logo/Logo reférences/TDSS.jpg",
  },
  {
    id: "marine-marchande",
    name: "MARINE MARCHANDE GUINÉENNE",
    services: ["Communication digitale (Site Web, Réseaux sociaux, Création graphique)", "Développement application de gestion des titres et certificat", "Administration infrastructure réseau"],
    logo: "/images/logos/Logo/Logo reférences/DNMM.png",
  },
  {
    id: "ges",
    name: "GES (La Guinéenne d'Energies et de Services)",
    services: ["Développement d'un système d'information intégrant la gestion des livraisons des produits pétroliers, de la gestion de la ressource humaine, de la comptabilité"],
    logo: "/images/logos/Logo/Logo reférences/ges_jpg.jpg",
  },
  {
    id: "dynamic-mining",
    name: "DYNAMIC MINING",
    services: ["Fourniture de matériel informatique", "Système de gestion automatique des présences"],
    logo: "/images/logos/Logo/Logo reférences/Dynamic Mine.png",
  },
  {
    id: "tacon",
    name: "TACON",
    services: ["Fourniture de matériel informatique", "Développement site web", "Implémentation ERP"],
    logo: "/images/logos/Logo/Logo reférences/TACON.jpg",
  },
  {
    id: "west-african",
    name: "WEST AFRICAN LINE NEGOCE",
    services: ["Gestion du Parc informatique", "Communication Digital"],
  },
  {
    id: "gmt",
    name: "GUINEO-MAROCAINE DES TRAVAUX (GMT)",
    services: ["Gestion du Parc Informatique", "Communication Digitale (Site web & réseaux sociaux)", "Fourniture Matériel Informatique", "Déploiement VoiP", "Sécurité Electronique (vidéo de surveillance, contrôle d'accès)", "Déploiement Progiciel SAGE (Comptabilité et RH)"],
  },
  {
    id: "ageroute",
    name: "AGEROUTE (Agence de Gestion des Routes)",
    services: ["Fourniture matériel Informatique et de système de visioconférence"],
  },
  {
    id: "makila-share",
    name: "MAKILA Share",
    services: ["Système de gestion des donneurs et demandeur de sang en RDC - Kinshasa", "Site web"],
  },
  {
    id: "aguiser",
    name: "AGUISER (Agence Guinéenne de Sécurité Routière)",
    services: ["Développement site web et système d'alerte sur les accidents de route"],
  },
  {
    id: "socoser",
    name: "SOCOSER LOGISTIQUE",
    services: ["Administration réseau", "Gestion parc informatique", "Déploiement Voip", "Implémentation ERP"],
  },
  {
    id: "afrikhealth",
    name: "Afrikhealth",
    services: ["Solution de gestion et suivi des patients en RDC - Kinshasa", "Implémentation ERP pour gestion de la pharmacie en RDC-Kinshasa", "Site web"],
  },
  {
    id: "salsabil",
    name: "SALSABIL - MAURITANIE",
    services: ["Personnalisation et déploiement ERP pour la gestion des ventes et achats, de la comptabilité, de l'inventaire ainsi que la Paie & RH"],
  },
  {
    id: "dalein",
    name: "DALEIN TRANSPORT & BTP",
    services: ["Développement d'un système d'information intégrant la gestion des livraisons des produits pétroliers, de la gestion de la ressource humaine, de la comptabilité du parc automobile avec la gestion des ateliers de maintenance"],
  },
  {
    id: "global-optique",
    name: "Global OPTIQUE GUINÉE",
    services: ["Implémentation ERP", "Site web"],
  },
  {
    id: "guinee-gaz",
    name: "GUINÉE GAZ",
    services: ["Déploiement SAGE I 100 Cloud", "Comptabilité et commercial", "Formation et Assistance", "Fourniture matériel Informatique", "Installation système de vidéosurveillance et de pointage biometrique"],
  },
  {
    id: "metal-guinee",
    name: "Groupe MG METAL GUINEE",
    services: ["Fourniture d'équipements", "Intégration de Systèmes de Géolocalisation et de gestion de flotte"],
  },
  {
    id: "tanogui",
    name: "TANOGUI GROUP",
    services: ["Fourniture d'équipements", "Intégration de Systèmes de Géolocalisation et de gestion de flotte"],
  },
  {
    id: "uagcp",
    name: "UAGCP",
    services: ["Fourniture d'équipements", "Intégration de Systèmes de Géolocalisation et de gestion de flotte"],
  },
];

// Projets (En vedette)
export const projects: Project[] = [
  {
    id: "cciag",
    title: "Digitalisation de la carte d'adhésion",
    client: "CCIAG - Chambre de Commerce d'Industrie et d'Artisanat de Guinée",
    category: "Transformation Digitale",
    description:
      "Projet BOT de digitalisation complète du système de gestion des adhésions de la Chambre de Commerce.",
    features: [
      "Développement du système informatique",
      "Intégration des solutions de paiement",
      "Fournitures de cartes sécurisées",
      "Équipement des centres communaux et régionaux",
    ],
  },
  // {
  //   id: "makila-share",
  //   title: "Plateforme de gestion des donneurs de sang",
  //   client: "Makila Share - RDC Kinshasa",
  //   category: "Développement d'applications",
  //   description:
  //     "Système complet de gestion des donneurs et demandeurs de sang pour faciliter les dons en RDC.",
  //   features: [
  //     "Base de données des donneurs",
  //     "Système de mise en relation",
  //     "Notifications en temps réel",
  //     "Site web responsive",
  //   ],
  // },
  // {
  //   id: "guinee-gaz",
  //   title: "Déploiement ERP & Sécurité",
  //   client: "Guinée GAZ",
  //   category: "Intégration ERP",
  //   description:
  //     "Mise en place d'une solution complète de gestion d'entreprise avec SAGE et systèmes de sécurité.",
  //   features: [
  //     "Déploiement SAGE I 100 Cloud",
  //     "Comptabilité et commercial",
  //     "Formation et assistance",
  //     "Installation vidéosurveillance et pointage biométrique",
  //   ],
  // },
  // {
  //   id: "gmt",
  //   title: "Infrastructure IT complète",
  //   client: "Guinéo-Marocaine des Travaux (GMT)",
  //   category: "Gestion de parc informatique",
  //   description:
  //     "Déploiement et gestion complète de l'infrastructure informatique pour une entreprise de BTP.",
  //   features: [
  //     "Gestion du parc informatique",
  //     "Communication digitale",
  //     "Déploiement VoiP",
  //     "Sécurité électronique",
  //     "Progiciel SAGE",
  //   ],
  // },
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

