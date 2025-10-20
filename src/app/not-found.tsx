"use client";

import { Home, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted px-4 text-center">
      {/* Bloc principal */}
      <div className="glass rounded-3xl p-12 max-w-md w-full shadow-lg animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-primary to-accent p-5 rounded-2xl text-primary-foreground">
            <AlertTriangle size={48} />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Oups... Page introuvable
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          La page que vous cherchez n’existe pas ou a été déplacée.
          <br />
          Retournez à l’accueil pour continuer votre navigation.
        </p>

        <Link href="/" className="inline-block">
          <Button
            size="lg"
            className="gap-2 shadow-lg hover:scale-105 transition-all"
          >
            <Home size={20} />
            Retour à l’accueil
          </Button>
        </Link>
      </div>

      {/* Footer discret */}
      <p className="text-muted-foreground text-sm mt-8">
        © {new Date().getFullYear()} OPTIMEL Solutions Group SA – By Meltech
      </p>
    </div>
  );
}
