import React from 'react'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div>
      <Topbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
