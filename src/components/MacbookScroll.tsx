import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import screenImage from '../assets/portfolio-screen.png'
import './MacbookScroll.css'

gsap.registerPlugin(ScrollTrigger)

type MacbookScrollProps = {
  title?: React.ReactNode
  src?: string
}

/**
 * Scroll-driven MacBook: the lid starts flipped over the hinge (back facing
 * the viewer) and swings open as the section scrolls, revealing `src`.
 * GSAP + ScrollTrigger scrub replaces the Framer Motion version's useScroll.
 */
export function MacbookScroll({ title, src = screenImage }: MacbookScrollProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
        },
      })

      tl.fromTo(
        '.macbook__lid',
        { rotateX: -90 },
        { rotateX: 0, ease: 'none', duration: 1 },
        0,
      )
        .fromTo(
          '.macbook__title',
          { xPercent: 12, opacity: 0 },
          { xPercent: -12, opacity: 1, ease: 'none', duration: 0.7 },
          0,
        )
        .to('.macbook__title', { opacity: 0, ease: 'none', duration: 0.2 }, 0.8)
        .fromTo(
          '.macbook',
          { scale: 0.92 },
          { scale: 1, ease: 'none', duration: 1 },
          0,
        )
        .fromTo(
          '.macbook__badge',
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, ease: 'none', duration: 0.3 },
          0.15,
        )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section id="macbook" ref={sectionRef} className="macbook-section">
      <div className="macbook-section__sticky">
        <h2 className="macbook__title">
          {title ?? (
            <span>
              Built with React, GSAP &amp; a little AI. <br /> No kidding.
            </span>
          )}
        </h2>

        <div className="macbook">
          <div className="macbook__badge">CK</div>
          <div className="macbook__lid">
            <div className="macbook__screen">
              <img src={src} alt="Portfolio shown on a MacBook screen" />
            </div>
          </div>
          <div className="macbook__base">
            <div className="macbook__notch" />
            <div className="macbook__keys" />
            <div className="macbook__trackpad" />
          </div>
          <div className="macbook__bottomEdge" />
        </div>
      </div>
    </section>
  )
}
