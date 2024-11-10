import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 hover:text-orange-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="https://larspier.com/assets/img/STARSYNC_LOGO.png"
              alt="StarSync"
              className="h-2"
            />
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/__starsync?igsh=anFrNWkyOGVpMzc4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-900 hover:text-orange-500"
            >
              <Instagram className="h-6 w-6 mr-2" />
              <span>Instagram</span>
            </a>
            <a
              href="tel:+573008866353"
              className="flex items-center text-gray-900  hover:text-orange-500"
            >
              <Phone className="h-6 w-6 mr-2" />
              <span>+57 300 886 6353</span>
            </a>
            <a
              href="mailto:contacto@starsync.art"
              className="flex items-center text-gray-900  hover:text-orange-500"
            >
              <Mail className="h-6 w-6 mr-2" />
              <span>contacto@starsync.art</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()}
            <a
              href="https://larspier.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-orange-500"
            >   Larspier.com.</a> Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
