import { request } from './fetchClient';
import type { LoginRequest, RegisterRequest, AuthResponse, RegisterSellerRequest, LoginSellerRequest } from '../types/auth';

//#region auth

export function login(data: LoginRequest) {
  return request<AuthResponse>(
    '/api/user/login',
    'POST',
    data,
  );
}

export function register(data: RegisterRequest) {
  return request<AuthResponse>(
    '/api/user/register',
    'POST',
    data,
  );
}

export function logout(token: string) {
  return request<void>(
    '/api/user/logout',
    'POST',
    undefined,
    token,
  );
}

//#endregion

//#region selleracc
/*
  export function registerSeller(data: RegisterSellerRequest, token: string) {
    return request<void>(
      '/api/seller/register',
      'POST',
      data,
      token,
    );
  }
*/

  export function registerSeller(data: RegisterSellerRequest, token: string) {
    const params = new URLSearchParams();
    
    params.append('fullName', data.fullName);
    params.append('email', data.email);
    params.append('password', data.password);
    params.append('confirmedPassword', data.confirmedPassword);
    params.append('storeName', data.storeName);
    params.append('phoneNumber', data.phoneNumber);
    params.append('country', data.country);
    return request<void>(
      `/api/seller/register?${params.toString()}`,
      'POST',
      undefined,
      token
    );
    console.log(params);
  }
/*
  export function loginSeller(data: LoginSellerRequest) {
    return request<void>(
      '/api/seller/login',
      'POST',
      data,
    );
  }
*/
export async function loginSeller(data: LoginSellerRequest, token: string) {
  const params = new URLSearchParams();
  params.append('fullName', data.name);
  params.append('email', data.email);
  params.append('password', data.password);

  const response = await request<{ token: string }>(  // ← не void
    `/api/seller/login?${params.toString()}`,
    'POST',
    undefined,
    token
  );

  return response;  // не сохраняем здесь, сохраняем в компоненте
}
//#endregion

