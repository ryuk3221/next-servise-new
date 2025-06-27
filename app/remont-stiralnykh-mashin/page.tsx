import ServicePageLayout from '@/components/ServicePageLayout';
import OrderForm from '@/components/OrderForm';
import { CheckCircle, Phone, AlertCircle, Wrench, Clock, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ремонт стиральных машин Bosch в Сочи',
  description: 'Профессиональный ремонт стиральных машин Bosch в Сочи. Выезд мастера на дом, диагностика, замена запчастей. Гарантия до 2 лет. Звоните: +7 (862) 123-45-67',
  keywords: 'ремонт стиральных машин Bosch Сочи, сервис Bosch, мастер по ремонту стиральных машин',
  openGraph: {
    title: 'Ремонт стиральных машин Bosch в Сочи - Сервисный центр',
    description: 'Быстрый и качественный ремонт стиральных машин Bosch на дому в Сочи. Опытные мастера, оригинальные запчасти.',
  }
};

export default function RemontStiralnykhMashin() {
  const commonProblems = [
    'Не включается или не запускается программа стирки',
    'Не набирает или не сливает воду',
    'Не отжимает белье или сильно вибрирует',
    'Не греет воду или перегревает',
    'Течет вода из машины',
    'Сильный шум при работе',
    'Заблокирован люк (дверца)',
    'Появились ошибки на дисплее'
  ];

  const services = [
    { name: 'Диагностика неисправностей', price: 'Бесплатно' },
    { name: 'Замена подшипников', price: 'от 3500 ₽' },
    { name: 'Ремонт помпы (насоса)', price: 'от 2800 ₽' },
    { name: 'Замена ТЭНа', price: 'от 2200 ₽' },
    { name: 'Ремонт электроники', price: 'от 3000 ₽' },
    { name: 'Замена амортизаторов', price: 'от 1800 ₽' },
    { name: 'Чистка фильтров', price: 'от 800 ₽' },
    { name: 'Замена ремня привода', price: 'от 1500 ₽' }
  ];

  const breadcrumbs = [
    { label: 'Ремонт стиральных машин Bosch' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServicePageLayout 
        title="Ремонт стиральных машин Bosch в Сочи"
        breadcrumbs={breadcrumbs}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Профессиональный ремонт стиральных машин Bosch
              </h2>
              <p className="text-gray-600 mb-6">
                Наш сервисный центр специализируется на ремонте стиральных машин Bosch всех моделей. 
                Мы устраняем любые неисправности: от простых поломок до сложного ремонта электроники. 
                Используем только оригинальные запчасти и предоставляем гарантию на все виды работ.
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
                  <p className="text-sm text-gray-600">Гарантия до 2 лет на ремонт</p>
                </div>
                <div className="text-center">
                  <Wrench className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Качественно</h3>
                  <p className="text-sm text-gray-600">Оригинальные запчасти Bosch</p>
                </div>
              </div>
            </div>

            {/* Common problems */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Частые неисправности стиральных машин Bosch
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
                Услуги и цены
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
                  <strong>Важно:</strong> Окончательная стоимость ремонта определяется после диагностики. 
                  Диагностика проводится бесплатно при условии выполнения ремонта.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Call to action */}
            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Нужна помощь?</h3>
              <p className="text-sm text-red-100 mb-6">
                Оставьте заявку и мастер перезвонит вам в течение 15 минут
              </p>
              <a 
                href="tel:+78621234567" 
                className="w-full bg-white text-red-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +7 (862) 123-45-67
              </a>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Наши преимущества</h3>
              <ul className="space-y-3">
                {[
                  'Бесплатная диагностика при ремонте',
                  'Выезд мастера на дом в Сочи',
                  'Работаем без выходных 24/7',
                  'Гарантия на работы до 2 лет',
                  'Оригинальные запчасти Bosch',
                  'Опыт работы более 10 лет'
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