import React from 'react'
import { teams } from '../data/cricketData'

const Teams = () => {
  return (
    <section id="teams">
      <div className="container">
        <h2 className="section-title">Legendary Teams</h2>
        <div className="teams-grid">
          {teams.map((team) => (
            <div key={team.id} className="team-card">
              <div className="team-flag">{team.flag}</div>
              <h3 className="team-name">{team.name}</h3>
              <p className="team-titles">{team.titles}</p>
              <p className="team-stars">⭐ {team.stars}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams