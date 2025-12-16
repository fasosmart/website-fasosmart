"use client";

/**
 * Composant Map - Carte interactive avec Leaflet
 * 
 * PROBLÈME RÉSOLU : "window is not defined"
 * 
 * SOLUTION : Import dynamique avec next/dynamic
 * - On sépare la logique Leaflet dans MapContent.tsx
 * - On utilise next/dynamic avec ssr: false pour charger MapContent
 *   uniquement côté client, après que le navigateur soit prêt
 * - Cela garantit que les imports de Leaflet ne sont jamais évalués côté serveur
 * 
 * OPTIMISATION : Utilisation simplifiée
 * - Plus besoin de props, tout est configuré dans MapContent
 * - Utilisation de leaflet-defaulticon-compatibility pour simplifier les icônes
 */

import dynamic from "next/dynamic";

/**
 * Chargement dynamique de MapContent avec next/dynamic
 * 
 * ssr: false → Désactive complètement le rendu côté serveur
 * Cela garantit que les imports de Leaflet ne sont jamais évalués côté serveur
 * 
 * loading → Composant affiché pendant le chargement
 */
const MapContentDynamic = dynamic(
  () => import("./MapContent"),
  {
    ssr: false, // CRUCIAL : Désactive le rendu côté serveur
    loading: () => (
      <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden border border-border/40 shadow-lg bg-muted/20 flex items-center justify-center">
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
 * Utilisation simplifiée : <Map />
 * Toutes les configurations (coordonnées, zoom, popup) sont dans MapContent
 */
export function Map() {
  return <MapContentDynamic />;
}
