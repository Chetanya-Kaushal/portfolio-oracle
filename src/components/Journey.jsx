import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    year: '2020',
    title: 'The Spark',
    description: 'Discovered the power of code. Started building web interfaces with HTML, CSS, and JavaScript.',
    icon: '⚡',
    color: 'from-neural-blue to-neural-purple',
  },
  {
    year: '2021',
    title: 'The Foundation',
    description: 'B.Tech in Computer Science. Deep-dived into React, modern frameworks, and software architecture.',
    icon: '🧱',
    color: 'from-neural-purple to-oracle-red',
  },
  {
    year: '2022',
    title: 'The Evolution',
    description: 'Mastered React ecosystem. Built production apps. Started exploring AI/ML integration.',
    icon: '🚀',
    color: 'from-oracle-red to-oracle-red-glow',
  },
  {
    year: '2023',
    title: 'The Oracle',
    description: 'Entered the AI Agent space. Built Oracle AI Agent Studio interfaces. Bridging human-AI interaction.',
    icon: '🔮',
    color: 'from-oracle-red-glow to-neural-green',
  },
  {
    year: '2024',
    title: 'The Architect',
    description: 'Designing next-gen AI agent interfaces. Full-stack capabilities. Building the future of intelligent UX.',
    icon: '🏗️',
    color: 'from-neural-green to-neural-blue',
  },
]

export default function Journey() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each milestone card
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

      // Animate the timeline line
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative min-h-screen px-6 py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-oracle-black via-oracle-dark to-oracle-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Chapter label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 03 — The Journey</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20">
          From <span className="text-oracle-red">Spark</span> to <span className="text-neural-blue">Architect</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hairline-light timeline-line hidden md:block" />

          <div ref={trackRef} className="space-y-12 md:space-y-0">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`milestone-card relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:mb-16`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="p-6 rounded-2xl border border-hairline-light bg-oracle-surface/30 backdrop-blur-sm hover:border-oracle-red/30 transition-all duration-500 group">
                    <div className={`inline-flex items-center gap-2 mb-3 font-mono text-xs tracking-widest uppercase bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                      <span>{m.icon}</span>
                      <span>{m.year}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-oracle-red transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-oracle-surface border-2 border-oracle-red z-10 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-oracle-red m-auto" />
                </div>

                {/* Spacer for other side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
