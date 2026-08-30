import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'  // Import your logo

const Hero = () => {
  const [badgeText, setBadgeText] = useState('🏆 World Champions')
  const badges = ['🏆 World Champions', '⭐ Legendary Moments', '🔥 Record Breakers']

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % badges.length
      setBadgeText(badges[index])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToWorldCups = () => {
    const element = document.getElementById('worldcups')
    if (element) {
      const offset = 70
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">{badgeText}</div>
        
        {/* Hero Logo */}
        <img 
          src={logo} 
          alt="CricVault Logo" 
          className="hero-logo"
        />
        
        <p className="hero-tagline">WHERE CRICKET HISTORY LIVES</p>
        <p>Reliving the greatest moments in cricket history. From legendary finals to record-breaking performances.</p>
        <button className="btn" onClick={scrollToWorldCups}>
          Explore Now <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  )
}

export default Hero