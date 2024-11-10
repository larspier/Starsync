import React from 'react';
import { Search, Filter, Star } from 'lucide-react';

export default function Professionals() {
  const professionals = [
    {
      id: 1,
      name: 'Ana García',
      role: 'Directora de Fotografía',
      rating: 4.8,
      projects: 45,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'Director de Cine',
      rating: 4.9,
      projects: 32,
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Marcos Torres',
      role: 'Técnico de Iluminación',
      rating: 4.4,
      projects: 12,
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // Add more professionals as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profesionales Destacados</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar profesionales..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filtrar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {professionals.map((professional) => (
          <div key={professional.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-full"
                  src={professional.image}
                  alt={professional.name}
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">{professional.name}</h2>
                  <p className="text-gray-600">{professional.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-2 text-gray-900">{professional.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{professional.projects} proyectos</span>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
                  Ver Perfil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
