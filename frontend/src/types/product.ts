export type Product = {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  category: string;
  information: InformationItem[] | null;
  details: string | null;
  comments: Comment[] | null;
};

export type InformationItem = {
  label: string;
  value: string;
};

export type Comment = {
  id: number;
  userId: number;
  userName: string;
  content: string;
  rating: number; // 1 to 5
  date: string; // ISO format
};

export type BasketItem = {
  id: string;
}

export type Category = 'snacks' | 'meat' | 'dairy' | 'drinks' | 'sweets' | 'bakery' | 'seafood' | 'other' | null;

export type Country = 'Germany' | 'Italy' | 'France' | 'Japan' | 'USA' | 'Spain' | 'Switzerland' | 'Other' | null;

export type CardItemType = {
  id: string;
  title: string;
  brand: string;
  price: number;
  weight: string;
  photoUrl: string;
  category: Category;
  country: Country;
  discount: number;   // 0 если нет скидки, иначе процент например 20 = 20%
  isNew: boolean;
  createdAt: string;  // ISO формат "2024-03-15T10:30:00Z"
};


//#region addProduct 

export type AddProductRequest = {
  photo: File[];
  name: string;
  brand: string;
  category: string;
  description: string;
  weight: string;
  ingredients: string; //mb array?
  sku: string;
  country: string;
  conditions: string;
  exparaition: string;
  avaibality: boolean;
  price: number;
  sale: boolean;
  showPricePerUnit: boolean;
  costOfGood: number;
  profit: number;
  margin: number;
  params: InformationItem[];
}

//#endregion


//#region product card for seller
export type SellerCardItem = Pick<Product, "id" | "photoUrl" | "price" | "title">;
//#endregion