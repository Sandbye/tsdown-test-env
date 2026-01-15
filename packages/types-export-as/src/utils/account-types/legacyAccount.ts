// Old, does not have card info
export type Legacy = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  billingAddress: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
};
