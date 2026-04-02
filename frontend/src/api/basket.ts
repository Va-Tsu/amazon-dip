import { request } from "./fetchClient";
import type { BasketItem } from "../types/product";

export async function getBasket(token: string): Promise<BasketItem[]> {
  return request('/api/cart', 'GET', undefined, token);
}

export async function addToBasket(productId: string, token: string): Promise<void> {
  return request(`/api/cart/add?productId=${productId}&quantity=1`, 'POST', undefined, token);
}

export async function removeFromBasket(productId: string, token: string): Promise<void> {
  return request(`/api/cart/remove/${productId}`, 'DELETE', undefined, token);
}