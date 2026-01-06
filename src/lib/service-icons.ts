/**
 * Mapping des icônes pour les services
 * Utilisé côté client pour éviter de passer des composants React entre Server et Client Components
 */

import {
  Code,
  Monitor,
  Shield,
  Network,
  Megaphone,
  Radio,
  Zap,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  "dev-apps": Code,
  "parc-info": Monitor,
  securite: Shield,
  reseaux: Network,
  communication: Megaphone,
  telematique: Radio,
  energie: Zap,
  "vente-materiel": ShoppingCart,
};

