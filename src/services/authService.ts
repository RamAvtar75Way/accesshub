import type { Role, User } from '../types';

const USERS_KEY = 'accesshub_users';
const SESSION_KEY = 'accesshub_session';

interface StoredUser {
  name: string;
  email: string;
  password: string;
  role: Role;
}

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function signUp(user: StoredUser): { ok: true } | { ok: false; error: string } {
  const users = readUsers();
  if (users.find((u) => u.email.toLowerCase() === user.email.toLowerCase())) {
    return { ok: false, error: 'Email already registered' };
  }

  users.push(user);
  writeUsers(users);
  return { ok: true };
}

export function findUser(email: string): StoredUser | undefined {
  const users = readUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function loginWithStored(email: string, password: string): { ok: true; user: User } | { ok: false; error: string } {
  const found = findUser(email);
  if (!found) return { ok: false, error: 'No user with this email' };
  if (found.password !== password) return { ok: false, error: 'Invalid credentials' };

  const sessionUser: User = { name: found.name, email: found.email, role: found.role };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
  return { ok: true, user: sessionUser };
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession(): User | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function listUsers(): Omit<StoredUser, 'password'>[] {
  return readUsers().map(({ password, ...rest }) => rest);
}
