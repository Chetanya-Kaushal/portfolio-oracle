import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const bootLines = [
  { text: '> ORACLE AI AGENT STUDIO v3.2.1', delay: 0 },
  { text: '> Initializing neural pathways...', delay: 200 },
  { text: '> Loading agent protocols...', delay: 400 },
  { text: '> Calibrating interface matrix...', delay: 600 },
  { text: '> ESTABLISHING CONNECTION...', delay: 800 },
  { text: '> STATUS: ONLINE', delay: 1000 },
  { text: '> WELCOME, ARCHITECT.', delay: 1200 },
]

export default function BootSequence({ onComplete }) {
  const containerRef = useRef(null)
  const [visibleLines, setVisibleLines] = useState([])
  const [showSkip, setShowSkip] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    setShowSkip(true)
    const timeouts = []

    bootLines.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, line.text])
      }, line.delay)
      timeouts.push(t)
    })

    const completeTimeout = setTimeout(() => {
      setFading(true)
      setTimeout(onComplete, 600)
    }, 2200)
    timeouts.push(completeTimeout)

    return () => timeouts.forEach(clearTimeout)
  }, [onComplete])

  const handleSkip = () => {
    setFading(true)
    setTimeout(onComplete, 300)
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 bg-oracle-black flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-oracle-red/30 to-transparent"
          style={{ animation: 'scan-line 3s linear infinite' }}
        />
      </div>

      {/* Terminal */}
      <div className="w-full max-w-2xl px-6 font-mono text-sm">
        {/* Header bar */}
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-hairline">
          <div className="w-3 h-3 rounded-full bg-oracle-red/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-neural-green/80" />
          <span className="ml-4 text-text-muted text-xs tracking-widest uppercase">Oracle Agent Terminal</span>
        </div>

        {/* Boot lines */}
        <div className="space-y-2 min-h-[200px]">
          {visibleLines.map((line, i) => (
            <div
              key={i}
              className="text-text-secondary"
              style={{
                opacity: 0,
                animation: `fadeIn 0.3s ease forwards`,
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <span className={line.includes('ONLINE') || line.includes('WELCOME') ? 'text-neural-green font-bold' : ''}>
                {line}
              </span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 h-1 bg-hairline rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-oracle-red to-neural-blue rounded-full transition-all duration-100"
            style={{
              width: `${(visibleLines.length / bootLines.length) * 100}%`,
            }}
          />
        </div>

        {/* Skip button */}
        {showSkip && (
          <button
            onClick={handleSkip}
            className="mt-6 text-text-muted text-xs tracking-widest uppercase hover:text-oracle-red transition-colors cursor-pointer"
          >
            [SKIP] Press to continue
          </button>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
