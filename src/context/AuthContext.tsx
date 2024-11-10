import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User, AuthState, LoginCredentials, RegisterData } from '../types/auth';
import { loginUser, registerUser, getCurrentUser } from '../services/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isAdmin: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getCurrentUser()
        .then(user => {
          setAuthState({
            user,
            isAuthenticated: true,
            isAdmin: user.role === 'admin'
          });
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      const { user, token } = await loginUser(credentials);
      localStorage.setItem('token', token);
      setAuthState({
        user,
        isAuthenticated: true,
        isAdmin: user.role === 'admin'
      });
      navigate('/dashboard');
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const user = await registerUser(data);
      navigate('/login');
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isAdmin: false
    });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
