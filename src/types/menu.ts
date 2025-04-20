export interface MenuItem {
  name: string;
  description?: string;
  price: string | number;
  priceName?: string;
  accompaniments?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface MenuData {
  restaurantName: string;
  sections: MenuSection[];
}