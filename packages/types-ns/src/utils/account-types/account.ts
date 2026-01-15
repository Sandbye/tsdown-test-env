export type Account = {
  user: Account.User;
  card: Account.Card;
  billingAddress: Account.BillingAddress;
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
