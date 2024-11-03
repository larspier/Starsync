export interface User {
  id: string;
  email: string;
  name: string;
  role: 'professional' | 'company';
  profileImage?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}