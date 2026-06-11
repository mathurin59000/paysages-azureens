const schema = {
  "@context": "https://schema.org",
  "@type": "LandscapeService",
  "@id": "https://www.paysages-azureens.fr/#business",
  "name": "Paysages Azuréens",
  "description": "Paysagiste spécialisé dans la création et l'entretien de jardins méditerranéens sur la Côte d'Azur. Création paysagère sur-mesure, entretien de jardin, aménagement extérieur.",
  "url": "https://www.paysages-azureens.fr",
  "telephone": "+33646800912",
  "email": "contact@paysages-azureens.fr",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.paysages-azureens.fr/_next/static/media/logo-2.15hz0wgr507pz.png"
  },
  "image": "https://www.paysages-azureens.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-garden.0v5lk02061sjx.jpg&w=3840&q=75",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Espèces, Virement bancaire, Chèque",
  "areaServed": [
    {
      "@type": "City",
      "name": "Nice",
      "sameAs": "https://www.wikidata.org/wiki/Q33959"
    },
    {
      "@type": "City",
      "name": "Cannes",
      "sameAs": "https://www.wikidata.org/wiki/Q42714"
    },
    {
      "@type": "City",
      "name": "Antibes",
      "sameAs": "https://www.wikidata.org/wiki/Q159152"
    },
    {
      "@type": "City",
      "name": "Grasse",
      "sameAs": "https://www.wikidata.org/wiki/Q178338"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Provence-Alpes-Côte d'Azur",
    "addressCountry": "FR",
    "streetAddress": "232 Chemin Thomas et Pallanca",
    "postalCode": "06370",
    "addressLocality": "Mouans-Sartoux"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.606346",
    "longitude": "6.960722"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de paysagisme",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création paysagère",
          "description": "Conception sur-mesure de jardins méditerranéens, terrasses et espaces verts."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Entretien de jardin",
          "description": "Tonte, débroussaillage, taille de haies et nettoyage saisonnier par des professionnels."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Jardinage",
          "description": "Plantation, taille et soins des végétaux pour un jardin florissant toute l'année."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aménagement extérieur",
          "description": "Étude de faisabilité, plans techniques et coordination des travaux d'aménagement extérieur."
        }
      }
    ]
  },
  "knowsAbout": [
    "Jardin méditerranéen",
    "Paysagisme",
    "Entretien jardin",
    "Création jardin",
    "Aménagement extérieur",
    "Plantes méditerranéennes"
  ],
  "slogan": "Donnez vie à vos espaces extérieurs",
  "foundingDate": "2026",
  "sameAs": [
    "https://www.instagram.com/paysagesazureens",
  ]
};

const Head = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}

export default Head;

