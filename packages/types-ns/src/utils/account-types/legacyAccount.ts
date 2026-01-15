// Old, does not have card info
export type LegacyAccount = {
  user: LegacyAccount.User;
  billingAddress: LegacyAccount.BillingAddress;
};

export namespace LegacyAccount {
  export type User = {
    id: string;
    name: string;
    email: string;
  };
  export type BillingAddress = {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}
