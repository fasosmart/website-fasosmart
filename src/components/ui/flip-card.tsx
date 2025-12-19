"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

/**
 * COMPOSANT FLIP CARD - Explication pédagogique
 * 
 * Ce composant crée une carte qui se retourne au survol (hover).
 * 
 * CONCEPTS CSS 3D utilisés :
 * 
 * 1. [perspective:1000px] : Crée un contexte 3D pour les transformations
 *    - Plus la valeur est petite, plus l'effet 3D est prononcé
 *    - 1000px est une valeur standard qui donne un effet réaliste
 * 
 * 2. [transform-style:preserve-3d] : Permet aux enfants de conserver leur position 3D
 *    - Sans ça, les enfants seraient "aplatis" dans le plan 2D
 * 
 * 3. [backface-visibility:hidden] : Cache la face arrière quand elle est tournée
 *    - Sans ça, on verrait les deux faces en même temps pendant la rotation
 *    - C'est crucial pour l'effet de "flip"
 * 
 * 4. [transform:rotateY(180deg)] : Rotation de 180° sur l'axe Y (horizontal)
 *    - rotateY = rotation gauche/droite
 *    - rotateX = rotation haut/bas
 *    - 180deg = demi-tour complet
 * 
 * 5. group-hover : Classe Tailwind qui applique un style quand on survole le parent
 *    - Le parent a la classe "group"
 *    - Les enfants utilisent "group-hover:" pour réagir au survol du parent
 */

interface FlipCardProps {
  // Face avant (recto)
  frontIcon: LucideIcon;
  frontTitle: string;
  frontDescription: string;
  frontBadge?: string | number; // Badge optionnel (ex: numéro)

  // Face arrière (verso)
  backTitle: string;
  backContent: React.ReactNode; // Contenu flexible pour le verso

  // Options de style
  className?: string;
  frontClassName?: string;
  backClassName?: string;
}

export function FlipCard({
  frontIcon: Icon,
  frontTitle,
  frontDescription,
  frontBadge,
  backTitle,
  backContent,
  className,
  frontClassName,
  backClassName,
}: FlipCardProps) {
  return (
    /**
     * CONTAINER PRINCIPAL
     * - "group" : Permet d'utiliser group-hover sur les enfants
     * - [perspective:1000px] : Crée le contexte 3D
     * - h-72 w-56 : Dimensions de base (peut être surchargé avec className)
     */
    <div
      className={cn(
        "group h-72 w-full [perspective:1000px]",
        className
      )}
    >
      {/* 
        CONTAINER INTERNE (la carte qui va tourner)
        - relative : Pour positionner les faces absolument
        - h-full w-full : Prend toute la place du parent
        - [transform-style:preserve-3d] : Conserve la 3D pour les enfants
        - group-hover:[transform:rotateY(180deg)] : Rotation au survol
        - transition-all duration-500 : Animation fluide de 500ms
      */}
      <div
        className={cn(
          "relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          "group-hover:[transform:rotateY(180deg)]"
        )}
      >
        {/* 
          FACE AVANT (RECTO)
          - absolute : Position absolue pour superposer avec le verso
          - [backface-visibility:hidden] : Cache cette face quand elle est derrière
          - z-10 : Au-dessus du verso (visuel, pas vraiment nécessaire avec backface-visibility)
        */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full rounded-2xl [backface-visibility:hidden]",
            "bg-card text-card-foreground p-6 shadow-sm border border-border",
            "flex flex-col",
            frontClassName
          )}
        >
          {/* Badge optionnel */}
          {frontBadge && (
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
              {frontBadge}
            </div>
          )}

          {/* Icône */}
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-primary" />
          </div>

          {/* Titre */}
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {frontTitle}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm flex-1">
            {frontDescription}
          </p>
        </div>

        {/* 
          FACE ARRIÈRE (VERSO)
          - absolute : Position absolue pour superposer avec le recto
          - [backface-visibility:hidden] : Cache cette face quand elle est derrière
          - [transform:rotateY(180deg)] : Déjà tournée de 180° pour être visible après le flip
          - z-0 : En dessous du recto (visuel)
        */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]",
            "bg-gradient-to-br from-primary to-primary-dark text-white p-6 shadow-lg",
            "flex flex-col",
            backClassName
          )}
        >
          {/* Titre du verso */}
          <h3 className="text-xl font-semibold mb-4">{backTitle}</h3>

          {/* Contenu flexible du verso */}
          <div className="flex-1 overflow-y-auto">{backContent}</div>
        </div>
      </div>
    </div>
  );
}

