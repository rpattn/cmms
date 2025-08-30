import { cookies } from 'next/headers';
import { API_URL } from './env';

export async function api<T = unknown>(path: string, init: RequestInit = {}): Promise<T> {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    const token = cookies().get('session')?.value;
    const headers: Record<string, string> = {
      Accept: 'application/json',
      ...(init.headers as Record<string, string>)
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    if (init.body && !headers['Content-Type']) headers['Content-Type'] = 'application/json';
    const res = await fetch(API_URL + path, { ...init, headers, cache: 'no-store' });
    if (!res.ok) throw new Error(await res.text());
    return (await res.json()) as T;
  }
  // Client: go through Next proxy
  const url = '/api/backend/' + path.replace(/^\/+/, '');
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(await res.text());
  return (await res.json()) as T;
}

