import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Mission() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mission-word', {
        opacity: 0.1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const words = 'Building AI agents that think, plan, and execute — transforming complex problems into elegant digital solutions.'.split(' ')

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative min-h-screen flex items-center justify-center px-6 py-32"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-oracle-red/5 rounded-full blur-[120px]" />

      <div ref={textRef} className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Chapter label */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 02 — The Mission</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        {/* Main text */}
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {words.map((word, i) => (
            <span
              key={i}
              className="mission-word inline-block mr-[0.3em]"
              style={{ opacity: 0.1 }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Supporting text */}
        <p className="mt-12 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          I architect intelligent interfaces that bridge human creativity with machine intelligence.
          Every pixel serves a purpose. Every interaction tells a story.
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '12+', label: 'Agents Deployed' },
            { value: '47K+', label: 'Lines of Code' },
            { value: '99.9%', label: 'Uptime' },
            { value: '∞', label: 'Possibilities' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-oracle-red to-neural-blue bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-xs text-text-muted tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
