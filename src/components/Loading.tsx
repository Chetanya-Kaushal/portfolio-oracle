import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Loading.css'

interface LoadingProps {
  progress: number
}

export function Loading({ progress }: LoadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(numberRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
  }, [])

  useEffect(() => {
    if (barRef.current) {
      gsap.to(barRef.current, { width: `${progress}%`, duration: 0.3, ease: 'none' })
    }
  }, [progress])

  return (
    <div ref={containerRef} className="loading">
      <div className="loading__number" ref={numberRef}>
        <span>{progress < 10 ? `0${progress}` : progress}</span>
      </div>
      <div className="loading__bottom">
        <div className="loading__bar" ref={progressRef}>
          <div className="loading__barInner" ref={barRef} />
        </div>
        <div className="loading__text">
          <p>Chetanya Kaushal</p>
          <p>Oracle HCM Consultant & AI Agent Architect</p>
        </div>
      </div>
    </div>
  )
}
