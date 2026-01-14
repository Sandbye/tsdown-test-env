export { default as MyButton } from "./MyButton.svelte";
import type { Types, TypesNS } from "@repo/types";
export const account: Types.Account & {
  orders: Types.OrdersList;
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
};

export const accountNS: TypesNS.Account & {
  orders: TypesNS.Base.OrdersList;
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
};
