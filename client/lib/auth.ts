import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

export type Session = {
  token: string;
  // You may extend with decoded claims if needed.
};

export function getSession(): Session | null {
  const cookieStore = cookies();
  const token = cookieStore.get('session')?.value;
  if (!token) return null;
  return { token };
}

export function requireSession(): Session {
  const session = getSession();
  if (!session) redirect('/login');
  return session;
}

export function clearSessionCookie() {
  const cookieStore = cookies();
  cookieStore.set('session', '', { httpOnly: true, path: '/', maxAge: 0 });
}
