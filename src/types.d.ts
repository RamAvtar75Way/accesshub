export type Role = 'ADMIN' | 'USER';

export interface User {
  name: string;
  email: string;
  role: Role;
}
