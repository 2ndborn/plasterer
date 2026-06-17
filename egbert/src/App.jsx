import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Services from './pages/Services'
import Next from './pages/Next'
import BackToTop from './components/BackToTop'
import FooterComponent from './components/FooterComponent'

function App() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }
    setVh();
    window.addEventListener('resize', setVh)

    return () => window.removeEventListener('resize', setVh);
  }, [])

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Next />
      <BackToTop />
      <FooterComponent />
    </>
  )
}

export default App
