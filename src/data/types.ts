
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: Category;
  tags: string[];
  artisan: string;
  materials: string[];
  dimensions?: string;
  featured?: boolean;
  newArrival?: boolean;
  inStock: boolean;
}

export enum Category {
  HomeDecor = "home-decor",
  Accessories = "accessories",
  Kitchen = "kitchen",
  Textile = "textile",
  Jewelry = "jewelry"
}

export interface Artisan {
  id: string;
  name: string;
  location: string;
  story: string;
  image: string;
}
