import React from 'react'

const WorldCups = () => {
  const tournaments = [
    { 
      title: "ODI World Cup", 
      years: "1975-Present", 
      editions: "13 Editions", 
      icon: "fa-baseball-ball", 
      color: "#e74c3c",
      image: "https://tse2.mm.bing.net/th/id/OIP.FugH7uAXOBLXZzDZblKs-QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "The pinnacle of ODI cricket"
    },
    { 
      title: "T20 World Cup", 
      years: "2007-Present", 
      editions: "10 Editions", 
      icon: "fa-bolt", 
      color: "#f39c12",
      image: "https://www.newsband.in/uploads/blog_main_img/2b4e0b9b5d05c3228f12d323ad9e8997_1.jpg",
      description: "Fast-paced excitement"
    },
    { 
      title: "World Test Championship", 
      years: "2019-Present", 
      editions: "4 Editions", 
      icon: "fa-shield-alt", 
      color: "#27ae60",
      image: "https://tse2.mm.bing.net/th/id/OIP.qReO9-CeB4v0goQ-EeYQugHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
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