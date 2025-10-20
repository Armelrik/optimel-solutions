"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
          <div className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item) =>
              item.submenu ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setOpenDropdown((current) =>
                        current === item.label ? null : current
                      );
                    }, 120);
                  }}
                >
                  <button
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown size={16} className="opacity-70 mt-[2px]" />
                  </button>

                  {/* ✨ Premium dropdown animation */}
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
                          absolute left-0 mt-3 min-w-[220px]
                          rounded-2xl border border-white/20
                          bg-white/70 dark:bg-black/60
                          backdrop-blur-2xl shadow-2xl overflow-hidden
                          ring-1 ring-primary/10
                        "
                      >
                        <div className="relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-primary/5 before:to-accent/5">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="
                                block px-5 py-3 text-foreground 
                                hover:text-primary font-medium 
                                transition-all duration-200
                                relative group/item
                              "
                            >
                              <span className="relative z-10">{sub.label}</span>
                              <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/academy"
              className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              S&apos;inscrire
            </Link>

            {/* ✅ Mode clair/sombre */}
            <ThemeToggle />
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
              item.submenu ? (
                <div key={item.label}>
                  <p className="text-foreground font-semibold mt-2">
                    {item.label}
                  </p>
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 pl-4 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
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
