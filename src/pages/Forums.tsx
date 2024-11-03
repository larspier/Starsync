import React from 'react';
import { MessageSquare, TrendingUp, Users } from 'lucide-react';

export default function Forums() {
  const topics = [
    {
      id: 1,
      title: 'Tendencias en Cinematografía Digital 2024',
      category: 'Tecnología',
      replies: 45,
      views: 1200,
      lastActivity: '2h',
      author: {
        name: 'Miguel Ángel',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Consejos para Directores Novatos',
      category: 'Dirección',
      replies: 32,
      views: 890,
      lastActivity: '5h',
      author: {
        name: 'Laura Torres',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Foros de Discusión</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
          Nuevo Tema
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <MessageSquare className="h-8 w-8 text-orange-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-gray-600">Temas Activos</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-orange-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold">5,678</p>
              <p className="text-gray-600">Miembros</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-orange-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold">890</p>
              <p className="text-gray-600">Temas Nuevos Hoy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        {topics.map((topic, index) => (
          <div
            key={topic.id}
            className={`p-6 ${
              index !== topics.length - 1 ? 'border-b border-gray-200' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={topic.author.avatar}
                    alt={topic.author.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Por {topic.author.name} • {topic.lastActivity} atrás
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                  {topic.category}
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                {topic.replies} respuestas
              </div>
              <span className="mx-2">•</span>
              <div>{topic.views} vistas</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}