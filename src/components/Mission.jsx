import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Mission() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.mission-word')
      words.forEach((word, i) => {
        gsap.to(word, {
          opacity: 1,
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        })
      })

      gsap.from('.mission-stat', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mission-stats',
          start: 'top 85%',
        },
      })

      gsap.from('.mission-card', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mission-cards',
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const words = 'Building AI agents that think, plan, and execute — transforming complex problems into elegant digital solutions.'.split(' ')

  const services = [
    {
      title: 'Oracle HCM Cloud',
      description: 'Techno-functional consulting for Oracle HCM implementation, customization, and integration. Streamlining HR processes with intelligent automation.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      ),
    },
    {
      title: 'AI Agent Development',
      description: 'Building intelligent agents with Oracle AI Agent Studio, LangChain, and OpenAI. Creating autonomous systems that learn and adapt.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
    },
    {
      title: 'Frontend Architecture',
      description: 'Designing scalable React/Next.js applications with TypeScript. Component libraries, design systems, and performance optimization.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      ),
    },
    {
      title: 'Process Automation',
      description: 'Automating HR workflows with AI-powered solutions. Reducing manual tasks and improving efficiency across the organization.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef} id="mission" className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-oracle-red/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Chapter label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 02 — The Mission</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        {/* Main text */}
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-12">
          {words.map((word, i) => (
            <span key={i} className="mission-word inline-block mr-[0.3em]" style={{ opacity: 0.15 }}>
              {word}
            </span>
          ))}
        </h2>

        {/* Supporting text */}
        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed text-center mb-16">
          I architect intelligent interfaces that bridge human creativity with machine intelligence.
          From Oracle HCM implementations to AI agent development — every pixel serves a purpose.
        </p>

        {/* Stats */}
        <div className="mission-stats grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-20">
          {[
            { value: '12+', label: 'Agents Deployed' },
            { value: '47K+', label: 'Lines of Code' },
            { value: '99.9%', label: 'Uptime' },
            { value: '∞', label: 'Possibilities' },
          ].map((stat, i) => (
            <div key={i} className="mission-stat text-center">
              <div className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-oracle-red to-neural-blue bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-xs text-text-muted tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="mission-cards grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="mission-card p-6 rounded-2xl border border-hairline-light bg-oracle-surface/20 backdrop-blur-sm hover:border-oracle-red/30 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-oracle-red/10 flex items-center justify-center text-oracle-red mb-4 group-hover:bg-oracle-red/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-oracle-red transition-colors">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
