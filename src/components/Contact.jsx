import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PaperPlaneTilt } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [terminalLines, setTerminalLines] = useState([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTerminalLines([
      '> Encoding message...',
      '> Establishing connection...',
      '> Transmission sent successfully.',
      '> Awaiting response...',
    ])
    setSubmitted(true)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(199,70,52,0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Chapter label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 07 — Transmission</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        <h2 className="contact-content font-display text-3xl md:text-5xl font-bold text-center mb-8">
          Open a <span className="text-oracle-red">Channel</span>
        </h2>

        <p className="contact-content text-text-secondary text-lg text-center mb-16 max-w-xl mx-auto">
          Ready to build the future together? Send a transmission and let&apos;s start the conversation.
        </p>

        <div className="contact-content grid md:grid-cols-2 gap-8">
          {/* Terminal display */}
          <div className="p-6 rounded-2xl border border-hairline-light bg-oracle-surface/30 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-hairline">
              <div className="w-3 h-3 rounded-full bg-oracle-red/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-neural-green/80" />
              <span className="ml-2 text-text-muted text-xs font-mono">agent-terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2 min-h-[150px]">
              {terminalLines.length === 0 ? (
                <>
                  <div className="text-text-muted">{'>'} Ready to receive transmission...</div>
                  <div className="text-text-muted">{'>'} Waiting for input_</div>
                </>
              ) : (
                terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className={`${
                      line.includes('successfully') ? 'text-neural-green' : 'text-text-secondary'
                    }`}
                    style={{
                      opacity: 0,
                      animation: `fadeIn 0.3s ease forwards`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-xs text-text-muted tracking-widest uppercase mb-2">
                Identifier
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-oracle-surface/50 border border-hairline-light rounded-lg text-text-primary font-body focus:outline-none focus:border-oracle-red/50 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-text-muted tracking-widest uppercase mb-2">
                Comm Channel
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-oracle-surface/50 border border-hairline-light rounded-lg text-text-primary font-body focus:outline-none focus:border-oracle-red/50 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-text-muted tracking-widest uppercase mb-2">
                Message Payload
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-oracle-surface/50 border border-hairline-light rounded-lg text-text-primary font-body focus:outline-none focus:border-oracle-red/50 transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-oracle-red hover:bg-oracle-red-glow disabled:bg-text-muted disabled:cursor-not-allowed text-white font-display text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 cursor-pointer"
            >
              {submitted ? (
                'Transmission Sent'
              ) : (
                <>
                  Send Transmission
                  <PaperPlaneTilt className="w-4 h-4" weight="fill" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
