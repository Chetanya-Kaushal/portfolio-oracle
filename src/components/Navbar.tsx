import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Navbar.css'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    )
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav ref={navRef} className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" data-hoverable onClick={() => scrollTo('landing')}>
          <span className="navbar__logoSymbol">CK</span>
          <span className="navbar__logoText">Portfolio</span>
        </div>
        <ul className="navbar__links">
          {['about', 'services', 'career', 'work', 'techstack', 'contact'].map((item) => (
            <li key={item} data-hoverable onClick={() => scrollTo(item)}>
              {item === 'services' ? 'What I Do' : item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
