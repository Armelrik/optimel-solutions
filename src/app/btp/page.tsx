// "use client";

import { Building2, CheckCircle2, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  btpServices,
  btpExpertise,
  btpProcessus,
  btpPartenaires,
  btpBenefices,
} from "@/constants/btp";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "OPTIMEL BTP Solutions – Construire aujourd'hui, pour demain",
  description:
    "Des infrastructures durables et de qualité au Burkina Faso : bâtiments, routes, ouvrages publics et construction écologique.",
};

export default function BTPPage() {
  return (
    <div className="min-h-screen">
      {/* === Hero Image === */}
      <PageHero
        title="OPTIMEL BTP Solutions"
        subtitle="Construire aujourd’hui, pour demain."
        imageSrc="/assets/poles/btp.jpg"
      />

      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl text-primary-foreground">
              <Building2 size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            OPTIMEL BTP Solutions
          </h1>
          <p className="text-2xl text-primary italic mb-6">
            "Construire aujourd'hui, pour demain."
          </p>
        </div>

        {/* Introduction */}
        <section className="glass rounded-3xl p-8 mb-8 animate-slide-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Pourquoi des infrastructures durables sont cruciales ?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Le développement du Burkina Faso passe inévitablement par des
            infrastructures de qualité, durables et adaptées aux besoins
            croissants de la population. OPTIMEL BTP Solutions répond aux
            besoins en construction et travaux publics avec un engagement fort
            envers la qualité, la sécurité et le respect de l'environnement.
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
            {btpServices.map((service) => (
              <div key={service.title} className="flex items-start gap-4">
                <CheckCircle2
                  className="text-primary mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Domaines d’expertise */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Domaines d’Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {btpExpertise.map((domain) => (
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

        {/* Processus */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "250ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Notre Processus de Réalisation
          </h2>
          <div className="space-y-4">
            {btpProcessus.map((step) => (
              <div
                key={step.step}
                className="border-l-4 border-primary pl-6 py-2"
              >
                <h3 className="font-semibold text-foreground mb-1">
                  {step.step}
                </h3>
                <p className="text-muted-foreground">{step.desc}</p>
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
            {btpPartenaires.map((p) => (
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
            {btpBenefices.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">{benefit}</span>
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
            Construisons ensemble votre projet
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Demander un devis BTP
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Voir nos réalisations
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
