import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+225 XX XX XX XX XX', '+225 XX XX XX XX XX'],
      color: 'text-tp-green-500',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@tpnsikan.com', 'devis@tpnsikan.com'],
      color: 'text-tp-burgundy-500',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Abidjan, Côte d\'Ivoire', 'Zone industrielle'],
      color: 'text-tp-gray-500',
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 8h - 18h', 'Sam: 8h - 12h'],
      color: 'text-tp-green-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-tp-gray-800 mb-6">
            Contactez-<span className="text-tp-green-500">nous</span>
          </h2>
          <p className="text-xl text-tp-gray-600 max-w-3xl mx-auto">
            Prêt à concrétiser votre projet ? Notre équipe est là pour vous accompagner 
            et répondre à toutes vos questions. Contactez-nous dès aujourd'hui !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-heading font-bold text-tp-gray-800 mb-8">
              Nos coordonnées
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`${info.color} mt-1`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tp-gray-800 mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-tp-gray-600">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="font-semibold text-tp-gray-800 mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.facebook.com/tpnsikanprojetespoir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tp-green-500 text-white p-3 rounded-full hover:bg-tp-green-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-tp-burgundy-500 text-white p-3 rounded-full hover:bg-tp-burgundy-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-tp-gray-500 text-white p-3 rounded-full hover:bg-tp-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-heading font-bold text-tp-gray-800 mb-6">
                Demande de devis gratuit
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-tp-gray-700 font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tp-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-tp-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tp-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-tp-gray-700 font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tp-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-tp-gray-700 font-medium mb-2">
                    Type de projet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tp-green-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="construction">Construction neuve</option>
                    <option value="renovation">Rénovation</option>
                    <option value="commercial">Projet commercial</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-tp-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tp-green-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet en détail..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-tp-green-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-tp-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span>Envoyer ma demande</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;