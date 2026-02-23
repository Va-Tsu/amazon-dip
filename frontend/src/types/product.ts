export type Product = {
  id: number;
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