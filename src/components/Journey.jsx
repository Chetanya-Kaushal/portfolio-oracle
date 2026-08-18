import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    year: '2023',
    title: 'The Spark',
    description: 'Discovered the power of code. Started building web interfaces with HTML, CSS, and JavaScript. First steps into the digital world.',
    icon: '⚡',
    color: 'from-neural-blue to-neural-purple',
    detail: 'Built first personal website. Fell in love with creative coding.',
  },
  {
    year: '2024',
    title: 'The Foundation',
    description: 'B.Tech in Computer Science. Deep-dived into React, modern frameworks, and software architecture principles.',
    icon: '🧱',
    color: 'from-neural-purple to-oracle-red',
    detail: 'Led college tech fest website. Won hackathon for AI project.',
  },
  {
    year: '2025',
    title: 'The Evolution',
    description: 'Mastered React ecosystem. Built production apps. Started exploring AI/ML integration with web interfaces.',
    icon: '🚀',
    color: 'from-oracle-red to-oracle-red-glow',
    detail: 'First professional role. Shipped 3 production applications.',
  },
  {
    year: '2026',
    title: 'The Oracle',
    description: 'Entered the AI Agent space. Built Oracle AI Agent Studio interfaces. Bridging human-AI interaction.',
    icon: '🔮',
    color: 'from-oracle-red-glow to-neural-green',
    detail: 'Oracle HCM implementation. AI agent development begins.',
  },
  {
    year: 'Present',
    title: 'The Architect',
    description: 'Designing next-gen AI agent interfaces. Full-stack capabilities. Building the future of intelligent UX.',
    icon: '🏗️',
    color: 'from-neural-green to-neural-blue',
    detail: 'Leading AI initiatives. Mentoring junior developers.',
  },
]

export default function Journey() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.milestone-card', {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      })

      gsap.from('.timeline-node', {
        scale: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="journey" className="relative min-h-screen px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-oracle-black via-oracle-dark to-oracle-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 03 — The Journey</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-8">
          From <span className="text-oracle-red">Spark</span> to <span className="text-neural-blue">Architect</span>
        </h2>

        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-20">
          A timeline of growth, learning, and building — from writing first lines of code to architecting AI-powered solutions.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hairline-light timeline-line hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className={`milestone-card relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="p-6 rounded-2xl border border-hairline-light bg-oracle-surface/30 backdrop-blur-sm hover:border-oracle-red/30 transition-all duration-500 group">
                    <div className={`inline-flex items-center gap-2 mb-3 font-mono text-xs tracking-widest uppercase bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                      <span>{m.icon}</span>
                      <span>{m.year}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-oracle-red transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {m.description}
                    </p>
                    <p className="text-text-muted text-xs font-mono">
                      {m.detail}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex w-4 h-4 rounded-full bg-oracle-surface border-2 border-oracle-red z-10 shrink-0 timeline-node">
                  <div className="w-2 h-2 rounded-full bg-oracle-red m-auto" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-hairline-light bg-oracle-surface/30">
            <span className="font-mono text-xs text-text-muted">4+ YEARS</span>
            <span className="w-1 h-1 rounded-full bg-oracle-red" />
            <span className="font-mono text-xs text-text-muted">5+ MAJOR PROJECTS</span>
            <span className="w-1 h-1 rounded-full bg-oracle-red" />
            <span className="font-mono text-xs text-text-muted">12+ AGENTS BUILT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
