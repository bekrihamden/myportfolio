import React from 'react';
import { Award, Book, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Ben Kimim?</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Front-end ve back-end teknolojilerinde uzmanlaşmış, kullanıcı deneyimini ön planda tutan bir web geliştiricisiyim.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg" 
                alt="About me" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hikayem</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Web geliştirme yolculuğum, lisedeyken HTML ve CSS öğrenmemle başladı. Balıkesir Üniversitesi'nde bilgisayar mühendisliği eğitimi aldım ve çeşitli teknoloji şirketlerinde deneyim kazandım.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Bugün, modern web uygulamaları geliştirme konusunda tutkulu bir profesyonel olarak, projelerimde en son teknolojileri kullanıyorum. Amacım, müşterilerimin ihtiyaçlarını anlamak ve bunları çarpıcı dijital deneyimlere dönüştürmektir.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <Award className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Eğitim</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Bilgisayar Mühendisliği, Balıkesir Üniversitesi</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <Briefcase className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Deneyim</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">2+ Yıl Web Geliştirme</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <Book className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Öğrenme</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Sürekli kendimi geliştirmeye devam ediyorum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;