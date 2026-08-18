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
  const fullText = 'Front-End Developer & AI Agent Architect'

  useEffect(() => {
    // Typewriter effect
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      })

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      })

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <NeuralNetwork />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(199,70,52,0.08)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-hairline-light bg-oracle-surface/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-neural-green animate-pulse" />
          <span className="text-text-muted text-xs font-mono tracking-widest uppercase">
            Oracle AI Agent Studio
          </span>
        </div>

        {/* Name */}
        <h1
          ref={titleRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-text-primary">CHETANYA</span>
          <br />
          <span className="bg-gradient-to-r from-oracle-red via-oracle-red-glow to-neural-blue bg-clip-text text-transparent">
            KAUSHAL
          </span>
        </h1>

        {/* Subtitle with typewriter */}
        <p
          ref={subtitleRef}
          className="font-mono text-lg md:text-xl text-text-secondary mb-10 h-8"
        >
          {displayText}
          <span className="inline-block w-0.5 h-5 ml-1 bg-oracle-red animate-pulse" />
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#mission"
            className="group relative px-8 py-4 font-display text-sm font-semibold tracking-widest uppercase rounded-full border border-oracle-red/50 text-oracle-red hover:bg-oracle-red hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10">Enter the Matrix</span>
            <div className="absolute inset-0 rounded-full bg-oracle-red/10 blur-xl group-hover:bg-oracle-red/20 transition-all" />
          </a>
          <a
            href="#projects"
            className="px-8 py-4 font-display text-sm font-semibold tracking-widest uppercase rounded-full border border-hairline-light text-text-secondary hover:border-text-secondary hover:text-text-primary transition-all duration-300 cursor-pointer"
          >
            View Agents
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
