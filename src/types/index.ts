/**
 * Types TypeScript partagés pour l'application Fasosmart
 */

export type NavigationItem = {
  name: string;
  href: string;
  dropdown?: Array<{
    name: string;
    href: string;
  }>;
};

export type CompanyInfo = {
  name: string;
  slogan: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  contact: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
};

export type Address = {
  id: string; // Identifiant unique
  city: string; // Ville
  country: string; // Pays
  address: string; // Adresse complète
  phone: string; // Numéro de téléphone
  reference?: string; // Référence optionnelle (point de repère)
  isPrimary?: boolean; // Indique si c'est l'adresse principale
};
