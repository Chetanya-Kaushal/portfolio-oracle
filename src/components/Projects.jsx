import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'Oracle HCM AI Assistant',
    description: 'Intelligent chatbot for Oracle HCM Cloud. Employees query benefits, leave balances, and policy info through natural language.',
    tags: ['React', 'Oracle AI', 'HCM Cloud', 'NLP'],
    status: 'DEPLOYED',
    metric: '5K+ queries/month',
    gradient: 'from-oracle-red to-oracle-red-glow',
    features: ['Natural language queries', 'Multi-language support', 'SSO integration'],
  },
  {
    id: 2,
    title: 'HDL Workbench',
    description: 'High-speed data loader interface for Oracle HCM. Automates bulk data migration, validation, and transformation with real-time monitoring.',
    tags: ['React', 'Oracle HDL', 'Python', 'Data Pipeline'],
    status: 'DEPLOYED',
    metric: '1M+ records processed',
    gradient: 'from-neural-blue to-neural-purple',
    features: ['Bulk data migration', 'Real-time validation', 'Error recovery'],
  },
  {
    id: 3,
    title: 'Payroll AI Agent',
    description: 'AI-powered payroll processing agent for Oracle HCM. Automates calculations, compliance checks, and anomaly detection.',
    tags: ['Oracle AI Agent Studio', 'LangChain', 'HCM Payroll', 'Gen AI'],
    status: 'LIVE',
    metric: '99.7% accuracy',
    gradient: 'from-neural-purple to-neural-green',
    features: ['Auto-calculations', 'Compliance engine', 'Anomaly detection'],
  },
  {
    id: 4,
    title: 'AI Agent Console',
    description: 'Real-time dashboard for managing AI agents. Monitor performance, orchestrate tasks, and visualize agent behavior.',
    tags: ['Next.js', 'WebSocket', 'D3.js', 'Redis'],
    status: 'LIVE',
    metric: '99.9% uptime',
    gradient: 'from-neural-green to-neural-blue',
    features: ['Real-time monitoring', 'Task orchestration', 'Performance analytics'],
  },
  {
    id: 5,
    title: 'Oracle Cloud Fusion Connector',
    description: 'Unified integration layer for Oracle Cloud Fusion modules. HCM, ERP, SCM data sync with intelligent conflict resolution.',
    tags: ['Oracle Cloud', 'REST APIs', 'Node.js', 'PostgreSQL'],
    status: 'DEPLOYED',
    metric: '6 modules integrated',
    gradient: 'from-oracle-red-glow to-oracle-red',
    features: ['Multi-module sync', 'Conflict resolution', 'Audit logging'],
  },
  {
    id: 6,
    title: 'GenAI Code Assistant',
    description: 'AI-powered code review and generation tool. Context-aware suggestions, auto-test generation, and security scanning.',
    tags: ['React', 'Python', 'GPT-4', 'Monaco Editor'],
    status: 'BETA',
    metric: '40% faster reviews',
    gradient: 'from-neural-blue to-oracle-red',
    features: ['Context-aware suggestions', 'Auto test generation', 'Security scanning'],
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card')
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 80, rotateX: 10 },
          {
            opacity: 1, y: 0, rotateX: 0, duration: 1, ease: 'power3.out', delay: i * 0.1,
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
          Production-ready AI solutions built for Oracle Cloud Fusion environments. Each agent solves real enterprise problems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="project-card group relative p-6 rounded-2xl border border-hairline-light bg-oracle-surface/20 backdrop-blur-sm hover:border-oracle-red/30 transition-all duration-500 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider ${
                  project.status === 'DEPLOYED' ? 'bg-neural-green/10 text-neural-green' :
                  project.status === 'LIVE' ? 'bg-neural-blue/10 text-neural-blue' :
                  'bg-neural-purple/10 text-neural-purple'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    project.status === 'DEPLOYED' ? 'bg-neural-green' :
                    project.status === 'LIVE' ? 'bg-neural-blue' : 'bg-neural-purple'
                  }`} />
                  {project.status}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-oracle-red transition-colors">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

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
                  <span key={i} className="px-2 py-1 text-xs font-mono text-text-muted bg-hairline/50 rounded-full">{tag}</span>
                ))}
              </div>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
