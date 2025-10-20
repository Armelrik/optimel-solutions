// "use client";

import {
  GraduationCap,
  Clock,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formations } from "@/constants/academy";
import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "OPTIMEL Academy – Formations professionnelles et certifiantes",
  description:
    "OPTIMEL Academy propose des formations certifiantes dans la stratégie, les opérations, l’IT, l’énergie, le BTP et le management. Développez vos compétences avec des experts du Burkina Faso.",
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="OPTIMEL Academy"
        subtitle="Développez vos compétences avec des experts."
        imageSrc="/assets/trainings/leadership.jpg"
      />

      <div className="container mx-auto px-4 py-20 mt-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl text-primary-foreground">
              <GraduationCap size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            OPTIMEL Academy
          </h1>
          <p className="text-2xl text-primary italic mb-6">
            "Développez vos compétences avec des experts"
          </p>
        </div>

        {/* Introduction */}
        <section className="glass rounded-3xl p-8 mb-12 animate-slide-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Bienvenue à OPTIMEL Academy
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            OPTIMEL Academy est la plateforme de formation professionnelle
            d’OPTIMEL Solutions Group. Nous proposons des ateliers et formations
            certifiantes dans tous nos domaines d’expertise : stratégie,
            opérations, IT, énergie, BTP et management. Nos formations sont
            animées par des experts praticiens et conçues pour répondre aux
            besoins réels du marché burkinabè.
          </p>
        </section>

        {/* Avantages */}
        <section className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Users,
              title: "Formations Variées",
              desc: "Plus de 50 formations dans 6 domaines d'expertise",
            },
            {
              icon: Award,
              title: "Formateurs Experts",
              desc: "Professionnels expérimentés et certifiés",
            },
            {
              icon: Clock,
              title: "Horaires Flexibles",
              desc: "Sessions en journée, soir et weekend",
            },
            {
              icon: CheckCircle2,
              title: "Certification",
              desc: "Certificat officiel reconnu",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-6 text-center animate-slide-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <item.icon className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Catalogue de formations */}
        <section
          className="glass rounded-3xl p-8 mb-12 animate-slide-in"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Catalogue de Formations
          </h2>

          <Tabs defaultValue="strategie" className="w-full">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8">
              {Object.keys(formations).map((key) => (
                <TabsTrigger key={key} value={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(formations).map(([key, items]) => (
              <TabsContent key={key} value={key}>
                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((formation, index) => (
                    <Card key={index} className="glass border-0">
                      <CardHeader>
                        <CardTitle>{formation.titre}</CardTitle>
                        <CardDescription>
                          Formation professionnelle certifiante
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Durée :
                            </span>
                            <span className="font-semibold">
                              {formation.duree}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Tarif :
                            </span>
                            <span className="font-semibold text-primary">
                              {formation.tarif}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Places disponibles :
                            </span>
                            <span className="font-semibold">
                              {formation.places}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full gap-2">
                          S’inscrire maintenant
                          <ArrowRight size={16} />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Modalités de paiement */}
        <section
          className="glass rounded-3xl p-8 mb-12 animate-slide-in"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Modalités d’Inscription et de Paiement
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Comment s’inscrire ?
              </h3>
              <ol className="space-y-3">
                {[
                  "Choisissez votre formation dans le catalogue",
                  "Remplissez le formulaire d’inscription en ligne",
                  "Effectuez le paiement via Mobile Money",
                  "Recevez votre confirmation par email et SMS",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Modes de Paiement</h3>
              {[
                {
                  label: "🟠 Orange Money",
                  desc: "Paiement direct et sécurisé",
                },
                {
                  label: "🔵 Moov Money",
                  desc: "Transaction rapide et facile",
                },
                { label: "🟡 Wave", desc: "Solution de paiement mobile" },
              ].map((mode) => (
                <div
                  key={mode.label}
                  className="bg-background/50 rounded-xl p-4 mb-4"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {mode.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificats */}
        <section
          className="glass rounded-3xl p-8 mb-12 animate-slide-in"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Certificats et Attestations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Certificat de Formation",
                desc: "Délivré à la fin de chaque formation réussie",
              },
              {
                icon: CheckCircle2,
                title: "Attestation de Participation",
                desc: "Pour tous les participants assidus",
              },
              {
                icon: GraduationCap,
                title: "Téléchargement Digital",
                desc: "Accès à vos certificats en ligne 24/7",
              },
            ].map((cert) => (
              <div key={cert.title} className="text-center">
                <cert.icon className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <div
          className="text-center glass rounded-3xl p-12 animate-slide-in"
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Prêt à développer vos compétences ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines de professionnels qui ont déjà transformé
            leur carrière avec OPTIMEL Academy. Inscrivez-vous dès maintenant et
            bénéficiez de formations de qualité adaptées au marché burkinabè.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              S’inscrire maintenant
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Télécharger le catalogue complet
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
