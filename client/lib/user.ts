import { apiServer } from './apiServer';

export type UserResponseDTO = {
  id: number;
  email: string;
  name?: string;
  role?: { code?: string };
};

export async function getMe() {
  return apiServer<UserResponseDTO>('auth/me');
}

