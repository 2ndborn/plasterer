import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
    </>
  )
}

export default App
