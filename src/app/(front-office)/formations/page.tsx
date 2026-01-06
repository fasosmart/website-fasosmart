import { Metadata } from "next";
import { PageBanner, ContactCTA } from "@/components/sections";
import { SectionTransition } from "@/components/shared/SectionTransition";
import { FormationsDetail } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Nos Formations",
  description:
    "Développez les compétences de vos équipes avec nos programmes de formation certifiants, dispensés par des formateurs expérimentés dans des environnements d'apprentissage modernes.",
};

export default function FormationsPage() {
  return (
    <>
      {/* Banner */}
      <PageBanner
        icon="GraduationCap"
        subtitle="Développement de compétences"
        title="Nos Formations"
        description="Des formations professionnelles adaptées à tous les niveaux pour maîtriser les outils et technologies essentiels à votre réussite."
      />

      {/* Transition */}
      <SectionTransition variant="wave" className="text-white" />

      {/* Formations Section */}
      <FormationsDetail />

      {/* Transition */}
      <SectionTransition variant="diagonal" className="text-gray-50" />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}

