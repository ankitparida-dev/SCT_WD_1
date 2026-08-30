import React from 'react'
import { tournaments } from '../data/cricketData'

const WorldCups = () => {
  return (
    <section id="worldcups">
      <div className="container">
        <h2 className="section-title">World Cup Categories</h2>
        <div className="cards-grid">
          {tournaments.map((item) => (
            <div key={item.id} className="card">
              <i className={`fas ${item.icon}`} style={{ color: item.color }}></i>
              <h3>{item.title}</h3>
              <p>{item.years}</p>
              <p style={{ color: '#888' }}>{item.editions} Editions</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorldCups