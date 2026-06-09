import AnimatedSection from "./AnimatedSection";
import { Award, Users, Gem, Ear } from "lucide-react";

const points = [
  { icon: Award, title: "Expertise reconnue", text: "Plus de 10 ans d'expérience en aménagement paysager méditerranéen." },
  { icon: Users, title: "Proximité & réactivité", text: "Une équipe locale, disponible et à l'écoute de vos besoins." },
  { icon: Gem, title: "Matériaux de qualité", text: "Sélection rigoureuse de végétaux et matériaux durables et esthétiques." },
  { icon: Ear, title: "Écoute client", text: "Chaque projet commence par une écoute attentive pour un résultat sur-mesure." },
];

const WhyUsSection = () => (
  <section className="py-24 md:py-32 bg-gradient-sand">
    <div className="container max-w-5xl">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">Nos engagements</p>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">
          Pourquoi choisir Paysages Azuréens
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-8">
        {points.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1} className="flex gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
