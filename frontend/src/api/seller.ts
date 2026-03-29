import type { Seller } from "../types/seller";
import { request } from "./fetchClient";

export function getSellerMe(token: string) {
  return request<Seller>(
    '/api/seller/me',
    'GET',
    undefined,
    token,
  );
}