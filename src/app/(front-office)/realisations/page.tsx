import { Metadata } from "next";
import {
  PageBanner,
  ProjectsPortfolio,
  References,
  ContactCTA,
} from "@/components/sections";
import { SectionTransition } from "@/components/shared/SectionTransition";

export const metadata: Metadata = {
  title: "Projets & Références",
  description:
    "Découvrez nos réalisations et les entreprises qui nous ont fait confiance pour leurs projets technologiques.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Banner */}
      <PageBanner
        icon="FolderKanban"
        subtitle="Notre portfolio"
        title="Nos réalisations"
        description="Découvrez nos réalisations phares et les entreprises qui nous font confiance pour leur transformation digitale."
      />

      {/* Transition */}
      <SectionTransition variant="wave" className="text-white" />

      {/* Projects Portfolio */}
      <ProjectsPortfolio />

      {/* Transition */}
      <SectionTransition variant="gradient" className="text-white" />

      {/* References */}
      <References />

      {/* Transition */}
      <SectionTransition variant="diagonal" className="text-gray-50" />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
