// lib/cities.ts
// Données SEO et contenu pour chaque page géolocalisée

export type CityData = {
  slug: string;
  name: string;
  department: string;
  postalCode: string;
  geo: { latitude: string; longitude: string };
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  context: string;
  specificities: { title: string; description: string }[];
  services: { name: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const cities: Record<string, CityData> = {
  nice: {
    slug: "nice",
    name: "Nice",
    department: "Alpes-Maritimes",
    postalCode: "06000",
    geo: { latitude: "43.7102", longitude: "7.2620" },
    metaTitle: "Paysagiste Nice — Création & Entretien Jardin | Paysages Azuréens",
    metaDescription:
      "Paysagiste à Nice : création de jardins méditerranéens, entretien, aménagement extérieur. Devis gratuit sous 24h. Plus de 10 ans d'expérience sur Nice et les Alpes-Maritimes.",
    h1: "Paysagiste à Nice — Jardins méditerranéens d'exception",
    intro:
      "Vous recherchez un paysagiste de confiance à Nice ? Paysages Azuréens intervient dans toute la ville et ses environs pour créer, aménager et entretenir vos espaces extérieurs. Nous combinons savoir-faire artisanal et connaissance approfondie du micro-climat niçois pour sublimer chaque jardin.",
    context:
      "Nice bénéficie d'un ensoleillement exceptionnel — plus de 300 jours par an — et d'un micro-climat doux qui offre des conditions idéales pour les jardins méditerranéens. Des collines de Cimiez aux villas du bord de mer, chaque espace extérieur niçois a ses propres contraintes : exposition, mistral, sol calcaire, pentes. Notre équipe connaît ces spécificités et adapte chaque projet en conséquence.",
    specificities: [
      {
        title: "Jardins en terrasse et dénivelés",
        description:
          "Le relief niçois impose souvent des aménagements en terrasses. Nous maîtrisons les techniques de soutènement, drainage et plantation sur pentes pour des jardins stables et esthétiques.",
      },
      {
        title: "Plantes adaptées au vent et au sel",
        description:
          "Les jardins proches du front de mer nécessitent des végétaux résistants à l'embruns. Nous sélectionnons des essences éprouvées : agaves, palmiers, pittosporums, tamaris.",
      },
      {
        title: "Gestion de l'eau en zone urbaine dense",
        description:
          "Nous intégrons systématiquement des solutions d'arrosage automatique économes et de récupération des eaux de pluie, conformes aux réglementations locales.",
      },
    ],
    services: [
      {
        name: "Création de jardin méditerranéen à Nice",
        description:
          "Conception sur-mesure de votre jardin niçois : plan paysager, sélection végétale adaptée au climat, terrasses, allées, éclairage. Nous réalisons des jardins qui valorisent votre bien immobilier.",
      },
      {
        name: "Entretien de jardin à Nice",
        description:
          "Tonte, taille, débroussaillage, taille de palmiers, nettoyage saisonnier. Contrats d'entretien annuels ou interventions ponctuelles selon vos besoins.",
      },
      {
        name: "Aménagement extérieur à Nice",
        description:
          "Terrasses, piscines paysagées, cours intérieures, jardins de villa ou appartement. Nous coordonnons tous les corps de métier pour vous livrer un espace clé en main.",
      },
    ],
    faq: [
      {
        question: "Dans quels quartiers de Nice intervenez-vous ?",
        answer:
          "Nous intervenons dans toute la ville de Nice : Cimiez, Fabron, Mont-Boron, Carré d'Or, Promenade des Anglais, Saint-Isidore, Nice-Nord et les communes limitrophes (Cagnes-sur-Mer, Saint-Laurent-du-Var, Villefranche-sur-Mer).",
      },
      {
        question: "Quel est le délai pour obtenir un devis paysagiste à Nice ?",
        answer:
          "Nous répondons à toutes les demandes sous 24h et proposons un rendez-vous de visite sous 3 à 5 jours ouvrés. Le devis est gratuit et sans engagement.",
      },
      {
        question: "Quelles plantes conseillez-vous pour un jardin à Nice ?",
        answer:
          "Pour Nice, nous recommandons des essences méditerranéennes résistantes à la sécheresse : olivier, lavande, romarin, bougainvillier, agapanthe, jasmin, pittosporum. Elles demandent peu d'eau et s'épanouissent naturellement dans le climat niçois.",
      },
    ],
  },

  cannes: {
    slug: "cannes",
    name: "Cannes",
    department: "Alpes-Maritimes",
    postalCode: "06400",
    geo: { latitude: "43.5528", longitude: "7.0174" },
    metaTitle: "Paysagiste Cannes — Création & Entretien Jardin | Paysages Azuréens",
    metaDescription:
      "Paysagiste à Cannes : jardins de prestige, entretien et aménagement paysager sur la Croisette et ses environs. Devis gratuit. Expertise méditerranéenne depuis plus de 10 ans.",
    h1: "Paysagiste à Cannes — Jardins de prestige sur la Côte d'Azur",
    intro:
      "Paysages Azuréens réalise et entretient des jardins d'exception à Cannes et sur toute la Côte d'Azur cannoise. Villas de la Californie, propriétés du Cannet, résidences du bord de mer — nous adaptons notre expertise à chaque standing et chaque projet.",
    context:
      "Cannes est une ville de villégiature de prestige où l'espace extérieur fait partie intégrante de la valeur immobilière. Un jardin bien conçu et entretenu peut représenter jusqu'à 20 % de la valeur d'une propriété. Notre équipe comprend ces enjeux et travaille avec la même exigence que les autres corps de métier du luxe cannois.",
    specificities: [
      {
        title: "Jardins de villas et propriétés de prestige",
        description:
          "Nous sommes habitués à intervenir sur des propriétés d'exception, avec des exigences de discrétion, de finition et de respect des délais propres aux projets haut de gamme.",
      },
      {
        title: "Intégration piscine et espaces de réception",
        description:
          "Nos créations intègrent naturellement les contours de piscine, pool-house, pergolas et espaces de réception extérieurs pour un rendu harmonieux et fonctionnel.",
      },
      {
        title: "Entretien régulier pour les propriétaires non-résidents",
        description:
          "Beaucoup de propriétaires cannois ne résident pas à l'année. Nous proposons des contrats d'entretien avec compte-rendu photos mensuels pour un suivi serein à distance.",
      },
    ],
    services: [
      {
        name: "Création de jardin à Cannes",
        description:
          "Jardins de villas, terrasses d'appartements, espaces paysagés autour de piscine. Nous concevons des espaces extérieurs qui reflètent l'élégance cannoise.",
      },
      {
        name: "Entretien de jardin à Cannes",
        description:
          "Entretien régulier ou saisonnier, taille de palmiers, tonte, désherbage, gestion des massifs. Intervention rapide et sérieuse pour maintenir votre jardin en parfait état.",
      },
      {
        name: "Aménagement paysager à Cannes",
        description:
          "Allées en pierre naturelle, murs végétaux, éclairage de jardin, systèmes d'arrosage automatique — nous réalisons tous les aménagements pour un extérieur d'exception.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous sur les Îles de Lérins ou en bateau ?",
        answer:
          "Non, nous n'intervenons pas sur les îles. Notre zone d'intervention couvre Cannes, Le Cannet, Mougins, Mandelieu-la-Napoule et les communes environnantes.",
      },
      {
        question: "Proposez-vous des contrats d'entretien pour propriétaires absents ?",
        answer:
          "Oui, c'est même l'une de nos spécialités à Cannes. Nous établissons des contrats annuels avec fréquence d'intervention définie, et vous envoyons un compte-rendu photo après chaque passage.",
      },
      {
        question: "Travaillez-vous avec des architectes et décorateurs d'intérieur ?",
        answer:
          "Absolument. Nous collaborons régulièrement avec des architectes, des maîtres d'œuvre et des décorateurs pour des projets de rénovation ou de construction neuve à Cannes et dans les environs.",
      },
    ],
  },

  antibes: {
    slug: "antibes",
    name: "Antibes",
    department: "Alpes-Maritimes",
    postalCode: "06600",
    geo: { latitude: "43.5804", longitude: "7.1282" },
    metaTitle: "Paysagiste Antibes — Création & Entretien Jardin | Paysages Azuréens",
    metaDescription:
      "Paysagiste à Antibes Juan-les-Pins : création de jardins méditerranéens, entretien, aménagement paysager. Expertise Cap d'Antibes. Devis gratuit sous 24h.",
    h1: "Paysagiste à Antibes — Du vieux port au Cap d'Antibes",
    intro:
      "De la vieille ville d'Antibes aux villas du Cap, Paysages Azuréens crée et entretient des jardins méditerranéens à l'image de ce territoire d'exception. Notre connaissance du patrimoine végétal antibois nous permet de proposer des aménagements authentiques et durables.",
    context:
      "Antibes Juan-les-Pins offre une diversité de micro-habitats paysagers remarquable : jardins clos de la vieille ville, parcs de villas sur le Cap, jardins de résidences de Juan-les-Pins, espaces naturels proches du littoral. Chaque secteur a ses contraintes propres — ensoleillement, embruns, place disponible — que nous prenons en compte dès la phase de conception.",
    specificities: [
      {
        title: "Jardins du Cap d'Antibes",
        description:
          "Le Cap d'Antibes abrite certains des plus beaux jardins de la Côte d'Azur. Nous y intervenons pour la création et l'entretien de propriétés d'exception, en respectant les espèces remarquables présentes.",
      },
      {
        title: "Petits jardins de centre-ville",
        description:
          "Dans la vieille ville d'Antibes, les espaces sont souvent réduits. Nous excellons dans l'aménagement de courettes, patios et jardins de ville pour en faire de vrais havre de paix.",
      },
      {
        title: "Proximité du littoral",
        description:
          "Les jardins proches de la mer nécessitent des végétaux tolérents aux embruns salins et aux vents marins. Notre sélection végétale est adaptée à ces contraintes spécifiques.",
      },
    ],
    services: [
      {
        name: "Création de jardin méditerranéen à Antibes",
        description:
          "Jardins de villa, patios, terrasses et espaces verts. Nous concevons des jardins authentiquement méditerranéens qui s'intègrent dans le paysage antibois.",
      },
      {
        name: "Entretien de jardin à Antibes",
        description:
          "Taille de haies, tonte, entretien des massifs, taille de palmiers. Interventions régulières ou ponctuelles sur Antibes, Juan-les-Pins et le Cap d'Antibes.",
      },
      {
        name: "Aménagement extérieur à Antibes",
        description:
          "Dallages, clôtures végétales, systèmes d'arrosage, éclairage de jardin. Nous aménageons des espaces extérieurs complets, de la conception à la livraison.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous sur tout Antibes, y compris Juan-les-Pins ?",
        answer:
          "Oui, nous couvrons l'ensemble de la commune d'Antibes Juan-les-Pins, ainsi que le Cap d'Antibes, Villeneuve-Loubet et Biot.",
      },
      {
        question: "Peut-on planter un jardin en bord de mer à Antibes ?",
        answer:
          "Absolument, à condition de choisir les bonnes espèces. Nous recommandons des plantes halophytes (résistantes au sel) comme le tamaris, le pittosporum, l'oyat ou l'agave. Nous vous conseillons dans ce choix dès la visite initiale.",
      },
      {
        question: "Proposez-vous des solutions pour économiser l'eau dans les jardins d'Antibes ?",
        answer:
          "Oui, systématiquement. Nous installons des systèmes d'arrosage goutte-à-goutte, des paillages naturels et sélectionnons des plantes xérophytes (peu gourmandes en eau) pour réduire la consommation jusqu'à 60 %.",
      },
    ],
  },

  grasse: {
    slug: "grasse",
    name: "Grasse",
    department: "Alpes-Maritimes",
    postalCode: "06130",
    geo: { latitude: "43.6589", longitude: "6.9234" },
    metaTitle: "Paysagiste Grasse — Création & Entretien Jardin | Paysages Azuréens",
    metaDescription:
      "Paysagiste à Grasse et arrière-pays grassois : jardins en terrasse, plantations florales, entretien. Expertise du climat montagnard méditerranéen. Devis gratuit.",
    h1: "Paysagiste à Grasse — Jardins en terrasse et patrimoine floral",
    intro:
      "À Grasse, capitale mondiale du parfum, les jardins ont une dimension presque historique. Paysages Azuréens s'inscrit dans cette tradition en créant et entretenant des jardins qui célèbrent la richesse florale du terroir grassois, qu'il s'agisse d'une bastide en restanques ou d'une maison de village contemporaine.",
    context:
      "Le territoire de Grasse présente des caractéristiques paysagères uniques : altitude entre 200 et 800 m, restanques en pierre sèche, oliveraies centenaires, cultures florales historiques. Les jardins grassois bénéficient d'un ensoleillement méditerranéen tout en étant protégés des excès de chaleur de la côte. Les hivers y sont plus frais, ce qui ouvre la palette végétale à des espèces impossibles à cultiver à Nice ou Cannes.",
    specificities: [
      {
        title: "Restanques et murs en pierre sèche",
        description:
          "La pierre sèche est au cœur du paysage grassois. Nous maîtrisons sa restauration et la construction de nouvelles restanques, tant pour leur valeur patrimoniale que pour leur efficacité de soutènement.",
      },
      {
        title: "Plantations florales et aromatiques",
        description:
          "Nous intégrons dans nos créations des végétaux emblématiques du pays grassois : rose de mai, jasmin, lavande, iris, mimosa — pour des jardins parfumés et ancrés dans le territoire.",
      },
      {
        title: "Jardins d'altitude adaptés aux hivers frais",
        description:
          "Les jardins grassois supportent des gelées légères en hiver. Nous sélectionnons des espèces rustiques qui résistent aux variations thermiques tout en gardant l'esthétique méditerranéenne.",
      },
    ],
    services: [
      {
        name: "Création de jardin à Grasse",
        description:
          "Jardins en restanques, espaces fleuris, oliveraies aménagées, terrasses panoramiques. Nous créons des jardins qui respectent et révèlent l'identité paysagère du pays grassois.",
      },
      {
        name: "Entretien de jardin à Grasse",
        description:
          "Entretien d'oliviers, taille de haies, gestion des restanques, entretien de massifs fleuris. Nous adaptons nos calendriers d'intervention au rythme végétal spécifique de l'arrière-pays.",
      },
      {
        name: "Aménagement paysager à Grasse",
        description:
          "Restauration de restanques, création de cheminements en pierre, systèmes d'irrigation adaptés à l'altitude. Nous réalisons des aménagements durables et respectueux du paysage grassois.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous dans les villages autour de Grasse ?",
        answer:
          "Oui, nous couvrons Grasse et son arrière-pays : Mougins, Mouans-Sartoux, Valbonne, Opio, Le Bar-sur-Loup, Châteauneuf-Grasse et les villages environnants.",
      },
      {
        question: "Pouvez-vous restaurer des restanques en pierre sèche à Grasse ?",
        answer:
          "Oui, c'est l'une de nos spécialités dans le secteur grassois. Nous intervenons pour la restauration de murs existants et la création de nouvelles restanques, en utilisant la technique traditionnelle de la pierre sèche.",
      },
      {
        question: "Quelles fleurs du pays grassois peut-on intégrer dans un jardin privé ?",
        answer:
          "La rose de mai, le jasmin, la lavande et l'iris de Florence sont parfaitement adaptés aux jardins particuliers à Grasse. Nous vous conseillons sur les variétés, l'exposition et l'entretien pour obtenir une floraison optimale.",
      },
    ],
  },
};

export const getAllCitySlugs = () => Object.keys(cities);
export const getCityData = (slug: string): CityData | undefined => cities[slug];
