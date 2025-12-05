// Importation du composant Header
import { Header } from "@/components/layout/Header";
// Importation du composant Footer
import { Footer } from "@/components/layout/Footer";

export default function FrontOfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

