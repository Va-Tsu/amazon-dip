import type { SellerDashboard } from "../types/seller";
import { request } from "./fetchClient";

export function getSellerMe(token: string) {
  return request<SellerDashboard>(
    '/api/seller/me',
    'GET',
    undefined,
    token,
  );
}