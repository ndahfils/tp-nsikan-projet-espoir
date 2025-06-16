import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Construction résidentielle',
    'Projets commerciaux',
    'Rénovation complète',
    'Aménagement intérieur',
    'Gros œuvre',
    'Installations techniques',
  ];

  return (
    <footer className="bg-tp-gray-800 text-white">
      {/* Contenu principal du footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations de l'entreprise */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo tp n'sikan.png" 
                alt="TP N'SIKAN PROJET ESPOIR" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-heading font-bold text-xl text-white">
                  TP N'SIKAN
                </h3>
                <p className="text-tp-green-400 text-sm">
                  PROJET ESPOIR
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction, 
              rénovation et aménagement. Plus de 15 ans d'expertise au service 
              de vos rêves.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/tpnsikanprojetespoir"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tp-green-500 p-3 rounded-full hover:bg-tp-green-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="bg-tp-burgundy-500 p-3 rounded-full hover:bg-tp-burgundy-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="bg-tp-gray-600 p-3 rounded-full hover:bg-tp-gray-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-tp-green-400">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-tp-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-tp-green-400">
              Nos services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-tp-green-400">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-tp-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Abidjan, Côte d'Ivoire<br />
                    Zone industrielle
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-tp-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+225 XX XX XX XX XX</p>
                  <p className="text-gray-300 text-sm">+225 XX XX XX XX XX</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-tp-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">contact@tpnsikan.com</p>
                  <p className="text-gray-300 text-sm">devis@tpnsikan.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-tp-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TP N'SIKAN PROJET ESPOIR. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-tp-green-400 text-sm transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-tp-green-400 text-sm transition-colors duration-300">
                Politique de confidentialité
              </a>
              <motion.button
                onClick={scrollToTop}
                className="bg-tp-green-500 p-2 rounded-full hover:bg-tp-green-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;