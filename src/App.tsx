import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;