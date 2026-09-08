import { useRef } from 'react'
import { Terminal } from './Terminal'
import './Contact.css'

const terminalCommands = [
  'whoami',
  'ck deploy --agent payroll --oracle-hcm',
  'portfolio --stack',
  'echo "let\'s build something extraordinary"',
]

const terminalOutputs: Record<number, string[]> = {
  0: ['chetanya — oracle hcm consultant × ai agent architect'],
  1: ['✔ RAG pipeline initialized', '✔ Oracle Fusion HCM connected', '✔ agent live — payroll running autonomously'],
  2: ['react 19 · gsap · vite · typescript · ai'],
  3: ["let's build something extraordinary"],
}

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="contact" ref={containerRef} className="contact">
      <div className="section-container">
        <div className="contact__top">
          <span className="contact__label">( Contact )</span>
          <div className="contact__line" />
        </div>
        <div className="contact__content">
          <Terminal
            commands={terminalCommands}
            outputs={terminalOutputs}
            typingSpeed={45}
            delayBetweenCommands={1000}
          />
          <h2 className="contact__heading">
            Let's build something <br />
            <span className="contact__accent">extraordinary</span> together.
          </h2>
          <div className="contact__info">
            <div className="contact__infoItem" data-hoverable>
              <span className="contact__infoLabel">Email</span>
              <a href="mailto:chetanyac.k@gmail.com" className="contact__infoValue">chetanyac.k@gmail.com</a>
            </div>
            <div className="contact__infoItem" data-hoverable>
              <span className="contact__infoLabel">Location</span>
              <span className="contact__infoValue">Ahmedabad, Gujarat, India</span>
            </div>
            <div className="contact__infoItem" data-hoverable>
              <span className="contact__infoLabel">Availability</span>
              <span className="contact__infoValue contact__infoValue--available">Open to opportunities</span>
            </div>
          </div>
          <a href="mailto:chetanyac.k@gmail.com" className="contact__cta" data-hoverable>
            <span>Get in Touch</span>
            <span className="contact__ctaArrow">→</span>
          </a>
        </div>
        <div className="contact__footer">
          <span className="contact__copyright">© 2026 Chetanya Kaushal</span>
          <span className="contact__made">Built with passion & AI</span>
        </div>
      </div>
    </section>
  )
}
