import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'  // Import your logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 70
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'worldcups', label: 'World Cups' },
    { id: 'matches', label: 'Matches' },
    { id: 'stats', label: 'Stats' },
    { id: 'teams', label: 'Teams' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollTo('home')}>
          <img 
            src={logo} 
            alt="CricVault Logo" 
            className="logo-image"
          />
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button className="nav-item" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar