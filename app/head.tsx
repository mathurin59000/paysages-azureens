const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Paysages Azuréens",
  description: "Paysagiste spécialisé dans la création et l'entretien de jardins méditerranéens sur la Côte d'Azur.",
  areaServed: ["Nice", "Cannes", "Antibes", "Grasse", "Côte d'Azur"],
  serviceType: ["Paysagisme", "Entretien de jardin", "Création de jardin", "Aménagement extérieur"],
};

const Head = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default Head;
