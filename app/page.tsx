import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderForm from '@/components/OrderForm';
import { CheckCircle, Clock, Shield, Users, Phone, Star, Settings, Wrench, FileText, ThumbsUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Сервисный центр Bosch в Сочи - профессиональный ремонт стиральных машин, посудомоечных машин, кофемашин, сушильных машин и холодильников. Выезд мастера 24/7, гарантия качества.',
  openGraph: {
    title: 'Сервисный центр Bosch Сочи - Ремонт бытовой техники',
    description: 'Профессиональный ремонт техники Bosch в Сочи. Выезд мастера 24/7, оригинальные запчасти, гарантия качества.',
  }
};

export default function Home() {
  const services = [
    {
      title: 'Ремонт стиральных машин',
      description: 'Диагностика и ремонт всех моделей стиральных машин Bosch',
      price: '1500 ₽',
      features: [
        'Бесплатная диагностика',
        'Выезд мастера на дом',
        'Гарантия до 2 лет',
        'Оригинальные запчасти'
      ],
      href: '/remont-stiralnykh-mashin',
      imageSrc: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Ремонт сушильных машин',
      description: 'Профессиональный ремонт сушильных машин Bosch любой сложности',
      price: '1800 ₽',
      features: [
        'Экспресс-диагностика',
        'Ремонт на дому',
        'Гарантия качества',
        'Консультация специалиста'
      ],
      href: '/remont-sushilnykh-mashin',
      imageSrc: 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Ремонт посудомоечных машин',
      description: 'Восстановление работоспособности посудомоечных машин Bosch',
      price: '1600 ₽',
      features: [
        'Точная диагностика',
        'Быстрый ремонт',
        'Проверка после ремонта',
        'Профилактическое обслуживание'
      ],
      href: '/remont-posudomoechnykh-mashin',
      imageSrc: 'https://images.pexels.com/photos/6197071/pexels-photo-6197071.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Ремонт кофемашин',
      description: 'Сервисное обслуживание и ремонт кофемашин Bosch',
      price: '1400 ₽',
      features: [
        'Чистка и декальцинация',
        'Замена расходников',
        'Настройка параметров',
        'Обучение эксплуатации'
      ],
      href: '/remont-kofemashin',
      imageSrc: 'https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Ремонт холодильников',
      description: 'Профессиональный ремонт и обслуживание холодильников Bosch',
      price: '2000 ₽',
      features: [
        'Замена компрессора',
        'Заправка фреоном',
        'Ремонт системы No Frost',
        'Гарантия до 2 лет'
      ],
      href: '/remont-kholodilnikov',
      imageSrc: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const advantages = [
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: 'Быстрый выезд',
      description: 'Выезд мастера в течение 2 часов после заявки'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Гарантия качества',
      description: 'Гарантия на выполненные работы до 2 лет'
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: 'Опытные мастера',
      description: 'Сертифицированные специалисты с опытом более 10 лет'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-600" />,
      title: 'Оригинальные запчасти',
      description: 'Используем только оригинальные комплектующие Bosch'
    }
  ];

  const repairSteps = [
    {
      icon: <Phone className="h-12 w-12 text-red-600" />,
      title: 'Прием заявки',
      description: 'Вы звоните нам или оставляете заявку на сайте. Мы уточняем детали поломки и договариваемся о времени визита мастера.'
    },
    {
      icon: <Settings className="h-12 w-12 text-red-600" />,
      title: 'Диагностика',
      description: 'Мастер приезжает в назначенное время, проводит полную диагностику техники и определяет причину неисправности.'
    },
    {
      icon: <FileText className="h-12 w-12 text-red-600" />,
      title: 'Согласование ремонта',
      description: 'Мы озвучиваем стоимость ремонта и сроки выполнения работ. Приступаем к ремонту только после вашего согласия.'
    },
    {
      icon: <Wrench className="h-12 w-12 text-red-600" />,
      title: 'Выполнение ремонта',
      description: 'Мастер выполняет ремонт с использованием оригинальных запчастей Bosch. Большинство ремонтов выполняется за один визит.'
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-red-600" />,
      title: 'Тестирование',
      description: 'После ремонта мы тестируем технику в различных режимах работы, чтобы убедиться в качестве выполненных работ.'
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-red-600" />,
      title: 'Гарантия',
      description: 'Выдаем письменную гарантию на выполненные работы до 2 лет. Консультируем по правильной эксплуатации техники.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Background */}
      <section 
        className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-48"
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.8), rgba(185, 28, 28, 0.8)), url("./form--img.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Сервисный центр Bosch в Сочи
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Профессиональный ремонт бытовой техники Bosch с гарантией качества. 
              Выезд мастера 24/7, оригинальные запчасти, опытные специалисты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+78621234567" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Вызвать мастера
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Наши услуги
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем качественные услуги по ремонту техники Bosch уже более 10 лет
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию бытовой техники Bosch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="block group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full">
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.imageSrc} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors min-h-[4.5rem] flex items-center">
                      {service.title}
                    </h3>
                    
                    {/* Description with fixed height */}
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm leading-relaxed min-h-[3rem]">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Price section */}
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-red-600">{service.price}</span>
                        <span className="text-gray-500 text-sm ml-1">от</span>
                      </div>
                    </div>

                    {/* Features list with fixed height */}
                    <div className="flex-grow">
                      <ul className="space-y-2 min-h-[4rem]">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button always at bottom */}
                    <div className="mt-auto">
                      <div className="inline-flex items-center justify-center w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors group-hover:bg-red-700 font-medium">
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form with Background */}
      <div 
        style={{
          backgroundColor: 'rgba(17, 24, 39, 1)',
        }}
      >
        <OrderForm />
      </div>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Более 5000 довольных клиентов доверили нам ремонт своей техники Bosch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Сушкова',
                text: 'Отличный сервис! Мастер приехал быстро, починил стиральную машину за час. Работает уже полгода без проблем. Рекомендую!',
                rating: 5,
                service: 'Ремонт стиральной машины'
              },
              {
                name: 'Михаил Дудников',
                text: 'Профессиональный подход к ремонту кофемашины. Мастер не только починил, но и научил правильно ухаживать. Теперь кофе как в ресторане!',
                rating: 5,
                service: 'Ремонт кофемашины'
              },
              {
                name: 'Елена Самбурова',
                text: 'Спасибо за качественный ремонт холодильника. Приехали в тот же день, быстро нашли проблему и устранили. Работают быстро и аккуратно.',
                rating: 5,
                service: 'Ремонт холодильника'
              },
              {
                name: 'Дмитрий Козлов',
                text: 'Посудомойка перестала мыть посуду. Мастер заменил насос и почистил фильтры. Теперь работает как новая! Цены адекватные.',
                rating: 5,
                service: 'Ремонт посудомоечной машины'
              },
              {
                name: 'Ольга Петрова',
                text: 'Сушильная машина сильно шумела. Оказалось, износились подшипники. Заменили быстро, дали гарантию на 2 года. Очень довольна!',
                rating: 5,
                service: 'Ремонт сушильной машины'
              },
              {
                name: 'Александр Иванов',
                text: 'Вызывал мастера для профилактики кофемашины. Сделали полную чистку, заменили фильтры. Теперь кофе стал намного вкуснее!',
                rating: 5,
                service: 'Обслуживание кофемашины'
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Repair Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как происходит ремонт техники Bosch</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Наш сервисный центр работает по отработанной схеме, которая гарантирует качественный ремонт 
              бытовой техники Bosch в Сочи. Мы используем современное диагностическое оборудование и 
              оригинальные запчасти для восстановления работоспособности вашей техники.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <div className="text-center mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full text-sm font-bold mb-2">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Профессиональный ремонт техники Bosch в Сочи
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Наши преимущества:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Сертифицированные мастера с опытом работы более 10 лет</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Использование только оригинальных запчастей Bosch</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Современное диагностическое оборудование</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Гарантия на выполненные работы до 24 месяцев</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Что мы ремонтируем:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Wrench className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Стиральные и сушильные машины всех серий</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Посудомоечные машины встраиваемые и отдельностоящие</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Кофемашины автоматические и рожковые</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Холодильники всех типов включая Side-by-Side</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-red-50 rounded-lg">
              <p className="text-red-800 text-sm leading-relaxed">
                <strong>Важно знать:</strong> Качественный ремонт техники Bosch требует профессионального подхода. 
                Наш сервисный центр в Сочи специализируется исключительно на технике этого бренда, что позволяет 
                нам глубоко изучить особенности каждой модели и обеспечить максимально эффективный ремонт. 
                Мы работаем только с оригинальными запчастями и используем рекомендованные производителем методы ремонта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}