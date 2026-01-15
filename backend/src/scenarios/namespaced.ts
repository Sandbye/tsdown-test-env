import type { TypesNS as Types } from "@repo/types-ns";

const account: Types.Account & {
  orders: Types.Utils.OrdersList;
  products: Types.Utils.ProductsList;
} = {
  user: {
    id: "1",
    name: "John Doe",
    email: "john-doe@gmail.com",
  },
  card: {
    number: "1234 5678 9012 3456",
    expiry: "12/24",
    cvv: "123",
  },
  billingAddress: {
    street: "123 Main St",
    city: "Anytown",
    postalCode: "12345",
    country: "USA",
  },
  orders: [
    {
      id: "order-1",
      userId: "1",
      productIds: ["prod-1", "prod-2"],
      totalAmount: 99.99,
    },
  ],
  products: [
    {
      id: "prod-1",
      name: "Product 1",
      price: 49.99,
      inStock: true,
    },
    {
      id: "prod-2",
      name: "Product 2",
      price: 29.99,
      inStock: false,
    },
  ],
};
