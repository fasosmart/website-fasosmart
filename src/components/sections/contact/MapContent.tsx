"use client";

/**
 * MapContent - Composant interne contenant la logique Leaflet
 * 
 * Ce composant est séparé pour être chargé dynamiquement par next/dynamic
 * Cela évite que les imports de Leaflet soient évalués côté serveur
 */

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/**
 * Coordonnées GPS de l'adresse
 * Format : [latitude, longitude]
 * 
 * Conakry, Quartier Kobaya, Guinée
 * Vous pouvez ajuster ces coordonnées en recherchant l'adresse exacte sur Google Maps
 * et en récupérant les coordonnées (clic droit > "Coordonnées")
 */
const FASOSMART_COORDINATES: [number, number] = [9.658021, -13.5996965]; // Conakry, Guinée (approximatif)

interface MapContentProps {
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

export function MapContent({ 
  height = "h-80", 
  zoom = 15,
  popupText = "Fasosmart - Guinée Conakry, Quartier Kobaya"
}: MapContentProps) {
  // useEffect pour initialiser l'icône Leaflet uniquement côté client
  useEffect(() => {
    // Correction du problème d'icône par défaut de Leaflet
    // Leaflet cherche les images dans un chemin spécifique, on doit les corriger manuellement
    const iconRetinaUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png";
    const iconUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png";
    const shadowUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png";

    // Création d'une icône personnalisée pour le marqueur
    const defaultIcon = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });

    // On définit cette icône comme icône par défaut pour tous les marqueurs
    L.Marker.prototype.options.icon = defaultIcon;
  }, []);

  return (
    <div className={`w-full ${height} rounded-lg overflow-hidden border border-border/40 shadow-lg`}>
      {/**
       * MapContainer : conteneur principal de la carte
       * - center : position initiale [latitude, longitude]
       * - zoom : niveau de zoom initial
       * - scrollWheelZoom : permet de zoomer avec la molette (true) ou non (false)
       * - className : styles Tailwind pour le conteneur
       */}
      <MapContainer
        center={FASOSMART_COORDINATES}
        zoom={zoom}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        {/**
         * TileLayer : couche de tuiles (les images de la carte)
         * - url : URL du service de cartes (OpenStreetMap est gratuit)
         * - attribution : crédit obligatoire pour OpenStreetMap
         * 
         * Alternatives possibles :
         * - Mapbox : url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=VOTRE_CLE`}
         * - Google Maps : nécessite une bibliothèque spécifique
         */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/**
         * Marker : marqueur sur la carte
         * - position : coordonnées [latitude, longitude]
         * 
         * Popup : fenêtre qui s'affiche au clic sur le marqueur
         */}
        <Marker position={FASOSMART_COORDINATES}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold text-foreground">{popupText}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Cliquez pour plus d&apos;informations
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

