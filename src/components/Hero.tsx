import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-60 -left-20 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 right-20 w-80 h-80 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 tracking-wide">Merhaba, Ben</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Bekri HAMDEN</span>
              <span className="block mt-2 text-blue-600 dark:text-blue-400">Web Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Modern web teknolojilerini kullanarak etkileyici, kullanıcı dostu web siteleri ve uygulamalar geliştiriyorum.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#portfolio" 
                className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-base md:text-lg"
              >
                Projelerimi Gör
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 md:px-8 md:py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 text-base md:text-lg"
              >
                İletişime Geç
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
              <img 
                src="/fo.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle size={32} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;