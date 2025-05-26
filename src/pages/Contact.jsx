import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaHardHat } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert("Please fill out all required fields");
      return;
    }
  
    setIsSubmitting(true);
  
    // Initialize EmailJS with your Public Key (from .env)
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.project,
        message: formData.message
      }
    )
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-slate-800">
      {/* Hero Section */}
      <div className="relative bg-slate-800 overflow-hidden h-[50vh]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Construction site"
          />
          <div className="absolute inset-0 bg-slate-800 mix-blend-multiply"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="block">Let's Build</span>
              <span className="block text-orange-500 mt-2">Something Together</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-slate-700 rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 text-green-300 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500 text-red-300 rounded-md">
                There was an error sending your message. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name *
                </label>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  onChange={handleChange}
                  value={formData.phone}
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-1">
                  Project Type
                </label>
                <select
                  onChange={handleChange}
                  value={formData.project}
                  id="project"
                  name="project"
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="renovation">Renovation & Remodeling</option>
                  <option value="design">Architectural Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Ready to start your construction project? Reach out to our team for a free consultation. We're here to answer any questions and help bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-500/10 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Our Office</h3>
                  <p className="text-gray-300">123 Construction Ave</p>
                  <p className="text-gray-300">Los Angeles, CA 90001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-500/10 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="text-gray-300">(555) 123-4567</p>
                  <p className="text-gray-300">Mon-Fri, 8am-5pm PST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-500/10 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-300">info@constructionco.com</p>
                  <p className="text-gray-300">response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-8">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-64"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605.294848184607!2d74.3131833!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd7bdc89b5%3A0x9c1e3210e5e7a6e4!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;