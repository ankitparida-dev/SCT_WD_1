import React, { useState, useEffect } from 'react'

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      setMobileMenu(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'worldcups', label: 'World Cups', icon: 'fa-trophy' },
    { id: 'matches', label: 'Matches', icon: 'fa-cricket-ball' },
    { id: 'statistics', label: 'Statistics', icon: 'fa-chart-line' },
    { id: 'teams', label: 'Teams', icon: 'fa-users' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <i className="fas fa-cricket-ball"></i>
          <span>CRICKET ARCHIVE</span>
        </div>
        
        <button 
          className={`menu-btn ${mobileMenu ? 'active' : ''}`} 
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <i className={`fas ${mobileMenu ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
        <ul className={`nav-menu ${mobileMenu ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
                {hoveredItem === item.id && <span className="hover-effect"></span>}
                {activeSection === item.id && <span className="active-indicator"></span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar