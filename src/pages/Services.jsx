import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Residential Construction',
      description: 'Custom home building and residential developments with personalized attention to detail.'
    },
    {
      icon: '🏢',
      title: 'Commercial Construction',
      description: 'From office buildings to retail spaces, we deliver commercial projects on time and on budget.'
    },
    {
      icon: '🛠️',
      title: 'Renovation & Remodeling',
      description: 'Transforming existing spaces to meet modern needs while preserving structural integrity.'
    },
    {
      icon: '📐',
      title: 'Architectural Design',
      description: 'Innovative design solutions that blend functionality with aesthetic appeal.'
    },
    {
      icon: '🧱',
      title: 'Masonry & Concrete Work',
      description: 'Durable and beautiful stone, brick, and concrete work for any project scale.'
    },
    {
      icon: '🛡️',
      title: 'Project Management',
      description: 'Comprehensive oversight from conception to completion ensuring seamless execution.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="bg-slate-800 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="block">Our Comprehensive</span>
            <span className="block text-orange-500 mt-2">Construction Services</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-orange-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-300 px-4">
            Delivering excellence across all aspects of construction with skilled craftsmanship and innovative solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600 hover:border-orange-500"
            >
              <div className="p-6 sm:p-8 h-full flex flex-col">
                <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base flex-grow">{service.description}</p>
                <div className="mt-4 sm:mt-6">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center text-orange-500 group-hover:text-orange-400 transition-colors duration-200 font-medium text-sm sm:text-base"
                  >
                    Learn more
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA at bottom */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-4">
            Have a project in mind? Let's discuss how we can bring it to life.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
          >
            Get a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;