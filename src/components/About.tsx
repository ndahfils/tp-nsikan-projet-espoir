import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Award, number: '15+', label: 'Années d\'expérience' },
    { icon: Users, number: '200+', label: 'Projets réalisés' },
    { icon: Clock, number: '24/7', label: 'Support client' },
    { icon: Shield, number: '100%', label: 'Garantie qualité' },
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-tp-gray-800 mb-6">
            À propos de <span className="text-tp-green-500">TP N'SIKAN</span>
          </h2>
          <p className="text-xl text-tp-gray-600 max-w-3xl mx-auto">
            Depuis plus de 15 ans, TP N'SIKAN PROJET ESPOIR accompagne ses clients 
            dans la réalisation de leurs projets de construction et de rénovation 
            avec expertise, passion et innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-heading font-bold text-tp-gray-800 mb-6">
              Notre Mission
            </h3>
            <p className="text-lg text-tp-gray-600 mb-6 leading-relaxed">
              Chez TP N'SIKAN PROJET ESPOIR, nous croyons que chaque projet de construction 
              est unique et mérite une attention particulière. Notre mission est de transformer 
              vos rêves en réalité en alliant savoir-faire traditionnel et techniques modernes.
            </p>
            <p className="text-lg text-tp-gray-600 mb-8 leading-relaxed">
              Nous nous engageons à fournir des services de qualité supérieure, 
              dans le respect des délais et du budget, tout en maintenant les plus 
              hauts standards de sécurité et de durabilité.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tp-green-500 rounded-full"></div>
                <span className="text-tp-gray-700">Expertise reconnue dans le secteur</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tp-green-500 rounded-full"></div>
                <span className="text-tp-gray-700">Équipe de professionnels qualifiés</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tp-green-500 rounded-full"></div>
                <span className="text-tp-gray-700">Matériaux de qualité supérieure</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tp-green-500 rounded-full"></div>
                <span className="text-tp-gray-700">Respect de l'environnement</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Équipe TP N'SIKAN au travail"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-tp-burgundy-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Années d'expérience</div>
            </div>
          </motion.div>
        </div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tp-green-100 text-tp-green-500 rounded-full mb-4">
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-tp-gray-800 mb-2">{stat.number}</div>
              <div className="text-tp-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;