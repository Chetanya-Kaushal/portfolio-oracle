import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Oracle HCM Cloud',
    description: 'Techno-functional consulting for Oracle HCM implementation, customization, and integration. Streamlining HR processes with intelligent automation.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    color: 'oracle-red',
  },
  {
    title: 'Oracle Cloud Fusion',
    description: 'Full-stack Oracle Cloud Fusion implementation. HCM, ERP, SCM modules with custom extensions and AI-powered workflows.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    color: 'neural-blue',
  },
  {
    title: 'AI Agent Development',
    description: 'Building intelligent agents with Oracle AI Agent Studio, LangChain, and OpenAI. Creating autonomous systems that learn and adapt.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: 'neural-purple',
  },
  {
    title: 'Gen AI Solutions',
    description: 'Leveraging Generative AI for enterprise solutions. RAG pipelines, fine-tuning, prompt engineering, and AI-powered automation.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'neural-green',
  },
  {
    title: 'Frontend Architecture',
    description: 'Designing scalable React/Next.js applications with TypeScript. Component libraries, design systems, and performance optimization.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    color: 'oracle-red-glow',
  },
  {
    title: 'Process Automation',
    description: 'Automating HR workflows with AI-powered solutions. Reducing manual tasks and improving efficiency across the organization.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    color: 'neural-blue',
  },
]

const colorMap = {
  'oracle-red': { bg: 'bg-oracle-red/10', text: 'text-oracle-red', hover: 'group-hover:bg-oracle-red/20' },
  'neural-blue': { bg: 'bg-neural-blue/10', text: 'text-neural-blue', hover: 'group-hover:bg-neural-blue/20' },
  'neural-purple': { bg: 'bg-neural-purple/10', text: 'text-neural-purple', hover: 'group-hover:bg-neural-purple/20' },
  'neural-green': { bg: 'bg-neural-green/10', text: 'text-neural-green', hover: 'group-hover:bg-neural-green/20' },
  'oracle-red-glow': { bg: 'bg-oracle-red-glow/10', text: 'text-oracle-red-glow', hover: 'group-hover:bg-oracle-red-glow/20' },
}

export default function Mission() {
  const sectionRef = useRef(null)
  const [terminalText, setTerminalText] = useState('')
  const terminalLines = [
    '> ORACLE PROTOCOL INITIALIZED',
    '> Scanning agent capabilities...',
    '> Loading HCM modules...',
    '> Gen AI pipeline: ACTIVE',
    '> Oracle Cloud Fusion: CONNECTED',
    '> STATUS: ALL SYSTEMS OPERATIONAL',
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.mission-word')
      words.forEach((word) => {
        gsap.to(word, {
          opacity: 1,
          scrollTrigger: { trigger: word, start: 'top 80%', end: 'top 50%', scrub: 1 },
        })
      })

      gsap.from('.mission-stat', {
        opacity: 0, y: 30, stagger: 0.15, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.mission-stats', start: 'top 85%' },
      })

      gsap.from('.mission-card', {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.mission-cards', start: 'top 85%' },
      })

      gsap.from('.terminal-line', {
        opacity: 0, x: -20, stagger: 0.2, duration: 0.4, ease: 'power2.out',
        scrollTrigger: { trigger: '.terminal-section', start: 'top 75%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let lineIndex = 0
    let charIndex = 0
    let currentText = ''

    const typeInterval = setInterval(() => {
      if (lineIndex < terminalLines.length) {
        const line = terminalLines[lineIndex]
        if (charIndex <= line.length) {
          currentText = terminalLines.slice(0, lineIndex).join('\n') + '\n' + line.slice(0, charIndex)
          setTerminalText(currentText)
          charIndex++
        } else {
          lineIndex++
          charIndex = 0
        }
      } else {
        clearInterval(typeInterval)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [])

  const words = 'Building AI agents that think, plan, and execute — transforming complex Oracle Cloud solutions into intelligent digital experiences.'.split(' ')

  return (
    <section ref={sectionRef} id="mission" className="relative min-h-screen px-6 py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-oracle-red/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 02 — The Mission</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-12">
          {words.map((word, i) => (
            <span key={i} className="mission-word inline-block mr-[0.3em]" style={{ opacity: 0.15 }}>
              {word}
            </span>
          ))}
        </h2>

        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed text-center mb-16">
          From Oracle HCM Cloud implementations to AI agent development — I architect intelligent interfaces
          that bridge human creativity with machine intelligence.
        </p>

        {/* Stats */}
        <div className="mission-stats grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-20">
          {[
            { value: '12+', label: 'Agents Deployed', color: 'from-oracle-red to-oracle-red-glow' },
            { value: '47K+', label: 'Lines of Code', color: 'from-neural-blue to-neural-purple' },
            { value: '99.9%', label: 'Uptime', color: 'from-neural-green to-neural-blue' },
            { value: '6+', label: 'Oracle Modules', color: 'from-oracle-red-glow to-neural-purple' },
          ].map((stat, i) => (
            <div key={i} className="mission-stat text-center">
              <div className={`font-display text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-xs text-text-muted tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="mission-cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {services.map((service, i) => {
            const colors = colorMap[service.color]
            return (
              <div key={i} className="mission-card p-6 rounded-2xl border border-hairline-light bg-oracle-surface/20 backdrop-blur-sm hover:border-oracle-red/30 transition-all duration-500 group">
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} mb-4 ${colors.hover} transition-colors`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-oracle-red transition-colors">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Terminal */}
        <div className="terminal-section max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl border border-hairline-light bg-oracle-surface/30 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-hairline">
              <div className="w-3 h-3 rounded-full bg-oracle-red/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-neural-green/80" />
              <span className="ml-2 text-text-muted text-xs font-mono">oracle-protocol — bash</span>
            </div>
            <pre className="font-mono text-sm text-neural-green whitespace-pre-wrap min-h-[150px]">
              {terminalText}
              <span className="animate-pulse">_</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
