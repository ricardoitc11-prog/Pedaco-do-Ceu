export type CategoryId = 'todos' | 'brownies' | 'copos' | 'morangos' | 'brigadeiros';

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  unit: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  ingredients: string[];
  highlightTag?: string;
  preparationNote?: string;
  servingSuggestion?: string;
  allergens?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  comment: string;
  favoriteItem: string;
  rating: number;
}
