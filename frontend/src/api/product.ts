/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AddProductRequest, CardItemType, ProductFull } from "../types/product";
import { request, requestWithFormData } from "./fetchClient";
/*
//import { requestWithFormData } from "./fetchClient";
export async function addProduct(productData: AddProductRequest, token?: string) {
  const formData = new FormData();

  const jsonData = {
    name: productData.name,
    brand: productData.brand,
    category: productData.category,
    description: productData.description,
    weight: productData.weight,
    ingredients: productData.ingredients,
    sku: productData.sku,
    country: productData.country,
    conditions: productData.conditions,
    exparaition: productData.exparaition,
    avaibality: productData.avaibality,
    price: productData.price,
    sale: productData.sale,
    showPricePerUnit: productData.showPricePerUnit,
    costOfGood: productData.costOfGood,
    profit: productData.profit,
    margin: productData.margin,
    params: productData.params,
  };

  formData.append('data', JSON.stringify(jsonData));

  productData.photo.forEach((file) => {
    formData.append('photos', file);
  });

  return requestWithFormData<{ success: boolean; productId: string }>(
    '/api/seller/create',
    'POST',
    formData,
    token,
  );
}
*/

/*
export async function addProduct(productData: AddProductRequest, token?: string) {
  const jsonData = {
    name: productData.name,
    brand: productData.brand,
    description: productData.description,
    sku: productData.sku,
    price: productData.price,
    weight: productData.weight ? parseFloat(productData.weight) : 0,
    ingredients: productData.ingredients,
    storageConditions: productData.conditions,
    expirationDate: productData.exparaition
      ? new Date(productData.exparaition).toISOString()
      : null,
    isActive: productData.avaibality,
    trackInventory: false,
    stockQuantity: 0,
    imageUrls: [] as string[],
    categoryId: productData.categoryId,
    countryId: productData.countryId,
  };

  return request<{ id: string }>(
    '/api/seller/create',
    'POST',
    jsonData,
    token,
  );
}
*/

export async function addProduct(productData: AddProductRequest, token?: string) {
  const formData = new FormData();

  formData.append('name', productData.name);
  formData.append('description', productData.description);
  formData.append('brand', productData.brand);
  formData.append('weight', productData.weight || '0');
  formData.append('price', String(productData.price));
  formData.append('categoryId', String(productData.categoryId ?? 1));
  formData.append('countryId', String(productData.countryId ?? 1));
  formData.append('sku', productData.sku);
  formData.append('trackInventory', 'false');
  formData.append('isActive', String(productData.avaibality));
  formData.append('isPublished', 'true');
  formData.append('status', '0');
  formData.append('ingridients', productData.ingredients); // опечатка бэкендера

  if (productData.conditions)
    formData.append('storageConditions', productData.conditions);

  if (productData.exparaition)
    formData.append('expirationDate', new Date(productData.exparaition).toISOString());

  if (productData.costOfGood)
    formData.append('costOfGoods', String(productData.costOfGood));

  productData.photo.forEach(file => {
    formData.append('images', file);
  });

  for (const [key, value] of formData.entries()) {
    console.log(`"${key}" =`, value);
  }

  return requestWithFormData<{ id: string }>(
    '/api/seller/create',
    'POST',
    formData,
    token,
  );
}

export async function getSellerProducts(token: string): Promise<ProductFull[]> {
  return request('/api/seller/products', 'GET', undefined, token);
}

export async function deleteProduct(id: string, token: string): Promise<void> {
  return request(`/api/seller/delete/${id}`, 'DELETE', undefined, token);
}

export type CategoryOption = { id: number; name: string; };
export type CountryOption = { id: number; name: string; code: string; };

export async function getCategories(): Promise<CategoryOption[]> {
  return request('/api/Category', 'GET');
}

export async function getCountries(): Promise<CountryOption[]> {
  return request('/api/Country', 'GET');
}

/*
function mapToCard(p: any): CardItemType {
  return {
    id: p.id,
    title: p.name,
    brand: p.brand,
    price: p.currentPrice ?? p.price,
    weight: p.weight?.toString() ?? "",
    photoUrl: p.images?.find((i: any) => i.isMain)?.url
      ?? p.images?.[0]?.url
      ?? "",
    category: p.category ?? "",
    country: p.country ?? "",
    discount: p.hasDiscount
      ? p.discounts?.[0]?.discountPersentage ?? 0
      : 0,
    isNew: true,
    createdAt: p.createdAt,
  };
}
*/

function mapToCard(p: any): CardItemType {
  const imageUrl = p.images?.find((i: any) => i.isMain)?.url
    ?? p.images?.[0]?.url
    ?? "";

  return {
    id: p.id,
    title: p.name,
    brand: p.brand,
    price: p.currentPrice ?? p.price,
    weight: p.weight?.toString() ?? "",
    photoUrl: imageUrl ? `http://localhost:5123${imageUrl}` : "",
    category: p.category ?? "",
    country: p.country ?? "",
    discount: p.hasDiscount ? p.discounts?.[0]?.discountPersentage ?? 0 : 0,
    isNew: true,
    createdAt: p.createdAt,
  };
}

export async function getNewProducts(): Promise<CardItemType[]> {
  const data = await request<any[]>('/api/products/new', 'GET');
  return data.map(mapToCard);
}

export async function getRecommendedProducts(): Promise<CardItemType[]> {
  const data = await request<{ products: any[] }>('/api/products/recommended', 'GET');
  console.log('raw products:', data);
  return data.products.map(mapToCard);
}

export async function getProducts(): Promise<CardItemType[]> {
  const data = await request<any[]>('/api/products', 'GET');
  console.log('raw products:', data);
  return data.map(mapToCard);
}

export async function getProductById(id: string): Promise<ProductFull> {
  const p = await request<any>(`/api/products/${id}`, 'GET');

  return {
    id: p.id,
    title: p.name,
    description: p.description ?? "",
    photoUrl: p.images?.find((i: any) => i.isMain)?.url
      ?? p.images?.[0]?.url
      ?? "",
    price: p.price,
    currentPrice: p.currentPrice ?? p.price,
    hasDiscount: p.hasDiscount ?? false,
    category: p.category?.name ?? "",
    brand: p.brand ?? "",
    weight: p.weight ?? 0,
    ingredients: p.ingridients ?? "",   // бэкенд: ingridients (опечатка)
    storageConditions: p.storageConditions ?? "",
    expirationDate: p.expirationDate ?? null,
    sku: p.sku ?? "",
    information: (p.parameters ?? []).map((param: any) => ({
      label: param.name,
      value: param.value,
    })),
    comments: (p.comments ?? [])
      .filter((c: any) => !c.isDeleted)
      .map((c: any) => ({
        id: c.id,
        userId: c.userId,
        userName: c.user?.fullName ?? c.user?.userName ?? "Anonymous",
        content: c.text,
        rating: c.rating,
        date: c.createdAt,
      })),
    images: (p.images ?? []).map((i: any) => ({
      url: i.url,
      isMain: i.isMain,
      sortOrder: i.sortOrder,
    })),
  };
}