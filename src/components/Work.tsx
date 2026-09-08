import './Work.css'
import { CardContainer, CardBody, CardItem } from './ThreeDCard'

const projects = [
  {
    title: 'HDL Workbench',
    subtitle: 'AI-Powered Data Loading',
    description: 'Intelligent workbench for Oracle HCM Data Loader with AI-assisted mapping, validation, and error resolution.',
    tags: ['React', 'Python', 'Oracle HDL', 'GPT-4'],
    color: '#C74634',
  },
  {
    title: 'Payroll AI Agent',
    subtitle: 'Autonomous Payroll Processing',
    description: 'Self-operating AI agent that handles payroll calculations, anomaly detection, and compliance verification.',
    tags: ['LangChain', 'FastAPI', 'Oracle Payroll', 'RAG'],
    color: '#00D4FF',
  },
  {
    title: 'HR Document Intelligence',
    subtitle: 'Smart Document Processing',
    description: 'AI system that classifies, extracts, and processes HR documents with human-level accuracy.',
    tags: ['OCR', 'NLP', 'Python', 'Oracle HCM'],
    color: '#7B61FF',
  },
  {
    title: 'Employee Portal',
    subtitle: 'Self-Service HR Platform',
    description: 'Modern employee self-service portal with AI chatbot for HR queries, leave management, and benefits.',
    tags: ['React', 'Oracle HCM', 'REST API', 'AI Chat'],
    color: '#00FF88',
  },
  {
    title: 'Compliance Monitor',
    subtitle: 'Automated Compliance Checking',
    description: 'Real-time monitoring and automated compliance verification across Oracle HCM configurations.',
    tags: ['Python', 'Oracle Cloud', 'Analytics', 'Rules Engine'],
    color: '#FF6B6B',
  },
]

export function Work() {
  return (
    <section id="work" className="work">
      <div className="section-container">
        <div className="work__top">
          <span className="work__label">( Work )</span>
          <div className="work__line" />
        </div>
      </div>
      <div className="work__scroll">
        <div className="work__cards">
          {projects.map((project, index) => (
            <CardContainer key={index} containerClassName="work__cardContainer">
              <CardBody
                className="work__card"
                style={{ '--card-color': project.color } as React.CSSProperties}
                data-hoverable
              >
                <CardItem as="div" translateZ={25} className="work__cardNumber">
                  {String(index + 1).padStart(2, '0')}
                </CardItem>
                <div className="work__cardContent">
                  <CardItem as="span" translateZ={60} className="work__subtitle">
                    {project.subtitle}
                  </CardItem>
                  <CardItem as="h3" translateZ={100} className="work__title">
                    {project.title}
                  </CardItem>
                  <CardItem as="p" translateZ={40} className="work__desc">
                    {project.description}
                  </CardItem>
                  <div className="work__tags">
                    {project.tags.map((tag, i) => (
                      <CardItem key={i} as="span" translateZ={30} className="work__tag">
                        {tag}
                      </CardItem>
                    ))}
                  </div>
                </div>
                <div className="work__cardClip">
                  <div className="work__cardGlow" />
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
