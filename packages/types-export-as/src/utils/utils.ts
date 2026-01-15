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
