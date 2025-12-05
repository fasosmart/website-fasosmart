// Composant de chargement moderne avec accessibilité améliorée et animations UX
export default function Loading() {
  return (
    // Centre le contenu verticalement et horizontalement
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e0f1fc] via-[#f9fafb] to-[#fdf6ec]">
      <div className="bg-white/90 shadow-xl rounded-2xl px-8 py-10 max-w-xs w-full text-center space-y-6">
        {/* Spinner animé accessible */}
        <div className="flex flex-col items-center justify-center">
          <span
            className="inline-block h-14 w-14 animate-spin rounded-full border-4 border-[#4491CE] border-t-transparent border-b-transparent"
            role="status"
            aria-label="Chargement en cours"
          />
        </div>
        {/* Texte informative et accessible */}
        <p className="text-lg font-semibold text-[#4491CE] tracking-wide">
          Chargement, merci de patienter...
        </p>
        {/* Astuce UX : message optionnel pour rassurer l'utilisateur */}
        <p className="text-sm text-gray-500">
          Cela ne devrait prendre que quelques secondes.
        </p>
      </div>
    </div>
  );
}
