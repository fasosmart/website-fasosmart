/**
 * Mapping des icônes pour les filiales/divisions
 * Utilisé côté client pour éviter de passer des composants React entre Server et Client Components
 */

import {
  Navigation,
  Cloud,
  Store,
  Code,
  type LucideIcon,
} from "lucide-react";

export const divisionIconMap: Record<string, LucideIcon> = {
  fasotrax: Navigation,
  fasohosting: Cloud,
  fasosmak: Store,
  fasosmart: Code,
};

