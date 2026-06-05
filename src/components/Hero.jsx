import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200',
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200',
    'https://images.unsplash.com/photo-1624526267942-ab0a983302e3?w=1200'
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
            <div className="stat-number">13</div>
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