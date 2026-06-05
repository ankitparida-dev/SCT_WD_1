import React, { useEffect, useRef, useState } from 'react'

const Counter = ({ target, label, detail, icon, color }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0
          const duration = 2000
          const step = (timestamp) => {
            if (!start) start = timestamp
            const progress = timestamp - start
            const percentage = Math.min(progress / duration, 1)
            setCount(Math.floor(percentage * target))
            if (progress < duration) {
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (counterRef.current) {
      observer.observe(counterRef.current)
    }
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={counterRef} className="stat-card" data-aos="flip-up">
      <i className={`fas ${icon}`} style={{ color, fontSize: '2.5rem' }}></i>
      <div className="stat-value">{count}+</div>
      <div className="stat-label">{label}</div>
      <div className="stat-detail">{detail}</div>
    </div>
  )
}

const Statistics = () => {
  const stats = [
    { target: 6, label: "Most Titles", detail: "Australia", icon: "fa-trophy", color: "#ffd700" },
    { target: 2278, label: "Highest Run Scorer", detail: "Sachin Tendulkar", icon: "fa-running", color: "#ff6b6b" },
    { target: 71, label: "Leading Wicket Taker", detail: "Muttiah Muralitharan", icon: "fa-bowling-ball", color: "#4ecdc4" },
    { target: 237, label: "Highest Score", detail: "Martin Guptill", icon: "fa-chart-line", color: "#ffd93d" }
  ]

  return (
    <section id="statistics" className="section stats-section">
      <div className="container">
        <h2 className="section-title">Records & Statistics</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Counter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics