import React from 'react';
import { Camera, Film, Video, Monitor, Mic, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Alquiler de Equipos de Filmación',
      provider: 'CineRent Pro',
      rating: 4.8,
      reviews: 156,
      price: '',
      image: 'https://images.unsplash.com/photo-1589872307379-0ffdf9829123?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      icon: Camera,
    },
    {
      id: 2,
      title: 'Estudio de Grabación Profesional',
      provider: 'SoundStage Studios',
      rating: 4.9,
      reviews: 98,
      price: '',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      icon: Mic,
    },
  ];

  const categories = [
    { name: 'Equipos de Cámara', icon: Camera },
    { name: 'Producción', icon: Film },
    { name: 'Post-producción', icon: Video },
    { name: 'Estudios', icon: Monitor },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Servicios y Productos</h1>
 <p  className="mt-3 text-base text-gray-500">
  <span  className="text-xl  font-bold text-gray-900">StarSync</span> ofrece a sus miembros además de los beneficios de una Red Social especializada en el sector del Cine, Fotografía, Medios Audiocisuales y Videojuegos, 
  la oportunidad de intercambiar con cada uno de sus miembros personas o empresas, los servicios y productos que cada uno desarrolla en su negocio,
  permitiendo crear una amplia estructura de Networking única en su estilo
</p>
      <p  className="mt-3 text-base text-gray-500">
        Disfruta a Continuación de algunos de los productos destacados de nuestros miembros e ingresa para poder disfrutar de una experiencia de negocios de otro mundo. 
      </p>
      <h2 className="text-2xl font-bold text-gray-600 my-8">
  Los más destacados de nuestros miembros</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              key={index}
              className="flex flex-col items-center justify-center p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Icon className="h-8 w-8 text-orange-500 mb-2" />
              <span className="text-gray-900 font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-white text-gray-900">
                  {service.price}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h2>
                <service.icon className="h-6 w-6 text-orange-500" />
              </div>
              <p className="text-gray-600 mb-4">Proveedor: {service.provider}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-2 text-gray-900">{service.rating}</span>
                  <span className="ml-2 text-gray-500">
                    ({service.reviews} reseñas)
                  </span>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
