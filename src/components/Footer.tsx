"use client";

import Image from "next/image";
import Link from "next/link";
import optimelLogo from "/public/assets/optimel-logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground/5 backdrop-blur-xl py-12 px-4 mt-20">
      <div className="container mx-auto">
        {/* ======= Section principale ======= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo + description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src={optimelLogo}
              alt="OPTIMEL Logo"
              className="h-12 w-auto mb-4"
              priority
            />
            <p className="text-muted-foreground font-bold max-w-md">
              OPTIMEL Solutions Group SA
            </p>
            <p className="text-muted-foreground max-w-md">
              Des solutions intégrées pour bâtir l&apos;avenir du Burkina Faso.
            </p>
          </div>

          {/* Nos Pôles */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Nos Pôles</h4>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Stratégie Solutions",
                "Operations Solutions",
                "IT Solutions",
                "Energy Solutions",
                "BTP Solutions",
                "Capability Solutions",
              ].map((pole) => (
                <li key={pole}>
                  <Link
                    href="#poles"
                    className="hover:text-primary transition-colors"
                  >
                    {pole}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Nos Pôles", href: "#poles" },
                { label: "Formations", href: "#formations" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ======= Copyright ======= */}
        <div className="border-t border-border font-bold pt-8 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} OPTIMEL Solutions Group SA. Tous droits
            réservés.{" "}
            <Link href="https://meltech.tech" target="_blank">
              <span className="text-primary font-medium">By Meltech</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
