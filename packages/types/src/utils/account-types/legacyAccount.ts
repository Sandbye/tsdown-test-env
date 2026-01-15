// Old, does not have card info
export type LegacyAccount = {
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
