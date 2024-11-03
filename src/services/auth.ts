import { query } from '../lib/db';
import { User } from '../types/auth';

export async function registerUser(userData: Omit<User, 'id'>) {
  try {
    const result = await query(
      'INSERT INTO users (email, name, role) VALUES (?, ?, ?)',
      [userData.email, userData.name, userData.role]
    );
    return result;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const users = await query(
      'SELECT id, email, name, role FROM users WHERE email = ? LIMIT 1',
      [email]
    );
    return users[0] as User | undefined;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}