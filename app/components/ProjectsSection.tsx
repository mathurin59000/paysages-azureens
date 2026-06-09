'use client'

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import Image from "next/image";

const projects = [
  { img: project1, title: "Terrasse méditerranéenne", cat: "création", alt: "création jardin paysagiste terrasse méditerranéenne" },
  { img: project2, title: "Jardin contemporain", cat: "création", alt: "aménagement extérieur jardin contemporain" },
  { img: project3, title: "Espace piscine", cat: "aménagement", alt: "aménagement piscine paysagiste Côte d'Azur" },
  { img: project4, title: "Jardin à l'anglaise", cat: "entretien", alt: "entretien jardin haies roses paysagiste" },
  { img: project5, title: "Entrée fleurie", cat: "création", alt: "création entrée jardin bougainvillier" },
  { img: project6, title: "Cour intérieure", cat: "aménagement", alt: "aménagement cour intérieure fontaine" },
];

const filters = ["tout", "création", "entretien", "aménagement"];

const ProjectsSection = () => {
  const [active, setActive] = useState("tout");
  const filtered = active === "tout" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projets" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl">
        <AnimatedSection className="text-center mb-12">
          <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">Réalisations</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Nos plus beaux projets
          </h2>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-body rounded-sm border transition-colors duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <AnimatedSection key={p.title + active} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3]">
                <Image
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-end">
                  <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-heading text-xl text-cream font-semibold">{p.title}</h3>
                    <p className="font-body text-cream/70 text-xs uppercase tracking-wider mt-1">{p.cat}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
            Découvrez notre portfolio complet de réalisations en aménagement paysager, création de jardins méditerranéens et entretien d'espaces verts sur la Côte d'Azur. Chaque projet est unique et reflète notre engagement envers l'excellence et le respect de la nature.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
