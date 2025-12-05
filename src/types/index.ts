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

