import ServicePageLayout from '@/components/ServicePageLayout';
import OrderForm from '@/components/OrderForm';
import { CheckCircle, Phone, AlertCircle, Wrench, Clock, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ремонт сушильных машин Bosch в Сочи',
  description: 'Ремонт сушильных машин Bosch в Сочи. Выезд мастера, диагностика, замена запчастей. Профессиональный сервис с гарантией. Телефон: +7 (862) 123-45-67',
  keywords: 'ремонт сушильных машин Bosch Сочи, сервис сушилок Bosch, мастер по ремонту сушильных машин',
  openGraph: {
    title: 'Ремонт сушильных машин Bosch в Сочи - Сервисный центр',
    description: 'Качественный ремонт сушильных машин Bosch на дому в Сочи. Опытные мастера, оригинальные детали.',
  }
};

export default function RemontSushilnykhMashin() {
  const commonProblems = [
    'Не включается или не запускается',
    'Не сушит или плохо сушит белье',
    'Перегревается или не греет воздух',
    'Сильный шум при работе',
    'Не вращается барабан',
    'Засорился фильтр или система вентиляции',
    'Течет конденсат',
    'Ошибки на дисплее'
  ];

  const services = [
    { name: 'Диагностика неисправностей', price: 'Бесплатно' },
    { name: 'Чистка системы вентиляции', price: 'от 1500 ₽' },
    { name: 'Замена ТЭНа (нагревателя)', price: 'от 2800 ₽' },
    { name: 'Ремонт датчиков', price: 'от 2200 ₽' },
    { name: 'Замена подшипников барабана', price: 'от 4000 ₽' },
    { name: 'Ремонт электроники', price: 'от 3500 ₽' },
    { name: 'Чистка фильтров', price: 'от 800 ₽' },
    { name: 'Замена ремня привода', price: 'от 1800 ₽' }
  ];

  const breadcrumbs = [
    { label: 'Ремонт сушильных машин Bosch' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServicePageLayout 
        title="Ремонт сушильных машин Bosch в Сочи"
        breadcrumbs={breadcrumbs}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ремонт сушильных машин Bosch любой сложности
              </h2>
              <p className="text-gray-600 mb-6">
                Сушильные машины Bosch — это высокотехнологичная бытовая техника, которая требует 
                профессионального подхода к ремонту. Наши мастера имеют большой опыт работы с 
                конденсационными и тепловыми сушилками Bosch всех серий и моделей.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Оперативно</h3>
                  <p className="text-sm text-gray-600">Выезд в день обращения</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Гарантированно</h3>
                  <p className="text-sm text-gray-600">Письменная гарантия на работы</p>
                </div>
                <div className="text-center">
                  <Wrench className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Профессионально</h3>
                  <p className="text-sm text-gray-600">Сертифицированные мастера</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Особенности ремонта сушильных машин</h3>
                <p className="text-blue-800 text-sm">
                  Сушильные машины имеют сложную систему циркуляции воздуха и контроля влажности. 
                  Ремонт требует специальных знаний и инструментов для диагностики электронных 
                  датчиков и системы управления.
                </p>
              </div>
            </div>

            {/* Common problems */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Типичные неисправности сушильных машин Bosch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services and prices */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Стоимость ремонта сушильных машин
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-semibold text-red-600">{service.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Внимание:</strong> Цены указаны без учета стоимости запчастей. 
                  Точную стоимость ремонта можно узнать только после диагностики.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Call to action */}
            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Срочный ремонт</h3>
              <p className="text-sm text-red-100 mb-6">
                Не сушит белье? Звоните! Мастер приедет в течение 2 часов
              </p>
              <a 
                href="tel:+78621234567" 
                className="w-full bg-white text-red-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +7 (862) 123-45-67
              </a>
            </div>

            {/* Model support */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Обслуживаемые модели</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Bosch WTW серии (тепловые)</li>
                <li>• Bosch WTG серии (конденсационные)</li>
                <li>• Bosch WTR серии (с тепловым насосом)</li>
                <li>• Bosch WTH серии (гибридные)</li>
                <li>• Встраиваемые модели</li>
                <li>• Все остальные серии Bosch</li>
              </ul>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Почему мы?</h3>
              <ul className="space-y-3">
                {[
                  'Специализация на технике Bosch',
                  'Выезд на дом в удобное время',
                  'Диагностика за 30 минут',
                  'Склад оригинальных запчастей',
                  'Гарантия до 24 месяцев',
                  'Консультации после ремонта'
                ].map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ServicePageLayout>
    </div>
  );
}