import { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import {
  PageBanner,
  ProjectsPortfolio,
  References,
  ContactCTA,
} from "@/components/sections";

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
        icon={FolderKanban}
        subtitle="Notre portfolio"
        title="Nos Projets & Réalisations"
        description="Découvrez nos projets phares et les entreprises qui nous font confiance pour leur transformation digitale."
      />

      {/* Projects Portfolio */}
      <ProjectsPortfolio />

      {/* References */}
      <References />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
