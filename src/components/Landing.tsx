import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Landing.css'

export function Landing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const roleRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power3.inOut' }
    )
    .fromTo(nameRef.current?.querySelectorAll('.char') || [],
      { y: 120, rotateX: 90, opacity: 0 },
      { y: 0, rotateX: 0, opacity: 1, duration: 0.8, stagger: 0.04, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(roleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )
  }, [])

  const nameText = 'Chetanya Kaushal'
  const chars = nameText.split('')

  return (
    <section id="landing" ref={containerRef} className="landing">
      <div className="landing__bg">
        <div className="landing__orb landing__orb--1" />
        <div className="landing__orb landing__orb--2" />
        <div className="landing__orb landing__orb--3" />
      </div>

      <div className="landing__content">
        <div className="landing__line" ref={lineRef} />
        <div className="landing__name" ref={nameRef}>
          {chars.map((char, i) => (
            <span key={i} className={`char ${char === ' ' ? 'char--space' : ''}`}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <div className="landing__role" ref={roleRef}>
          <p>Oracle HCM Techno-functional Consultant</p>
          <span className="landing__dot">•</span>
          <p>AI Agent Architect</p>
        </div>
        <div className="landing__scroll">
          <div className="landing__scrollLine" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}
