import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "@/app/components/ServicesSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import WhyUsSection from "@/app/components/WhyUsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import ReviewsSection, { reviews, AGGREGATE } from "@/app/components/ReviewsSection";
import logoImg from "@/assets/logo_round_288x288.webp";
import heroImg from "@/assets/hero-garden.webp";
import { Metadata, Viewport } from "next";

const BASE_URL = "https://paysages-azureens.fr";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Paysagiste Côte d'Azur — Devis Gratuit · Paysages Azuréens",
  description: "Paysages Azuréens, paysagiste sur la Côte d'Azur. Création de jardins méditerranéens, entretien, aménagement extérieur à Nice, Cannes, Antibes. Devis gratuit.",
alternates: {
    canonical: "https://paysages-azureens.fr",
  },
  openGraph: {
    title: "Paysages Azuréens — Paysagiste Côte d'Azur",
    description: "Création, entretien et aménagement de jardins méditerranéens d'exception sur la Côte d'Azur.",
    locale: "fr_FR",
    type: "website",
    url: "https://paysages-azureens.fr",
    images: [
      {
        url: "https://paysages-azureens.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paysages Azuréens — Paysagiste Côte d'Azur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysages Azuréens — Paysagiste Côte d'Azur",
    description:
      "Création, entretien et aménagement de jardins méditerranéens d'exception sur la Côte d'Azur.",
    images: ["https://paysages-azureens.fr/og-image.jpg"],
  },
}

function HomePageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${BASE_URL}/#business`,
        "name": "Paysages Azuréens",
        "description": "Paysagiste spécialisé dans la création et l'entretien de jardins méditerranéens sur la Côte d'Azur. Création paysagère sur-mesure, entretien de jardin, aménagement extérieur.",
        "url": BASE_URL,
        "telephone": "+33646800912",
        "email": "contact@paysages-azureens.fr",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${logoImg.src}`,
          "width": 288,
          "height": 288,
        },
        "image": `${BASE_URL}${heroImg.src}`,
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Espèces, Virement bancaire, Chèque",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "232 Chemin Thomas et Pallanca",
          "postalCode": "06370",
          "addressLocality": "Mouans-Sartoux",
          "addressRegion": "Provence-Alpes-Côte d'Azur",
          "addressCountry": "FR",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.606346",
          "longitude": "6.960722",
        },
        "areaServed": [
          { "@type": "City", "name": "Nice",    "sameAs": "https://www.wikidata.org/wiki/Q33959"  },
          { "@type": "City", "name": "Cannes",  "sameAs": "https://www.wikidata.org/wiki/Q42714"  },
          { "@type": "City", "name": "Antibes", "sameAs": "https://www.wikidata.org/wiki/Q159152" },
          { "@type": "City", "name": "Grasse",  "sameAs": "https://www.wikidata.org/wiki/Q178338" },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services de paysagisme",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Création paysagère",    "description": "Conception sur-mesure de jardins méditerranéens, terrasses et espaces verts." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entretien de jardin",   "description": "Tonte, débroussaillage, taille de haies et nettoyage saisonnier par des professionnels." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jardinage",             "description": "Plantation, taille et soins des végétaux pour un jardin florissant toute l'année." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aménagement extérieur", "description": "Étude de faisabilité, plans techniques et coordination des travaux d'aménagement extérieur." } },
          ],
        },
        "knowsAbout": ["Jardin méditerranéen", "Paysagisme", "Entretien jardin", "Création jardin", "Aménagement extérieur", "Plantes méditerranéennes"],
        "slogan": "Donnez vie à vos espaces extérieurs",
        "foundingDate": "2026",
        "sameAs": ["https://www.instagram.com/paysagesazureens"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": AGGREGATE.ratingValue,
          "reviewCount": AGGREGATE.reviewCount,
          "bestRating": AGGREGATE.bestRating,
          "worstRating": 1,
        },
        "review": reviews.map((r) => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": r.author },
          "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5, "worstRating": 1 },
          "reviewBody": r.text,
          "name": r.service,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": BASE_URL,
        "name": "Paysages Azuréens",
        "description": "Paysagiste sur la Côte d'Azur — Création & entretien de jardins méditerranéens",
        "publisher": { "@id": `${BASE_URL}/#business` },
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

const HomePage = () => (
  <>
    <HomePageSchema />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <WhyUsSection />
    <ReviewsSection />
    <ContactSection />
    <Footer />
  </>
);

export default HomePage;
