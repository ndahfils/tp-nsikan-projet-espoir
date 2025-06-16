import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec navigation */}
      <Header />
      
      {/* Grande slide moderne avec photos des maisons */}
      <HeroSlider />
      
      {/* Section À propos */}
      <About />
      
      {/* Section Services */}
      <Services />
      
      {/* Section Projets/Réalisations */}
      <Projects />
      
      {/* Section Contact */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;