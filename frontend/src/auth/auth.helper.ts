export function isAuthenticated(): boolean {
  return Boolean(localStorage.getItem('token'));
}

export function logout() {
  localStorage.removeItem('token');
}