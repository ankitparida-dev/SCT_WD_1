import React from 'react'

const Teams = () => {
  const teams = [
    { name: "India", titles: "2 ODI + 3 T20", stars: "Kohli, Sharma, Dhoni", flag: "🇮🇳", color: "#ff9933", image: "https://cdn.bleacherreport.net/images/team_logos/328x328/india_cricket.png" },
    { name: "Australia", titles: "6 ODI + 1 T20 + 1 WTC", stars: "Ponting, Gilchrist, Warne", flag: "🇦🇺", color: "#ffd700", image: "https://fantasykhiladi.com/wp-content/uploads/2025/02/Cricket-Australia.webp" },
    { name: "England", titles: "1 ODI + 2 T20", stars: "Stokes, Buttler, Flintoff", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", color: "#c8102e", image: "https://tse3.mm.bing.net/th/id/OIP.RV4ovMTGYnQk9WF4VhUYZwHaMq?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Pakistan", titles: "1 ODI + 1 T20", stars: "Imran, Wasim, Afridi", flag: "🇵🇰", color: "#01411c", image: "https://th.bing.com/th/id/OIP.HvrYH9GwIKg05_rB6Z8TVQHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "South Africa", titles: "1 WTC", stars: "ABD, Steyn, Kallis", flag: "🇿🇦", color: "#007a4d", image: "https://vignette.wikia.nocookie.net/logopedia/images/c/c9/South-africa-cricket-logo-tattoo112.jpg/revision/latest?cb=20180126224529" },
    { name: "New Zealand", titles: "1 WTC", stars: "Williamson, Boult, Taylor", flag: "🇳🇿", color: "#000000", image: "https://wallpapers.com/images/hd/new-zealand-cricket-fern-leaf-logo-yp485fkm0a10v020.jpg" }
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