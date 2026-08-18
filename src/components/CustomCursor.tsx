import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import './CustomCursor.css'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power3.out' })
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power3.out' })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-hoverable]')) {
        setIsPointer(true)
        gsap.to(cursor, { scale: 0, duration: 0.3 })
        gsap.to(follower, { scale: 2.5, duration: 0.3, background: 'rgba(199, 70, 52, 0.15)' })
      }
    }

    const handleMouseOut = () => {
      setIsPointer(false)
      gsap.to(cursor, { scale: 1, duration: 0.3 })
      gsap.to(follower, { scale: 1, duration: 0.3, background: 'rgba(199, 70, 52, 0.05)' })
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={`cursor ${isPointer ? 'cursor--pointer' : ''}`} />
      <div ref={followerRef} className={`cursor-follower ${isPointer ? 'cursor-follower--pointer' : ''}`} />
    </>
  )
}
