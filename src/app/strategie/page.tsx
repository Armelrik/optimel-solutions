// "use client";

import { Target, CheckCircle2, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  strategieServices,
  strategieDomains,
  strategiePartners,
  strategieBenefits,
} from "@/constants/strategie";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "OPTIMEL Stratégie Solutions – Donner une vision claire aux décideurs",
  description:
    "Conseil stratégique, développement local et appui institutionnel pour une gouvernance efficace au Burkina Faso.",
};

export default function StrategiePage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="OPTIMEL Stratégie Solutions"
        subtitle="Donner une vision claire aux décideurs."
        imageSrc="/assets/poles/strategie.jpg"
      />

      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl text-primary-foreground">
              <Target size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            OPTIMEL Stratégie Solutions
          </h1>
          <p className="text-2xl text-primary italic mb-6">
            "Donner une vision claire aux décideurs."
          </p>
        </div>

        {/* Introduction */}
        <section className="glass rounded-3xl p-8 mb-8 animate-slide-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Pourquoi la stratégie est essentielle au développement ?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Une stratégie claire est la boussole de toute organisation publique
            ou privée. OPTIMEL Stratégie Solutions accompagne les décideurs à
            tous les niveaux pour transformer leurs ambitions en plans d’action
            réalistes et mesurables. Nos interventions favorisent une
            gouvernance moderne, une meilleure allocation des ressources et un
            impact durable sur le développement du Burkina Faso.
          </p>
        </section>

        {/* Services */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strategieServices.map((s) => (
              <div key={s.title} className="flex items-start gap-4">
                <CheckCircle2
                  className="text-primary mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Domaines */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Domaines d’Intervention
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {strategieDomains.map((domain) => (
              <div
                key={domain.title}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6"
              >
                <h3 className="font-bold text-foreground mb-3">
                  {domain.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {domain.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Partenariats */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Users className="text-primary" />
            Partenariats Stratégiques
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {strategiePartners.map((p) => (
              <div key={p} className="bg-background/50 rounded-xl p-4">
                <p className="font-semibold text-foreground">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bénéfices */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Bénéfices Attendus
          </h2>
          <ul className="space-y-3">
            {strategieBenefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div
          className="text-center glass rounded-3xl p-12 animate-slide-in"
          style={{ animationDelay: "500ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Définissez votre stratégie dès aujourd’hui
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Planifier un atelier stratégique
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Télécharger notre brochure
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
