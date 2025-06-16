import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      {/* Barre de contact supérieure */}
      <div className={`${isScrolled ? 'hidden' : 'block'} bg-tp-burgundy-500 text-white py-2`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+225 XX XX XX XX XX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>contact@tpnsikan.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Votre partenaire construction de confiance</span>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/logo tp n'sikan.png" 
              alt="TP N'SIKAN PROJET ESPOIR" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className={`font-heading font-bold text-lg ${
                isScrolled ? 'text-tp-burgundy-500' : 'text-white'
              }`}>
                TP N'SIKAN
              </h1>
              <p className={`text-sm ${
                isScrolled ? 'text-tp-gray-600' : 'text-gray-200'
              }`}>
                PROJET ESPOIR
              </p>
            </div>
          </motion.div>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-tp-green-500 ${
                  isScrolled ? 'text-tp-gray-700' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="bg-tp-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-tp-green-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Devis Gratuit
            </motion.button>
          </div>

          {/* Menu mobile button */}
          <button
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-tp-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-tp-gray-700 hover:text-tp-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-tp-green-500 text-white py-3 rounded-lg font-medium hover:bg-tp-green-600 transition-colors">
              Devis Gratuit
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;