import { useEffect, useRef, useState } from 'react'
import portrait from '../assets/ascii-portrait.jpg'
import './AsciiArt.css'

type AsciiArtProps = {
  src?: string
  /** number of character columns */
  resolution?: number
  color?: string
  /** seconds for the reveal animation */
  animationDuration?: number
  animateOnView?: boolean
  /** draw dark pixels (subject) instead of bright ones (background) */
  invert?: boolean
  className?: string
}

// darkest → brightest
const CHARS = ' .:-=+*#%@'
// monospace glyphs are ~1.7x taller than wide
const CELL_ASPECT = 1.7

/**
 * Renders an image as ASCII characters on a canvas. Each cell's brightness
 * picks a character from CHARS; cells fade in radially from the center
 * (canvas keeps 10k cells cheap versus rendering them as DOM nodes).
 */
export function AsciiArt({
  src = portrait,
  resolution = 100,
  color = '#9a9a9a',
  animationDuration = 1.6,
  animateOnView = true,
  invert = false,
  className,
}: AsciiArtProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // canvas mirrors the image's aspect so the full frame fits undistorted
  const [aspect, setAspect] = useState(0.563)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let raf = 0
    let cancelled = false

    const img = new Image()
    img.src = src
    img.decoding = 'async'

    const draw = (progress: number) => {
      const ctx = canvas.getContext('2d')
      if (!ctx || !img.naturalWidth) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const cssW = canvas.clientWidth
      const cssH = canvas.clientHeight
      if (cssW === 0 || cssH === 0) return
      canvas.width = Math.round(cssW * dpr)
      canvas.height = Math.round(cssH * dpr)
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, cssW, cssH)

      const cols = Math.min(resolution, Math.floor(cssW))
      const cellW = cssW / cols
      const cellH = cellW * CELL_ASPECT
      const rows = Math.max(1, Math.floor(cssH / cellH))

      const off = document.createElement('canvas')
      off.width = cols
      off.height = rows
      const octx = off.getContext('2d', { willReadFrequently: true })
      if (!octx) return
      octx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, cols, rows)
      const data = octx.getImageData(0, 0, cols, rows).data

      // histogram stretch so the portrait doesn't fade into the background
      let min = 1
      let max = 0
      const lumas: number[] = []
      for (let i = 0; i < cols * rows; i++) {
        const r = data[i * 4] / 255
        const g = data[i * 4 + 1] / 255
        const b = data[i * 4 + 2] / 255
        let luma = 0.299 * r + 0.587 * g + 0.114 * b
        if (invert) luma = 1 - luma
        lumas.push(luma)
        if (luma < min) min = luma
        if (luma > max) max = luma
      }
      const range = Math.max(max - min, 0.001)

      ctx.font = `${cellH}px "JetBrains Mono", monospace`
      ctx.textBaseline = 'top'
      ctx.fillStyle = color

      const cx = (cols - 1) / 2
      const cy = (rows - 1) / 2
      const maxDist = Math.hypot(cx, cy)

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const idx = row * cols + col
          const luma = (lumas[idx] - min) / range
          if (luma < 0.16) continue

          // radial stagger: center cells appear first
          const dist = Math.hypot(col - cx, row - cy) / maxDist
          const delay = dist * 0.7 * animationDuration
          const alpha = Math.min(Math.max((progress - delay) / 0.4, 0), 1)
          if (alpha <= 0) continue

          ctx.globalAlpha = alpha
          const ch = CHARS[Math.min(CHARS.length - 1, Math.floor(luma * CHARS.length))]
          ctx.fillText(ch, col * cellW, row * cellH)
        }
      }
      ctx.globalAlpha = 1
    }

    const start = (animate: boolean) => {
      const t0 = performance.now()
      const tick = (now: number) => {
        if (cancelled) return
        const progress = animate
          ? Math.min((now - t0) / 1000, animationDuration + 0.4)
          : Infinity
        draw(progress)
        if (progress < animationDuration + 0.4) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const run = () => {
      if (cancelled) return
      setAspect(img.naturalWidth / img.naturalHeight)
      if (animateOnView) {
        const io = new IntersectionObserver(
          (entries) => {
            if (entries.some((e) => e.isIntersecting)) {
              io.disconnect()
              start(true)
            }
          },
          { threshold: 0.25 },
        )
        io.observe(canvas)
      } else {
        start(true)
      }
    }

    if (img.complete && img.naturalWidth) {
      run()
    } else {
      img.onload = run
    }

    const onResize = () => {
      if (!cancelled) draw(animationDuration + 0.4)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [src, resolution, color, animationDuration, animateOnView, invert])

  return (
    <canvas
      ref={canvasRef}
      className={`asciiart ${className ?? ''}`}
      style={{ aspectRatio: String(aspect) }}
      role="img"
      aria-label="Portrait rendered as ASCII characters"
    />
  )
}
