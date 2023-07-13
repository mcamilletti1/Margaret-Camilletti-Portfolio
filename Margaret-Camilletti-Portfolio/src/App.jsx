import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {

  return (
   <div className="App">
    <header className="app-header">
      <Header />
    </header>
    <main>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>

   </div>
  )
}

export default App
