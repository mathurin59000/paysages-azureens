import AnimatedSection from "./AnimatedSection";

export const reviews = [
  {
    author: "Marie-Hélène R.",
    location: "Cimiez, Nice",
    service: "Création de jardin en terrasse",
    rating: 5,
    text: "Nous avions un terrain en pente difficile à aménager. L'équipe a proposé un projet en restanques avec des oliviers et des lavandes qui s'intègre parfaitement dans le quartier. Le rendu est au-delà de nos espérances et nos voisins nous demandent régulièrement le contact du paysagiste.",
  },
  {
    author: "Catherine L.",
    location: "La Californie, Cannes",
    service: "Création jardin et piscine paysagée",
    rating: 5,
    text: "Notre villa avait un jardin vieillissant qui ne correspondait plus à l'image que nous voulions donner. Paysages Azuréens a créé un espace extérieur luxueux avec une végétation méditerranéenne abondante. Le résultat est spectaculaire.",
  },
  {
    author: "Thomas et Aurélie P.",
    location: "Juan-les-Pins, Antibes",
    service: "Création jardin bord de mer",
    rating: 5,
    text: "Projet délicat car notre jardin est à 50 mètres de la mer. L'équipe a sélectionné des plantes parfaitement adaptées aux embruns. Un an après la plantation, tout prospère et notre jardin est le plus beau de la résidence.",
  },
  {
    author: "Jean-Marc R.",
    location: "Le Bar-sur-Loup",
    service: "Restauration de restanques",
    rating: 5,
    text: "Des restanques centenaires menaçaient mon oliveraie. L'équipe est intervenue rapidement avec la technique traditionnelle de la pierre sèche. Le travail est soigné, solide et s'intègre parfaitement dans le paysage.",
  },
  {
    author: "Philippe W.",
    location: "Le Cannet, Cannes",
    service: "Contrat d'entretien annuel",
    rating: 5,
    text: "Je réside principalement à Paris et j'avais besoin d'un paysagiste de confiance. Le service avec compte-rendu photos mensuels est parfait. Mon jardin est toujours impeccable à mon arrivée.",
  },
  {
    author: "Élodie M.",
    location: "Valbonne",
    service: "Arrosage automatique & aménagement",
    rating: 5,
    text: "Nouveau jardin pour notre villa avec système d'arrosage connecté. Respect des délais, propreté du chantier et très bons conseils sur les plantes peu gourmandes en eau. Notre facture d'eau a baissé de moitié.",
  },
];

export const AGGREGATE = { ratingValue: "4.9", reviewCount: 23, bestRating: 5 };

function Stars({ count }: { count: number }) {
  return (
    <span aria-label={`${count} étoiles sur 5`} className="text-primary text-base leading-none">
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

const ReviewsSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container max-w-6xl">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
          Avis clients
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6">
          Ce que disent nos clients
        </h2>

        {/* Note globale */}
        <div className="inline-flex items-center gap-3 bg-muted rounded-sm px-6 py-3 border border-border">
          <span className="font-heading text-4xl font-semibold text-foreground">
            {AGGREGATE.ratingValue}
          </span>
          <div className="text-left">
            <Stars count={5} />
            <p className="font-body text-xs text-muted-foreground mt-0.5">
              {AGGREGATE.reviewCount} avis vérifiés
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <AnimatedSection key={r.author} delay={i * 0.08}>
            <figure className="bg-muted rounded-sm p-7 h-full border border-border flex flex-col">
              <Stars count={r.rating} />
              <blockquote className="font-body text-sm text-foreground leading-relaxed flex-1 mt-4 mb-6">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="border-t border-border pt-4">
                <p className="font-body text-sm font-semibold text-foreground">{r.author}</p>
                <p className="font-body text-xs text-muted-foreground">{r.location}</p>
                <p className="font-body text-xs text-primary mt-1 uppercase tracking-wide">
                  {r.service}
                </p>
              </figcaption>
            </figure>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
