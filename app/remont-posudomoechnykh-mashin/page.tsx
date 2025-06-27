import ServicePageLayout from '@/components/ServicePageLayout';
import OrderForm from '@/components/OrderForm';
import { CheckCircle, Phone, AlertCircle, Wrench, Clock, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ремонт посудомоечных машин Bosch в Сочи',
  description: 'Ремонт посудомоечных машин Bosch в Сочи на дому. Профессиональная диагностика, замена запчастей, гарантия качества. Вызов мастера: +7 (862) 123-45-67',
  keywords: 'ремонт посудомоечных машин Bosch Сочи, сервис посудомоек Bosch, мастер по ремонту посудомоечных машин',
  openGraph: {
    title: 'Ремонт посудомоечных машин Bosch в Сочи - Сервисный центр',
    description: 'Быстрый и надежный ремонт посудомоечных машин Bosch на дому. Опытные специалисты, оригинальные запчасти.',
  }
};

export default function RemontPosudomoechnykhMashin() {
  const commonProblems = [
    'Не включается или не запускается программа',
    'Плохо моет или не домывает посуду',
    'Не набирает или не сливает воду',
    'Течет вода из машины',
    'Не растворяются таблетки/порошок',
    'Странные звуки при работе',
    'Не открывается дверца после мойки',
    'Ошибки на дисплее'
  ];

  const services = [
    { name: 'Диагностика неисправностей', price: 'Бесплатно' },
    { name: 'Замена насоса (помпы)', price: 'от 2500 ₽' },
    { name: 'Ремонт системы слива', price: 'от 1800 ₽' },
    { name: 'Замена ТЭНа', price: 'от 2200 ₽' },
    { name: 'Ремонт электронного модуля', price: 'от 3500 ₽' },
    { name: 'Замена уплотнителей', price: 'от 1500 ₽' },
    { name: 'Чистка фильтров и форсунок', price: 'от 1200 ₽' },
    { name: 'Замена датчиков', price: 'от 2000 ₽' }
  ];

  const breadcrumbs = [
    { label: 'Ремонт посудомоечных машин Bosch' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServicePageLayout 
        title="Ремонт посудомоечных машин Bosch в Сочи"
        breadcrumbs={breadcrumbs}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Профессиональный ремонт посудомоечных машин Bosch
              </h2>
              <p className="text-gray-600 mb-6">
                Посудомоечные машины Bosch отличаются высоким качеством и надежностью, но даже 
                они могут выйти из строя. Наш сервисный центр специализируется на ремонте 
                посудомоек Bosch всех серий: от компактных настольных моделей до полноразмерных 
                встраиваемых машин.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Быстро</h3>
                  <p className="text-sm text-gray-600">Большинство ремонтов за 1 визит</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Качественно</h3>
                  <p className="text-sm text-gray-600">Гарантия на ремонт до 2 лет</p>
                </div>
                <div className="text-center">
                  <Wrench className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Надежно</h3>
                  <p className="text-sm text-gray-600">Только оригинальные детали</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Экономия вашего времени</h3>
                <p className="text-green-800 text-sm">
                  Мы выполняем ремонт посудомоечных машин на дому, поэтому вам не нужно 
                  отключать и транспортировать тяжелую технику. Мастер приедет в удобное для 
                  вас время с необходимыми инструментами и запчастями.
                </p>
              </div>
            </div>

            {/* Common problems */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Основные поломки посудомоечных машин Bosch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{problem}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Профилактика поломок</h4>
                <p className="text-blue-800 text-sm">
                  Регулярная чистка фильтров, использование качественных моющих средств и 
                  соблюдение правил эксплуатации помогут продлить срок службы вашей посудомоечной машины.
                </p>
              </div>
            </div>

            {/* Services and prices */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Прайс-лист на ремонт посудомоечных машин
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
                  <strong>Обратите внимание:</strong> Стоимость запчастей рассчитывается отдельно. 
                  Используем только оригинальные детали Bosch с гарантией производителя.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Call to action */}
            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Срочный вызов мастера</h3>
              <p className="text-sm text-red-100 mb-6">
                Посудомойка сломалась? Не откладывайте ремонт! Звоните прямо сейчас
              </p>
              <a 
                href="tel:+78621234567" 
                className="w-full bg-white text-red-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +7 (862) 123-45-67
              </a>
            </div>

            {/* Series support */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ремонтируемые серии</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Bosch Serie 2 (компактные)</li>
                <li>• Bosch Serie 4 (стандартные)</li>
                <li>• Bosch Serie 6 (премиум)</li>
                <li>• Bosch Serie 8 (топовые)</li>
                <li>• Встраиваемые модели</li>
                <li>• Настольные посудомойки</li>
              </ul>
              
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-600">
                  Работаем с посудомоечными машинами Bosch любого года выпуска
                </p>
              </div>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Наши гарантии</h3>
              <ul className="space-y-3">
                {[
                  'Бесплатная диагностика при ремонте',
                  'Гарантия на работы до 24 месяцев',
                  'Фиксированные цены без доплат',
                  'Выезд мастера в день обращения',
                  'Оригинальные запчасти в наличии',
                  'Консультации по эксплуатации'
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