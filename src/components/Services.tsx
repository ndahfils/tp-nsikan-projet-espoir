import React from 'react';
import { Home, Wrench, Building, Paintbrush, Hammer, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Home,
      title: 'Construction Résidentielle',
      description: 'Maisons individuelles, villas et résidences sur mesure avec des matériaux de qualité.',
      features: ['Plans personnalisés', 'Suivi de chantier', 'Garantie décennale'],
    },
    {
      icon: Building,
      title: 'Projets Commerciaux',
      description: 'Bureaux, commerces et bâtiments industriels adaptés à vos besoins professionnels.',
      features: ['Études techniques', 'Respect des normes', 'Livraison clé en main'],
    },
    {
      icon: Wrench,
      title: 'Rénovation Complète',
      description: 'Transformation et modernisation de vos espaces existants avec expertise.',
      features: ['Diagnostic complet', 'Rénovation énergétique', 'Finitions haut de gamme'],
    },
    {
      icon: Paintbrush,
      title: 'Aménagement Intérieur',
      description: 'Design d\'intérieur, décoration et aménagement sur mesure pour votre confort.',
      features: ['Design personnalisé', 'Mobilier sur mesure', 'Conseils déco'],
    },
    {
      icon: Hammer,
      title: 'Gros Œuvre',
      description: 'Fondations, maçonnerie, charpente et tous travaux de structure.',
      features: ['Études de sol', 'Béton armé', 'Charpente bois/métal'],
    },
    {
      icon: Zap,
      title: 'Installations Techniques',
      description: 'Plomberie, électricité, chauffage et climatisation par des experts.',
      features: ['Normes électriques', 'Plomberie moderne', 'Systèmes économiques'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-tp-gray-800 mb-6">
            Nos <span className="text-tp-green-500">Services</span>
          </h2>
          <p className="text-xl text-tp-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour tous vos projets de construction, 
            rénovation et aménagement, avec l'expertise et la qualité TP N'SIKAN.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group hover:bg-white"
              whileHover={{ scale: 1.02 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tp-green-500 text-white rounded-xl mb-6 group-hover:bg-tp-burgundy-500 transition-colors duration-300">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-tp-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-tp-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-tp-green-500 rounded-full"></div>
                    <span className="text-tp-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                className="mt-6 text-tp-green-500 font-semibold hover:text-tp-burgundy-500 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                En savoir plus →
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-tp-green-500 text-white rounded-2xl p-12">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour un devis gratuit et personnalisé
            </p>
            <motion.button
              className="bg-white text-tp-green-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;