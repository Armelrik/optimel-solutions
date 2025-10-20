"use client";

import { Wrench, Clock, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted px-4 text-center">
      {/* Bloc principal */}
      <div className="glass rounded-3xl p-12 max-w-md w-full shadow-lg animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-primary to-accent p-5 rounded-2xl text-primary-foreground glow-pulse">
            <Wrench size={48} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-4">
          Site en maintenance
        </h1>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          OPTIMEL Solutions Group effectue actuellement une mise à jour de ses
          services pour mieux vous servir.
          <br />
          Nous serons de retour très bientôt ⚙️
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => window.location.reload()}
          >
            <RefreshCw size={18} />
            Actualiser
          </Button>

          <Link href="/" className="inline-block">
            <Button size="lg" className="gap-2">
              <Clock size={18} />
              Revenir plus tard
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer discret */}
      <p className="text-muted-foreground text-sm mt-8">
        © {new Date().getFullYear()} OPTIMEL Solutions Group SA – By Meltech
      </p>
    </div>
  );
}
