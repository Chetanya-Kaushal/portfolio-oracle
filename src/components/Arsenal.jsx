import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95, color: '#61DAFB' },
      { name: 'TypeScript', level: 90, color: '#3178C6' },
      { name: 'Next.js', level: 85, color: '#FFFFFF' },
      { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
      { name: 'HTML/CSS', level: 98, color: '#E34F26' },
    ],
  },
  {
    category: 'AI & Agents',
    items: [
      { name: 'Oracle AI Agent Studio', level: 88, color: '#C74634' },
      { name: 'Gen AI Integration', level: 85, color: '#7B61FF' },
      { name: 'LangChain', level: 78, color: '#00D4FF' },
      { name: 'OpenAI API', level: 82, color: '#00FF88' },
      { name: 'Prompt Engineering', level: 90, color: '#FF6B6B' },
    ],
  },
  {
    category: 'Tools & More',
    items: [
      { name: 'Git & GitHub', level: 90, color: '#F05032' },
      { name: 'Node.js', level: 80, color: '#339933' },
      { name: 'Python', level: 75, color: '#FFD43B' },
      { name: 'Figma', level: 70, color: '#F24E1E' },
      { name: 'Docker', level: 65, color: '#2496ED' },
    ],
  },
]

export default function Arsenal() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.skill-card')
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      const bars = gsap.utils.toArray('.skill-bar-fill')
      bars.forEach((bar) => {
        gsap.fromTo(bar,
          { width: 0 },
          {
            width: bar.dataset.width || '100%',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
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
      id="arsenal"
      className="relative min-h-screen px-6 py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,212,255,0.03)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 04 — The Arsenal</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20">
          Agent <span className="text-neural-blue">Capabilities</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, ci) => (
            <div
              key={ci}
              className="skill-card p-6 rounded-2xl border border-hairline-light bg-oracle-surface/20 backdrop-blur-sm hover:border-oracle-red/30 transition-all duration-500"
            >
              <h3 className="font-mono text-xs text-oracle-red tracking-widest uppercase mb-6">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.items.map((skill, si) => (
                  <div key={si}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-text-primary font-medium">{skill.name}</span>
                      <span className="font-mono text-xs text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-hairline rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full rounded-full"
                        data-width={`${skill.level}%`}
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
