import React from 'react'
import { stats } from '../data/cricketData'

const Statistics = () => {
  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <h2 className="section-title">Records & Statistics</h2>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <i className={`fas ${stat.icon}`} style={{ color: stat.color }}></i>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.title}</div>
              <div className="stat-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics