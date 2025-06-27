import ServicePageLayout from '@/components/ServicePageLayout';
import OrderForm from '@/components/OrderForm';
import { CheckCircle, Phone, AlertCircle, Wrench, Clock, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ремонт холодильников Bosch в Сочи',
  description: 'Ремонт холодильников Bosch в Сочи на дому. Профессиональная диагностика, замена компрессора, заправка фреоном. Гарантия качества. Вызов мастера: +7 (862) 123-45-67',
  keywords: 'ремонт холодильников Bosch Сочи, сервис холодильников Bosch, мастер по ремонту холодильников, замена компрессора',
  openGraph: {
    title: 'Ремонт холодильников Bosch в Сочи - Сервисный центр',
    description: 'Быстрый и надежный ремонт холодильников Bosch на дому. Опытные мастера, оригинальные запчасти, гарантия до 2 лет.',
  }
};

export default function RemontKholodilnikov() {
  const commonProblems = [
    'Не включается или не охлаждает',
    'Сильно шумит при работе',
    'Течет вода внутри или снаружи',
    'Не морозит морозильная камера',
    'Постоянно работает компрессор',
    'Образуется лед в холодильной камере',
    'Не работает подсветка',
    'Плохо закрывается дверца'
  ];

  const services = [
    { name: 'Диагностика неисправностей', price: 'Бесплатно' },
    { name: 'Замена компрессора', price: 'от 4500 ₽' },
    { name: 'Заправка фреоном', price: 'от 2800 ₽' },
    { name: 'Замена термостата', price: 'от 2200 ₽' },
    { name: 'Ремонт системы No Frost', price: 'от 3200 ₽' },
    { name: 'Замена уплотнителя двери', price: 'от 1800 ₽' },
    { name: 'Ремонт электронного модуля', price: 'от 3800 ₽' },
    { name: 'Чистка дренажной системы', price: 'от 1200 ₽' }
  ];

  const breadcrumbs = [
    { label: 'Ремонт холодильников Bosch' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServicePageLayout 
        title="Ремонт холодильников Bosch в Сочи"
        breadcrumbs={breadcrumbs}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Профессиональный ремонт холодильников Bosch
              </h2>
              <p className="text-gray-600 mb-6">
                Холодильники Bosch известны своей надежностью и долговечностью, но даже самая 
                качественная техника может выйти из строя. Наш сервисный центр специализируется 
                на ремонте холодильников Bosch всех моделей: от компактных однокамерных до 
                больших Side-by-Side с системой No Frost.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Быстро</h3>
                  <p className="text-sm text-gray-600">Выезд мастера в течение 2 часов</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Надежно</h3>
                  <p className="text-sm text-gray-600">Гарантия на ремонт до 2 лет</p>
                </div>
                <div className="text-center">
                  <Wrench className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Качественно</h3>
                  <p className="text-sm text-gray-600">Оригинальные запчасти Bosch</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Особенности ремонта холодильников Bosch</h3>
                <p className="text-blue-800 text-sm">
                  Холодильники Bosch оснащены современными системами управления и охлаждения. 
                  Для качественного ремонта требуется специальное оборудование для диагностики 
                  электроники, заправки фреоном и проверки герметичности системы.
                </p>
              </div>
            </div>

            {/* Common problems */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Основные неисправности холодильников Bosch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{problem}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2">Признаки неисправности</h4>
                <p className="text-amber-800 text-sm">
                  Если холодильник стал плохо охлаждать, появились посторонние звуки или 
                  увеличился расход электроэнергии — не откладывайте ремонт. Своевременное 
                  обращение к специалистам поможет избежать более серьезных поломок.
                </p>
              </div>
            </div>

            {/* Services and prices */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Прайс-лист на ремонт холодильников
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-semibold text-red-600">{service.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Важно:</strong> Стоимость запчастей рассчитывается отдельно. 
                  Используем только оригинальные детали Bosch с гарантией производителя. 
                  Точная стоимость определяется после диагностики.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Call to action */}
            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Холодильник не работает?</h3>
              <p className="text-sm text-red-100 mb-6">
                Не рискуйте продуктами! Вызовите мастера прямо сейчас
              </p>
              <a 
                href="tel:+78621234567" 
                className="w-full bg-white text-red-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +7 (862) 123-45-67
              </a>
            </div>

            {/* Refrigerator types */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Типы холодильников</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Однокамерные холодильники</li>
                <li>• Двухкамерные с верхней морозилкой</li>
                <li>• Двухкамерные с нижней морозилкой</li>
                <li>• Side-by-Side (американский тип)</li>
                <li>• Встраиваемые модели</li>
                <li>• Холодильники с системой No Frost</li>
              </ul>
              
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-600">
                  Ремонтируем холодильники Bosch любого типа и года выпуска
                </p>
              </div>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Наши преимущества</h3>
              <ul className="space-y-3">
                {[
                  'Бесплатная диагностика при ремонте',
                  'Выезд мастера на дом в Сочи',
                  'Работаем без выходных',
                  'Гарантия на работы до 2 лет',
                  'Оригинальные запчасти в наличии',
                  'Опыт работы с Bosch более 10 лет'
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

        {/* Order Form with Background */}
        <div className="mt-12">
          <div 
            style={{
              backgroundColor: 'rgba(17, 24, 39, 1)',
              borderRadius: '0.5rem'
            }}
          >
            <OrderForm />
          </div>
        </div>
      </ServicePageLayout>
    </div>
  );
}