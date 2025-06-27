'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin, Wrench, ChevronDown } from 'lucide-react';
import QuickOrderModal from './QuickOrderModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: 'Ремонт стиральных машин', href: '/remont-stiralnykh-mashin' },
    { name: 'Ремонт сушильных машин', href: '/remont-sushilnykh-mashin' },
    { name: 'Ремонт посудомоечных машин', href: '/remont-posudomoechnykh-mashin' },
    { name: 'Ремонт кофемашин', href: '/remont-kofemashin' },
    { name: 'Ремонт холодильников', href: '/remont-kholodilnikov' },
  ];

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Контакты', href: '/kontakty' },
  ];

  const openQuickOrder = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="border-b border-gray-100 py-2">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-red-600" />
                  <span>Сочи, ул. Навагинская 12</span>
                </div>
                <div className="hidden md:flex items-center">
                  <Phone className="h-4 w-4 mr-1 text-red-600" />
                  <span>+7 (862) 123-45-67</span>
                </div>
              </div>
              <div className="text-red-600 font-semibold">
                Работаем 24/7
              </div>
            </div>
          </div>

          {/* Main header */}
          <div className="py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="bg-red-600 p-3 rounded-lg" style={{color: "#fff", fonrWeight: 600}}>
                  BOSCH
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Сервисный центр
                  </h1>
                </div>
              </Link>

              {/* Desktop menu */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-red-600 ${
                      pathname === item.href
                        ? 'text-red-600 border-b-2 border-red-600 pb-1'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Services dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                    Услуги
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="absolute top-3 left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={openQuickOrder}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Быстрый заказ
                </button>
              </nav>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-red-600 ${
                      pathname === item.href ? 'text-red-600' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Услуги:</p>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-700 hover:text-red-600 transition-colors py-1 pl-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                
                <button
                  onClick={openQuickOrder}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                >
                  Быстрый заказ
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <QuickOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;