import { Metadata } from "next";
import Link from "next/link";
import { Briefcase, GraduationCap } from "lucide-react";
import {
  PageBanner,
  ServicesDetail,
  FormationsDetail,
  ContactCTA,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Services & Formations",
  description:
    "Découvrez nos services technologiques et formations professionnelles pour stimuler votre productivité.",
};

export default function ServicesFormationsPage() {
  return (
    <>
      {/* Banner avec ancres rapides */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#063251] via-[#0E76BC] to-[#4491CE] text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            {/* Subtitle */}
            <span className="inline-block text-white/80 font-medium text-sm uppercase tracking-wider mb-4">
              Notre expertise
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4">
              Services & Formations
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
              Des solutions technologiques innovantes et des formations
              professionnelles pour accompagner votre transformation digitale.
            </p>

            {/* Quick navigation */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-sm font-medium transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                Nos Services
              </Link>
              <Link
                href="#formations"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-sm font-medium transition-colors"
              >
                <GraduationCap className="w-5 h-5" />
                Nos Formations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesDetail />

      {/* Formations Section */}
      <FormationsDetail />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
