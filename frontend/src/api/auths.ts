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
  export function registerSeller(data: RegisterSellerRequest, token: string) {
    return request<void>(
      '/api/seller/register',
      'POST',
      data,
      token,
    );
  }
  export function loginSeller(data: LoginSellerRequest) {
    return request<void>(
      '/api/seller/login',
      'POST',
      data,
    );
  }
//#endregion

