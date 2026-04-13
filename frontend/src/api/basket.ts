/* eslint-disable @typescript-eslint/no-explicit-any */
import { request } from "./fetchClient";
import type { BasketItem } from "../types/product";

export async function getBasket(token: string): Promise<BasketItem[]> {
  const data = await request<{ items: any[]; totalPrice: number }>(
    '/api/cart', 'GET', undefined, token
  );

  return Promise.all((data.items ?? []).map(async (i: any) => {
    const product = await request<any>(`/api/products/${i.productId}`, 'GET');
    const imageUrl = product.images?.find((img: any) => img.isMain)?.url
      ?? product.images?.[0]?.url
      ?? '';

    return {
      id: i.id,
      productId: i.productId,
      title: i.productName,
      price: i.price,
      quantity: i.quantity,
      photoUrl: imageUrl ? `http://localhost:5123${imageUrl}` : '',
    };
  }));
}

export async function addToBasket(productId: string, token: string): Promise<void> {
  return request(`/api/cart/add?productId=${productId}&quantity=1`, 'POST', undefined, token);
}

export async function removeFromBasket(productId: string, token: string): Promise<void> {
  return request(`/api/cart/remove/${productId}`, 'DELETE', undefined, token);
}
