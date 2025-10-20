// "use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PolesSection from "@/components/PolesSection";
import FormationsSection from "@/components/FormationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Page d'accueil officielle d'OPTIMEL Solutions Group SA
 * Structure Next.js App Router compatible
 * Armel Kima – Meltech (2025)
 */

export const metadata = {
  title:
    "OPTIMEL Solutions Group SA – Des solutions intégrées pour bâtir l’avenir du Burkina",
  description:
    "OPTIMEL Solutions Group accompagne les entreprises, institutions publiques et communautés dans leur transformation stratégique, opérationnelle et technologique.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barre de navigation */}

      <main className="flex-1">
        <HeroSection />
        <PolesSection />
        <FormationsSection />
        <ContactSection />
      </main>
    </div>
  );
}
