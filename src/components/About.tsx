import { Fragment, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(textRef.current?.querySelectorAll('.about__word') || [],
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.02, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%', end: 'bottom 20%', toggleActions: 'play none none reverse' }
      }
    )
  }, [])

  const words = "I'm an Oracle HCM Cloud Techno-functional Consultant and AI Agent Architect who thrives at the intersection of enterprise technology and intelligent automation. I build autonomous systems that solve real business problems — from AI agents that handle payroll complexity to tools that streamline HCM workflows. I'm passionate about pushing boundaries, learning new technologies, and creating solutions that matter."

  return (
    <section id="about" ref={containerRef} className="about">
      <div className="section-container">
        <div className="about__top">
          <span className="about__label">( About )</span>
          <div className="about__line" />
        </div>
        <div className="about__content" ref={textRef}>
          {words.split(' ').map((word, i) => (
            <Fragment key={i}>
              <span className="about__word">{word}</span>{' '}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
