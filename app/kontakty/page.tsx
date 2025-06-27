'use client';

import { useState } from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import OrderForm from '@/components/OrderForm';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import type { Metadata } from 'next';


// Note: This would normally be at the page level, but since we're using 'use client',
// we'll need to handle metadata differently in the actual implementation
const metadata: Metadata = {
  title: 'Контакты - Сервисный центр Bosch Сочи',
  description: 'Контакты сервисного центра Bosch в Сочи. Адрес: ул. Навагинская 12. Телефон: +7 (862) 123-45-67. Работаем 24/7. Выезд мастера на дом.',
  keywords: 'контакты Bosch сервис Сочи, адрес сервисного центра, телефон ремонт Bosch',
  openGraph: {
    title: 'Контакты - Сервисный центр Bosch Сочи',
    description: 'Свяжитесь с нами для ремонта техники Bosch в Сочи. Работаем круглосуточно.',
  }
};

export default function Kontakty() {
  const breadcrumbs = [
    { label: 'Контакты' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServicePageLayout 
        title="Контакты сервисного центра Bosch"
        breadcrumbs={breadcrumbs}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Как с нами связаться</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (862) 123-45-67</p>
                    <p className="text-sm text-gray-500">Круглосуточно, без выходных</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">arm.businesss@yahoo.com</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Сочи, ул. Навагинская 12</p>
                    <p className="text-sm text-gray-500">Центральный район</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Режим работы</h3>
                    <p className="text-gray-600">24 часа в сутки, 7 дней в неделю</p>
                    <p className="text-sm text-gray-500">Принимаем заявки круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Зоны обслуживания</h2>
              <p className="text-gray-600 mb-4">
                Мы выезжаем для ремонта техники Bosch во все районы Сочи:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Центральный район',
                  'Хостинский район', 
                  'Лазаревский район',
                  'Адлерский район',
                  'Красная Поляна',
                  'Дагомыс',
                  'Лоо',
                  'Мацеста'
                ].map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Выезд мастера:</strong> В центральные районы Сочи — бесплатно. 
                  В отдаленные районы — по согласованию.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Заказать обратный звонок</h2>
              <p className="text-gray-600 mb-6">
                Оставьте заявку, и наш мастер свяжется с вами в течение 15 минут
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Номер телефона *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="device" className="block text-sm font-medium text-gray-700 mb-2">
                    Тип техники
                  </label>
                  <select
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Выберите тип техники</option>
                    <option value="stiralnaya">Стиральная машина</option>
                    <option value="sushilnaya">Сушильная машина</option>
                    <option value="posudomoechnaya">Посудомоечная машина</option>
                    <option value="kofemashina">Кофемашина</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                    Описание проблемы
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    rows={4}
                    value={formData.problem}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Опишите что именно не работает..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Отправить заявку
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>Конфиденциальность:</strong> Ваши данные надежно защищены и не передаются третьим лицам.
                </p>
              </div>
            </div>
          </div> */}
                {/* Order Form with Background */}
          <div 
            style={{
              backgroundColor: 'rgba(17, 24, 39, 1)',
              borderRadius: '0.5rem'
            }}
          >
            <OrderForm />
          </div>
        </div>
        
        {/* Emergency section */}
        <div className="mt-8 bg-red-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Экстренный вызов мастера</h2>
          <p className="text-red-100 mb-6">
            Техника сломалась в самый неподходящий момент? Не проблема! 
            Мы работаем круглосуточно и готовы приехать в любое время.
          </p>
          <a 
            href="tel:+78621234567" 
            className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="mr-3 h-6 w-6" />
            +7 (862) 123-45-67
          </a>
        </div>
      </ServicePageLayout>
    </div>
  );
}