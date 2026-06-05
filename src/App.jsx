import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorldCups from './components/WorldCups'
import Matches from './components/Matches'
import Statistics from './components/Statistics'
import Teams from './components/Teams'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'worldcups', 'matches', 'statistics', 'teams', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Interactive particle background
  useEffect(() => {
    const createParticles = () => {
      const container = document.createElement('div')
      container.className = 'particles'
      document.body.appendChild(container)
      
      for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        const size = Math.random() * 6 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 20}s`
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`
        particle.style.background = `radial-gradient(circle, rgba(255,${Math.random() * 100 + 100},${Math.random() * 50}, 0.8), transparent)`
        container.appendChild(particle)
      }
    }
    
    createParticles()
  }, [])

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <Hero />
      <WorldCups />
      <Matches />
      <Statistics />
      <Teams />
      <Footer />
    </div>
  )
}

export default App