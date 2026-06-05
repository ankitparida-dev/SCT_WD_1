import React from 'react'

const Teams = () => {
  const teams = [
    { name: "India", titles: "2 ODI + 1 T20", stars: "Kohli, Sharma, Dhoni", flag: "🇮🇳", color: "#ff9933", image: "https://images.unsplash.com/photo-1624526267942-ab0a983302e3?w=300" },
    { name: "Australia", titles: "5 ODI + 1 T20", stars: "Ponting, Gilchrist, Warne", flag: "🇦🇺", color: "#ffd700", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300" },
    { name: "England", titles: "1 ODI + 2 T20", stars: "Stokes, Buttler, Flintoff", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", color: "#c8102e", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300" },
    { name: "Pakistan", titles: "1 ODI + 1 T20", stars: "Imran, Wasim, Afridi", flag: "🇵🇰", color: "#01411c", image: "https://images.unsplash.com/photo-1624526267942-ab0a983302e3?w=300" },
    { name: "South Africa", titles: "Semifinalists", stars: "ABD, Steyn, Kallis", flag: "🇿🇦", color: "#007a4d", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300" },
    { name: "New Zealand", titles: "Runners-up", stars: "Williamson, Boult, Taylor", flag: "🇳🇿", color: "#000000", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300" }
  ]

  return (
    <section id="teams" className="section">
      <div className="container">
        <h2 className="section-title">Legendary Teams</h2>
        <div className="teams-grid">
          {teams.map((team, index) => (
            <div key={index} className="team-card" data-aos="flip-right" data-aos-delay={index * 100}>
              <div className="team-image">
                <img src={team.image} alt={team.name} />
                <div className="team-flag-overlay">{team.flag}</div>
              </div>
              <div className="team-content">
                <h3 className="team-name">{team.name}</h3>
                <p className="match-year">{team.titles}</p>
                <div className="team-stars">
                  <i className="fas fa-star"></i> {team.stars}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams