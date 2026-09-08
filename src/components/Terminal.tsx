import { useEffect, useState } from 'react'
import './Terminal.css'

type TerminalLine = {
  type: 'cmd' | 'out'
  text: string
}

type TerminalProps = {
  commands: string[]
  /** line output per command index; commands without an entry just echo nothing */
  outputs?: Record<number, string[]>
  typingSpeed?: number
  delayBetweenCommands?: number
}

/**
 * macOS-style terminal that types each command, prints its output, and
 * loops forever. Pure state machine on setTimeout — no animation deps.
 */
export function Terminal({
  commands,
  outputs = {},
  typingSpeed = 45,
  delayBetweenCommands = 1000,
}: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [typing, setTyping] = useState('')

  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms)
        timers.push(t)
      })

    const run = async () => {
      while (!cancelled) {
        setLines([])
        setTyping('')
        await sleep(400)

        for (let i = 0; i < commands.length; i++) {
          for (let c = 1; c <= commands[i].length; c++) {
            if (cancelled) return
            setTyping(commands[i].slice(0, c))
            await sleep(typingSpeed)
          }
          if (cancelled) return
          await sleep(250)

          setTyping('')
          setLines((prev) => [
            ...prev,
            { type: 'cmd', text: commands[i] },
            ...(outputs[i] ?? []).map((text) => ({ type: 'out' as const, text })),
          ])
          await sleep(delayBetweenCommands)
        }

        await sleep(4000)
      }
    }

    run()

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [commands, outputs, typingSpeed, delayBetweenCommands])

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">chetanya@portfolio — zsh</span>
      </div>
      <div className="terminal__body">
        {lines.map((line, i) =>
          line.type === 'cmd' ? (
            <div key={i} className="terminal__line terminal__line--cmd">
              <span className="terminal__prompt">$</span> {line.text}
            </div>
          ) : (
            <div key={i} className="terminal__line terminal__line--out">
              {line.text}
            </div>
          ),
        )}
        <div className="terminal__line terminal__line--cmd">
          <span className="terminal__prompt">$</span> {typing}
          <span className="terminal__cursor" />
        </div>
      </div>
    </div>
  )
}
