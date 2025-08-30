import { api } from './api';

export type UserResponseDTO = {
  id: number;
  email: string;
  name?: string;
  role?: { code?: string };
};

export async function getMe() {
  return api<UserResponseDTO>('auth/me');
}

