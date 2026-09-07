export interface ConcessionItem {
  name: string;
  price: number;
  description: string;
  category: ConcessionCategory;
  image: string;
}

export type ConcessionCategory = 'popcorn' | 'drinks' | 'snacks' | 'combos';

export interface CartItem {
  item: ConcessionItem;
  qty: number;
}

export interface GiftCardAmount {
  value: number;
  label: string;
  sub?: string;
  popular: boolean;
}

export interface GiftCardType {
  value: string;
  label: string;
  description: string;
  icon: string;
}