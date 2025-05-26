import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="bg-slate-800 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="block">Building Excellence Since 2002</span>
            <span className="block text-orange-500 mt-2">Our Story & Values</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Company Image */}
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              className="w-full h-auto object-cover aspect-[4/3]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFYU08BawMHhtcrzC4E-8t90dL0gnL4PVaA&s"
              alt="Our team at work"
            />
            <div className="absolute inset-0 bg-orange-500 mix-blend-multiply opacity-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800 to-transparent"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Brief About */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Who We Are</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Founded in 2002, Build Master has grown from a local contractor to a regional leader in commercial and residential construction. Our team of dedicated professionals brings unparalleled expertise to every project, ensuring quality craftsmanship that stands the test of time.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-slate-700 bg-opacity-50 p-4 sm:p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">20+ Years of Excellence</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                With over two decades in the industry, we've completed more than 200 projects across the region. Our longevity speaks to our commitment to quality and client satisfaction.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Our Mission & Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg"><strong>Quality First:</strong> We never compromise on materials or craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg"><strong>Client Focus:</strong> Your vision drives every decision we make</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base sm:text-lg"><strong>Innovation:</strong> We embrace new technologies to build smarter</span>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="pt-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Licenses & Certifications</h3>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="bg-slate-700 px-3 sm:px-4 py-2 rounded-md text-orange-500 text-sm font-medium">OSHA Certified</div>
                <div className="bg-slate-700 px-3 sm:px-4 py-2 rounded-md text-orange-500 text-sm font-medium">LEED Accredited</div>
                <div className="bg-slate-700 px-3 sm:px-4 py-2 rounded-md text-orange-500 text-sm font-medium">State Licensed</div>
                <div className="bg-slate-700 px-3 sm:px-4 py-2 rounded-md text-orange-500 text-sm font-medium">Bonded & Insured</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;