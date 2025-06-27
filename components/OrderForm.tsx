'use client';

import { useState } from 'react';
import { Phone, User, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Ремонт стиральных машин',
    'Ремонт сушильных машин', 
    'Ремонт посудомоечных машин',
    'Ремонт кофемашин',
    'Ремонт холодильников',
    'Ремонт теливизоров',
    'Ремонт ПК и ноутбуков',
    'Ремонт мобильных телефонов',
    'Ремонт роботов телефонов',
    'Другое'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);

     emailjs
      .send(
        "service_jrtw17a", // Например: "service_abc123"
        "template_zwsp69y", // Например: "template_xyz456"
        formData,
        "oDNG9_Us6CIhLWftp"  // Например: "user_123abc"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Ошибка при отправке.");
        }
      );
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', service: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="order-form" className="py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl font-bold mb-4">Заявка отправлена!</h2>
            <p className="text-red-100 mb-6">
              Спасибо за обращение! Наш мастер свяжется с вами в течение 15 минут.
            </p>
            <div className="bg-red-700 bg-opacity-50 p-4 rounded-lg">
              <p className="text-sm text-red-100">
                Ожидайте звонка с номера: <strong>+7 (862) 123-45-67</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Заказать ремонт техники Bosch</h2>
            <p className="text-xl text-red-100">
              Оставьте заявку и наш мастер свяжется с вами в течение 15 минут
            </p>
          </div>
          
          <div className="bg-white bg-opacity-95 rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                    placeholder="Введите ваше имя"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Номер телефона *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Тип техники
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                >
                  <option value="">Выберите тип техники</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center text-lg"
              >
                <Send className="mr-3 h-6 w-6" />
                Отправить заявку
              </button>
            </form>
            
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Бесплатная диагностика</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Выезд в день обращения</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;