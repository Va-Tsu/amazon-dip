export type Seller = {
  id: number;
  name: string;
  storeName: string;
  email: string;
  phone: string;
  country: string;
  description: string | null;
  logoUrl: string | null;
  balance: number;
  sells: number;
  pending: number;
};

