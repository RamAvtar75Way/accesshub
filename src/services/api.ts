import type { User } from '../types';

export const loginApi = async (email: string, role: 'ADMIN' | 'USER'): Promise<User> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        name: email.split('@')[0],
        email,
        role,
      });
    }, 500)
  );
};
