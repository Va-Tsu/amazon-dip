/*
export type Seller = {
  id: string;
  name: string;
  storeName: string;
  email: string;
  phone: string;
  country: string;
  description: string | null;
  imageUrl: string;
  balance: number;
  sells: number;
  pending: number;
};

*/

export type SellerDashboard = {
  seller: {
    id: string;
    storeName: string;
    description: string | null;
    imageUrl: string;
    balance: number;
    pandingBalance: number;
    user: {
      fullName: string;
      email: string;
      imageUrl: string | null;
    } | null;
  };
  stats: {
    activeProductsCount: number;
    newOrdersCount: number;
    sells: number;
  };
  products: {
    id: string;
    name: string;
    price: number;
    mainImage: string | null;
  }[];
};