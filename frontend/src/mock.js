export const mockRestaurantData = {
  name: "La Mi Fa",
  description: "Restaurant gastronomique parisien",
  
  menu: {
    entrées: [
      {
        id: 1,
        name: "Pâté en croûte",
        description: "Pâté en croûte traditionnel, préparé selon notre recette artisanale",
        price: "12€"
      },
      {
        id: 2,
        name: "Gaspacho de betteraves au raifort",
        description: "Soupe froide de betteraves fraîches, relevée d'une pointe de raifort",
        price: "8€"
      },
      {
        id: 3,
        name: "Ravioles de légumes à la ricotta, crémeux anisé",
        description: "Délicates ravioles maison garnies de légumes de saison et ricotta, accompagnées d'un crémeux parfumé à l'anis",
        price: "11€"
      }
    ],
    
    plats: [
      {
        id: 4,
        name: "Risotto au foie gras du chef",
        description: "Risotto crémeux sublimé par les copeaux de foie gras de notre chef",
        price: "25€"
      },
      {
        id: 5,
        name: "Coquillettes aux champignons des sous bois et gouda à la truffe",
        description: "Pâtes artisanales accompagnées d'un mélange de champignons sauvages et gouda truffé",
        price: "18€"
      },
      {
        id: 6,
        name: "Joue de lotte, légumes de saison et émulsion d'écrevisses",
        description: "Joue de lotte fondante, légumes frais du marché et délicate émulsion d'écrevisses",
        price: "23€"
      }
    ],
    
    desserts: [
      {
        id: 7,
        name: "Crumble au chocolat blanc et son coulis de fruits rouges",
        description: "Crumble maison au chocolat blanc, accompagné d'un coulis de fruits rouges de saison",
        price: "9€"
      },
      {
        id: 8,
        name: "Cheesecake à l'orange",
        description: "Cheesecake onctueux parfumé aux zestes d'orange fraîche",
        price: "8€"
      },
      {
        id: 9,
        name: "Tarte tatin",
        description: "Tarte tatin traditionnelle aux pommes caramélisées, servie tiède",
        price: "9€"
      }
    ]
  },

  about: {
    title: "Notre Histoire",
    content: `Chez La Mi Fa, nous croyons que la cuisine est une histoire de **passion**, de **saison**, et de **belles matières premières**. C'est pourquoi nous travaillons chaque jour avec des produits frais, de saison et rigoureusement sélectionnés, issus autant que possible de producteurs locaux ou engagés dans une démarche de qualité.

Notre carte évolue au fil des semaines, au rythme des récoltes, des arrivages et de nos inspirations. Cela nous permet de vous proposer une **cuisine vivante**, **spontanée** et **savoureuse**, dans laquelle chaque plat raconte une saison, une envie, un moment.

La même attention est portée à notre carte des vins, pensée comme un véritable prolongement de notre cuisine. Nous mettons à l'honneur des vigneronnes et vignerons que nous aimons, choisis pour leur travail respectueux de la terre, leur approche artisanale et la personnalité unique de leurs cuvées. Du vin nature au classique bien fait, chaque bouteille a une histoire et un goût sincère.

Que vous veniez pour un **déjeuner sur le pouce**, un **dîner entre amis** ou un **moment en tête-à-tête**, La Mi Fa vous accueille dans une ambiance conviviale, généreuse et sans prétention — parce que bien manger, c'est avant tout un plaisir simple et partagé.`
  },

  contact: {
    address: "33 rue Pétion 75011 Paris",
    phone: "01 83 91 64 76",
    hours: {
      weekdays: "Du lundi au vendredi : 12h30/14h30 – 19h/23h",
      saturday: "Le samedi : 12h30/15h – 19h/23h"
    }
  },

  reservationForm: {
    fields: ['date', 'time', 'guests', 'name', 'email', 'phone', 'message']
  }
};

export default mockRestaurantData;