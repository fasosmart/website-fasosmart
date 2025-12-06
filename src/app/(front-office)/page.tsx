import {
  Hero,
  AboutPreview,
  Services,
  Formations,
  Projects,
  Partners,
  ContactCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* À Propos Preview */}
      <AboutPreview />

      {/* Services */}
      <Services />

      {/* Formations */}
      <Formations />

      {/* Projets */}
      <Projects />

      {/* Partenaires */}
      <Partners />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
