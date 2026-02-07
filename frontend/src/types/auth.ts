export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  name: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  user: {
    id: number;
    email: string;
  };
};
