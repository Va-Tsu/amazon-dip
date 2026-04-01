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

/*
export type AuthResponse = {
  token: string;
  user: {
    id: number;
    email: string;
  };
};

*/

export type AuthResponse = {
  token: string;
  expiration: string;
};


// seller auth

export type RegisterSellerRequest = {
  //seller info
  fullName: string;
  email: string;
  password: string;
  confirmedPassword: string;

  //bisness
  storeName: string;
  country: string;
  phoneNumber: string;
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