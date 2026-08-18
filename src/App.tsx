import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { CustomCursor } from './components/CustomCursor'
import { Loading } from './components/Loading'
import { Navbar } from './components/Navbar'
import { Landing } from './components/Landing'
import { About } from './components/About'
import { WhatIDo } from './components/WhatIDo'
import { Career } from './components/Career'
import { Work } from './components/Work'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { SocialIcons } from './components/SocialIcons'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to({}, {
      duration: 2.5,
      onUpdate: function() {
        setLoadingProgress(Math.round(this.progress() * 100))
      },
      onComplete: () => {
        setTimeout(() => setLoading(false), 400)
      }
    })
  }, [])

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(mainRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
    }
  }, [loading])

  return (
    <>
      <CustomCursor />
      {loading && <Loading progress={loadingProgress} />}
      {!loading && (
        <div ref={mainRef} style={{ opacity: 0 }}>
          <SocialIcons />
          <Navbar />
          <Landing />
          <About />
          <WhatIDo />
          <Career />
          <Work />
          <TechStack />
          <Contact />
        </div>
      )}
    </>
  )
}

export default App
