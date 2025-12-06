import Link from "next/link";
import { ArrowRight, CheckCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Projets
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Des projets qui font la différence
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez nos réalisations et projets en cours qui transforment les
            entreprises et institutions en Guinée et en Afrique.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Client</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for more projects */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Plus de projets
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez l&apos;ensemble de nos réalisations et références clients.
            </p>
            <Button asChild variant="outline">
              <Link href="/projets">Voir tous les projets</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

