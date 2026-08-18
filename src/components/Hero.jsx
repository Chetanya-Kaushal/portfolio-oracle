import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NeuralNetwork from './NeuralNetwork'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Oracle HCM Techno-functional Consultant & AI Agent Architect'

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
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, { opacity: 0, y: 60, duration: 1.2, ease: 'power3.out', delay: 0.3 })
      gsap.from(subtitleRef.current, { opacity: 0, y: 40, duration: 1, ease: 'power3.out', delay: 0.8 })
      gsap.from(ctaRef.current, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 1.2 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <NeuralNetwork />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(199,70,52,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Status badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hairline-light bg-oracle-surface/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neural-green animate-pulse" />
            <span className="text-text-muted text-xs font-mono tracking-widest uppercase">Oracle AI Agent Studio</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hairline-light bg-oracle-surface/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neural-blue animate-pulse" />
            <span className="text-text-muted text-xs font-mono tracking-widest uppercase">Open to Work</span>
          </div>
        </div>

        {/* Name */}
        <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-4">
          <span className="text-text-primary">CHETANYA</span>
          <br />
          <span className="bg-gradient-to-r from-oracle-red via-oracle-red-glow to-neural-blue bg-clip-text text-transparent">KAUSHAL</span>
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="font-mono text-base md:text-lg lg:text-xl text-text-secondary mb-10 h-8">
          {displayText}
          <span className="inline-block w-0.5 h-5 ml-1 bg-oracle-red animate-pulse" />
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2 text-text-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Noida, India
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            B.Tech Computer Science
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            AI & Gen AI
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#mission" className="group relative px-8 py-4 font-display text-sm font-semibold tracking-widest uppercase rounded-full border border-oracle-red/50 text-oracle-red hover:bg-oracle-red hover:text-white transition-all duration-300 cursor-pointer">
            <span className="relative z-10">Enter the Matrix</span>
            <div className="absolute inset-0 rounded-full bg-oracle-red/10 blur-xl group-hover:bg-oracle-red/20 transition-all" />
          </a>
          <a href="#projects" className="px-8 py-4 font-display text-sm font-semibold tracking-widest uppercase rounded-full border border-hairline-light text-text-secondary hover:border-text-secondary hover:text-text-primary transition-all duration-300 cursor-pointer">
            View Agents
          </a>
          <a href="#contact" className="px-8 py-4 font-display text-sm font-semibold tracking-widest uppercase rounded-full bg-oracle-red text-white hover:bg-oracle-red-glow transition-all duration-300 cursor-pointer">
            Hire Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-text-muted text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-oracle-red/50 to-transparent" />
      </div>
    </section>
  )
}
