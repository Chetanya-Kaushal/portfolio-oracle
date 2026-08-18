import { useEffect, useState } from 'react'

const chapters = [
  { id: 'hero', label: 'Boot' },
  { id: 'mission', label: 'Mission' },
  { id: 'journey', label: 'Journey' },
  { id: 'arsenal', label: 'Arsenal' },
  { id: 'projects', label: 'Agents' },
  { id: 'network', label: 'Network' },
  { id: 'contact', label: 'Contact' },
]

export default function ChapterNav() {
  const [active, setActive] = useState('hero')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  if (!visible) return null

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3">
      {chapters.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3"
        >
          <span className={`text-xs font-mono tracking-wider transition-all duration-300 ${
            active === id ? 'text-oracle-red opacity-100' : 'text-text-muted opacity-0 group-hover:opacity-100'
          }`}>
            {label}
          </span>
          <span className={`block rounded-full transition-all duration-300 ${
            active === id
              ? 'w-3 h-3 bg-oracle-red shadow-[0_0_10px_rgba(199,70,52,0.5)]'
              : 'w-2 h-2 bg-hairline-light group-hover:bg-text-muted'
          }`} />
        </a>
      ))}
    </nav>
  )
}
