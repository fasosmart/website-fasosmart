import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { objectives } from "@/lib/data";

export function Objectives() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Nos ambitions
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              Nos Objectifs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nous travaillons chaque jour pour atteindre des objectifs ambitieux
              qui contribuent au développement technologique de l&apos;Afrique.
            </p>

            {/* Objectives List */}
            <div className="space-y-4 mb-8">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">
                Discutons de votre projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-white">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6">
                  Pourquoi nous choisir ?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expertise locale</h4>
                      <p className="text-white/80 text-sm">
                        Une connaissance approfondie du marché africain
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Solutions sur mesure</h4>
                      <p className="text-white/80 text-sm">
                        Des services adaptés à vos besoins spécifiques
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Accompagnement complet
                      </h4>
                      <p className="text-white/80 text-sm">
                        Un suivi personnalisé de A à Z
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">04</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Innovation continue</h4>
                      <p className="text-white/80 text-sm">
                        Toujours à la pointe de la technologie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

