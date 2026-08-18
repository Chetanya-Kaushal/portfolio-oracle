import { useState, useCallback } from 'react'
import BootSequence from './components/BootSequence'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Journey from './components/Journey'
import Arsenal from './components/Arsenal'
import Projects from './components/Projects'
import Network from './components/Network'
import Contact from './components/Contact'
import SEOSection from './components/SEOSection'
import ScrollStory from './components/ScrollStory'
import ChapterNav from './components/ChapterNav'
import Footer from './components/Footer'

export default function App() {
  const [booted, setBooted] = useState(false)

  const handleBootComplete = useCallback(() => {
    setBooted(true)
  }, [])

  return (
    <div className="bg-oracle-black min-h-screen">
      {!booted && <BootSequence onComplete={handleBootComplete} />}

      <div
        className={`transition-opacity duration-700 ${
          booted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <ChapterNav />

        <main>
          <div id="hero">
            <Hero />
          </div>
          <Mission />
          <Journey />
          <Arsenal />
          <Projects />
          <ScrollStory />
          <Network />
          <Contact />
          <SEOSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}
