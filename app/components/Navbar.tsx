'use client'

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_112x112.webp";
import Image from "next/image";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#accueil" className="flex items-center gap-2">
          <Image src={logo} alt="Paysages Azuréens - Paysagiste" className="h-12 md:h-14 w-auto" loading="eager" />
        </a>
        
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm tracking-wider uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm tracking-wider uppercase rounded-sm hover:bg-accent transition-colors duration-300"
            >
              Devis gratuit
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col items-center py-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm tracking-wider uppercase text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 bg-primary text-primary-foreground text-sm tracking-wider uppercase rounded-sm"
              >
                Devis gratuit
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
