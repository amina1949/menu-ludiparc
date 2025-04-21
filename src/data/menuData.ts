import { MenuData } from '../types/menu';

export const menuData: MenuData = {
  restaurantName: "La Carte du Ludiparc",
  sections: [
    {
      id: "boissons", 
      title: "BOISSON",
      items: [
        { name: "Thé a la menthe",  price: "12" },
        { name: "Café noir", accompaniments: "EAU 33CL", price: "15" },
        { name: "Café latte", accompaniments: "EAU 33CL", price: "18" },
        { name: "Chocolat chaud", accompaniments: "EAU 33CL", price: "20" },
        { name: "Eau 0,5cl", price: "7" },
        { name: "EAU 1,5 L", price: "12" },
        { name: "Jus D'ORANGE", price: "20" },
        { name: "Jus D'ORANGE FRAISE", price: "30" },
        { name: "Soda 33CL", price: "15" }
      ]
    },
    {
      id: "petit-déjeuner",
      title: "PETIT DEJ",
      items: [
        { name: "Mkila khlii aux oeufs", accompaniments: "hsoua", price: "45" },
        { name: "Mkila oeufs charcuterie / fromage", price: "40" },
        { name: "RGHIFA + HARCHA + fromage/ beurre + Miel/ Confiture", accompaniments: "THE a la menthe + HSOUA ", price: "35" },
        { name: "Pain grillé + fromage/ beurre + miel/ Confiture", accompaniments: "THE a la menthe + HSOUA ", price: "35" },
        { name: "OUMLETTE FROMAGE (2oeufs)", accompaniments: "garniture + PAIN", price: "30" },
        { name: "HRIRA + DATE + OUEF DURE + PAIN", price: "35" },
        { name: "HSSOUA + DATE", price: "15" },
        { name: "MIEL P", price: "5" },
        { name: "CONFITURE P", price: "5" },
        { name: "BEURRE P", price: "5" }
      ]
    },
    {
      id: "TAGINES",
      title: "TAGINES",
      items: [
        { name: "Tagine kefta sauce tomates oeuf", accompaniments: "Pain ", price: "65" },
        { name: "Tagine de poulet citorns confits deghmira marocaine", accompaniments: "Pain ", price: "60" },
        { name: "Tagine viande oignons caramelisé, pruneaux et raisins secs", accompaniments: "Pain ", price: "70" }
      ]
    },
    {
      id: "sandwich",
      title: "SANDWICH",
      items: [
        { name: "Sandwich merguez ", accompaniments: "FRITE", price: "45" },
        { name: "Sandwich Kefta ", accompaniments: "FRITE ", price: "50" },
        { name: "Sandwich cesar poulet", accompaniments: "FRITE ", price: "45" },
        { name: "Tacos Mixte", accompaniments: "FRITE", price: "55" },
        { name: "Frite", price: "15" }

      ]
    },
    {
      id: "salades",
      title: "SALADES ET ACCOMPAGNEMENTS",
      items: [
        { name: "TAKTOUKA", price: "20" },
        { name: "ZAALOUK", price: "20" },
        { name: "SALADE Russe", description: "Patte + Pomme de terre + carotte + Sauce", price: "35" },
        { name: "Salade Cesar", description: "laitue + Tomate cerise + Concombre + blanc de poulet + Fromage + sauce ", price: "45" }
      ]
    },
    {
      id: "boutique",
      title: "BOUTIQUE",
      items: [
        { name: "Briouate kefta", price: "25" },
        { name: "Brriouates Legumes", price: "25" },
        { name: "Briouates Fromage au Miel", price: "25" },
        { name: "Naimes aux Choix (Epinard/ Légumes)", price: "30" },
        { name: "Pastilla poulet individuel", price: "35" },
        { name: "Pastilla fruits de mer", price: "40" },
        { name: "macaron/piece", price: "7" },
        { name: "Amande Canelle", price: "30" },
        { name: "Amande Anis", price: "30" },
        { name: "Grains aux sésames caramélisés", price: "20" },
        { name: "Corné Fromage", price: "20" },
      ]
    }
  ]
};