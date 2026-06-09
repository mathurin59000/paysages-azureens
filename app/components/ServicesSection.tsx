import AnimatedSection from "@/app/components/AnimatedSection";
import { Sprout, Scissors, TreePine, Ruler, Handshake } from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Jardinage",
    desc: "Plantation, taille et soins des végétaux pour un jardin florissant toute l'année.",
    benefit: "Un extérieur toujours verdoyant sans effort.",
  },
  {
    icon: Scissors,
    title: "Entretien de jardin",
    desc: "Tonte, débroussaillage, taille de haies et nettoyage saisonnier par des professionnels.",
    benefit: "Gain de temps et sérénité au quotidien.",
  },
  {
    icon: TreePine,
    title: "Création paysagère",
    desc: "Conception sur-mesure de jardins méditerranéens, terrasses et espaces verts.",
    benefit: "Un espace unique qui valorise votre bien.",
  },
  {
    icon: Ruler,
    title: "Développement de projet",
    desc: "Étude de faisabilité, plans techniques et coordination des travaux d'aménagement extérieur.",
    benefit: "Un projet structuré, livré dans les délais.",
  },
  {
    icon: Handshake,
    title: "Accompagnement personnalisé",
    desc: "Conseil en choix de plantes, matériaux et style pour un résultat à votre image.",
    benefit: "Une écoute attentive et des recommandations sur-mesure.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 bg-gradient-sand">
    <div className="container max-w-6xl">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">Nos services</p>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6">
          Des prestations complètes pour votre jardin
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Du simple entretien à la création paysagère complète, nous proposons un accompagnement adapté à chaque besoin et chaque budget.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="bg-background rounded-sm p-8 h-full border border-border hover:shadow-lg transition-shadow duration-300">
              <s.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <p className="font-body text-primary text-xs tracking-wide font-bold uppercase">{s.benefit}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
