export type Default = {
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
