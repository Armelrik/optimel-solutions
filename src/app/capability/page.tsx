// "use client";

import { GraduationCap, CheckCircle2, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  capabilityServices,
  capabilityDomains,
  capabilityModalites,
  capabilityCertifications,
  capabilityPartners,
  capabilityBenefits,
} from "@/constants/capability";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title:
    "OPTIMEL Capability Solutions – Former et inspirer les leaders de demain",
  description:
    "Développement du capital humain et formations professionnelles au Burkina Faso : leadership, technologies, énergie et BTP.",
};

export default function CapabilityPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="OPTIMEL Capability Solutions"
        subtitle="Former et inspirer les leaders de demain."
        imageSrc="/assets/poles/rh.jpg"
      />

      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl text-primary-foreground">
              <GraduationCap size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            OPTIMEL Capability Solutions
          </h1>
          <p className="text-2xl text-primary italic mb-6">
            "Former et inspirer les leaders de demain."
          </p>
        </div>

        {/* Introduction */}
        <section className="glass rounded-3xl p-8 mb-8 animate-slide-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Pourquoi le renforcement des compétences est essentiel ?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Le capital humain est la véritable richesse d'une nation. Dans un
            monde en mutation rapide, le développement continu des compétences
            n'est plus une option mais une nécessité absolue. OPTIMEL Capability
            Solutions est dédié au renforcement des capacités humaines au
            Burkina Faso.
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
            {capabilityServices.map((s) => (
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

        {/* Domaines de formation */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Nos Domaines de Formation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilityDomains.map((domain) => (
              <div
                key={domain.title}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6"
              >
                <h3 className="font-bold text-foreground mb-3">
                  {domain.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {domain.items.map((i, idx) => (
                    <li key={idx}>• {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Modalités */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "250ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Modalités de Formation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilityModalites.map((m) => (
              <div
                key={m.title}
                className="border-l-4 border-primary pl-6 py-2"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {m.title}
                </h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Certifications et Reconnaissance
          </h2>
          <div className="space-y-4">
            {capabilityCertifications.map((c) => (
              <div key={c.title} className="bg-background/50 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partenariats */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "350ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Users className="text-primary" />
            Partenariats Stratégiques
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {capabilityPartners.map((p) => (
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
            {capabilityBenefits.map((b, i) => (
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
            Investissez dans votre avenir
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="gap-2">
                S'inscrire aux formations
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="gap-2">
                Voir le catalogue complet
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
