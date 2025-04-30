
export type ProductCategory = 'supercar' | 'luxurycar' | 'superbike';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  description: string;
  specs: {
    engine?: string;
    power?: string;
    torque?: string;
    topSpeed?: string;
    acceleration?: string;
    transmission?: string;
    weight?: string;
  };
  images: string[];
  featured?: boolean;
  new?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type ThemeMode = 'light' | 'dark';
