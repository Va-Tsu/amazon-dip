//user auth

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  fullName: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  user: {
    id: number;
    email: string;
  };
};


// seller auth

export type RegisterSellerRequest = {
  //seller info
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  //bisness
  storeName: string;
  counry: string;
  phone: string;
  agreed: boolean;
}

export type LoginSellerRequest = {
  name: string;
  email: string;
  password: string;
  phone: string;
  agreed: boolean;
}

export type ResetSellerRequest = {
  email: string;
  phone: string;
}