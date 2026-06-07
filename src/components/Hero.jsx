import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    'https://cdn.wionews.com/sites/default/files/2023/11/19/394159-1-2023-11-19t231932341.png',
    'https://www.jansatta.com/wp-content/uploads/2025/06/Players-of-South-Africa-lift-the-mace-after-winning-the-ICC-World-Test-Championship-Final-2025.jpg',
    'https://gknow.in/wp-content/uploads/2026/03/India-Wins-ICC-Men-T20-Cricket-World-Cup-Title-1.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    document.getElementById('worldcups')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div 
          className="hero-slider"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {heroImages.map((img, index) => (
            <div key={index} className="hero-slide">
              <img src={img} alt={`Cricket ${index + 1}`} />
              <div className="hero-overlay"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge" data-aos="fade-down">
          <i className="fas fa-trophy"></i> ICC Cricket World Cup Archive <i className="fas fa-crown"></i>
        </div>
        
        <h1 data-aos="fade-up" data-aos-delay="100">
          Relive Cricket's
          <span className="gradient-text"> Greatest Moments</span>
        </h1>
        
        <p data-aos="fade-up" data-aos-delay="200">
          Explore the rich history of Cricket World Cups, legendary matches,
          record-breaking performances, and iconic moments that shaped the sport.
        </p>
        
        <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">World Cups</div>
          </div>
          <div className="stat">
            <div className="stat-number">108</div>
            <div className="stat-label">Teams</div>
          </div>
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Matches</div>
          </div>
        </div>
        
        <button className="btn" onClick={scrollToNext} data-aos="fade-up" data-aos-delay="400">
          Explore History <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  )
}

export default Hero