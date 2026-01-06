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
  description?: string;
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
// Seulement ceux avec toutes les informations complètes (logo + description)
export const partners: Partner[] = [
  {
    id: "odoo",
    name: "Odoo",
    logo: "/images/logos/Logo/Logo partenaire/odoo_logo.png",
    description: "Plateforme ERP complète et modulaire, Odoo couvre tous les besoins de gestion d'entreprise, du CRM à la comptabilité, en passant par les stocks et les projets, favorisant l'efficacité opérationnelle.",
  },
  {
    id: "opw",
    name: "OPW",
    logo: "/images/logos/Logo/Logo partenaire/logo_opw-corp.svg",
    description: "Partenaire clé dans les solutions de gestion de carburant, OPW fournit des équipements innovants pour la distribution, le suivi et la sécurité des opérations de ravitaillement, optimisant la consommation.",
  },
  {
    id: "teltonika",
    name: "Teltonika",
    logo: "/images/logos/Logo/Logo partenaire/logo-rect-teltonika.png",
    description: "Spécialiste des dispositifs IoT, Teltonika propose une gamme étendue de traceurs GPS, de routeurs et de passerelles pour des solutions de connectivité avancées et une télématique fiable.",
  },
  {
    id: "wialon",
    name: "Wialon",
    logo: "/images/logos/Logo/Logo partenaire/Wialon Logo Blue Safe Area 300.png",
    description: "Reconnue mondialement, la plateforme télématique Wialon offre des outils puissants pour la gestion de flottes, le suivi en temps réel, l'analyse de données et l'optimisation logistique pour les entreprises.",
  },
  {
    id: "howen", 
    name: "Howen",
    logo: "/images/logos/Logo/Logo partenaire/howen_logo.png",
    description: "Fournisseur de premier plan de solutions de vidéosurveillance mobile et de systèmes de sécurité embarqués, garantissant une surveillance fiable et une gestion vidéo intelligente pour divers secteurs",
  },
];

// Références (Clients - Ils achètent chez Fasosmart)
// Seulement celles avec toutes les informations complètes (logo + services détaillés)
export const references: Reference[] = [
  {
    id: "cciag",
    name: "Chambre du Commerce, d'Industrie et d'Artisanat de Guinée (CCIAG)",
    services: [
      "Projet BOT de digitalisation de la carte d'adhésion",
      "Développement du système informatique",
      "Intégration des solutions de paiement",
      "Fournitures de cartes sécurisées",
      "Equipement des centres communaux et régionaux",
    ],
    logo: "/images/logos/Logo/Logo reférences/CCIAG.jpeg",
  },
  {
    id: "tdss",
    name: "Tech Data Securisation & Systèmes (TDSS)",
    services: [
      "Projet BOT de digitalisation des permis biométriques des non nationaux en République de Guinée",
      "Mise en place d'un système de gestion intégrée des permis de travail des étrangers en République de Guinée",
      "Développement et intégration d'une solution de télépaiement des permis de travail des étrangers",
      "Déploiement réseaux informatiques (Cloud, Local Backup, VPN)",
    ],
    logo: "/images/logos/Logo/Logo reférences/TDSS.jpg",
  },
  {
    id: "marine-marchande",
    name: "Direction Nationale de la Marine Marchande",
    services: [
      "Communication digitale (Site Web, Réseaux sociaux, Création graphique)",
      "Développement application de gestion des titres et certificat",
      "Administration infrastructure réseau",
      "Fourniture d'accès à Internet haut débit",
    ],
    logo: "/images/logos/Logo/Logo reférences/DNMM.png",
  },
  {
    id: "dynamic-mining",
    name: "Dynamic Mining",
    services: [
      "Fourniture de matériel informatique",
      "Système de gestion automatique des présences",
      "Installation de système de backup (Solaire et Hybride)",
      "Déploiement de système de vidéosurveillance",
    ],
    logo: "/images/logos/Logo/Logo reférences/Dynamic Mine.png",
  },
  {
    id: "ges",
    name: "Guinéenne d'Energies et Services - GES",
    services: [
      "Déploiement ERP gestion de fourniture de produits pétroliers",
      "Fourniture de matériel informatique",
    ],
    logo: "/images/logos/Logo/Logo reférences/ges_jpg.jpg",
  },
  {
    id: "tacon",
    name: "TACON - PROJET DE RENOVATION STADE GENERAL LANSANA CONTE NONGO",
    services: [
      "Fourniture de matériel informatique",
      "Déploiement système de contrôle d'accès",
      "Déploiement de ERP",
    ],
    logo: "/images/logos/Logo/Logo reférences/TACON.jpg",
  },
  {
    id: "sonapie",
    name: "SONAPIE SA",
    services: [
      "Fourniture de matériel informatique",
      "Déploiement infrastructure réseau",
      "Déploiement système de vidéo-surveillance",
    ],
    logo: "/images/logos/Logo/Logo reférences/SONAPI.png",
  },
  {
    id: "dalein",
    name: "Dalein Transports & TP",
    services: [
      "Déploiement ERP gestion de fourniture de produits pétroliers",
      "Fourniture de matériel informatique",
      "Administration infrastructure réseau",
      "Système de gestion automatique des présences",
    ],
  },
  {
    id: "metal-guinee",
    name: "Groupe Metal Guinée",
    services: [
      "Fourniture de balises GPS et système de Gestion de flotte",
      "Infographie",
    ],
  },
  {
    id: "uagcp",
    name: "UAGCP",
    services: [
      "Fourniture de balises GPS et système de Gestion de flotte",
    ],
  },
  {
    id: "ageroute",
    name: "AGEROUTE (Agence de Gestion des Routes)",
    services: [
      "Fourniture de système de vidéoconférence",
    ],
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
    title: "Panafricanisme",
    description:
      "Notre objectif est de mettre nos solutions au service de toute l'Afrique et des Africains. Nous développons des technologies qui respectent les spécificités culturelles et économiques du continent tout en favorisant l'intégration régionale.",
  },
  {
    title: "Innovation",
    description:
      "L'innovation est au cœur de nos activités. Avec audace, nous repoussons sans cesse les limites de la technologie pour créer des solutions disruptives qui répondent aux défis contemporains et anticipent les besoins futurs.",
  },
  {
    title: "Passion",
    description:
      "C'est avec envie et passion que nous traçons l'avenir à travers nos solutions. Notre capital humain ne cesse d'évoluer afin de s'adapter aux dernières innovations technologiques et maintenir notre excellence opérationnelle.",
  },
];

// Objectifs
export const objectives = [
  "Démocratiser l'accès aux solutions technologiques en Afrique",
  "Accompagner les entreprises dans leur transformation digitale",
  "Former les talents de demain aux métiers du numérique",
  "Contribuer au développement économique de la région",
];

