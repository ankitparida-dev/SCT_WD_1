import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div data-aos="fade-right">
            <h4><i className="fas fa-cricket-ball"></i> Cricket Archive</h4>
            <p>Preserving cricket's greatest moments and celebrating the sport's rich history since 1975.</p>
            <div className="social-links">
              <div className="social-icon"><i className="fab fa-twitter"></i></div>
              <div className="social-icon"><i className="fab fa-facebook"></i></div>
              <div className="social-icon"><i className="fab fa-instagram"></i></div>
              <div className="social-icon"><i className="fab fa-youtube"></i></div>
            </div>
          </div>
          
          <div data-aos="fade-up">
            <h4>Quick Links</h4>
            <button className="footer-link" onClick={() => scrollToSection('home')}>Home</button>
            <button className="footer-link" onClick={() => scrollToSection('worldcups')}>World Cups</button>
            <button className="footer-link" onClick={() => scrollToSection('matches')}>Matches</button>
            <button className="footer-link" onClick={() => scrollToSection('statistics')}>Statistics</button>
            <button className="footer-link" onClick={() => scrollToSection('teams')}>Teams</button>
          </div>
          
          <div data-aos="fade-left">
            <h4>Contact Info</h4>
            <p><i className="fas fa-envelope"></i> info@cricketarchive.com</p>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
            <p><i className="fas fa-map-marker-alt"></i> Cricket House, Lord's, London</p>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} Cricket Archive. All rights reserved. | Task 1: Responsive Landing Page</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer