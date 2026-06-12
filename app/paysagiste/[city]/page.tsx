import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { getCityData, getAllCitySlugs } from "@/app/lib/cities";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedSection from "@/app/components/AnimatedSection";

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityData(citySlug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `https://paysages-azureens.fr/paysagiste-${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://paysages-azureens.fr/paysagiste-${city.slug}`,
      siteName: "Paysages Azuréens",
      locale: "fr_FR",
      type: "website",
    },
  };
}

function CityPageSchema({ city }: { city: ReturnType<typeof getCityData> }) {
  if (!city) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LandscapeService",
    "@id": `https://paysages-azureens.fr/paysagiste-${city.slug}/#service`,
    "name": `Paysages Azuréens — Paysagiste ${city.name}`,
    "description": city.metaDescription,
    "url": `https://paysages-azureens.fr/paysagiste-${city.slug}`,
    "telephone": "+33646800912",
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "postalCode": city.postalCode,
      "addressCountry": "FR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.geo.latitude,
      "longitude": city.geo.longitude,
    },
    "provider": {
      "@type": "LandscapeService",
      "@id": "https://paysages-azureens.fr/#business",
      "name": "Paysages Azuréens",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Services paysagisme ${city.name}`,
      "itemListElement": city.services.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.name,
          "description": s.description,
        },
      })),
    },
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": city.faq.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCityData(citySlug);
  if (!city) notFound();

  return (
    <>
      <CityPageSchema city={city} />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          aria-labelledby="city-h1"
          className="py-32 md:py-40 bg-foreground text-center px-4"
        >
          <div className="container max-w-3xl mx-auto">
            <p className="font-body text-sm tracking-widest uppercase text-cream/60 mb-4">
              Paysagiste — {city.name}
            </p>
            <h1
              id="city-h1"
              className="font-heading text-4xl md:text-6xl font-semibold text-cream leading-tight mb-6"
            >
              {city.h1}
            </h1>
            <p className="font-body text-cream/80 text-lg md:text-xl mb-10 font-light max-w-xl mx-auto">
              {city.intro}
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-accent transition-colors duration-300"
            >
              Demander un devis gratuit à {city.name}
            </Link>
          </div>
        </section>

        {/* Contexte local */}
        <section
          aria-labelledby="context-title"
          className="py-24 md:py-32 bg-background"
        >
          <div className="container max-w-5xl">
            <AnimatedSection className="text-center mb-12">
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
                Contexte local
              </p>
              <h2
                id="context-title"
                className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6"
              >
                Paysagisme à {city.name} : contexte et spécificités
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {city.context}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Spécificités locales */}
        <section
          aria-labelledby="specificities-title"
          className="py-24 md:py-32 bg-gradient-sand"
        >
          <div className="container max-w-6xl">
            <AnimatedSection className="text-center mb-16">
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
                Spécificités
              </p>
              <h2
                id="specificities-title"
                className="font-heading text-3xl md:text-5xl font-semibold text-foreground"
              >
                Ce qui rend les jardins de {city.name} uniques
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.specificities.map((spec, i) => (
                <AnimatedSection key={spec.title} delay={i * 0.1}>
                  <div className="bg-background rounded-sm p-8 h-full border border-border hover:shadow-lg transition-shadow duration-300">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {spec.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          aria-labelledby="services-title"
          className="py-24 md:py-32 bg-background"
        >
          <div className="container max-w-6xl">
            <AnimatedSection className="text-center mb-16">
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
                Nos services
              </p>
              <h2
                id="services-title"
                className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6"
              >
                Nos services de paysagisme à {city.name}
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.services.map((service, i) => (
                <AnimatedSection key={service.name} delay={i * 0.1}>
                  <div className="bg-muted rounded-sm p-8 h-full border border-border hover:shadow-lg transition-shadow duration-300">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {service.name}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-title"
          className="py-24 md:py-32 bg-gradient-sand"
        >
          <div className="container max-w-3xl">
            <AnimatedSection className="text-center mb-16">
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
                FAQ
              </p>
              <h2
                id="faq-title"
                className="font-heading text-3xl md:text-5xl font-semibold text-foreground"
              >
                Questions fréquentes — Paysagiste {city.name}
              </h2>
            </AnimatedSection>

            <dl className="space-y-6">
              {city.faq.map((item, i) => (
                <AnimatedSection key={item.question} delay={i * 0.08}>
                  <div className="bg-background rounded-sm p-8 border border-border">
                    <dt className="font-heading text-lg font-semibold text-foreground mb-3">
                      {item.question}
                    </dt>
                    <dd className="font-body text-muted-foreground text-sm leading-relaxed">
                      {item.answer}
                    </dd>
                  </div>
                </AnimatedSection>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-labelledby="cta-title"
          className="py-24 md:py-32 bg-foreground text-center px-4"
        >
          <div className="container max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="font-body text-sm tracking-widest uppercase text-cream/60 mb-4">
                Votre projet
              </p>
              <h2
                id="cta-title"
                className="font-heading text-3xl md:text-5xl font-semibold text-cream mb-6"
              >
                Votre projet paysager à {city.name}
              </h2>
              <p className="font-body text-cream/80 max-w-xl mx-auto mb-10 leading-relaxed">
                Devis gratuit et sans engagement. Notre équipe intervient à{" "}
                {city.name} et dans les communes voisines. Réponse sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-accent transition-colors duration-300"
                >
                  Demander un devis
                </Link>
                <a
                  href="tel:+33646800912"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/30 text-cream font-body text-sm tracking-widest uppercase rounded-sm hover:border-cream/60 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  06 46 80 09 12
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Maillage interne */}
        <nav
          aria-label="Autres villes d'intervention"
          className="py-16 bg-background"
        >
          <div className="container max-w-5xl">
            <AnimatedSection className="text-center mb-10">
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
                Zone d'intervention
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                Nous intervenons aussi à
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <ul className="flex flex-wrap justify-center gap-3">
                {getAllCitySlugs()
                  .filter((slug) => slug !== city.slug)
                  .map((slug) => {
                    const otherCity = getCityData(slug)!;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/paysagiste-${slug}`}
                          className="inline-block px-5 py-2 border border-border rounded-sm font-body text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-200"
                        >
                          Paysagiste {otherCity.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </AnimatedSection>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}
