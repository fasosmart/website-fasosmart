// Importation du composant Header
import { Header } from "@/components/layout/Header";
// Importation du composant Footer
import { Footer } from "@/components/layout/Footer";
// Importation du composant ScrollToTop
import { ScrollToTop } from "@/components/shared/ScrollToTop";

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
      <ScrollToTop />
    </>
  );
}

