import React from 'react'
import logo from '../assets/logo.png'  // Import your logo

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 70
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img 
              src={logo} 
              alt="CricVault Logo" 
              className="footer-logo"
            />
            <p style={{ marginTop: '10px' }}>Where cricket history lives.</p>
            <p style={{ fontSize: '0.9rem', marginTop: '5px', opacity: 0.7 }}>
              Preserving the greatest moments in cricket.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a className="footer-link" onClick={() => scrollTo('home')}>Home</a>
            <a className="footer-link" onClick={() => scrollTo('worldcups')}>World Cups</a>
            <a className="footer-link" onClick={() => scrollTo('matches')}>Matches</a>
            <a className="footer-link" onClick={() => scrollTo('stats')}>Stats</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p><i className="fas fa-envelope"></i> info@cricvault.com</p>
            <p><i className="fas fa-phone"></i> +1 (800) 123-4567</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 CricVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer