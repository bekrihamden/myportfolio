import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="block md:inline-block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 transition-colors duration-300"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl text-blue-600 dark:text-blue-400">
            <a href="#home">Portfolio</a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <NavLink href="#home">Ana Sayfa</NavLink>
              <NavLink href="#about">Ben Kimim?</NavLink>
              <NavLink href="#skills">Neler Yapabilirim?</NavLink>
              <NavLink href="#portfolio">Portfolyo</NavLink>
              <NavLink href="#contact">İletişim</NavLink>
              <button 
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white dark:bg-gray-900 shadow-lg">
          <NavLink href="#home" onClick={closeMenu}>Ana Sayfa</NavLink>
          <NavLink href="#about" onClick={closeMenu}>Ben Kimim?</NavLink>
          <NavLink href="#skills" onClick={closeMenu}>Neler Yapabilirim?</NavLink>
          <NavLink href="#portfolio" onClick={closeMenu}>Portfolyo</NavLink>
          <NavLink href="#contact" onClick={closeMenu}>İletişim</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;