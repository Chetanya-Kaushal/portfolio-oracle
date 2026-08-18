import { useState, useEffect } from 'react'
import { Landing } from './components/Landing'
import { About } from './components/About'
import { WhatIDo } from './components/WhatIDo'
import { Career } from './components/Career'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { SocialIcons } from './components/SocialIcons'
import { Navbar } from './components/Navbar'
import { CustomCursor } from './components/CustomCursor'
import { Loading } from './components/Loading'
import { Work } from './components/Work'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame: number
    let start: number | null = null
    const animate = (ts: number) => {
      if (!start) start = ts
      const p = Math.min(Math.round(((ts - start) / 2500) * 100), 100)
      setProgress(p)
      if (p < 100) {
        frame = requestAnimationFrame(animate)
      } else {
        setTimeout(() => setLoading(false), 400)
      }
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  if (loading) {
    return <Loading progress={progress} />
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <CustomCursor />
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
  )
}

export default App
