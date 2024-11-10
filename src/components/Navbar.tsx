import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, LogOut, User } from 'lucide-react';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="mb-4 md:mb-0">
            <img
              src="https://larspier.com/assets/img/STARSYNC_LOGO.png"
              alt="StarSync"
              className="h-16"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </Link>
              {!isAuthenticated ? (
                <>
              <Link
                to="/profesionales"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Personas
              </Link>
              <Link
                to="/empresas"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Empresas
              </Link>
              <Link
                to="/servicios"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Servicios
              </Link>
                  <Link
                    to="/login"
                    className="text-gray-900 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/registro"
                    className="bg-orange-500 text-white hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Registrarse
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </Link>
                  <Link
                    to="/foros"
                    className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Foros
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  >
                    <LogOut size={18} />
                    Cerrar Sesión
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/profesionales"
              className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Profesionales
            </Link>
            <Link
              to="/empresas"
              className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Empresas
            </Link>
            <Link
              to="/servicios"
              className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Servicios
            </Link>
            <Link
              to="/foros"
              className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Foros
            </Link>
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/registro"
                  className="bg-orange-500 text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Registrarse
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-900 hover:text-orange-500 w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Cerrar Sesión
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
