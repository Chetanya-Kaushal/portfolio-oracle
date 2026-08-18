import { useEffect, useRef, useCallback } from 'react'

export default function NeuralNetwork() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const animRef = useRef(null)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width
    const H = canvas.height

    ctx.clearRect(0, 0, W, H)

    const nodes = []
    const nodeCount = 60
    const connectionDist = 150

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.sin(i * 0.7 + Date.now() * 0.0003) * 0.5 + 0.5) * W
      const y = (Math.cos(i * 1.1 + Date.now() * 0.0002) * 0.5 + 0.5) * H
      const dx = mouseRef.current.x - x
      const dy = mouseRef.current.y - y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const influence = Math.max(0, 1 - dist / 300)

      nodes.push({
        x: x + dx * influence * 0.1,
        y: y + dy * influence * 0.1,
        radius: 1.5 + influence * 2,
        alpha: 0.3 + influence * 0.7,
      })
    }

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < connectionDist) {
          const alpha = (1 - dist / connectionDist) * 0.15
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    // Draw nodes
    nodes.forEach(node => {
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(199, 70, 52, ${node.alpha})`
      ctx.fill()

      // Glow
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(199, 70, 52, ${node.alpha * 0.1})`
      ctx.fill()
    })

    animRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouse)

    animRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
      cancelAnimationFrame(animRef.current)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}
