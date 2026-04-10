import type { AddProductRequest, Product } from "../types/product";
import { request } from "./fetchClient";
//import { requestWithFormData } from "./fetchClient";
/*
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

export async function getSellerProducts(token: string): Promise<Product[]> {
  return request('/api/seller/products', 'GET', undefined, token);
}

export async function deleteProduct(id: string, token: string): Promise<void> {
  return request(`/api/seller/products/${id}`, 'DELETE', undefined, token);
}

export type CategoryOption = { id: number; name: string; };
export type CountryOption = { id: number; name: string; code: string; };

export async function getCategories(): Promise<CategoryOption[]> {
  return request('/api/Category', 'GET');
}

export async function getCountries(): Promise<CountryOption[]> {
  return request('/api/Country', 'GET');
}