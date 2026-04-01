import type { CardItemType } from "./product";
import type { Product } from "./product";
import type { Seller } from "./seller";
import type { User } from "./user";


//not full info about card
export const mockCards: CardItemType[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
export const mockProducts: Product[] = [
  {
    id: 1,
    title: "LINDOR PINK LIMITED EDITION",
    description: "Indulge in the elegance of Lindt LINDOR Pink Limited Edition — a refined selection of irresistibly smooth chocolate truffles with a delicate, creamy center.",
    photoUrl: "/imgs/img/testdata/lindorTestData.png",
    price: 12.9,
    category: "sweets",
    details: "Each truffle is a masterpiece of craftsmanship, designed to melt in your mouth and deliver an unforgettable taste sensation.",
    information: [
      { label: "Weight", value: "200g" },
      { label: "Brand", value: "Lindt" },
      { label: "Country of origin", value: "Switzerland" },
      { label: "Storage", value: "Store in a cool, dry place" },
      { label: "Expiration date", value: "12 months" },
      { label: "Availability", value: "In stock" },
    ],
    comments: [
      { id: 1, userId: 101, userName: "Anna K.", content: "Absolutely delicious!", rating: 5, date: "2024-03-15T10:30:00Z" },
      { id: 2, userId: 102, userName: "Max P.", content: "A bit sweet for me.", rating: 4, date: "2024-03-10T08:00:00Z" },
    ],
  },
  {
    id: 2,
    title: "Nutella Ferrero",
    description: "The original hazelnut spread with cocoa. Perfect for breakfast or a snack anytime of the day.",
    photoUrl: "/imgs/img/testdata/kitTestData.png",
    price: 8.5,
    category: "sweets",
    details: "Made with quality ingredients including roasted hazelnuts, skim milk and cocoa.",
    information: [
      { label: "Weight", value: "350g" },
      { label: "Brand", value: "Ferrero" },
      { label: "Country of origin", value: "Italy" },
      { label: "Storage", value: "Store at room temperature" },
      { label: "Expiration date", value: "18 months" },
      { label: "Availability", value: "In stock" },
    ],
    comments: [
      { id: 3, userId: 103, userName: "Sofia R.", content: "Classic! Love it on toast.", rating: 5, date: "2024-02-12T09:00:00Z" },
    ],
  },
  {
    id: 3,
    title: "Haribo Gold Bears",
    description: "The world famous gummy bears. A fruity treat loved by kids and adults alike.",
    photoUrl: "/imgs/img/testdata/kitTestData.png",
    price: 3.99,
    category: "snacks",
    details: "Haribo Gold Bears come in 5 fruity flavours: raspberry, orange, strawberry, pineapple and lemon.",
    information: [
      { label: "Weight", value: "250g" },
      { label: "Brand", value: "Haribo" },
      { label: "Country of origin", value: "Germany" },
      { label: "Storage", value: "Store in a cool, dry place" },
      { label: "Expiration date", value: "24 months" },
      { label: "Availability", value: "In stock" },
    ],
    comments: [
      { id: 4, userId: 104, userName: "Tom B.", content: "My kids love these!", rating: 5, date: "2024-01-20T11:00:00Z" },
      { id: 5, userId: 105, userName: "Lisa M.", content: "Great taste, good price.", rating: 4, date: "2024-01-15T14:00:00Z" },
    ],
  },
  {
    id: 4,
    title: "Toblerone Swiss Chocolate",
    description: "Iconic Swiss chocolate with honey and almond nougat in the distinctive triangular shape.",
    photoUrl: "/imgs/img/testdata/lindorTestData.png",
    price: 6.49,
    category: "sweets",
    details: "Toblerone is made with fine Swiss chocolate, fresh Alpine milk and pure honey.",
    information: [
      { label: "Weight", value: "150g" },
      { label: "Brand", value: "Toblerone" },
      { label: "Country of origin", value: "Switzerland" },
      { label: "Storage", value: "Store in a cool, dry place" },
      { label: "Expiration date", value: "12 months" },
      { label: "Availability", value: "In stock" },
    ],
    comments: [
      { id: 6, userId: 106, userName: "Elena V.", content: "Best chocolate ever!", rating: 5, date: "2024-03-05T10:00:00Z" },
    ],
  },
  {
    id: 5,
    title: "Pringles Original",
    description: "The original saddle-shaped potato crisps. Once you pop you can't stop.",
    photoUrl: "/imgs/img/testdata/cotteTestData.png",
    price: 4.29,
    category: "snacks",
    details: "Pringles are made from dehydrated potatoes and come in a signature resealable can to keep them fresh.",
    information: [
      { label: "Weight", value: "165g" },
      { label: "Brand", value: "Pringles" },
      { label: "Country of origin", value: "USA" },
      { label: "Storage", value: "Store in a cool, dry place" },
      { label: "Expiration date", value: "12 months" },
      { label: "Availability", value: "In stock" },
    ],
    comments: [
      { id: 7, userId: 107, userName: "Jake S.", content: "Can't stop eating them!", rating: 5, date: "2024-02-25T16:00:00Z" },
      { id: 8, userId: 108, userName: "Nina W.", content: "Good but a bit salty.", rating: 3, date: "2024-02-18T12:00:00Z" },
    ],
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

export const mockSeller: Seller = {
  id: 1,
  name: "john_store",
  storeName: "John's Premium Store",
  email: "john@store.com",
  phone: "+1 (555) 123-4567",
  country: "USA",
  description: "Premium imported food from around the world.",
  logoUrl: "/imgs/icons/sellerAcc/ava.svg",
  balance: 2847.50,
  sells: 4675.80,
  pending: 324.00,
};
