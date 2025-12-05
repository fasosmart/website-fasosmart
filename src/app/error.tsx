"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaExclamationTriangle } from "react-icons/fa"; // Icône erreur claire
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log l'erreur pour analyse dev
    console.error("Error:", error);
  }, [error]);

  return (
    // Fond UX doux, centrage du contenu pour focus utilisateur
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fbeaea] via-[#fbfcfd] to-[#f9e8e8]">
      <div className="bg-white/90 shadow-xl rounded-2xl px-8 py-10 max-w-md w-full text-center space-y-7 animate-fade-in">
        {/* Icône d’erreur explicite et accessible */}
        <div className="flex flex-col items-center justify-center">
          <span
            aria-label="Erreur"
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-3 animate-bounce"
          >
            <FaExclamationTriangle size={38} className="text-red-500" />
          </span>
        </div>
        {/* Message principal erreur */}
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-red-600 drop-shadow-sm">
          Oups ! Un problème est survenu
        </h1>
        {/* Explication UX accessible */}
        <p className="text-base sm:text-lg text-gray-700">
          Une erreur inattendue a été détectée.<br />
          Merci de réessayer ou de revenir à l&apos;accueil.
        </p>
        {/* Affiche le digest si présent pour le debug */}
        {error.digest && (
          <p className="text-xs text-gray-400">
            Code d&apos;erreur : {error.digest}
          </p>
        )}
        {/* Actions utilisateur claires et espacées */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
          <Button
            type="button"
            className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform"
            onClick={reset}
            aria-label="Réessayer l’action"
          >
            Réessayer
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto border-red-400 hover:bg-red-50 transition-all"
          >
            <Link href="/" aria-label="Revenir à l’accueil">
              Retour à l&apos;accueil
            </Link>
          </Button>
        </div>
        {/* Info optionnelle: aide & contact */}
        <p className="text-xs text-gray-400 pt-2">
          Si le problème persiste, contactez le support.<span aria-label="help" className="ml-1">🛟</span>
        </p>
      </div>
    </div>
  );
}
