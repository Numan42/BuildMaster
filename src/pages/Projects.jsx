import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      name: 'Hillside Residence',
      description: 'Luxury hillside home with panoramic views and custom finishes',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Beverly Hills, CA',
      date: 'Jun 2023',
      category: 'Residential'
    },
    {
      id: 2,
      name: 'Downtown Office Complex',
      description: 'Five-story commercial building with retail space and modern amenities',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Los Angeles, CA',
      date: 'Mar 2023',
      category: 'Commercial'
    },
    {
      id: 3,
      name: 'Heritage Home Restoration',
      description: 'Complete restoration of a 1920s craftsman home preserving original details',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Pasadena, CA',
      date: 'Jan 2023',
      category: 'Renovation'
    },
    {
      id: 4,
      name: 'Modern Art Gallery',
      description: 'Contemporary architectural design with innovative lighting solutions',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      location: 'Santa Monica, CA',
      date: 'Nov 2022',
      category: 'Commercial'
    },
    {
      id: 5,
      name: 'Suburban Development',
      description: '12-unit residential community with shared amenities and landscaping',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Irvine, CA',
      date: 'Sep 2022',
      category: 'Residential'
    },
    {
      id: 6,
      name: 'Industrial Warehouse',
      description: '50,000 sq ft warehouse with office space and loading facilities',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Long Beach, CA',
      date: 'Jul 2022',
      category: 'Commercial'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="bg-slate-800 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            <span className="block">Our Recent</span>
            <span className="block text-orange-500 mt-2">Construction Projects</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-orange-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-300 px-4">
            Explore our portfolio of completed projects showcasing our quality craftsmanship.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                activeFilter === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="group relative bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                layout
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    alt={project.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{project.name}</h3>
                    <span className="text-xs sm:text-sm text-orange-500 bg-orange-500/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{project.description}</p>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                    <span>{project.location}</span>
                    <span>{project.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border border-orange-500 text-sm sm:text-base font-medium rounded-md text-orange-500 bg-orange-500/10 hover:bg-orange-500/20 transition-colors duration-200"
          >
            View All Projects
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;