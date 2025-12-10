import {
  Hero,
  AboutPreview,
  Services,
  Formations,
  Projects,
  Partners,
  ContactCTA,
} from "@/components/sections";
import { SectionTransition } from "@/components/shared/SectionTransition";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Transition fluide */}
      <SectionTransition variant="wave" className="text-white" />

      {/* À Propos Preview */}
      <AboutPreview />

      {/* Transition fluide */}
      <SectionTransition variant="gradient" className="text-gray-50" />

      {/* Services */}
      <Services />

      {/* Transition fluide */}
      <SectionTransition variant="diagonal" className="text-white" />

      {/* Formations */}
      <Formations />

      {/* Transition fluide */}
      <SectionTransition variant="wave" className="text-gray-50" />

      {/* Projets */}
      <Projects />

      {/* Transition fluide */}
      <SectionTransition variant="gradient" className="text-white" />

      {/* Partenaires */}
      <Partners />

      {/* Transition fluide */}
      <SectionTransition variant="diagonal" className="text-gray-50" />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
