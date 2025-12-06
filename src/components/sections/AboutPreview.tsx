import Link from "next/link";
import { ArrowRight, Target, Eye, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              À propos de nous
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              Une entreprise panafricaine au service de la révolution
              technologique
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {companyInfo.mission}
            </p>

            {/* Mission & Vision Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Notre Mission
                  </h3>
                  <p className="text-sm text-gray-600">
                    Démocratiser l&apos;utilisation des solutions technologiques pour
                    stimuler la productivité.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Notre Vision
                  </h3>
                  <p className="text-sm text-gray-600">{companyInfo.vision}</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="font-semibold">
              <Link href="/a-propos">
                En savoir plus
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

              <div className="relative space-y-6">
                {/* Values preview */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Nos Valeurs</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Innovation
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Excellence
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Collaboration
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Intégrité
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-primary text-white rounded-xl p-6">
                  <p className="text-lg font-medium italic leading-relaxed">
                    &ldquo;Quels que soient vos besoins, notre équipe dévouée est là
                    pour vous guider à chaque étape du processus.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

