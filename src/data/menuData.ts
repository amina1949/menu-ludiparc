import { MenuData } from '../types/menu';

export const menuData: MenuData = {
  restaurantName: "La Carte du Foundouk",
  sections: [
    {
      id: "boissons",
      title: "BOISSON",
      items: [
        { name: "Thé a la menthe", accompaniments: "EAU 33CL", price: "12" },
        { name: "Café noir", accompaniments: "EAU 33CL", price: "15" },
        { name: "Café latte", accompaniments: "EAU 33CL", price: "17" },
        { name: "Chocolat chaud", accompaniments: "EAU 33CL", price: "18" },
        { name: "Eau 0,5cl", price: "5" },
        { name: "EAU 1,5 L", price: "12" },
        { name: "Jus D'ORANGE", price: "17" },
        { name: "Jus D'ORANGE/ FRAISE", price: "22" },
        { name: "Soda 33CL", price: "15" }
      ]
    },
    {
      id: "petit-dej",
      title: "PETIT DEJ",
      items: [
        { name: "M'qilla khlii aux oeufs", accompaniments: "OLIVE + PAIN", price: "45" },
        { name: "M'qilla oeufs charcuterie / fromage", price: "40" },
        { name: "RGHIFA + HARCHA + fromage/ beurre + Miel/ Confiture", accompaniments: "THE a la menthe + HSOUA + EAU M", price: "35" },
        { name: "Pain grillé + fromage/ beurre + miel/ Confiture", accompaniments: "THE a la menthe + HSOUA + EAU M", price: "35" },
        { name: "OUMLETTE FROMAGE (3oeufs)", accompaniments: "garniture + PAIN", price: "25" },
        { name: "HRIRA + DATE + OUEF DURE + PAIN", price: "25" },
        { name: "HSSOUA + DATE", price: "15" },
        { name: "MIEL P", price: "5" },
        { name: "CONFITURE P", price: "5" },
        { name: "BEURRE P", price: "5" },
        { name: "HRICHA", price: "5" },
        { name: "RGHIFA", price: "5" }
      ]
    },
    {
      id: "dejeuner",
      title: "DEJEUNER",
      items: [
        { name: "Plat chauds", price: "", description: "Plats principaux" },
        { name: "Tagine kefta sauce tomates oeuf", accompaniments: "Pain + Eau", price: "55" },
        { name: "Tagine de poulet citorns confits deghmira marocaine", accompaniments: "Pain + Eau", price: "60" },
        { name: "Tagine viande oignons caramelisé, pruneaux et raisins secs", accompaniments: "Pain + Eau", price: "65" }
      ]
    },
    {
      id: "sandwich",
      title: "SANDWICH",
      items: [
        { name: "Sandwich merguez + (harissa)", accompaniments: "FRITE + limounade", price: "45" },
        { name: "Sandwich Kefta avec oignons caramelisées", accompaniments: "FRITE + limounade", price: "50" },
        { name: "Sandwich cesar poulet", accompaniments: "FRITE + limounade", price: "45" },
        { name: "Frite", price: "17" },
        { name: "Tacos Mixte", accompaniments: "Limounade / Eau 0,5L", price: "55" }
      ]
    },
    {
      id: "salades",
      title: "SALADES ET ACCOMPAGNEMENTS",
      items: [
        { name: "TAKTOUKA", price: "17" },
        { name: "ZAALOUK", price: "17" },
        { name: "SALADE Russe", description: "Patte + Pomme de terre + carotte + Souces", price: "35" },
        { name: "Salade Cesar", description: "laitue + Tomate cerise + Concombre + blanc de poulet + Fromage + sauces venigre", price: "35" }
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
        { name: "Pastilla poisson individuel", price: "40" },
        { name: "Gateau Beldi 5p (3 sale + 2 amande)", price: "20" },
        { name: "Macaron/P", price: "7" }
      ]
    }
  ]
};