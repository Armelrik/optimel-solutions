"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import optimelLogo from "/public/assets/optimel-logo.png";

export default function Footer() {
  const poles = [
    { label: "Stratégie Solutions", href: "/strategie" },
    { label: "Operations Solutions", href: "/operations" },
    { label: "IT Solutions", href: "/it" },
    { label: "Energy Solutions", href: "/energie" },
    { label: "BTP Solutions", href: "/btp" },
    { label: "Capability Solutions", href: "/capability" },
  ];

  const quickLinks = [
    { label: "Accueil", href: "/" },
    { label: "Nos Pôles", href: "/#poles" },
    { label: "Formations", href: "/academy" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-foreground/5 backdrop-blur-xl py-12 px-4 mt-20 border-t border-border/40">
      <div className="container mx-auto">
        {/* ======= Section principale ======= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* ✅ Logo + description */}
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
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Des solutions intégrées pour bâtir l&apos;avenir du Burkina Faso.
            </p>
          </div>

          {/* ✅ Nos Pôles */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Nos Pôles</h4>
            <ul className="space-y-2 text-muted-foreground">
              {poles.map((pole) => (
                <li key={pole.href}>
                  <Link
                    href={pole.href}
                    className="flex items-center gap-2 hover:text-primary transition-all group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                    {pole.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Liens rapides */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              {quickLinks.map((link) => (
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
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">
              OPTIMEL Solutions Group SA
            </span>
            . Tous droits réservés.{" "}
            <Link
              href="https://meltech.tech"
              target="_blank"
              className="text-primary hover:text-accent transition-colors font-semibold"
            >
              By Meltech
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
