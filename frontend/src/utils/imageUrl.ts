import { BASE_URL } from "../api/fetchClient";

const BACKEND_URL = BASE_URL;
export function imgUrl(path?: string | null): string {
  if (!path) return '/imgs/placeholder.png';
  if (path.startsWith('http')) return path;
  return BACKEND_URL + path;
}