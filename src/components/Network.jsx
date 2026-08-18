import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GithubLogo, LinkedinLogo, TwitterLogo, EnvelopeSimple } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { name: 'GitHub', icon: GithubLogo, url: 'https://github.com/chetanyakaushal', color: '#FFFFFF', stat: '100+ Repos' },
  { name: 'LinkedIn', icon: LinkedinLogo, url: 'https://linkedin.com/in/chetanyakaushal', color: '#0A66C2', stat: '500+ Connections' },
  { name: 'Twitter', icon: TwitterLogo, url: 'https://twitter.com/chetanyakaushal', color: '#1DA1F2', stat: '200+ Followers' },
  { name: 'Email', icon: EnvelopeSimple, url: 'mailto:hello@chetanyakaushal.com', color: '#C74634', stat: 'Instant Reply' },
]

export default function Network() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray('.network-node')
      nodes.forEach((node, i) => {
        gsap.fromTo(node,
          { opacity: 0, scale: 0 },
          {
            opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: i * 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          }
        )
      })

      gsap.from('.social-card', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.social-grid', start: 'top 85%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }
    resize()

    const W = canvas.offsetWidth
    const H = canvas.offsetHeight

    const nodes = socialLinks.map((_, i) => ({
      x: W / 2 + Math.cos((i / socialLinks.length) * Math.PI * 2 - Math.PI / 2) * 120,
      y: H / 2 + Math.sin((i / socialLinks.length) * Math.PI * 2 - Math.PI / 2) * 120,
    }))

    const center = { x: W / 2, y: H / 2 }

    let frame = 0
    let animId
    const animate = () => {
      ctx.clearRect(0, 0, W, H)

      nodes.forEach((node, i) => {
        const gradient = ctx.createLinearGradient(center.x, center.y, node.x, node.y)
        gradient.addColorStop(0, 'rgba(199, 70, 52, 0.3)')
        gradient.addColorStop(1, `${socialLinks[i].color}40`)

        ctx.beginPath()
        ctx.moveTo(center.x, center.y)
        ctx.lineTo(node.x, node.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()

        const t = (Math.sin(frame * 0.02 + i) + 1) / 2
        ctx.beginPath()
        ctx.arc(center.x + (node.x - center.x) * t, center.y + (node.y - center.y) * t, 2, 0, Math.PI * 2)
        ctx.fillStyle = socialLinks[i].color
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        const next = (i + 1) % nodes.length
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(nodes[next].x, nodes[next].y)
        ctx.strokeStyle = 'rgba(30, 30, 30, 0.5)'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      frame++
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section ref={sectionRef} id="network" className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(123,97,255,0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 06 — The Network</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Connect the <span className="text-neural-purple">Nodes</span>
        </h2>

        <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
          Every great agent needs a network. Let&apos;s connect and build something extraordinary together.
        </p>

        <div className="relative w-80 h-80 mx-auto mb-16">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-oracle-surface border-2 border-oracle-red flex items-center justify-center z-10">
            <span className="font-display text-sm font-bold text-oracle-red">CK</span>
          </div>
          {socialLinks.map((link, i) => {
            const angle = (i / socialLinks.length) * Math.PI * 2 - Math.PI / 2
            return (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                className="network-node absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-oracle-surface border border-hairline-light flex items-center justify-center hover:border-oracle-red/50 transition-all duration-300 group cursor-pointer z-10"
                style={{ left: `${50 + Math.cos(angle) * 38}%`, top: `${50 + Math.sin(angle) * 38}%` }}
              >
                <link.icon className="w-5 h-5 text-text-muted group-hover:text-text-primary transition-colors" weight="fill" />
              </a>
            )
          })}
        </div>

        <div className="social-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {socialLinks.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
              className="social-card p-5 rounded-xl border border-hairline-light bg-oracle-surface/20 backdrop-blur-sm hover:border-oracle-red/30 transition-all duration-300 group text-center"
            >
              <link.icon className="w-8 h-8 mx-auto mb-3 text-text-muted group-hover:text-oracle-red transition-colors" weight="fill" />
              <h4 className="font-display text-sm font-bold text-text-primary group-hover:text-oracle-red transition-colors">{link.name}</h4>
              <p className="font-mono text-xs text-text-muted mt-1">{link.stat}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:hello@chetanyakaushal.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-oracle-red text-white font-display text-sm font-semibold tracking-widest uppercase hover:bg-oracle-red-glow transition-all duration-300 cursor-pointer">
            <EnvelopeSimple className="w-4 h-4" weight="fill" />
            Get in Touch
          </a>
          <a href="https://github.com/chetanyakaushal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-hairline-light text-text-secondary hover:border-oracle-red/50 hover:text-text-primary transition-all duration-300 font-mono text-sm cursor-pointer">
            <GithubLogo className="w-4 h-4" weight="fill" />
            View Code
          </a>
        </div>
      </div>
    </section>
  )
}
