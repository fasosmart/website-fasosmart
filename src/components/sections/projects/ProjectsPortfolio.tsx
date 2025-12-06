import { projects } from "@/lib/data";
import { CheckCircle, Layers } from "lucide-react";

export function ProjectsPortfolio() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Projets en vedette
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Nos réalisations
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Découvrez quelques-uns de nos projets phares qui illustrent notre
            expertise et notre capacité à répondre aux défis technologiques de
            nos clients.
          </p>
        </div>

        {/* Projects Grid - Portfolio Style */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-gray-100 overflow-hidden">
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234491CE' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary">
                    <Layers className="w-3.5 h-3.5" />
                    {project.category}
                  </span>
                </div>

                {/* Project number */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-white font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Client */}
                <p className="text-sm text-primary font-medium mb-2">
                  {project.client}
                </p>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 3 && (
                    <p className="text-sm text-gray-400 pl-6">
                      +{project.features.length - 3} autres fonctionnalités
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

