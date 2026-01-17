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
  ShoppingCart,
  Navigation,
  Cloud,
  Store,
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

export interface Division {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  url?: string; // URL externe si site séparé, sinon page interne
  color?: string; // Couleur d'accent optionnelle
}

// Services
export const services: Service[] = [
  {
    id: "dev-apps",
    title: "Développement d'Applications",
    description:
      "Conception et développement d'applications web et mobiles sur mesure pour répondre à vos besoins spécifiques.",
    icon: Code,
    methodology: [
      "Applications web sur mesure",
      "Applications mobiles iOS & Android",
      "Solutions cloud et SaaS",
      "Systèmes de gestion intégrés (ERP)",
      "Portails clients et e-commerce",
    ],
  },
  {
    id: "parc-info",
    title: "Gestion de Parc Informatique",
    description:
      "Gestion complète de votre infrastructure informatique : maintenance, support et optimisation.",
    icon: Monitor,
    methodology: [
      "Administration système complète",
      "Maintenance préventive et corrective",
      "Supervision et monitoring 24/7",
      "Gestion des licences logicielles",
      "Support technique multicanal",
    ],
  },
  {
    id: "securite",
    title: "Sécurité Électronique",
    description:
      "Solutions de sécurité avancées : vidéosurveillance, contrôle d'accès et systèmes d'alarme.",
    icon: Shield,
    methodology: [
      "Vidéosurveillance IP et analogique",
      "Contrôle d'accès biométrique",
      "Systèmes d'alarme et détection",
      "Interphonie et gestion visiteurs",
      "Protection périmétrique intelligente",
    ],
  },
  {
    id: "reseaux",
    title: "Réseaux Informatiques",
    description:
      "Installation, configuration et maintenance de réseaux d'entreprise performants et sécurisés.",
    icon: Network,
    methodology: [
      "Conception et déploiement infrastructure",
      "Configuration réseaux LAN/WAN",
      "Solutions VPN et télétravail",
      "Optimisation bande passante",
      "Wifi professionnel haute performance",
    ],
  },
  {
    id: "communication",
    title: "Communication Digitale",
    description:
      "Stratégies de communication digitale : sites web, réseaux sociaux et marketing en ligne.",
    icon: Megaphone,
    methodology: [
      "Création sites web responsive",
      "Gestion réseaux sociaux",
      "Stratégies de contenu et SEO",
      "Design graphique et branding",
      "Campagnes publicitaires en ligne",
    ],
  },
  {
    id: "telematique",
    title: "Télématique",
    description:
      "Solutions de géolocalisation et de gestion de flottes pour optimiser vos opérations.",
    icon: Radio,
    methodology: [
      "Géolocalisation de flotte",
      "Gestion parc automobile",
      "Suivi consommation carburant",
      "Alertes et rapports en temps réel",
      "Optimisation des trajets",
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
  {
    id: "vente-materiel",
    title: "Vente de Matériel Informatique & Électronique",
    description:
      "Fasosmart est votre partenaire de confiance pour l'acquisition de matériel informatique et électronique de haute qualité. Nous proposons une gamme complète d'équipements professionnels adaptés à tous les besoins.",
    icon: ShoppingCart,
    methodology: [
      "Ordinateurs portables et de bureau (Dell, HP, Lenovo)",
      "Serveurs et équipements datacenter",
      "Équipements réseau (switches, routeurs, firewall)",
      "Smartphones et accessoires",
      "Systèmes de visioconférence professionnels",
      "Imprimantes et solutions d'impression",
      "Périphériques et accessoires informatiques",
      "Composants électroniques et câblage",
      "Solutions de stockage et sauvegarde",
    ],
  },
];

// Formations
export const formations: Formation[] = [
  {
    id: "bureautique",
    title: "Informatique Bureautique",
    description:
      "Maîtrise de la suite Microsoft Office, Google Workspace, gestion de fichiers, navigation internet sécurisée et outils collaboratifs essentiels.",
    icon: FileSpreadsheet,
    prerequisites: ["Aucun prérequis technique", "Connaissances de base en informatique"],
    skills: [
      "Maîtrise de Microsoft Office (Word, Excel, PowerPoint)",
      "Utilisation de Google Workspace",
      "Gestion de fichiers et dossiers",
      "Navigation internet sécurisée",
      "Outils collaboratifs essentiels",
    ],
    duration: "40 heures",
    price: "Sur devis",
  },
  {
    id: "comptabilite",
    title: "Comptabilité & Gestion",
    description:
      "Formation aux logiciels comptables SAGE, Odoo, gestion financière, contrôle de gestion et reporting analytique pour entreprises.",
    icon: TrendingUp,
    prerequisites: ["Notions de base en comptabilité", "Maîtrise de l'outil informatique"],
    skills: [
      "Utilisation de logiciels comptables (SAGE, Odoo)",
      "Gestion financière",
      "Contrôle de gestion",
      "Reporting analytique pour entreprises",
      "Établissement des états financiers",
    ],
    duration: "60 heures",
    price: "Sur devis",
  },
  {
    id: "marketing",
    title: "Marketing Digital",
    description:
      "Stratégies webmarketing, publicité en ligne, référencement SEO/SEA, community management et analyse de performance digitale.",
    icon: Megaphone,
    prerequisites: ["Maîtrise des réseaux sociaux", "Intérêt pour le marketing"],
    skills: [
      "Stratégies webmarketing",
      "Publicité en ligne (Google Ads, Facebook Ads)",
      "Référencement SEO/SEA",
      "Community management",
      "Analyse de performance digitale",
    ],
    duration: "50 heures",
    price: "Sur devis",
  },
  {
    id: "maintenance",
    title: "Maintenance Informatique",
    description:
      "Diagnostic matériel, réparation ordinateurs, installation systèmes d'exploitation, dépannage logiciel et optimisation performance.",
    icon: Wrench,
    prerequisites: ["Connaissances de base en informatique", "Logique technique"],
    skills: [
      "Diagnostic matériel",
      "Réparation ordinateurs",
      "Installation systèmes d'exploitation",
      "Dépannage logiciel",
      "Optimisation performance",
    ],
    duration: "80 heures",
    price: "Sur devis",
  },
  {
    id: "programmation",
    title: "Programmation",
    description:
      "Langages Python, Java, JavaScript, développement web front-end/back-end, bases de données et gestion de projets logiciels.",
    icon: Terminal,
    prerequisites: ["Logique algorithmique", "Maîtrise de l'anglais technique"],
    skills: [
      "Langages de programmation (Python, Java, JavaScript)",
      "Développement web front-end/back-end",
      "Gestion de bases de données",
      "Gestion de projets logiciels",
      "Déploiement d'applications",
    ],
    duration: "120 heures",
    price: "Sur devis",
  },
  {
    id: "systemes",
    title: "Système & Réseaux",
    description:
      "Administration Windows/Linux, configuration réseaux, sécurité informatique, virtualisation et Cloud computing.",
    icon: Server,
    prerequisites: ["Connaissances en informatique", "Notions de réseaux"],
    skills: [
      "Administration Windows/Linux",
      "Configuration réseaux",
      "Sécurité informatique",
      "Virtualisation",
      "Cloud computing",
    ],
    duration: "100 heures",
    price: "Sur devis",
  },
  {
    id: "multimedia",
    title: "Multimédia",
    description:
      "Création graphique, montage vidéo, Adobe Creative Suite, production audiovisuelle et design UI/UX pour applications modernes.",
    icon: Video,
    prerequisites: ["Sens créatif", "Maîtrise de base de l'outil informatique"],
    skills: [
      "Création graphique",
      "Montage vidéo",
      "Adobe Creative Suite",
      "Production audiovisuelle",
      "Design UI/UX pour applications modernes",
    ],
    duration: "70 heures",
    price: "Sur devis",
  },
  {
    id: "langues",
    title: "Langues",
    description:
      "Anglais professionnel, français des affaires, communication interculturelle et préparation aux certifications internationales.",
    icon: Languages,
    prerequisites: ["Aucun prérequis", "Motivation et assiduité"],
    skills: [
      "Anglais professionnel",
      "Français des affaires",
      "Communication interculturelle",
      "Préparation aux certifications internationales",
      "Communication orale et écrite",
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

// Filiales / Divisions
export const divisions: Division[] = [
  {
    id: "fasotrax",
    name: "FASOTRAX",
    tagline: "Télématique & IoT",
    description: "Solutions de tracking GPS, gestion de flotte et Internet des Objets pour optimiser vos opérations.",
    icon: Navigation,
    features: [
      "Gestion de flotte",
      "Tracking GPS",
      "Solutions IoT",
      "Vidéo surveillance",
    ],
    url: "https://fasotrax.com", // À adapter selon le site réel
    color: "#0E76BC",
  },
  {
    id: "fasohosting",
    name: "FASOHOSTING",
    tagline: "Hébergement Web",
    description: "Hébergement web fiable et sécurisé, noms de domaine et services cloud pour votre présence en ligne.",
    icon: Cloud,
    features: [
      "Hébergement Web",
      "Noms de domaine",
      "Serveurs VPS",
      "Email professionnel",
    ],
    url: "https://fasohosting.com",
    color: "#1087A4",
  },
  {
    id: "fasosmak",
    name: "FASOSMAK",
    tagline: "Boutique en Ligne",
    description: "Marketplace d'équipements technologiques, accessoires et solutions B2B pour tous vos besoins IT.",
    icon: Store,
    features: [
      "Marketplace",
      "Équipements Tech",
      "Accessoires",
      "Solutions B2B",
    ],
    url: "https://fasosmak.com", // À adapter selon le site réel
    color: "#E63946",
  },
  {
    id: "fasosmart",
    name: "FASOSMART",
    tagline: "Solutions Tech",
    description: "Développement d'applications, maintenance IT, réseaux & sécurité et formations professionnelles.",
    icon: Code,
    features: [
      "Développement Apps",
      "Gestion de parc informatique",
      "Réseaux informatique",
      "Sécurité électronique",
    ],
    url: "/services",
    color: "#4491CE",
  },
];

