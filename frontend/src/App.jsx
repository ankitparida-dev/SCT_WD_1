import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorldCups from './components/WorldCups'
import Matches from './components/Matches'
import Statistics from './components/Statistics'
import Teams from './components/Teams'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorldCups />
      <Matches />
      <Statistics />
      <Teams />
      <Footer />
    </>
  )
}

export default App