import ServicePageLayout from '@/components/ServicePageLayout';
import OrderForm from '@/components/OrderForm';
import { CheckCircle, Phone, AlertCircle, Wrench, Clock, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ремонт кофемашин Bosch в Сочи',
  description: 'Ремонт кофемашин Bosch в Сочи. Чистка, декальцинация, замена запчастей. Сервисное обслуживание на дому. Мастер выезжает за 2 часа: +7 (862) 123-45-67',
  keywords: 'ремонт кофемашин Bosch Сочи, сервис кофемашин Bosch, чистка кофемашин, декальцинация',
  openGraph: {
    title: 'Ремонт кофемашин Bosch в Сочи - Сервисный центр',
    description: 'Профессиональный ремонт и обслуживание кофемашин Bosch на дому в Сочи. Опытные мастера, качественный сервис.',
  }
};

export default function RemontKofemashin() {
  const commonProblems = [
    'Не включается или не реагирует на кнопки',
    'Не варит кофе или слабый напор',
    'Протекает вода или кофе',
    'Сильный шум при работе',
    'Не подает пар или пена',
    'Горит индикатор декальцинации',
    'Плохое качество кофе',
    'Заблокирован механизм помола'
  ];

  const services = [
    { name: 'Диагностика и консультация', price: 'Бесплатно' },
    { name: 'Полная чистка и декальцинация', price: 'от 2000 ₽' },
    { name: 'Замена уплотнителей и прокладок', price: 'от 1500 ₽' },
    { name: 'Ремонт помпы (насоса)', price: 'от 2800 ₽' },
    { name: 'Замена жерновов кофемолки', price: 'от 3500 ₽' },
    { name: 'Ремонт блока управления', price: 'от 4000 ₽' },
    { name: 'Замена ТЭНа (нагревателя)', price: 'от 2500 ₽' },
    { name: 'Профилактическое обслуживание', price: 'от 1800 ₽' }
  ];

  const breadcrumbs = [
    { label: 'Ремонт кофемашин Bosch' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServicePageLayout 
        title="Ремонт кофемашин Bosch в Сочи"
        breadcrumbs={breadcrumbs}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Сервисное обслуживание кофемашин Bosch
              </h2>
              <p className="text-gray-600 mb-6">
                Кофемашины Bosch — это сложная техника, требующая регулярного обслуживания и 
                профессионального ремонта. Наши мастера специализируются на ремонте автоматических 
                кофемашин Bosch, включая встраиваемые модели и кофемашины эспрессо.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Быстро</h3>
                  <p className="text-sm text-gray-600">Ремонт в день обращения</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Гарантированно</h3>
                  <p className="text-sm text-gray-600">Гарантия на все работы</p>
                </div>
                <div className="text-center">
                  <Wrench className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Качественно</h3>
                  <p className="text-sm text-gray-600">Оригинальные запчасти Bosch</p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold text-amber-900 mb-2">Важность регулярного обслуживания</h3>
                <p className="text-amber-800 text-sm">
                  Кофемашины требуют регулярной чистки и декальцинации каждые 2-3 месяца. 
                  Это продлевает срок службы техники и обеспечивает отличный вкус кофе. 
                  Мы предоставляем полный комплекс услуг по обслуживанию кофемашин Bosch.
                </p>
              </div>
            </div>

            {/* Common problems */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Частые проблемы кофемашин Bosch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{problem}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Профилактика — лучший ремонт</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Регулярно очищайте кофемашину от кофейных масел</li>
                  <li>• Используйте фильтрованную воду</li>
                  <li>• Проводите декальцинацию согласно инструкции</li>
                  <li>• Не оставляйте влажные остатки кофе в машине</li>
                </ul>
              </div>
            </div>

            {/* Services and prices */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Цены на ремонт и обслуживание кофемашин
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-semibold text-red-600">{service.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Комплексное обслуживание:</strong> При заказе полной чистки и декальцинации 
                  предоставляем скидку 15% на замену расходных материалов и мелких деталей.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Call to action */}
            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Нужна чистка?</h3>
              <p className="text-sm text-red-100 mb-6">
                Кофемашина требует обслуживания? Вызовите мастера на дом
              </p>
              <a 
                href="tel:+78621234567" 
                className="w-full bg-white text-red-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +7 (862) 123-45-67
              </a>
            </div>

            {/* Coffee machine models */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Обслуживаемые модели</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Bosch TCA (встраиваемые)</li>
                <li>• Bosch TCC (компактные)</li>
                <li>• Bosch TCE (эспрессо-машины)</li>
                <li>• Bosch Tassimo (капсульные)</li>
                <li>• Автоматические кофемашины</li>
                <li>• Рожковые кофеварки</li>
              </ul>
              
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-600">
                  Ремонтируем кофемашины Bosch любой сложности и года выпуска
                </p>
              </div>
            </div>

            {/* Maintenance tips */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Что входит в обслуживание</h3>
              <ul className="space-y-3">
                {[
                  'Полная разборка и чистка',
                  'Декальцинация системы',
                  'Замена фильтров и уплотнителей',
                  'Проверка всех систем',
                  'Настройка параметров',
                  'Инструктаж по эксплуатации'
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{service}</span>
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