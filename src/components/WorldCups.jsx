import React from 'react'

const WorldCups = () => {
  const tournaments = [
    { 
      title: "ODI World Cup", 
      years: "1975-2023", 
      editions: "13 Editions", 
      icon: "fa-baseball-ball", 
      color: "#e74c3c",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400",
      description: "The pinnacle of ODI cricket"
    },
    { 
      title: "T20 World Cup", 
      years: "2007-2024", 
      editions: "8 Editions", 
      icon: "fa-bolt", 
      color: "#f39c12",
      image: "https://images.unsplash.com/photo-1624526267942-ab0a983302e3?w=400",
      description: "Fast-paced excitement"
    },
    { 
      title: "Test Championship", 
      years: "2019-Present", 
      editions: "2 Editions", 
      icon: "fa-shield-alt", 
      color: "#27ae60",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400",
      description: "Ultimate test of skill"
    }
  ]

  return (
    <section id="worldcups" className="section">
      <div className="container">
        <h2 className="section-title">World Cup Categories</h2>
        <div className="cards-grid">
          {tournaments.map((item, index) => (
            <div key={index} className="card" data-aos="flip-left" data-aos-delay={index * 100}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <i className={`fas ${item.icon}`} style={{ color: item.color }}></i>
                <h3>{item.title}</h3>
                <p className="match-year">{item.years}</p>
                <p>{item.editions}</p>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorldCups