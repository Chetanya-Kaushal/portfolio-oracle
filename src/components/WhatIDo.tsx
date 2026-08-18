import { useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WhatIDo.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Oracle HCM Cloud',
    icon: '◆',
    description: 'End-to-end implementation, configuration, and optimization of Oracle Fusion HCM Cloud modules including Core HR, Payroll, Absence Management, and Talent Management.',
  },
  {
    title: 'AI Agent Architecture',
    icon: '◇',
    description: 'Designing and building autonomous AI agents using cutting-edge frameworks. From payroll automation to intelligent document processing and conversational AI systems.',
  },
  {
    title: 'HRSD & Service Management',
    icon: '○',
    description: 'Oracle Human Resource Service Delivery implementation, case management workflows, employee self-service portals, and enterprise-wide service automation.',
  },
  {
    title: 'Technical Integration',
    icon: '□',
    description: 'REST API development, OIC integrations, HCM Data Loader, Fast Formulas, and custom extensions bridging Oracle Cloud with enterprise ecosystems.',
  },
  {
    title: 'Data Analytics & Reporting',
    icon: '△',
    description: 'OTBI reports, BI Publisher, SmartView dashboards, and data-driven insights transforming HR metrics into actionable business intelligence.',
  },
  {
    title: 'AI-Powered Automation',
    icon: '⬡',
    description: 'Building AI tools that automate repetitive HR tasks — from payroll anomaly detection to intelligent document classification and automated compliance checking.',
  },
]

export function WhatIDo() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index)
  }

  return (
    <section id="services" ref={containerRef} className="whatido">
      <div className="section-container">
        <div className="whatido__top">
          <span className="whatido__label">( What I Do )</span>
          <div className="whatido__line" />
        </div>
        <div className="whatido__grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`whatido__card ${expanded === index ? 'whatido__card--active' : ''}`}
              data-hoverable
              onClick={() => toggle(index)}
            >
              <div className="whatido__cardHeader">
                <span className="whatido__icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <span className="whatido__arrow">{expanded === index ? '−' : '+'}</span>
              </div>
              <div className={`whatido__cardBody ${expanded === index ? 'whatido__cardBody--open' : ''}`}>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
