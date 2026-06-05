import React, { useState } from 'react'

const Matches = () => {
  const [selectedMatch, setSelectedMatch] = useState(null)

  const matches = [
    { 
      match: "India vs Sri Lanka", 
      year: "2011 Final", 
      venue: "Wankhede Stadium, Mumbai",
      image: "https://images.unsplash.com/photo-1624526267942-ab0a983302e3?w=500",
      description: "MS Dhoni's iconic six sealed India's second World Cup title after 28 years.",
      highlights: "MS Dhoni 91*, Gambhir 97, 6 fours in final over"
    },
    { 
      match: "England vs New Zealand", 
      year: "2019 Final", 
      venue: "Lord's, London",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500",
      description: "The greatest ODI ever played. Super Over, boundary count, and heartbreak for NZ.",
      highlights: "Super Over tie, Boundary count rule, Stokes 84*"
    },
    { 
      match: "India vs Pakistan", 
      year: "2007 T20 Final", 
      venue: "Kingsmead, Durban",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500",
      description: "Joginder Sharma's final over drama. India won by 5 runs.",
      highlights: "Misbah-ul-Haq's scoop, Joginder's last over"
    },
    { 
      match: "Australia vs New Zealand", 
      year: "2015 Final", 
      venue: "MCG, Melbourne",
      image: "https://images.unsplash.com/photo-1624526267942-ab0a983302e3?w=500",
      description: "Australia dominated at home with Starc, Faulkner, and Warner's brilliance.",
      highlights: "Starc's early wickets, Warner's 178"
    }
  ]

  return (
    <section id="matches" className="section matches-section">
      <div className="container">
        <h2 className="section-title">Greatest Matches of All Time</h2>
        <div className="matches-grid">
          {matches.map((match, index) => (
            <div 
              key={index} 
              className="match-card" 
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
              onClick={() => setSelectedMatch(selectedMatch === index ? null : index)}
            >
              <div className="match-image">
                <img src={match.image} alt={match.match} />
                <div className="match-overlay">
                  <i className="fas fa-play-circle"></i>
                </div>
              </div>
              <div className="match-content">
                <h3>{match.match}</h3>
                <p className="match-year">{match.year}</p>
                <p><i className="fas fa-map-marker-alt"></i> {match.venue}</p>
                <p className="match-description">{match.description}</p>
                {selectedMatch === index && (
                  <div className="match-highlights">
                    <i className="fas fa-star"></i> {match.highlights}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Matches