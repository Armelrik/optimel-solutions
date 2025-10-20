// "use client";

import { Settings, CheckCircle2, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  operationsServices,
  operationsDomains,
  operationsPartners,
  operationsBenefits,
} from "@/constants/operations";

export const metadata = {
  title:
    "OPTIMEL Operations Solutions – Des organisations performantes pour un impact durable",
  description:
    "Audit, qualité, logistique et performance des organisations au Burkina Faso. Accompagnement stratégique et opérationnel.",
};

export default function OperationsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl text-primary-foreground">
              <Settings size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            OPTIMEL Operations Solutions
          </h1>
          <p className="text-2xl text-primary italic mb-6">
            "Des organisations performantes pour un impact durable."
          </p>
        </div>

        {/* Introduction */}
        <section className="glass rounded-3xl p-8 mb-8 animate-slide-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Pourquoi l'excellence opérationnelle est cruciale ?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Dans un contexte économique compétitif, l'efficacité opérationnelle
            est un levier majeur de performance et de rentabilité. OPTIMEL
            Operations Solutions aide les entreprises et institutions à
            améliorer leurs processus, réduire leurs coûts et maximiser leur
            performance.
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
            {operationsServices.map((s) => (
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

        {/* Domaines d'intervention */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Domaines d'Intervention
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {operationsDomains.map((d) => (
              <div
                key={d.title}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6"
              >
                <h3 className="font-bold text-foreground mb-3">{d.title}</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {d.items.map((item, i) => (
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
            {operationsPartners.map((p) => (
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
            {operationsBenefits.map((b, i) => (
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
            Optimisez vos opérations dès aujourd'hui
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Demander un audit gratuit
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              S'inscrire aux ateliers qualité
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
