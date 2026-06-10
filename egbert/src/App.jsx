import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Services from './pages/Services'
import Next from './pages/Next'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Next />
    </>
  )
}

export default App
