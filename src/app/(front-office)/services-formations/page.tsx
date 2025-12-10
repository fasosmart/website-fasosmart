import { Metadata } from "next";
import {
  PageBanner,
  ServicesDetail,
  FormationsDetail,
  ContactCTA,
} from "@/components/sections";
import { SectionTransition } from "@/components/shared/SectionTransition";
import { QuickNavLinks } from "@/components/sections/services/QuickNavLinks";

export const metadata: Metadata = {
  title: "Services & Formations",
  description:
    "Découvrez nos services technologiques et formations professionnelles pour stimuler votre productivité.",
};

export default function ServicesFormationsPage() {
  return (
    <>
      {/* Banner avec animations */}
      <PageBanner
        icon="Briefcase"
        subtitle="Notre expertise"
        title="Services & Formations"
        description="Des solutions technologiques innovantes et des formations professionnelles pour accompagner votre transformation digitale."
      />

      {/* Quick navigation */}
      <div className="relative -mt-16 mb-8 z-10">
        <QuickNavLinks />
      </div>

      {/* Transition */}
      <SectionTransition variant="wave" className="text-white" />

      {/* Services Section */}
      <ServicesDetail />

      {/* Transition */}
      <SectionTransition variant="gradient" className="text-white" />

      {/* Formations Section */}
      <FormationsDetail />

      {/* Transition */}
      <SectionTransition variant="diagonal" className="text-gray-50" />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
