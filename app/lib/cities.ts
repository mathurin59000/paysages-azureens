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
  neighborhoods: {
    intro: string;
    areas: { name: string; description: string }[];
  };
  services: { name: string; description: string }[];
  pricing: {
    intro: string;
    items: { service: string; range: string; note?: string }[];
    disclaimer: string;
  };
  testimonials: {
    author: string;
    location: string;
    service: string;
    text: string;
  }[];
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
      "Vous recherchez un paysagiste de confiance à Nice ? Paysages Azuréens intervient dans toute la ville et ses environs pour créer, aménager et entretenir vos espaces extérieurs. Nous combinons savoir-faire artisanal et connaissance approfondie du micro-climat niçois pour sublimer chaque jardin, de la terrasse d'appartement au parc de villa.",
    context:
      "Nice bénéficie d'un ensoleillement exceptionnel — plus de 300 jours par an — et d'un micro-climat doux qui offre des conditions idéales pour les jardins méditerranéens. Des collines de Cimiez aux villas du bord de mer, chaque espace extérieur niçois a ses propres contraintes : exposition, mistral, sol calcaire, pentes. Notre équipe connaît ces spécificités et adapte chaque projet en conséquence. Nous travaillons à Nice depuis plusieurs années, ce qui nous a permis de développer une connaissance intime des sols, des microclimats de quartier et des essences végétales qui s'y épanouissent le mieux.",
    specificities: [
      {
        title: "Jardins en terrasse et dénivelés",
        description:
          "Le relief niçois impose souvent des aménagements en terrasses. Nous maîtrisons les techniques de soutènement, drainage et plantation sur pentes pour des jardins stables et esthétiques.",
      },
      {
        title: "Plantes adaptées au vent et au sel",
        description:
          "Les jardins proches du front de mer nécessitent des végétaux résistants aux embruns. Nous sélectionnons des essences éprouvées : agaves, palmiers, pittosporums, tamaris.",
      },
      {
        title: "Gestion de l'eau en zone urbaine dense",
        description:
          "Nous intégrons systématiquement des solutions d'arrosage automatique économes et de récupération des eaux de pluie, conformes aux réglementations locales.",
      },
    ],
    neighborhoods: {
      intro:
        "Notre équipe se déplace dans tous les quartiers de Nice et les communes limitrophes. Que vous habitiez en hauteur à Cimiez ou en bord de mer à Carras, nous adaptons notre approche aux contraintes spécifiques de chaque secteur.",
      areas: [
        {
          name: "Cimiez & Mont-Boron",
          description:
            "Quartiers résidentiels en hauteur, avec des jardins exposés au sud et des villas avec terrasses étagées. Idéaux pour les jardins à l'italienne et les oliviers centenaires.",
        },
        {
          name: "Fabron & Saint-Isidore",
          description:
            "Secteurs de villas pavillonnaires avec de grands jardins. Nous y réalisons des créations paysagères complètes intégrant piscine, terrasse et espaces végétalisés.",
        },
        {
          name: "Promenade des Anglais & Carras",
          description:
            "Jardins soumis aux embruns marins et au vent. Sélection végétale adaptée aux contraintes littorales et aménagements terrasses pour profiter de la vue mer.",
        },
        {
          name: "Communes limitrophes",
          description:
            "Nous intervenons également à Cagnes-sur-Mer, Saint-Laurent-du-Var, Villefranche-sur-Mer et Beaulieu-sur-Mer pour tous vos projets de jardinage.",
        },
      ],
    },
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
    pricing: {
      intro:
        "Voici des fourchettes tarifaires indicatives pour nos prestations à Nice. Chaque devis est établi après visite gratuite et tient compte de la superficie, de l'accessibilité et de la complexité du projet.",
      items: [
        { service: "Entretien mensuel", range: "80 € – 200 €", note: "selon superficie" },
        { service: "Taille de haies", range: "60 € – 180 €", note: "selon linéaire" },
        { service: "Taille de palmiers", range: "80 € – 250 €", note: "selon hauteur" },
        { service: "Création jardin (< 100 m²)", range: "1 500 € – 4 000 €" },
        { service: "Création jardin (100 – 500 m²)", range: "4 000 € – 15 000 €" },
        { service: "Système d'arrosage automatique", range: "600 € – 2 500 €", note: "pose comprise" },
      ],
      disclaimer:
        "Tarifs indicatifs HT pour Nice et les Alpes-Maritimes. Devis gratuit personnalisé sous 24h.",
    },
    testimonials: [
      {
        author: "Marie-Hélène R.",
        location: "Cimiez, Nice",
        service: "Création de jardin en terrasse",
        text: "Nous avions un terrain en pente difficile à aménager. L'équipe a proposé un projet en restanques avec des oliviers et des lavandes qui s'intègre parfaitement dans le quartier. Le rendu est au-delà de nos espérances et nos voisins nous demandent régulièrement le contact du paysagiste.",
      },
      {
        author: "Jean-Paul M.",
        location: "Fabron, Nice",
        service: "Entretien annuel",
        text: "Je fais appel à Paysages Azuréens depuis deux ans pour l'entretien de mon jardin de 800 m². Ponctuels, professionnels, ils connaissent mon jardin comme le leur. La taille des palmiers et des haies est impeccable à chaque passage.",
      },
      {
        author: "Sophie et Marc D.",
        location: "Mont-Boron, Nice",
        service: "Aménagement piscine et jardin",
        text: "Rénovation complète du jardin autour de la piscine. Dallage en pierre naturelle, massifs méditerranéens, éclairage LED extérieur. L'équipe a su comprendre notre vision dès la première réunion et le résultat est vraiment luxueux.",
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
      "Paysages Azuréens réalise et entretient des jardins d'exception à Cannes et sur toute la Côte d'Azur cannoise. Villas de la Californie, propriétés du Cannet, résidences du bord de mer — nous adaptons notre expertise à chaque standing et chaque projet. Notre connaissance du tissu immobilier cannois nous permet de concevoir des espaces extérieurs qui valorisent réellement votre bien.",
    context:
      "Cannes est une ville de villégiature de prestige où l'espace extérieur fait partie intégrante de la valeur immobilière. Un jardin bien conçu et entretenu peut représenter jusqu'à 20 % de la valeur d'une propriété. Notre équipe comprend ces enjeux et travaille avec la même exigence que les autres corps de métier du luxe cannois. Nous intervenons sur des projets de toutes envergures, de la simple mise en beauté d'une terrasse au réaménagement complet d'un parc de villa, toujours avec le même soin du détail.",
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
    neighborhoods: {
      intro:
        "Cannes et ses environs offrent une grande diversité de configurations paysagères. Nous intervenons sur l'ensemble de la Côte d'Azur cannoise, des appartements de la Croisette aux bastides du Cannet.",
      areas: [
        {
          name: "La Californie & Super-Cannes",
          description:
            "Quartier résidentiel d'exception avec villas à flanc de colline et vues panoramiques. Nous y créons des jardins en terrasses avec piscines paysagées et végétation méditerranéenne luxuriante.",
        },
        {
          name: "Le Cannet",
          description:
            "Commune limitrophe très appréciée pour ses villas avec jardins. Interventions régulières pour l'entretien et la création de jardins sur des terrains souvent en pente.",
        },
        {
          name: "Mougins & Mouans-Sartoux",
          description:
            "Villages perchés de l'arrière-pays cannois avec des propriétés de caractère. Jardins méditerranéens authentiques, restanques, oliveraies et espaces fleuris.",
        },
        {
          name: "Mandelieu-la-Napoule",
          description:
            "Station balnéaire au bord de la mer avec des jardins soumis aux embruns. Sélection végétale adaptée et aménagements pour profiter du cadre maritime.",
        },
      ],
    },
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
    pricing: {
      intro:
        "Nos tarifs à Cannes reflètent l'exigence des projets que nous y réalisons. Chaque devis est personnalisé après visite gratuite sur site. Voici des fourchettes indicatives pour vous orienter.",
      items: [
        { service: "Entretien mensuel", range: "100 € – 350 €", note: "selon superficie et standing" },
        { service: "Taille de palmiers", range: "100 € – 400 €", note: "selon hauteur" },
        { service: "Création jardin prestige (< 200 m²)", range: "3 000 € – 8 000 €" },
        { service: "Création jardin prestige (200 – 1 000 m²)", range: "8 000 € – 35 000 €" },
        { service: "Aménagement autour de piscine", range: "2 500 € – 12 000 €" },
        { service: "Contrat entretien annuel", range: "1 200 € – 4 800 €", note: "facturation mensuelle possible" },
      ],
      disclaimer:
        "Tarifs indicatifs HT pour Cannes et le secteur cannois. Devis gratuit personnalisé sous 24h.",
    },
    testimonials: [
      {
        author: "Catherine L.",
        location: "La Californie, Cannes",
        service: "Création jardin et piscine paysagée",
        text: "Notre villa avait un jardin vieillissant qui ne correspondait plus à l'image que nous voulions donner à notre propriété. Paysages Azuréens a su créer un espace extérieur luxueux avec une végétation méditerranéenne abondante autour de la piscine. Le résultat est spectaculaire et nos locataires saisonniers ne tarissent pas d'éloges.",
      },
      {
        author: "Philippe W.",
        location: "Le Cannet",
        service: "Contrat d'entretien annuel",
        text: "Je réside principalement à Paris et j'avais besoin d'un paysagiste de confiance pour gérer mon jardin en mon absence. Le service avec compte-rendu photos mensuels est parfait. Je reçois des photos après chaque intervention et mon jardin est toujours impeccable à mon arrivée.",
      },
      {
        author: "Isabelle & François T.",
        location: "Mougins",
        service: "Aménagement jardin provençal",
        text: "Nous souhaitions un jardin provençal authentique autour de notre bastide. L'équipe a intégré des oliviers centenaires, des lavandes, des rosiers anciens et un potager aromatique. Chaque détail a été pensé. Nous avons exactement le jardin dont nous rêvions.",
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
      "De la vieille ville d'Antibes aux villas du Cap, Paysages Azuréens crée et entretient des jardins méditerranéens à l'image de ce territoire d'exception. Notre connaissance du patrimoine végétal antibois nous permet de proposer des aménagements authentiques et durables, respectueux de la biodiversité littorale et des espèces protégées présentes sur la presqu'île.",
    context:
      "Antibes Juan-les-Pins offre une diversité de micro-habitats paysagers remarquable : jardins clos de la vieille ville, parcs de villas sur le Cap, jardins de résidences de Juan-les-Pins, espaces naturels proches du littoral. Chaque secteur a ses contraintes propres — ensoleillement, embruns, place disponible — que nous prenons en compte dès la phase de conception. La presqu'île du Cap d'Antibes concentre certaines des plus belles propriétés de la Côte d'Azur, et nous y intervenons avec une exigence à la hauteur de ces jardins d'exception.",
    specificities: [
      {
        title: "Jardins du Cap d'Antibes",
        description:
          "Le Cap d'Antibes abrite certains des plus beaux jardins de la Côte d'Azur. Nous y intervenons pour la création et l'entretien de propriétés d'exception, en respectant les espèces remarquables présentes.",
      },
      {
        title: "Petits jardins de centre-ville",
        description:
          "Dans la vieille ville d'Antibes, les espaces sont souvent réduits. Nous excellons dans l'aménagement de courettes, patios et jardins de ville pour en faire de vrais havres de paix.",
      },
      {
        title: "Proximité du littoral",
        description:
          "Les jardins proches de la mer nécessitent des végétaux tolérants aux embruns salins et aux vents marins. Notre sélection végétale est adaptée à ces contraintes spécifiques.",
      },
    ],
    neighborhoods: {
      intro:
        "D'Antibes à Juan-les-Pins en passant par le Cap, chaque secteur a sa personnalité paysagère. Nous intervenons sur l'ensemble de la commune et ses alentours.",
      areas: [
        {
          name: "Cap d'Antibes",
          description:
            "Presqu'île emblématique aux propriétés d'exception. Jardins de villas avec vue mer, espèces rares et patrimoniales, entretien haut de gamme avec discrétion assurée.",
        },
        {
          name: "Vieille ville d'Antibes",
          description:
            "Courettes, patios et jardins de ville dans un tissu urbain dense. Nos créations apportent fraîcheur et verdure dans ces espaces contraints avec des plantes grimpantes, bacs et jardins verticaux.",
        },
        {
          name: "Juan-les-Pins",
          description:
            "Station balnéaire animée avec des résidences et villas à entretenir. Spécialistes des jardins côtiers, nous sélectionnons des plantes adaptées aux embruns et au sable.",
        },
        {
          name: "Villeneuve-Loubet & Biot",
          description:
            "Communes limitrophes avec des jardins de villas et de résidences. Création et entretien régulier, avec une connaissance des sols argileux typiques du secteur.",
        },
      ],
    },
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
    pricing: {
      intro:
        "Nos tarifs à Antibes varient selon la localisation (Cap d'Antibes ou secteur résidentiel), la superficie et la nature des travaux. Voici des fourchettes pour vous orienter avant votre devis gratuit.",
      items: [
        { service: "Entretien mensuel", range: "80 € – 300 €", note: "selon superficie" },
        { service: "Taille de haies", range: "60 € – 200 €", note: "selon linéaire et espèce" },
        { service: "Création jardin (< 150 m²)", range: "1 800 € – 5 000 €" },
        { service: "Création jardin Cap d'Antibes", range: "5 000 € – 25 000 €" },
        { service: "Arrosage automatique", range: "700 € – 2 800 €", note: "pose et programmation" },
        { service: "Patio ou courette de centre-ville", range: "800 € – 3 000 €" },
      ],
      disclaimer:
        "Tarifs indicatifs HT pour Antibes et les Alpes-Maritimes. Devis gratuit personnalisé sous 24h.",
    },
    testimonials: [
      {
        author: "Nathalie B.",
        location: "Cap d'Antibes",
        service: "Entretien de parc de villa",
        text: "Nous possédons une villa sur le Cap depuis dix ans et nous avons changé plusieurs fois de paysagiste. Paysages Azuréens est de loin le meilleur que nous ayons eu : ponctualité, soin des plantes remarquables présentes sur notre propriété, et véritable conseil horticole. Notre olivier centenaire n'a jamais été aussi bien taillé.",
      },
      {
        author: "Thomas et Aurélie P.",
        location: "Juan-les-Pins",
        service: "Création jardin bord de mer",
        text: "Projet délicat car notre jardin est à 50 mètres de la mer. L'équipe a sélectionné des plantes parfaitement adaptées aux embruns : tamaris, agaves, graminées ornementales. Un an après la plantation, tout prospère et notre jardin est le plus beau de la résidence.",
      },
      {
        author: "Michel D.",
        location: "Vieille ville, Antibes",
        service: "Aménagement de patio",
        text: "Je n'espérais pas grand-chose de ma courette de 20 m² encombrée et sombre. L'équipe a tout transformé : pergola couverte de jasmin, bacs de plantes méditerranéennes, fontaine murale. Un espace intime et parfumé que j'utilise toute l'année.",
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
      "À Grasse, capitale mondiale du parfum, les jardins ont une dimension presque historique. Paysages Azuréens s'inscrit dans cette tradition en créant et entretenant des jardins qui célèbrent la richesse florale du terroir grassois, qu'il s'agisse d'une bastide en restanques ou d'une maison de village contemporaine. Nous apportons notre expertise des jardins de l'arrière-pays pour chaque projet, du simple entretien d'oliviers à la création d'un jardin parfumé inspiré des cultures florales locales.",
    context:
      "Le territoire de Grasse présente des caractéristiques paysagères uniques : altitude entre 200 et 800 m, restanques en pierre sèche, oliveraies centenaires, cultures florales historiques. Les jardins grassois bénéficient d'un ensoleillement méditerranéen tout en étant protégés des excès de chaleur de la côte. Les hivers y sont plus frais, ce qui ouvre la palette végétale à des espèces impossibles à cultiver à Nice ou Cannes. Cette richesse climatique nous permet de créer des jardins d'une grande diversité botanique, depuis les plantes aromatiques des garrigues jusqu'aux roses anciennes des parfumeurs.",
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
    neighborhoods: {
      intro:
        "L'arrière-pays grassois est un territoire vaste et varié. Nous intervenons sur Grasse et toutes ses communes voisines, des villages perchés aux quartiers résidentiels de plaine.",
      areas: [
        {
          name: "Grasse centre & vieille ville",
          description:
            "Jardins de bastides historiques, courettes et terrasses de maisons de village. Interventions minutieuses dans un tissu bâti dense, avec des espèces adaptées aux sols calcaires.",
        },
        {
          name: "Mougins & Mouans-Sartoux",
          description:
            "Communes résidentielles de prestige entre Grasse et Cannes. Villas avec grands jardins paysagés, souvent en pente, avec une demande forte pour les jardins méditerranéens contemporains.",
        },
        {
          name: "Valbonne & Sophia Antipolis",
          description:
            "Secteur en plein essor avec de nombreuses résidences et villas. Création de jardins modernes intégrant des plantes locales, des systèmes d'arrosage intelligents et des espaces de détente.",
        },
        {
          name: "Opio, Le Bar-sur-Loup & villages perchés",
          description:
            "Bastides et mas provençaux avec restanques et oliveraies. Nous y réalisons des jardins authentiques qui s'inscrivent dans la tradition paysagère de l'arrière-pays.",
        },
      ],
    },
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
    pricing: {
      intro:
        "Nos tarifs dans le secteur de Grasse intègrent les spécificités du terrain (pentes, accès difficiles, restanques). Devis gratuit après visite. Voici des fourchettes indicatives.",
      items: [
        { service: "Entretien mensuel", range: "70 € – 200 €", note: "selon superficie" },
        { service: "Taille d'oliviers", range: "80 € – 300 €", note: "selon taille et nombre" },
        { service: "Restauration de restanques", range: "80 € – 150 € / ml", note: "pierre sèche" },
        { service: "Création jardin (< 200 m²)", range: "2 000 € – 6 000 €" },
        { service: "Création jardin (200 – 800 m²)", range: "6 000 € – 20 000 €" },
        { service: "Plantation jardin parfumé", range: "500 € – 3 000 €", note: "fournitures incluses" },
      ],
      disclaimer:
        "Tarifs indicatifs HT pour Grasse et l'arrière-pays grassois. Devis gratuit personnalisé sous 24h.",
    },
    testimonials: [
      {
        author: "Bernard et Colette A.",
        location: "Mougins",
        service: "Création jardin provençal",
        text: "Nous voulions un jardin provençal authentique autour de notre mas, avec des oliviers, des lavandes et une vigne. L'équipe a parfaitement saisi notre vision et a créé un espace qui ressemble vraiment à la Provence que nous aimons. Deux ans après, les plantes sont magnifiques et le jardin demande peu d'entretien.",
      },
      {
        author: "Élodie M.",
        location: "Valbonne",
        service: "Aménagement et arrosage automatique",
        text: "Nouveau jardin pour notre villa à Valbonne, avec mise en place d'un système d'arrosage connecté. L'équipe a été très professionnelle : respect des délais, propreté du chantier et très bons conseils sur les plantes peu gourmandes en eau. Notre facture d'eau a baissé de moitié.",
      },
      {
        author: "Jean-Marc R.",
        location: "Le Bar-sur-Loup",
        service: "Restauration de restanques",
        text: "Des restanques centenaires qui s'effondrant progressivement menaçaient mon oliveraie. L'équipe est intervenue rapidement avec une technique de pierre sèche traditionnelle. Le travail est soigné, solide et s'intègre parfaitement dans le paysage. Mon oliveraie est désormais sécurisée pour les prochaines décennies.",
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
