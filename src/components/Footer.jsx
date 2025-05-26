import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaHardHat } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-white pt-8 sm:pt-12 pb-4 sm:pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Company Info */}
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">              
              <FaHardHat className="text-orange-500 text-2xl sm:text-3xl mr-2" />
              <h2 className="text-xl sm:text-2xl font-bold">BuildMaster</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Building dreams into reality since 1995. We deliver quality construction services with integrity and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                <FaFacebook className="text-lg sm:text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                <FaTwitter className="text-lg sm:text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                <FaInstagram className="text-lg sm:text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold border-b border-orange-500 pb-2">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-orange-500 transition">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition">About Us</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-orange-500 transition">Our Projects</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition">Services</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition">Contact</button></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold border-b border-orange-500 pb-2">Our Services</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition">Residential Construction</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition">Commercial Buildings</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition">Renovation</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition">Interior Design</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition">Landscaping</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-orange-500 transition">Construction Consulting</button></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold border-b border-orange-500 pb-2">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span>123 Construction Ave, Building City, BC 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-orange-500 mr-3" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <span>info@buildmaster.com</span>
              </li>
            </ul>
            <div className="pt-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-md transition text-sm sm:text-base"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-slate-700 pt-4 sm:pt-6 text-center text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>© {new Date().getFullYear()} BuildMaster Construction. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition">Sitemap</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer