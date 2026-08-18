import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollStory() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned story section
      gsap.timeline({
        scrollTrigger: {
          trigger: '.story-section',
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
        },
      })
        .fromTo('.story-bg', { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo('.story-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, '<0.2')
        .fromTo('.story-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, '<0.3')
        .fromTo('.story-progress-fill', { width: '0%' }, { width: '100%', duration: 2 }, '<')
        .to('.story-title', { opacity: 0, y: -50, duration: 0.5 }, '+=0.5')
        .to('.story-desc', { opacity: 0, y: -30, duration: 0.5 }, '<')
        .fromTo('.story-phase-2', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('.story-phase-2-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, '<0.3')
        .to('.story-phase-2', { opacity: 0, y: -50, duration: 0.5 }, '+=1')
        .to('.story-phase-2-desc', { opacity: 0, y: -30, duration: 0.5 }, '<')
        .fromTo('.story-phase-3', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
        .fromTo('.story-complete', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, '<0.5')

      // Floating particles
      gsap.utils.toArray('.particle').forEach((p) => {
        gsap.to(p, {
          y: -100,
          x: `random(-50, 50)`,
          opacity: 0,
          duration: `random(3, 6)`,
          repeat: -1,
          ease: 'none',
          delay: `random(0, 3)`,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative">
      {/* Story Section - Pinned */}
      <div className="story-section relative h-screen overflow-hidden">
        {/* Animated background */}
        <div className="story-bg absolute inset-0 bg-gradient-to-br from-oracle-black via-oracle-dark to-oracle-black opacity-0">
          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 rounded-full bg-oracle-red/30"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}

          {/* Hex grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="storyHex" width="8" height="13.86" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                  <polygon points="4,0 8,2.31 8,6.93 4,9.24 0,6.93 0,2.31" fill="none" stroke="#C74634" strokeWidth="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#storyHex)" />
            </svg>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-hairline rounded-full overflow-hidden z-20">
          <div className="story-progress-fill h-full bg-gradient-to-r from-oracle-red to-neural-blue rounded-full" style={{ width: '0%' }} />
        </div>

        {/* Phase 1 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10">
          <div className="story-title text-center mb-8 opacity-0">
            <span className="font-mono text-xs text-oracle-red tracking-widest uppercase block mb-4">Oracle Protocol</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-text-primary">THE </span>
              <span className="bg-gradient-to-r from-oracle-red to-neural-blue bg-clip-text text-transparent">ORACLE</span>
              <br />
              <span className="text-text-primary">PROTOCOL</span>
            </h2>
          </div>
          <div className="story-desc text-center max-w-xl opacity-0">
            <p className="text-text-secondary text-lg leading-relaxed">
              In the world of enterprise AI, one architect bridges the gap between human intelligence and machine cognition.
              This is the story of how Oracle Cloud Fusion meets Generative AI.
            </p>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10">
          <div className="story-phase-2 text-center mb-8 opacity-0">
            <span className="font-mono text-xs text-neural-blue tracking-widest uppercase block mb-4">System Access</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              <span className="text-text-primary">ACCESS </span>
              <span className="text-neural-blue">GRANTED</span>
            </h2>
          </div>
          <div className="story-phase-2-desc text-center max-w-xl opacity-0">
            <p className="text-text-secondary text-lg leading-relaxed">
              HCM Cloud. Payroll AI. HDL Workbench. Agent Studio. Six modules.
              One unified intelligence layer. The future of HR is autonomous.
            </p>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10">
          <div className="story-phase-3 text-center opacity-0">
            <span className="font-mono text-xs text-neural-green tracking-widest uppercase block mb-4">Mission Complete</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="text-neural-green">AGENT </span>
              <span className="text-text-primary">ACTIVE</span>
            </h2>
            <div className="story-complete opacity-0">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-neural-green/30 bg-neural-green/5">
                <span className="w-2 h-2 rounded-full bg-neural-green animate-pulse" />
                <span className="font-mono text-sm text-neural-green">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
