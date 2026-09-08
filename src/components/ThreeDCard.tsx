import {
  createContext,
  useContext,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from 'react'
import './ThreeDCard.css'

const CardContext = createContext<{ isMouseEntered: boolean }>({ isMouseEntered: false })

type CardContainerProps = {
  children: ReactNode
  className?: string
  containerClassName?: string
  containerStyle?: CSSProperties
}

/**
 * Wraps content in a perspective container and tilts it toward the cursor.
 * Children must not rely on `overflow: hidden` above them — clipping a
 * preserve-3d parent flattens the 3D space.
 */
export function CardContainer({ children, className, containerClassName, containerStyle }: CardContainerProps) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = bodyRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.transform = `rotateY(${(x * 14).toFixed(2)}deg) rotateX(${(y * -14).toFixed(2)}deg)`
  }

  const handleMouseEnter = () => setIsMouseEntered(true)

  const handleMouseLeave = () => {
    setIsMouseEntered(false)
    const el = bodyRef.current
    if (el) el.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <CardContext.Provider value={{ isMouseEntered }}>
      <div className={containerClassName} style={{ perspective: '1000px', ...containerStyle }}>
        <div
          ref={bodyRef}
          className={`tilt-body ${className ?? ''}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      </div>
    </CardContext.Provider>
  )
}

type CardBodyProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
} & Record<string, unknown>

export function CardBody({ children, className, style, ...rest }: CardBodyProps) {
  return (
    <div className={`tilt-card-body ${className ?? ''}`} style={style} {...rest}>
      {children}
    </div>
  )
}

type CardItemProps = {
  children?: ReactNode
  as?: ElementType
  className?: string
  translateZ?: number
  style?: CSSProperties
}

/** Moves a child forward in 3D space (toward the viewer) while the parent card is hovered. */
export function CardItem({ as: Tag = 'div', children, className, translateZ = 0, style }: CardItemProps) {
  const { isMouseEntered } = useContext(CardContext)
  return (
    <Tag
      className={`tilt-item ${className ?? ''}`}
      style={{
        ...style,
        transform: isMouseEntered ? `translateZ(${translateZ}px)` : 'translateZ(0)',
      }}
    >
      {children}
    </Tag>
  )
}
