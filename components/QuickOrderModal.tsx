'use client';

import { useState } from 'react';
import { X, Phone, User, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickOrderModal = ({ isOpen, onClose }: QuickOrderModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    emailjs
      .send(
        "service_jrtw17a",
        "template_jr2r8mf", 
        formData,
        "oDNG9_Us6CIhLWftp"
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
    
    // Reset form and close modal after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '' });
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Быстрый заказ</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
              <p className="text-gray-600 mb-4">
                Наш мастер свяжется с вами в течение 15 минут
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800">
                  Ожидайте звонка с номера: <strong>+7 (862) 123-45-67</strong>
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6 text-center">
                Оставьте свои контакты и мы перезвоним вам в течение 15 минут
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Номер телефона *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Отправить заявку
                </button>
              </form>
              
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 text-center">
                  <strong>Конфиденциальность:</strong> Ваши данные надежно защищены
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickOrderModal;