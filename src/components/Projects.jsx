import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'Oracle HCM AI Assistant',
    description: 'Intelligent chatbot for Oracle HCM Cloud. Employees can query benefits, leave balances, and policy info through natural language.',
    tags: ['React', 'Oracle AI', 'HCM Cloud', 'NLP'],
    status: 'DEPLOYED',
    metric: '5K+ queries/month',
    gradient: 'from-oracle-red to-oracle-red-glow',
    link: '#',
    features: ['Natural language queries', 'Multi-language support', 'SSO integration'],
  },
  {
    id: 2,
    title: 'AI Agent Console',
    description: 'Real-time dashboard for managing AI agents. Monitor performance, orchestrate tasks, and visualize agent behavior.',
    tags: ['Next.js', 'WebSocket', 'D3.js', 'Redis'],
    status: 'LIVE',
    metric: '99.9% uptime',
    gradient: 'from-neural-blue to-neural-purple',
    link: '#',
    features: ['Real-time monitoring', 'Task orchestration', 'Performance analytics'],
  },
  {
    id: 3,
    title: 'Neural Chat Interface',
    description: 'Conversational AI interface with context-aware responses, multi-modal input, and streaming output visualization.',
    tags: ['TypeScript', 'OpenAI', 'Tailwind', 'Framer Motion'],
    status: 'LIVE',
    metric: '10K+ conversations',
    gradient: 'from-neural-purple to-neural-green',
    link: '#',
    features: ['Context memory', 'Voice input', 'Code highlighting'],
  },
  {
    id: 4,
    title: 'HR Process Automator',
    description: 'Automated HR workflows for onboarding, leave management, and performance reviews using AI agents.',
    tags: ['React', 'Python', 'LangChain', 'PostgreSQL'],
    status: 'BETA',
    metric: '60% time saved',
    gradient: 'from-neural-green to-neural-blue',
    link: '#',
    features: ['Auto-onboarding', 'Smart scheduling', 'Document generation'],
  },
  {
    id: 5,
    title: 'Agent Orchestrator',
    description: 'Multi-agent coordination platform. Visual workflow builder for chaining AI agents with custom logic.',
    tags: ['Next.js', 'LangChain', 'Redis', 'Docker'],
    status: 'DEVELOPMENT',
    metric: '50+ agents configured',
    gradient: 'from-oracle-red-glow to-neural-blue',
    link: '#',
    features: ['Visual builder', 'Custom triggers', 'Error handling'],
  },
  {
    id: 6,
    title: 'GenAI Code Assistant',
    description: 'AI-powered code review and generation tool. Understands context, suggests improvements, auto-generates tests.',
    tags: ['React', 'Python', 'GPT-4', 'Monaco Editor'],
    status: 'DEVELOPMENT',
    metric: '40% faster reviews',
    gradient: 'from-neural-blue to-oracle-red',
    link: '#',
    features: ['Context-aware suggestions', 'Auto test generation', 'Security scanning'],
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
            opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: i * 0.1,
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen px-6 py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-oracle-black via-oracle-dark to-oracle-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 05 — The Agents</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">
          Deployed <span className="text-oracle-red">Agents</span>
        </h2>

        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16">
          Production-ready AI solutions built for enterprise environments. Each agent solves real problems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="project-card group relative p-6 rounded-2xl border border-hairline-light bg-oracle-surface/20 backdrop-blur-sm hover:border-oracle-red/30 transition-all duration-500 cursor-pointer block"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center justify-between mb-4">
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
                <ArrowUpRight className={`w-5 h-5 text-text-muted transition-all duration-300 ${hoveredId === project.id ? 'text-oracle-red translate-x-1 -translate-y-1' : ''}`} />
              </div>

              <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-oracle-red transition-colors">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Features */}
              <ul className="mb-4 space-y-1">
                {project.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="w-1 h-1 rounded-full bg-oracle-red" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mb-4">
                <span className={`font-mono text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.metric}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-mono text-text-muted bg-hairline/50 rounded-full">
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
