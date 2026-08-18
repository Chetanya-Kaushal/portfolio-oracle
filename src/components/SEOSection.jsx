export default function SEOSection() {
  return (
    <section className="relative px-6 py-24 bg-oracle-dark border-t border-hairline">
      <div className="max-w-4xl mx-auto">
        {/* About section with rich text for Google */}
        <article>
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
            About Chetanya Kaushal
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              <strong>Chetanya Kaushal</strong> is a Front-End Developer based in Noida, India, 
              specializing in building modern, intelligent web applications. With expertise in 
              <strong> React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and 
              <strong> Tailwind CSS</strong>, Chetanya creates responsive and performant user interfaces.
            </p>
            <p>
              As an <strong>AI Agent Architect</strong>, Chetanya works with 
              <strong> Oracle AI Agent Studio</strong>, <strong>Generative AI</strong>, and 
              <strong> LangChain</strong> to build intelligent systems that bridge human creativity 
              with machine intelligence. His work focuses on creating seamless human-AI interaction 
              through thoughtful interface design.
            </p>
            <p>
              Chetanya holds a <strong>B.Tech in Computer Science</strong> and has experience 
              building production applications for startups and enterprises. His technical stack 
              includes <strong>React</strong>, <strong>Node.js</strong>, <strong>Python</strong>, 
              <strong> Git</strong>, and various AI/ML frameworks.
            </p>
          </div>
        </article>

        {/* Skills list for Google */}
        <article className="mt-12">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
              'Tailwind CSS', 'Node.js', 'Python', 'Git', 'Oracle AI Agent Studio',
              'Generative AI', 'LangChain', 'OpenAI API', 'Figma', 'Docker',
              'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB'
            ].map((skill) => (
              <div key={skill} className="px-4 py-2 bg-oracle-surface/30 rounded-lg border border-hairline-light">
                <span className="text-sm text-text-primary">{skill}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Projects list for Google */}
        <article className="mt-12">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
            Featured Projects by Chetanya Kaushal
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'Oracle AI Agent Console',
                desc: 'A real-time dashboard for managing AI agents with task orchestration and intelligent automation.',
              },
              {
                title: 'Neural Chat Interface',
                desc: 'Conversational AI interface with context-aware responses and streaming output visualization.',
              },
              {
                title: 'Agent Orchestrator',
                desc: 'Multi-agent coordination platform with visual workflow builder for chaining AI agents.',
              },
              {
                title: 'GenAI Code Assistant',
                desc: 'AI-powered code review and generation tool using GPT-4 and Monaco Editor.',
              },
            ].map((project) => (
              <div key={project.title} className="p-4 bg-oracle-surface/20 rounded-lg border border-hairline-light">
                <h3 className="font-display text-lg font-bold text-oracle-red">{project.title}</h3>
                <p className="text-text-secondary text-sm mt-1">{project.desc}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Contact info for Google */}
        <article className="mt-12 text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
            Contact Chetanya Kaushal
          </h2>
          <p className="text-text-secondary mb-6">
            Available for freelance projects, full-time opportunities, and AI consulting.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/chetanyakaushal" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-hairline-light text-text-secondary hover:border-oracle-red/50 hover:text-text-primary transition-all font-mono text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com/in/chetanyakaushal" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-hairline-light text-text-secondary hover:border-oracle-red/50 hover:text-text-primary transition-all font-mono text-sm">
              LinkedIn
            </a>
            <a href="https://twitter.com/chetanyakaushal" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-hairline-light text-text-secondary hover:border-oracle-red/50 hover:text-text-primary transition-all font-mono text-sm">
              Twitter
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
