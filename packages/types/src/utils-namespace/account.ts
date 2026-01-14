export type Account = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  card: {
    number: string;
    expiry: string;
    cvv: string;
  };
  billingAddress: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
};
export namespace Account {
  export type User = {
    id: string;
    name: string;
    email: string;
  };
  export type Card = {
    number: string;
    expiry: string;
    cvv: string;
  };
  export type BillingAddress = {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}
