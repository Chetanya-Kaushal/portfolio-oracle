import Marquee from 'react-fast-marquee'
import './TechStack.css'

const tech1 = ['Oracle HCM Cloud', 'Fusion Payroll', 'REST API', 'OIC', 'Fast Formula', 'HDL', 'OTBI', 'BI Publisher']
const tech2 = ['Python', 'React', 'LangChain', 'GPT-4', 'RAG', 'FastAPI', 'Next.js', 'TypeScript']
const tech3 = ['Docker', 'AWS', 'Git', 'Linux', 'SQL', 'NoSQL', 'GraphQL', 'CI/CD']

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
        <div className="techstack__row">
          <Marquee speed={40} gradient={false}>
            {tech1.map((tech, i) => (
              <span key={i} className="techstack__item" data-hoverable>{tech}</span>
            ))}
          </Marquee>
        </div>
        <div className="techstack__row techstack__row--reverse">
          <Marquee speed={35} direction="right" gradient={false}>
            {tech2.map((tech, i) => (
              <span key={i} className="techstack__item techstack__item--outline" data-hoverable>{tech}</span>
            ))}
          </Marquee>
        </div>
        <div className="techstack__row">
          <Marquee speed={45} gradient={false}>
            {tech3.map((tech, i) => (
              <span key={i} className="techstack__item" data-hoverable>{tech}</span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
