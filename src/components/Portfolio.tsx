import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    category: "Web Uygulaması",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    description: "Modern ve kullanıcı dostu arayüzü ile çevrimiçi alışveriş deneyimini kolaylaştıran kapsamlı bir e-ticaret platformu.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "Takvim & Görev Yöneticisi",
    category: "Web Uygulaması",
    image: "https://images.pexels.com/photos/273153/pexels-photo-273153.jpeg",
    description: "Kullanıcıların etkinliklerini ve görevlerini planlamalarını sağlayan, bildirimler sunan bir organizasyon aracı.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "Fitness Takip Uygulaması",
    category: "Mobil Uygulama",
    image: "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg",
    description: "Egzersiz rutinlerini takip etmeyi, beslenme planlarını yönetmeyi ve ilerlemeyi görselleştirmeyi sağlayan uygulama.",
    technologies: ["React Native", "GraphQL", "Apollo Client"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "Hava Durumu Dashboard",
    category: "Web Uygulaması",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    description: "Gerçek zamanlı hava durumu verilerini görselleştiren, konuma dayalı tahminler sunan interaktif dashboard.",
    technologies: ["JavaScript", "Chart.js", "Weather API", "CSS"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 5,
    title: "Blog Platformu",
    category: "Web Sitesi",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
    description: "İçerik oluşturucular için modern, SEO dostu ve kullanımı kolay blog yayınlama platformu.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 6,
    title: "Müzik Akış Uygulaması",
    category: "Web Uygulaması",
    image: "https://images.pexels.com/photos/2261041/pexels-photo-2261041.jpeg",
    description: "Kullanıcıların müzik dinleyebileceği, çalma listeleri oluşturabileceği ve sanatçıları keşfedebileceği platform.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Spotify API"],
    demoUrl: "#",
    codeUrl: "#"
  }
];

const categories = ["Tümü", ...new Set(projects.map(project => project.category))];

const Portfolio = () => {
  const [filter, setFilter] = useState("Tümü");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = filter === "Tümü" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolyo</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tasarladığım ve geliştirdiğim en yeni projelerimi keşfedin. Her proje, teknik becerilerimi ve yaratıcı yaklaşımımı yansıtmaktadır.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-110"
                />
                {hoveredId === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        aria-label="View Code"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;