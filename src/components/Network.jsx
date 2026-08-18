import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GithubLogo, LinkedinLogo, TwitterLogo, EnvelopeSimple } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { name: 'GitHub', icon: GithubLogo, url: 'https://github.com/chetanyakaushal', color: '#FFFFFF' },
  { name: 'LinkedIn', icon: LinkedinLogo, url: 'https://linkedin.com/in/chetanyakaushal', color: '#0A66C2' },
  { name: 'Twitter', icon: TwitterLogo, url: 'https://twitter.com/chetanyakaushal', color: '#1DA1F2' },
  { name: 'Email', icon: EnvelopeSimple, url: 'mailto:hello@chetanyakaushal.com', color: '#C74634' },
]

export default function Network() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.network-node', {
        opacity: 0,
        scale: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
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
    const animate = () => {
      ctx.clearRect(0, 0, W, H)

      // Draw connections from center to each node
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

        // Animated dot along line
        const t = (Math.sin(frame * 0.02 + i) + 1) / 2
        const dotX = center.x + (node.x - center.x) * t
        const dotY = center.y + (node.y - center.y) * t

        ctx.beginPath()
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2)
        ctx.fillStyle = socialLinks[i].color
        ctx.fill()
      })

      // Draw connections between adjacent nodes
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
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="network"
      className="relative min-h-screen flex items-center justify-center px-6 py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(123,97,255,0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Chapter label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oracle-red/50" />
          <span className="font-mono text-xs text-oracle-red tracking-widest uppercase">Chapter 06 — The Network</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oracle-red/50" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
          Connect the <span className="text-neural-purple">Nodes</span>
        </h2>

        <p className="text-text-secondary text-lg mb-16 max-w-xl mx-auto">
          Every great agent needs a network. Let&apos;s connect and build something extraordinary together.
        </p>

        {/* Network visualization */}
        <div className="relative w-80 h-80 mx-auto mb-16">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Center node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-oracle-surface border-2 border-oracle-red flex items-center justify-center z-10">
            <span className="font-display text-sm font-bold text-oracle-red">CK</span>
          </div>

          {/* Social nodes */}
          {socialLinks.map((link, i) => {
            const angle = (i / socialLinks.length) * Math.PI * 2 - Math.PI / 2
            const x = 50 + Math.cos(angle) * 38
            const y = 50 + Math.sin(angle) * 38

            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="network-node absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-oracle-surface border border-hairline-light flex items-center justify-center hover:border-oracle-red/50 transition-all duration-300 group cursor-pointer z-10"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <link.icon
                  className="w-5 h-5 text-text-muted group-hover:text-text-primary transition-colors"
                  weight="fill"
                />
              </a>
            )
          })}
        </div>

        {/* Direct links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="network-node inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline-light text-text-secondary hover:border-oracle-red/50 hover:text-text-primary transition-all duration-300 font-mono text-sm"
            >
              <link.icon className="w-4 h-4" weight="fill" />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
