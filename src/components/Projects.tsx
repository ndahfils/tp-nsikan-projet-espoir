import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('tous');

  const projects = [
    {
      id: 1,
      title: 'Villa Moderne Cocody',
      category: 'residentiel',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Cocody, Abidjan',
      date: '2024',
      description: 'Villa contemporaine de 300m² avec piscine et jardin paysager.',
    },
    {
      id: 2,
      title: 'Centre Commercial Plateau',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Plateau, Abidjan',
      date: '2023',
      description: 'Complexe commercial de 2000m² avec espaces de bureaux.',
    },
    {
      id: 3,
      title: 'Rénovation Maison Familiale',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Marcory, Abidjan',
      date: '2024',
      description: 'Rénovation complète d\'une maison des années 80.',
    },
    {
      id: 4,
      title: 'Résidence Les Palmiers',
      category: 'residentiel',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Riviera, Abidjan',
      date: '2023',
      description: 'Ensemble résidentiel de 12 villas avec services communs.',
    },
    {
      id: 5,
      title: 'Bureaux Entreprise Tech',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Zone 4, Abidjan',
      date: '2024',
      description: 'Espaces de bureaux modernes pour startup technologique.',
    },
    {
      id: 6,
      title: 'Transformation Loft',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Treichville, Abidjan',
      date: '2023',
      description: 'Transformation d\'un entrepôt en loft contemporain.',
    },
  ];

  const filters = [
    { key: 'tous', label: 'Tous les projets' },
    { key: 'residentiel', label: 'Résidentiel' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'renovation', label: 'Rénovation' },
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-tp-gray-800 mb-6">
            Nos <span className="text-tp-green-500">Réalisations</span>
          </h2>
          <p className="text-xl text-tp-gray-600 max-w-3xl mx-auto mb-12">
            Découvrez quelques-uns de nos projets récents qui témoignent 
            de notre expertise et de notre engagement envers l'excellence.
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-tp-green-500 text-white'
                    : 'bg-white text-tp-gray-600 hover:bg-tp-green-100'
                }`}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grille des projets */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              layout
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    className="opacity-0 group-hover:opacity-100 bg-white text-tp-green-500 p-3 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-tp-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-tp-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-tp-gray-500">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-tp-burgundy-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-tp-burgundy-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous nos projets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;