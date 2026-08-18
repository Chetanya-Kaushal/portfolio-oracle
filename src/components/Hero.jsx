import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NeuralNetwork from './NeuralNetwork'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Oracle HCM Techno-functional Consultant & AI Agent Architect'
  const [matrixChars, setMatrixChars] = useState([])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'
    const generated = Array.from({ length: 50 }, () => ({
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }))
    setMatrixChars(generated)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.2, stagger: 0.1 })
      gsap.from('.hero-title', { opacity: 0, y: 80, duration: 1.2, ease: 'power3.out', delay: 0.4 })
      gsap.from('.hero-subtitle', { opacity: 0, y: 40, duration: 1, ease: 'power3.out', delay: 0.9 })
      gsap.from('.hero-stat', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out', delay: 1.2, stagger: 0.1 })
      gsap.from('.hero-cta', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 1.5, stagger: 0.1 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <NeuralNetwork />

      {/* Matrix rain background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {matrixChars.map((c, i) => (
          <span
            key={i}
            className="absolute font-mono text-neural-green text-xs"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              animation: `matrixFall ${c.duration}s linear ${c.delay}s infinite`,
            }}
          >
            {c.char}
          </span>
        ))}
      </div>

      {/* Oracle hex grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hex" width="10" height="17.32" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="5,0 10,2.89 10,8.66 5,11.55 0,8.66 0,2.89" fill="none" stroke="#C74634" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(199,70,52,0.1)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-oracle-red/30 bg-oracle-surface/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neural-green animate-pulse" />
            <span className="text-text-muted text-xs font-mono tracking-widest uppercase">Oracle AI Agent Studio</span>
          </div>
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neural-blue/30 bg-oracle-surface/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neural-blue animate-pulse" />
            <span className="text-text-muted text-xs font-mono tracking-widest uppercase">Gen AI</span>
          </div>
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neural-purple/30 bg-oracle-surface/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neural-purple animate-pulse" />
            <span className="text-text-muted text-xs font-mono tracking-widest uppercase">Oracle Cloud Fusion</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="hero-title font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-4">
          <span className="text-text-primary">CHETANYA</span>
          <br />
          <span className="bg-gradient-to-r from-oracle-red via-oracle-red-glow to-neural-blue bg-clip-text text-transparent">KAUSHAL</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle font-mono text-base md:text-lg lg:text-xl text-text-secondary mb-10 h-8">
          {displayText}
          <span className="inline-block w-0.5 h-5 ml-1 bg-oracle-red animate-pulse" />
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          <div className="hero-stat flex items-center gap-2 text-text-muted text-sm">
            <svg className="w-4 h-4 text-oracle-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Noida, India
          </div>
          <div className="hero-stat flex items-center gap-2 text-text-muted text-sm">
            <svg className="w-4 h-4 text-neural-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            Oracle Cloud Fusion
          </div>
          <div className="hero-stat flex items-center gap-2 text-text-muted text-sm">
            <svg className="w-4 h-4 text-neural-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            AI Agent Architect
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#mission" className="hero-cta group relative px-8 py-4 font-display text-sm font-semibold tracking-widest uppercase rounded-full border border-oracle-red/50 text-oracle-red hover:bg-oracle-red hover:text-white transition-all duration-300 cursor-pointer">
            <span className="relative z-10">Enter the Matrix</span>
            <div className="absolute inset-0 rounded-full bg-oracle-red/10 blur-xl group-hover:bg-oracle-red/20 transition-all" />
          </a>
          <a href="#projects" className="hero-cta px-8 py-4 font-display text-sm font-semibold tracking-widest uppercase rounded-full border border-hairline-light text-text-secondary hover:border-text-secondary hover:text-text-primary transition-all duration-300 cursor-pointer">
            View Agents
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-text-muted text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-oracle-red/50 to-transparent" />
      </div>

      <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
