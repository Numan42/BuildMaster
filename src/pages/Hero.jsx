import React from 'react';
import { motion } from 'framer-motion';

const ConstructionHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="relative bg-slate-800 overflow-hidden h-[95vh]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Construction site"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-slate-800 mix-blend-multiply"></div>
      </div>

      {/* Main content centered vertically */}
      <motion.div 
        className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            variants={itemVariants}
          >
            Building Your Vision, <span className="text-orange-500">Brick by Brick</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 max-w-3xl mx-auto text-xl text-gray-300"
            variants={itemVariants}
          >
            Premium construction services with over 20 years of experience. We deliver quality, safety, and innovation in every project we undertake.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get a Free Quote
            </motion.a>
            <motion.a
              href="#services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 bg-opacity-15 hover:bg-opacity-25 transition-colors duration-200"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Our Services
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative gradient at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </div>
  );
};

export default ConstructionHero;