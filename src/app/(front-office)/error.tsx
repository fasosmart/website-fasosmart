"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaRegSadTear } from "react-icons/fa"; // Icône d'erreur expressive
import Link from "next/link";

// Gestionnaire d'erreur moderne & UX améliorée pour le front-office
export default function FrontOfficeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log l'erreur côté console pour le débogage (dev only)
    console.error("Error:", error);
  }, [error]);

  return (
    // Fond dégradé doux, centre le contenu pour capter l'attention
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fbeaea] via-[#fbfcfd] to-[#f9e8e8]">
      {/* Carte centrée, effet flou/dégradé et responsive */}
      <div className="bg-white/90 shadow-xl rounded-2xl px-8 py-10 max-w-md w-full text-center space-y-7 animate-fade-in">
        {/* Icône d’erreur animée, ajout visuel rassurant */}
        <div className="flex flex-col items-center justify-center">
          <span
            aria-label="Erreur"
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-3 animate-bounce"
          >
            <FaRegSadTear size={38} className="text-red-500" />
          </span>
        </div>
        {/* Titre clair & impactant */}
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-red-600 drop-shadow-sm">
          Oups ! Un problème est survenu
        </h1>
        {/* Message utilisateur compréhensible */}
        <p className="text-base sm:text-lg text-gray-700">
          Une erreur inattendue a été détectée.<br />
          Merci de réessayer ou de revenir à l&apos;accueil.
        </p>
        {/* Affiche le code d'erreur uniquement si présent */}
        {error.digest && (
          <p className="text-xs text-gray-400">
            Code d&apos;erreur : {error.digest}
          </p>
        )}
        {/* Actions centrées, accessibles et espacées */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="shadow-lg hover:scale-105 transition-transform"
          >
            Réessayer
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="border-red-300 hover:bg-red-50/70 hover:border-red-500 transition-all"
          >
            {/* Utilisation de Link pour accessibilité & bonnes pratiques */}
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
        {/* Petit message rassurant UX */}
        <p className="text-xs text-gray-400 pt-3">
          Si le problème persiste, n&apos;hésitez pas à contacter le support.
        </p>
      </div>
    </div>
  );
}
