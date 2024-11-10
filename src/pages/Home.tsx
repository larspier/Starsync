import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Camera, Users, Briefcase, Award, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://ficcifestival.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-9.58.22-AM-768x512.jpeg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.3'
          }}
        />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Tu red profesional en la</span>
                  <span className="block text-orange-500">industria del entretenimiento</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Conecta con profesionales del cine, televisión y videojuegos. Encuentra oportunidades, muestra tu trabajo y haz crecer tu carrera.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/registro"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10"
                    >
                      Únete Ahora
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/profesionales"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Explorar Perfiles
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

       {/* Features Section */}
      <div className="py-12 bg-gray-900 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.1'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center relative z-10">
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase"></h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Todo lo que necesitas para brillar en la industria
            </p>
          </div>

          <div className="mt-10 relative z-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Networking Profesional</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Conecta con otros profesionales y empresas del sector.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                  <Film className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Portafolio Digital</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Muestra tus mejores trabajos y proyectos.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                  <Briefcase className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Oportunidades Laborales</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Encuentra proyectos y ofertas de trabajo.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Capacitación</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Accede a cursos y recursos educativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">¿Listo para comenzar?</span>
            <span className="block text-black">Únete a la comunidad hoy mismo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/registro"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white hover:bg-gray-50"
              >
                Crear Cuenta
              </Link>
            </div>
          </div>
        </div>        
      </div>

      {/* Noticias section*/}
            <div className="bg-white py-12 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Noticias</h2>
                        <p className="mt-2 text-lg/8 text-gray-600">Aprenda a Mejorar su Negocio con nuestras publicaciones. </p>
                    </div>
                    <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 border-t border-gray-200 pt-4 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                      
                        <article className="flex max-w-xl flex-col items-start justify-between">
                           <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                    alt="card-image" />
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2024-11-06" className="text-gray-500">Nov 6, 2024</time>
                                <a href="#"
                                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Psicologia</a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Las mejores canciones para soltar la rabia contenida
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Escuchar música es una gran forma de procesar las emociones y 
                                  el enfado no es ninguna excepción. Hay ocasiones en las que todo lo que necesitamos es berrear al ritmo de nuestras 
                                  canciones preferidas para dar rienda suelta a la rabia 
                                  y quedarnos bien a gustito. Como puede ser una experiencia de lo más liberadora.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img
                                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1ndWTf.img?w=32&h=32&q=60&m=6&f=png&u=t?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                                <div className="text-sm/6">
                                    <p className="font-semibold text-gray-900">
                                        <a href="http://starsinsider.com/">
                                            <span className="absolute inset-0"></span>
                                            Historia de Stars Insider 
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </article>
                      
                        <article className="flex max-w-xl flex-col items-start justify-between">
                          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                    alt="card-image" />
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                <a href="#"
                                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Boost your conversion rate
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Illo sint voluptas. Error
                                    voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo
                                    necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.
                                    Iusto corrupti dicta.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                                <div className="text-sm/6">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            Michael Foster
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </article>

                      
                        <article className="flex max-w-xl flex-col items-start justify-between">
                          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                    alt="card-image" />
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                                <a href="#"
                                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Boost your conversion rate
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Illo sint voluptas. Error
                                    voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo
                                    necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.
                                    Iusto corrupti dicta.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                                <div className="text-sm/6">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            Michael Foster
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </article>

                        
                    </div>
                </div>
            </div>
      
    </div>
  );
}
