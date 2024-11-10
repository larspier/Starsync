export type UserRole = 'admin' | 'professional' | 'company';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profileImage?: string;
  bio?: string;
  location?: string;
  website?: string;
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  role: Exclude<UserRole, 'admin'>;
}

export interface AuthResponse {
  user: User;
  token: string;
}
