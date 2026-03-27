import type { User } from "../types/user";
import { request } from "./fetchClient";

export function getMe(token: string) {
  return request<User>(
    '/api/user/me',
    'GET',
    undefined,
    token,
  );
}