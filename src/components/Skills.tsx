import React from 'react';
import { Code, Palette, Globe, Server, Database, Settings } from 'lucide-react';

type SkillProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const SkillCard = ({ icon, title, description }: SkillProps) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="inline-flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const ProgressBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-gray-800 dark:text-gray-200 font-medium">{skill}</h4>
      <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div 
        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Neler Yapabilirim?</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Modern web teknolojilerini kullanarak çözümler üretiyorum. İşte uzmanlık alanlarım ve becerilerim.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SkillCard 
            icon={<Code size={24} />}
            title="Front-end Geliştirme"
            description="Modern JavaScript çerçeveleri ve kütüphaneleri kullanarak duyarlı ve etkileşimli kullanıcı arayüzleri oluşturuyorum."
          />
          <SkillCard 
            icon={<Server size={24} />}
            title="Back-end Geliştirme"
            description="Node.js, Express ve MongoDB gibi teknolojiler kullanarak güçlü API'ler ve sunucu tarafı uygulamaları geliştiriyorum."
          />
          <SkillCard 
            icon={<Palette size={24} />}
            title="UI/UX Tasarım"
            description="Kullanıcı odaklı yaklaşımla, çekici ve kullanımı kolay arayüzler tasarlıyorum."
          />
          <SkillCard 
            icon={<Database size={24} />}
            title="Veritabanı Yönetimi"
            description="SQL ve NoSQL veritabanları ile çalışarak, verileri verimli şekilde saklama ve yönetme konusunda uzmanlığa sahibim."
          />
          <SkillCard 
            icon={<Globe size={24} />}
            title="Web Optimizasyonu"
            description="Yüksek performanslı web uygulamaları için SEO, erişilebilirlik ve hız optimizasyonu yapıyorum."
          />
          <SkillCard 
            icon={<Settings size={24} />}
            title="DevOps"
            description="CI/CD pipeline'ları kurarak, uygulamaların kesintisiz bir şekilde dağıtımını sağlıyorum."
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Teknik Beceriler</h3>
            <ProgressBar skill="HTML/CSS" percentage={95} />
            <ProgressBar skill="JavaScript/TypeScript" percentage={90} />
            <ProgressBar skill="React/Vue.js" percentage={85} />
            <ProgressBar skill="Node.js" percentage={80} />
            <ProgressBar skill="SQL/NoSQL" percentage={75} />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Profesyonel Beceriler</h3>
            <ProgressBar skill="Problem Çözme" percentage={95} />
            <ProgressBar skill="Takım Çalışması" percentage={90} />
            <ProgressBar skill="İletişim" percentage={85} />
            <ProgressBar skill="Proje Yönetimi" percentage={80} />
            <ProgressBar skill="Zaman Yönetimi" percentage={85} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;