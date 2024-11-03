import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Building2, Film, Camera, Users, MessageSquare } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            ¡Bienvenido, {user?.name}!
          </h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Perfil */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Mi Perfil</h3>
                    <p className="text-sm text-gray-500">Actualiza tu información profesional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyectos */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Film className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Mis Proyectos</h3>
                    <p className="text-sm text-gray-500">Gestiona tu portafolio</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Red */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Mi Red</h3>
                    <p className="text-sm text-gray-500">Conexiones y networking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mensajes */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Mensajes</h3>
                    <p className="text-sm text-gray-500">Bandeja de entrada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Oportunidades */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Building2 className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Oportunidades</h3>
                    <p className="text-sm text-gray-500">Ofertas y proyectos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Camera className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Portfolio</h3>
                    <p className="text-sm text-gray-500">Muestra tu trabajo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}