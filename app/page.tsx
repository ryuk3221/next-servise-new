import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import OrderForm from '@/components/OrderForm';
import { CheckCircle, Clock, Shield, Users, Phone, Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Сервисный центр Bosch в Сочи - профессиональный ремонт стиральных машин, посудомоечных машин, кофемашин и сушильных машин. Выезд мастера 24/7, гарантия качества.',
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

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию бытовой техники Bosch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Сушкова',
                text: 'Отличный сервис! Мастер приехал быстро, починил стиральную машину за час. Рекомендую!',
                rating: 5
              },
              {
                name: 'Михаил Дудников',
                text: 'Профессиональный подход к ремонту кофемашины. Теперь работает как новая!',
                rating: 5
              },
              {
                name: 'Елена Самбурова',
                text: 'Спасибо за качественный ремонт посудомойки. Работают быстро и аккуратно.',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}