import React, { useState, useEffect } from 'react'
import { FaHardHat } from 'react-icons/fa'

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-800/95 backdrop-blur-sm shadow-lg' : 'bg-slate-800'
    }`}>
      <nav className='flex justify-between items-center px-4 md:px-10 py-4 max-w-7xl mx-auto'>
        <div className='text-white flex items-center cursor-pointer' onClick={() => scrollToSection('hero')}>
          <FaHardHat className="text-orange-500 text-3xl mr-2" />
          <h1 className='text-2xl text-orange-400 font-bold'>Build Master</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex text-white gap-6 text-lg'>
          <button onClick={() => scrollToSection('hero')} className='hover:text-orange-500 transition'>Home</button>
          <button onClick={() => scrollToSection('about')} className='hover:text-orange-500 transition'>About Us</button>
          <button onClick={() => scrollToSection('services')} className='hover:text-orange-500 transition'>Services</button>
          <button onClick={() => scrollToSection('projects')} className='hover:text-orange-500 transition'>Projects</button>
          <button onClick={() => scrollToSection('contact')} className='hover:text-orange-500 transition'>Contact Us</button>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button 
          className='md:hidden text-white focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-slate-700`}>
        <div className='flex flex-col space-y-3 text-white px-4 py-2'>
          <button onClick={() => scrollToSection('hero')} className='hover:text-orange-500 transition py-2'>Home</button>
          <button onClick={() => scrollToSection('about')} className='hover:text-orange-500 transition py-2'>About Us</button>
          <button onClick={() => scrollToSection('services')} className='hover:text-orange-500 transition py-2'>Services</button>
          <button onClick={() => scrollToSection('projects')} className='hover:text-orange-500 transition py-2'>Projects</button>
          <button onClick={() => scrollToSection('contact')} className='hover:text-orange-500 transition py-2'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Topbar