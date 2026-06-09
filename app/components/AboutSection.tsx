import AnimatedSection from "@/app/components/AnimatedSection";
import { Leaf, MapPin, Heart } from "lucide-react";

const values = [
  { icon: Leaf, title: "Passion du végétal", text: "Chaque plante est choisie avec soin pour s'intégrer harmonieusement dans votre environnement." },
  { icon: MapPin, title: "Expertise locale", text: "Nous connaissons parfaitement le climat méditerranéen et ses essences végétales." },
  { icon: Heart, title: "Accompagnement personnalisé", text: "De la conception à la réalisation, nous vous guidons à chaque étape de votre projet." },
];

const AboutSection = () => (
  <section id="apropos" className="py-24 md:py-32 bg-background">
    <div className="container max-w-5xl">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">À propos</p>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6">
          L'art du paysage méditerranéen
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Paysages Azuréens est une entreprise de paysagisme spécialisée dans la création et l'entretien de jardins sur la Côte d'Azur. Notre savoir-faire artisanal allie esthétique, durabilité et respect de l'environnement pour sublimer chaque espace extérieur.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {values.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.15} className="text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-secondary flex items-center justify-center">
              <v.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.text}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
