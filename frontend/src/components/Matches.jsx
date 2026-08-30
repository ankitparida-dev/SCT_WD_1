import React, { useState } from 'react'
import { matches } from '../data/cricketData'

const Matches = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMatches = matches.filter((match) =>
    match.match.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.year.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="matches" style={{ background: '#f0f2f5' }}>
      <div className="container">
        <h2 className="section-title">Greatest Matches</h2>

        <input
          type="text"
          className="search-bar"
          placeholder="🔍 Search matches by team, venue, or year..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="matches-grid">
          {filteredMatches.map((match) => (
            <div key={match.id} className="match-card">
              <h3>{match.match}</h3>
              <p className="match-year">{match.year}</p>
              <p className="match-venue">
                <i className="fas fa-map-marker-alt"></i> {match.venue}
              </p>
              <p className="match-description">{match.description}</p>
              <p className="match-score">{match.score}</p>
            </div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <p style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>
            No matches found for "{searchTerm}"
          </p>
        )}
      </div>
    </section>
  )
}

export default Matches