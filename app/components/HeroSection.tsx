'use client'

import heroImg from "@/assets/hero-garden.webp";
import logo from "@/assets/logo_round_288x288.webp";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src={heroImg}
        alt="Jardin méditerranéen paysagiste Côte d'Azur"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/40" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <motion.img
        src={logo.src}
        alt="Paysages Azuréens logo"
        className="w-28 md:w-36 mx-auto mb-8 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        loading="eager"
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.h1
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Création & Entretien de Jardins Méditerranéens sur la Côte d'Azur
      </motion.h1>
      <motion.p
        className="font-body text-cream/80 text-lg md:text-xl mb-10 font-light max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Paysagiste d'exception sur la Côte d'Azur. Création, entretien et aménagement de jardins méditerranéens.
      </motion.p>
      <motion.a
        href="#contact"
        className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-accent transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Demander un devis
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
