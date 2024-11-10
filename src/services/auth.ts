import type { User, LoginCredentials, RegisterData, AuthResponse } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function registerUser(userData: RegisterData): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return response.json();
  } catch (error) {
    console.error('Error registering user:', error);
    throw new Error('Registration failed');
  }
}

export async function loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    return response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Login failed');
  }
}

export async function getCurrentUser(): Promise<User> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get user data');
    }

    return response.json();
  } catch (error) {
    throw new Error('Failed to get current user');
  }
}
