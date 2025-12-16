"use client";

/**
 * MapContent - Composant interne contenant la logique Leaflet
 * 
 * Ce composant est séparé pour être chargé dynamiquement par next/dynamic
 * Cela évite que les imports de Leaflet soient évalués côté serveur
 * 
 * OPTIMISATION : Utilisation de leaflet-defaulticon-compatibility
 * pour simplifier la gestion des icônes Leaflet dans Next.js
 */

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

/**
 * Coordonnées GPS de Fasosmart
 * Format : [latitude, longitude]
 * 
 * Conakry, Quartier Kobaya, Guinée
 */
const FASOSMART_COORDINATES: [number, number] = [9.658021, -13.5996965];

/**
 * Composant MapContent
 * 
 * Carte interactive affichant l'emplacement de Fasosmart
 * Utilise OpenStreetMap comme source de tuiles (gratuit, pas de clé API nécessaire)
 */
export default function MapContent() {
  // Correction des icônes Leaflet pour Next.js
  // leaflet-defaulticon-compatibility simplifie cette gestion
  useEffect(() => {
    // Suppression de la méthode _getIconUrl qui cause des problèmes avec Next.js
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    
    // Configuration des icônes par défaut
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    });
  }, []);

  return (
    <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden border border-border/40 shadow-lg">
      <MapContainer
        center={FASOSMART_COORDINATES}
        zoom={19}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={FASOSMART_COORDINATES}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold text-foreground">
                Fasosmart - Guinée Conakry, Quartier Kobaya
              </p>
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
