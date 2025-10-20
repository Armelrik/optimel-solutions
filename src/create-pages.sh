#!/bin/bash

# === OPTIMEL Next.js page generator ===
# Run this at the root of your Next.js project (where /app exists)
# Usage: bash create-pages.sh

APP_DIR="app"

# Vérifie que le dossier app existe
if [ ! -d "$APP_DIR" ]; then
  echo "❌ Le dossier 'app' n'existe pas. Lance ce script depuis la racine du projet Next.js."
  exit 1
fi

# Liste des pages à créer
PAGES=(
  "strategie|OPTIMEL Stratégie Solutions|Conseil stratégique pour les institutions et entreprises du Burkina Faso."
  "operations|OPTIMEL Operations Solutions|Optimisation des processus et excellence opérationnelle."
  "it|OPTIMEL IT Solutions|Solutions numériques et cybersécurité pour le développement du Burkina Faso."
  "energie|OPTIMEL Energy Solutions|Solutions énergétiques durables et électrification au Burkina Faso."
  "btp|OPTIMEL BTP Solutions|Infrastructures modernes et durables pour le développement du pays."
  "capability|OPTIMEL Capability Solutions|Formations et renforcement des compétences au Burkina Faso."
  "academy|OPTIMEL Academy|Formations professionnelles et programmes certifiants pour les leaders de demain."
  "partenariats|OPTIMEL Partenariats|Collaborations institutionnelles et projets de développement."
)

# Création des pages
for PAGE in "${PAGES[@]}"; do
  IFS="|" read -r SLUG TITLE DESCRIPTION <<< "$PAGE"
  PAGE_DIR="$APP_DIR/$SLUG"

  mkdir -p "$PAGE_DIR"

  cat <<EOF > "$PAGE_DIR/page.tsx"
"use client";

import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "$TITLE",
  description: "$DESCRIPTION",
};

export default function ${SLUG^}Page() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4">$TITLE</h1>
          <p className="text-2xl text-primary italic mb-6">
            "Page en construction."
          </p>
        </div>

        <div className="glass rounded-3xl p-12 text-center animate-slide-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Contenu à venir bientôt
          </h2>
          <Button size="lg" className="gap-2">
            Retour à l’accueil
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
EOF

  echo "✅ Page créée : $PAGE_DIR/page.tsx"
done

echo "🎉 Toutes les pages OPTIMEL ont été générées avec succès !"
