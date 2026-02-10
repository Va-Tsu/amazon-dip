import { request } from './fetchClient';
import type { LoginRequest, RegisterRequest, AuthResponse } from '../types/auth';

// Fake API functions for demonstration purposes. Replace with real API calls.

async function fakeRegister(data: RegisterRequest) {
  console.log('[FAKE REGISTER]', data);

  return new Promise<{
    token: string;
    user: { id: number; email: string };
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'FAKE_JWT_TOKEN',
        user: {
          id: 1,
          email: data.email,
        },
      });
    }, 500);
  });
}


// Real API calls would look something like this:

export function login(data: LoginRequest) {
  return request<AuthResponse>(
    '/api/user/login',
    'POST',
    data,
  );
}

export function realRegister(data: RegisterRequest) {
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


// toggle switch

const USE_FAKE_API = false;

export function register(data: RegisterRequest) {
  return USE_FAKE_API
    ? fakeRegister(data)
    : realRegister(data);
}