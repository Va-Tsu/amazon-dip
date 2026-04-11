import type { CardItemType, ProductFull } from "./product";
import type { SellerDashboard } from "./seller";
import type { User } from "./user";


//not full info about card
export const mockCards: CardItemType[] = [
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    title: "LINDOR PINK LIMITED EDITION",
    brand: "Lindt",
    price: 12.9,
    weight: "200g",
    photoUrl: "/imgs/img/testdata/lindorTestData.png",
    category: "sweets",
    country: "Switzerland",
    discount: 0,
    isNew: true,
    createdAt: "2024-03-15T10:30:00Z",
  },
  {
    id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    title: "Nutella Ferrero",
    brand: "Ferrero",
    price: 8.5,
    weight: "350g",
    photoUrl: "/imgs/img/testdata/kitTestData.png",
    category: "sweets",
    country: "Italy",
    discount: 10,
    isNew: false,
    createdAt: "2024-02-10T08:00:00Z",
  },
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    title: "Haribo Gold Bears",
    brand: "Haribo",
    price: 3.99,
    weight: "250g",
    photoUrl: "/imgs/img/testdata/cheesTestData.png",
    category: "snacks",
    country: "Germany",
    discount: 0,
    isNew: false,
    createdAt: "2024-01-05T12:00:00Z",
  },
  {
    id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    title: "Toblerone Swiss Chocolate",
    brand: "Toblerone",
    price: 6.49,
    weight: "150g",
    photoUrl: "/imgs/img/testdata/cotteTestData.png",
    category: "sweets",
    country: "Switzerland",
    discount: 15,
    isNew: true,
    createdAt: "2024-03-01T09:00:00Z",
  },
  {
    id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    title: "Pringles Original",
    brand: "Pringles",
    price: 4.29,
    weight: "165g",
    photoUrl: "/imgs/img/testdata/cotteTestData.png",
    category: "snacks",
    country: "USA",
    discount: 0,
    isNew: false,
    createdAt: "2024-02-20T14:00:00Z",
  },
];

//full info about card
export const mockProducts: ProductFull[] = [
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    title: "LINDOR PINK LIMITED EDITION",
    description: "Indulge in the elegance of Lindt LINDOR Pink Limited Edition — a refined selection of irresistibly smooth chocolate truffles with a delicate, creamy center. Each truffle is a masterpiece of craftsmanship, designed to melt in your mouth and deliver an unforgettable taste sensation.",
    photoUrl: "/imgs/img/testdata/lindorTestData.png",
    price: 12.9,
    category: "sweets",
    information: [
      { label: "Weight", value: "200g" },
      { label: "Brand", value: "Lindt" },
      { label: "Country of origin", value: "Switzerland" },
      { label: "Storage", value: "Store in a cool, dry place" },
      { label: "Expiration date", value: "12 months" },
      { label: "Availability", value: "In stock" },
    ],
    comments: [
      { id: "1", userId: "101", userName: "Anna K.", content: "Absolutely delicious!", rating: 5, date: "2024-03-15T10:30:00Z" },
      { id: "2", userId: "102", userName: "Max P.", content: "A bit sweet for me.", rating: 4, date: "2024-03-10T08:00:00Z" },
    ],
    currentPrice: 0,
    hasDiscount: false,
    brand: "",
    weight: 0,
    ingredients: "",
    storageConditions: "",
    expirationDate: null,
    sku: "",
    images: []
  },
];

//user
export const mockUser: User = {
  id: "1",
  seller: null,
  fullName: "User",
  email: "@user",
  imageUrl: "/imgs/icons/user/userAvatar.png"
}

//seller acc

export const mockSeller: SellerDashboard = {
  seller: {
    id: "1",
    storeName: "John's Premium Store",
    description: "Premium imported food from around the world.",
    imageUrl: "/imgs/icons/sellerAcc/ava.svg",
    balance: 2847.50,
    pandingBalance: 324.00,
    user: {
      fullName: "John Doe",
      email: "john@store.com",
      imageUrl: "/imgs/icons/sellerAcc/ava.svg",
    }
  },
  stats: {
    activeProductsCount: 12,
    newOrdersCount: 3,
    sells: 4675.80,
  },
  products: []
};