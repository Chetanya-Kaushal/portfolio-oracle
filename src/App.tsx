import { useState, useEffect } from 'react'
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

  useEffect(() => {
    let frame: number
    let start: number | null = null
    const duration = 2500

    const animate = (ts: number) => {
      if (!start) start = ts
      const elapsed = ts - start
      const progress = Math.min(Math.round((elapsed / duration) * 100), 100)
      setLoadingProgress(progress)
      if (progress < 100) {
        frame = requestAnimationFrame(animate)
      } else {
        setTimeout(() => setLoading(false), 400)
      }
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  if (loading) {
    return (
      <>
        <CustomCursor />
        <Loading progress={loadingProgress} />
      </>
    )
  }

  return (
    <>
      <CustomCursor />
      <div className="main-content">
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
    </>
  )
}

export default App
