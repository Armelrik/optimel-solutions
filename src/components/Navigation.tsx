"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "/" },
    {
      label: "Nos Pôles",
      submenu: [
        { label: "Stratégie", href: "/strategie" },
        { label: "Opérations", href: "/operations" },
        { label: "IT Solutions", href: "/it" },
        { label: "Énergie", href: "/energie" },
        { label: "BTP", href: "/btp" },
        { label: "Capability", href: "/capability" },
      ],
    },
    { label: "Academy", href: "/academy" },
    { label: "Partenariats", href: "/partenariats" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* ✅ Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/optimel-logo.png"
              alt="OPTIMEL Logo"
              width={160}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(true)}
                  onMouseLeave={() => setActiveDropdown(false)}
                >
                  <span className="text-foreground hover:text-primary cursor-pointer font-medium">
                    {item.label}
                  </span>
                  {activeDropdown && (
                    <div
                      className="absolute left-0 mt-2 min-w-[220px] rounded-2xl backdrop-blur-xl border border-white/20 bg-white/40 shadow-2xl overflow-hidden dropdown-enter"
                      style={{ animation: "slideDownFade 0.3s ease-out" }}
                    >
                      {item.submenu?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-5 py-3 text-foreground hover:bg-primary/10 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}

            <Link
              href="/academy"
              className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ✅ Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-4 animate-slide-in">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                item.submenu?.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {sub.label}
                  </Link>
                ))
              )
            )}
            <Link
              href="/academy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-3 bg-primary hover:bg-accent text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-center transition-all"
            >
              S&apos;inscrire
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
