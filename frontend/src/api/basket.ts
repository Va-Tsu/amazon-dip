import { request } from "./fetchClient";
import type { BasketItem } from "../types/product";

export async function getBasket(token: string): Promise<BasketItem[]> {
  return request('/api/basket', 'GET', undefined, token);
}

export async function addToBasket(productId: number, token: string): Promise<void> {
  return request('/api/basket', 'POST', { productId }, token);
}

export async function removeFromBasket(productId: number, token: string): Promise<void> {
  return request(`/api/basket/${productId}`, 'DELETE', undefined, token);
}