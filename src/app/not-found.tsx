import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaSmileWink } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e0f1fc] via-[#f9fafb] to-[#fdf6ec]">
      <div className="bg-white/90 shadow-xl rounded-2xl px-8 py-10 max-w-lg w-full text-center space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E5F0FB] mb-2 animate-bounce">
            <FaSmileWink size={52} className="text-[#4491CE]" />
          </span>
          <h1 className="text-7xl sm:text-8xl font-bold font-display text-[#4491CE] tracking-tight drop-shadow-sm">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Oups, cette page n’existe pas !
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto">
            On dirait que vous êtes perdu·e... Pas de panique !<br />
            <span className="text-[#4491CE] font-semibold">
              La page recherchée n’existe plus ou a changé d’adresse.
            </span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center pt-2">
          <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform">
            <Link href="/">Revenir à l&apos;accueil</Link>
          </Button>
          <Button 
            variant="outline"
            asChild
            size="lg"
            className="w-full sm:w-auto border-[#4491CE] hover:bg-[#E5F0FB]/70 hover:border-[#2176b7] transition-all"
          >
            <Link href="/contact">Contacter le support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
