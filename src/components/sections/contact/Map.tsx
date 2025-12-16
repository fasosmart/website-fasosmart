"use client";

/**
 * Composant Map - Carte interactive avec Leaflet
 * 
 * PROBLÈME RÉSOLU : "window is not defined"
 * 
 * POURQUOI cette erreur ?
 * - Même avec "use client", Next.js évalue les imports au niveau du module
 * - react-leaflet et leaflet accèdent à `window` lors de l'import
 * - `window` n'existe pas côté serveur → erreur
 * 
 * SOLUTION : Import dynamique avec next/dynamic
 * - On sépare la logique Leaflet dans MapContent.tsx
 * - On utilise next/dynamic avec ssr: false pour charger MapContent
 *   uniquement côté client, après que le navigateur soit prêt
 * - Cela garantit que les imports de Leaflet ne sont jamais évalués côté serveur
 * 
 * POURQUOI "use client" ?
 * - Leaflet manipule directement le DOM (création de div, gestion d'événements)
 * - Next.js fait du Server-Side Rendering (SSR) par défaut
 * - Le DOM n'existe pas côté serveur, donc on doit rendre ce composant côté client
 */

import dynamic from "next/dynamic";

interface MapProps {
  /**
   * Hauteur de la carte en pixels ou en classes Tailwind
   * Par défaut : h-80 (320px)
   */
  height?: string;
  /**
   * Niveau de zoom initial (1-18, où 18 est le plus proche)
   * Par défaut : 15 (bon compromis pour voir un quartier)
   */
  zoom?: number;
  /**
   * Texte à afficher dans le popup du marqueur
   */
  popupText?: string;
}

/**
 * Chargement dynamique de MapContent avec next/dynamic
 * 
 * ssr: false → Désactive complètement le rendu côté serveur
 * Cela garantit que les imports de Leaflet ne sont jamais évalués côté serveur
 * 
 * loading → Composant affiché pendant le chargement (optionnel mais recommandé)
 */
const MapContentDynamic = dynamic(
  async () => {
    const { MapContent } = await import("./MapContent");
    return { default: MapContent };
  },
  {
    ssr: false, // CRUCIAL : Désactive le rendu côté serveur
    loading: () => (
      <div className="w-full h-80 rounded-lg overflow-hidden border border-border/40 shadow-lg bg-muted/20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Chargement de la carte...</p>
        </div>
      </div>
    ),
  }
);

/**
 * Composant Map exporté
 * 
 * Ce composant est un simple wrapper qui charge MapContent de manière dynamique.
 * L'utilisateur peut l'utiliser exactement comme avant, sans se soucier
 * des détails d'implémentation.
 */
export function Map(props: MapProps) {
  return <MapContentDynamic {...props} />;
}
