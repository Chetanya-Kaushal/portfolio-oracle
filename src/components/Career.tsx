import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Career.css'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    year: '2023',
    title: 'The Spark',
    company: 'First Steps into Enterprise Tech',
    description: 'Started my journey into Oracle Cloud and discovered the power of intelligent automation in HR systems.',
  },
  {
    year: '2024',
    title: 'Foundation',
    company: 'Oracle HCM Implementation',
    description: 'Led Oracle Fusion HCM Cloud implementations across Core HR, Payroll, and Absence modules for enterprise clients.',
  },
  {
    year: '2025',
    title: 'Evolution',
    company: 'AI Agent Architecture',
    description: 'Built autonomous AI agents for payroll processing, HR document automation, and intelligent workflow optimization.',
  },
  {
    year: '2026',
    title: 'Oracle',
    company: 'Techno-functional Leadership',
    description: 'Leading end-to-end Oracle HCM transformations while architecting next-generation AI-powered HR solutions.',
  },
]

export function Career() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      gsap.fromTo(item,
        { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    })
  }, [])

  return (
    <section id="career" ref={containerRef} className="career">
      <div className="section-container">
        <div className="career__top">
          <span className="career__label">( Career )</span>
          <div className="career__line" />
        </div>
        <div className="career__timeline">
          <div className="career__lineCenter" />
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`career__item ${index % 2 === 0 ? 'career__item--left' : 'career__item--right'}`}
              ref={(el) => { if (el) itemsRef.current[index] = el }}
            >
              <div className="career__dot" />
              <div className="career__card" data-hoverable>
                <span className="career__year">{item.year}</span>
                <h3 className="career__title">{item.title}</h3>
                <span className="career__company">{item.company}</span>
                <p className="career__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
