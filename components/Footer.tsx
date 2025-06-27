import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Wrench } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Сервисный центр</h3>
                <p className="text-red-500 font-semibold">BOSCH Сочи</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Профессиональный ремонт бытовой техники Bosch в Сочи. 
              Опытные мастера, оригинальные запчасти, гарантия качества.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Наши услуги</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/remont-stiralnykh-mashin" className="hover:text-red-500 transition-colors">
                  Ремонт стиральных машин
                </Link>
              </li>
              <li>
                <Link href="/remont-sushilnykh-mashin" className="hover:text-red-500 transition-colors">
                  Ремонт сушильных машин
                </Link>
              </li>
              <li>
                <Link href="/remont-posudomoechnykh-mashin" className="hover:text-red-500 transition-colors">
                  Ремонт посудомоечных машин
                </Link>
              </li>
              <li>
                <Link href="/remont-kofemashin" className="hover:text-red-500 transition-colors">
                  Ремонт кофемашин
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-red-500" />
                <span>+7 (862) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-red-500" />
                <span>arm.businesss@yahoo.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-red-500" />
                <span>г. Сочи, ул. Навагинская 12</span>
              </div>
            </div>
          </div>

          {/* Working hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-red-500" />
                <span>24/7</span>
              </div>
              <p className="text-xs text-gray-400">
                Принимаем заявки с 10 до 20.
                Выезд мастера в течение 2 часов.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy;Сервисный центр Bosch является пост гарантийным (не авторизованным) сервисным центром. Торговые марки Bosch являются зарегистрированным товарными знаками компании правообладателя. Обозначения используется не с целью индивидуализации соответствующих услуг по ремонту, а с целью информирования потребителей о предоставляемых услугах в отношении техники правообладателя. Не является публичной офертой.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;