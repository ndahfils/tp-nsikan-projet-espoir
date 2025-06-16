import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images des maisons et projets (remplacez par vos vraies images)
  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Constructions Résidentielles',
      subtitle: 'Des maisons modernes et durables',
      description: 'Nous réalisons vos rêves de construction avec expertise et passion. Chaque projet est unique et reflète vos besoins.',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Rénovations Complètes',
      subtitle: 'Transformez votre espace de vie',
      description: 'Donnez une nouvelle vie à votre habitat avec nos services de rénovation professionnels et innovants.',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Projets Commerciaux',
      subtitle: 'Solutions pour entreprises',
      description: 'Des espaces commerciaux fonctionnels et esthétiques pour développer votre activité professionnelle.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="accueil" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </motion.div>
      </AnimatePresence>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-medium mb-6 text-tp-green-400"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.button
                  className="bg-tp-green-500 hover:bg-tp-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Découvrir nos services</span>
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-tp-gray-800 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                  <span>Voir nos réalisations</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation du slider */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-tp-green-500 w-8' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Boutons de navigation */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default HeroSlider;