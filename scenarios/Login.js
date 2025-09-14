import http from 'k6/http';
import { check } from 'k6';

export function login(baseUrl, user) {
  const res = http.post(`${baseUrl}/auth`, JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'login succeeded': (r) => r.status === 200 && r.json('token') });
}
