import type { AddProductRequest, Product } from "../types/product";
import { request, requestWithFormData } from "./fetchClient";

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
    '/api/products',
    'POST',
    formData,
    token,
  );
}

export async function getSellerProducts(token: string): Promise<Product[]> {
  return request('/api/seller/products', 'GET', undefined, token);
}

export async function deleteProduct(id: string, token: string): Promise<void> {
  return request(`/api/products/${id}`, 'DELETE', undefined, token);
}