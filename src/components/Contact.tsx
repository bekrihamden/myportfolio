import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad gereklidir';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj gereklidir';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">İletişim</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bir projeniz mi var? Benimle iletişime geçin ve birlikte çalışalım.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Bana Yazın</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg">
                Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-lg">
                Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-900 focus:border-blue-500 dark:focus:border-blue-500'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="Adınız ve Soyadınız"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-900 focus:border-blue-500 dark:focus:border-blue-500'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="E-posta adresiniz"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-900 focus:border-blue-500 dark:focus:border-blue-500'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="Mesajınız"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-full px-6 py-4 text-white font-medium rounded-lg transition-colors duration-300 ${
                  isSubmitting 
                    ? 'bg-blue-400 dark:bg-blue-800 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Gönder
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">E-posta</p>
                    <a href="mailto:os757713@gmail.com" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">os757713@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Telefon</p>
                    <a href="tel:+905516779779" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">+90 551 677 9779</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Konum</p>
                    <p className="text-gray-900 dark:text-white">Balıkesir, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196569.3358757441!2d27.725285844726547!3d39.648883600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b6943005c42af9%3A0xd6c6e60a0b73bb8!2zQmFsxLFrZXNpciwgVMO8cmtpeWU!5e0!3m2!1str!2str!4v1650287204257!5m2!1str!2str" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="map"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;