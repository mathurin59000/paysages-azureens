import logoImg from "@/assets/logo_round_288x288.webp";
import heroImg from "@/assets/hero-garden.webp";

const BASE_URL = "https://paysages-azureens.fr";

const schema = (logoSrc: string, heroSrc: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      "name": "Paysages Azuréens",
      "description": "Paysagiste spécialisé dans la création et l'entretien de jardins méditerranéens sur la Côte d'Azur. Création paysagère sur-mesure, entretien de jardin, aménagement extérieur.",
      "url": BASE_URL,
      "telephone": "+33646800912",
      "email": "contact@paysages-azureens.fr",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${logoSrc}`,
        "width": 288,
        "height": 288,
      },
      "image": `${BASE_URL}${heroSrc}`,
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Création paysagère",         "description": "Conception sur-mesure de jardins méditerranéens, terrasses et espaces verts." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entretien de jardin",        "description": "Tonte, débroussaillage, taille de haies et nettoyage saisonnier par des professionnels." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jardinage",                  "description": "Plantation, taille et soins des végétaux pour un jardin florissant toute l'année." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aménagement extérieur",      "description": "Étude de faisabilité, plans techniques et coordination des travaux d'aménagement extérieur." } },
        ],
      },
      "knowsAbout": ["Jardin méditerranéen", "Paysagisme", "Entretien jardin", "Création jardin", "Aménagement extérieur", "Plantes méditerranéennes"],
      "slogan": "Donnez vie à vos espaces extérieurs",
      "foundingDate": "2026",
      "sameAs": ["https://www.instagram.com/paysagesazureens"],
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
});

const Head = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(logoImg.src, heroImg.src), null, 0) }}
  />
);

export default Head;
