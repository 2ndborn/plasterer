import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Services from './pages/Services'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services />
    </>
  )
}

export default App
