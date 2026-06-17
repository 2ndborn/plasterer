import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Services from './pages/Services'
import Next from './pages/Next'
import BackToTop from './components/BackToTop'
import FooterComponent from './components/FooterComponent'

function App() {

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
