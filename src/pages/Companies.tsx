import React from 'react';
import { Building2, MapPin, Users, Briefcase } from 'lucide-react';

export default function Companies() {
  const companies = [
    {
      id: 1,
      name: 'Producciones Cinematográficas Aurora',
      type: 'Productora de Cine',
      location: 'Madrid, España',
      employees: '50-100',
      projects: 25,
      image: 'https://images.unsplash.com/photo-1496559249665-c7e2874707ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      openPositions: 3,
    },
    {
      id: 2,
      name: 'Digital Arts Studio',
      type: 'Estudio de Animación',
      location: 'Barcelona, España',
      employees: '100-200',
      projects: 40,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      openPositions: 5,
    },
    {
      id: 3,
      name: 'Larspier.com',
      type: 'Empresa de Desarrollo de Software',
      location: 'Barranquilla, Colombia',
      employees: '50-100',
      projects: 240,
      image: 'https://larspier.com/assets/img/logo.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=4200q=80',
      openPositions: 7,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Empresas del Sector</h1>
        <div className="flex space-x-4">
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:ring-orange-500 focus:border-orange-500">
            <option>Todas las categorías</option>
            <option>Productoras</option>
            <option>Estudios</option>
            <option>Distribuidoras</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:ring-orange-500 focus:border-orange-500">
            <option>Todas las ubicaciones</option>
            <option>Madrid</option>
            <option>Barcelona</option>
            <option>Valencia</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={company.image}
                  alt={company.name}
                />
              </div>
              <div className="p-8 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {company.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{company.type}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {company.openPositions} vacantes
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-orange-500" />
                    {company.employees} empleados
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-5 w-5 mr-2 text-orange-500" />
                    {company.projects} proyectos
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                    Ver Perfil
                  </button>
                  <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-50">
                    Seguir Empresa
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
