import './TechStack.css'

const tech1 = ['Oracle HCM Cloud', 'Fusion Payroll', 'REST API', 'OIC', 'Fast Formula', 'HDL', 'OTBI', 'BI Publisher']
const tech2 = ['Python', 'React', 'LangChain', 'GPT-4', 'RAG', 'FastAPI', 'Next.js', 'TypeScript']
const tech3 = ['Docker', 'AWS', 'Git', 'Linux', 'SQL', 'NoSQL', 'GraphQL', 'CI/CD']

function MarqueeRow({ items, reverse = false, outline = false, speed = 40 }: { items: string[], reverse?: boolean, outline?: boolean, speed?: number }) {
  const row = [...items, ...items]
  return (
    <div className="marquee-row" style={{ '--speed': `${speed}s` } as React.CSSProperties}>
      <div className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''}`}>
        {row.map((tech, i) => (
          <span key={i} className={`techstack__item ${outline ? 'techstack__item--outline' : ''}`} data-hoverable>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <section id="techstack" className="techstack">
      <div className="section-container">
        <div className="techstack__top">
          <span className="techstack__label">( Tech Stack )</span>
          <div className="techstack__line" />
        </div>
      </div>
      <div className="techstack__marquees">
        <MarqueeRow items={tech1} />
        <MarqueeRow items={tech2} reverse outline />
        <MarqueeRow items={tech3} speed={45} />
      </div>
    </section>
  )
}
