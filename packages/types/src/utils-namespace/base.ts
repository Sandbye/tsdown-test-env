// Fake types for testing purposes

import type { Order, Product } from "../utils/base";

export type Base = {
  product: {
    id: string;
    name: string;
    price: number;
    inStock: boolean;
  };

  order: {
    id: string;
    userId: string;
    productIds: string[];
    totalAmount: number;
  };

  productsList: Product[];

  ordersList: Order[];
};

export namespace Base {
  export type Product = {
    id: string;
    name: string;
    price: number;
    inStock: boolean;
  };

  export type Order = {
    id: string;
    userId: string;
    productIds: string[];
    totalAmount: number;
  };

  export type ProductsList = Product[];

  export type OrdersList = Order[];
}
