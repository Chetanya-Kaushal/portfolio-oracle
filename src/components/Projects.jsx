import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'Oracle AI Agent Console',
    description: 'A next-gen interface for managing AI agents. Real-time monitoring, task orchestration, and intelligent automation dashboard.',
    tags: ['React', 'Oracle AI', 'WebSocket', 'D3.js'],
    status: 'DEPLOYED',
    metric: '99.9% uptime',
    gradient: 'from-oracle-red to-oracle-red-glow',
    link: '#',
  },
  {
    id: 2,
    title: 'Neural Chat Interface',
    description: 'Conversational AI interface with context-aware responses, multi-modal input, and streaming output visualization.',
    tags: ['TypeScript', 'OpenAI', 'Tailwind', 'Framer Motion'],
    status: 'LIVE',
    metric: '10K+ conversations',
    gradient: 'from-neural-blue to-neural-purple',
    link: '#',
  },
  {
    id: 3,
    title: 'Agent Orchestrator',
    description: 'Multi-agent coordination platform. Visual workflow builder for chaining AI agents with custom logic and data pipelines.',
    tags: ['Next.js', 'LangChain', 'PostgreSQL', 'Redis'],
    status: 'BETA',
    metric: '50+ agents configured',
    gradient: 'from-neural-purple to-neural-green',
    link: '#',
  },
  {
    id: 4,
    title: 'GenAI Code Assistant',
    description: 'AI-powered code review and generation tool. Understands context, suggests improvements, and auto-generates tests.',
    tags: ['React', 'Python', 'GPT-4', 'Monaco Editor'],
    status: 'DEVELOPMENT',
    metric: '40% faster reviews',
    gradient: 'from-neural-green to-neural-blue',
    link: '#',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card')
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen px-6 py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-oracle-black via-oracle-dark to-oracle-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 05 — The Agents</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20">
          Deployed <span className="text-oracle-red">Agents</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="project-card group relative p-8 rounded-2xl border border-hairline-light bg-oracle-surface/20 backdrop-blur-sm hover:border-oracle-red/30 transition-all duration-500 cursor-pointer block"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider ${
                  project.status === 'DEPLOYED' ? 'bg-neural-green/10 text-neural-green' :
                  project.status === 'LIVE' ? 'bg-neural-blue/10 text-neural-blue' :
                  project.status === 'BETA' ? 'bg-neural-purple/10 text-neural-purple' :
                  'bg-text-muted/10 text-text-muted'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    project.status === 'DEPLOYED' ? 'bg-neural-green' :
                    project.status === 'LIVE' ? 'bg-neural-blue' :
                    project.status === 'BETA' ? 'bg-neural-purple' :
                    'bg-text-muted'
                  }`} />
                  {project.status}
                </span>
                <ArrowUpRight
                  className={`w-5 h-5 text-text-muted transition-all duration-300 ${
                    hoveredId === project.id ? 'text-oracle-red translate-x-1 -translate-y-1' : ''
                  }`}
                />
              </div>

              <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-oracle-red transition-colors">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <span className={`font-mono text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.metric}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono text-text-muted bg-hairline/50 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
