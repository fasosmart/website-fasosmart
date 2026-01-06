/**
 * Types pour les services (sans les composants React)
 * Utilisés pour passer des données sérialisables entre Server et Client Components
 */

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  methodology?: string[];
}

