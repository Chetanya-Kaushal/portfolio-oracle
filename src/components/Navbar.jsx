import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-oracle-black/80 backdrop-blur-xl border-b border-hairline'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-oracle-surface border border-oracle-red/50 flex items-center justify-center group-hover:border-oracle-red transition-colors">
            <span className="font-display text-xs font-bold text-oracle-red">CK</span>
          </div>
          <span className="font-display text-sm font-semibold text-text-primary tracking-wide hidden sm:block">
            Chetanya Kaushal
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Mission', 'Journey', 'Arsenal', 'Agents', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs text-text-muted hover:text-oracle-red tracking-widest uppercase transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Status indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline-light bg-oracle-surface/30">
          <span className="w-1.5 h-1.5 rounded-full bg-neural-green animate-pulse" />
          <span className="font-mono text-xs text-text-muted">ONLINE</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        >
          <span className={`w-5 h-px bg-text-primary transition-all ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`w-5 h-px bg-text-primary transition-all ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-oracle-black/95 backdrop-blur-xl border-b border-hairline">
          <nav className="flex flex-col items-center gap-6 py-8">
            {['Mission', 'Journey', 'Arsenal', 'Agents', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm text-text-secondary hover:text-oracle-red tracking-widest uppercase transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
