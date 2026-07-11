import { PortfolioChat } from './components/PortfolioChat'
import { TerminalPreview } from './components/TerminalPreview'
import { portfolioData } from './data/portfolio'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Samuel Alli // Engineering Manager &amp; Senior Software Engineer</p>
          <h1>Shipping polished software with product focus, speed, and engineering rigor.</h1>
          <p className="hero-summary">
            I lead engineering teams and build production-ready frontend and full-stack
            systems, with a bias toward maintainable architecture, crisp user experience,
            and measurable delivery.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#chat">
              Ask the AI brief
            </a>
            <a className="secondary-action" href="/samuel-alli-resume.pdf" target="_blank" rel="noreferrer">
              View resume
            </a>
          </div>

          <ul className="hero-metrics" aria-label="Professional profile highlights">
            {portfolioData.metrics.map((metric) => (
              <li key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <TerminalPreview />
      </section>

      <section className="section-grid" id="about">
        <article className="content-card story-card">
          <p className="section-tag">About</p>
          <h2>Engineer for teams that need velocity without chaos.</h2>
          <p>{portfolioData.summary}</p>
          <p>
            This portfolio is tuned for hiring managers and recruiters who want signal
            quickly: clear domains, concrete systems work, and a bias toward shipping.
          </p>
        </article>

        <article className="content-card link-card">
          <p className="section-tag">Links</p>
          <h2>Verified contact points</h2>
          <div className="link-list">
            {portfolioData.links.map((link) => (
              <a
                key={link.label}
                className="network-link"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <span>{link.label}</span>
                <small>{link.value}</small>
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="content-card" id="strengths">
        <div className="section-heading">
          <p className="section-tag">Strengths</p>
          <h2>How I tend to create leverage</h2>
        </div>

        <div className="strength-grid">
          {portfolioData.strengths.map((strength) => (
            <article className="strength-card" key={strength.title}>
              <span className="strength-accent">{strength.index}</span>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card" id="projects">
        <div className="section-heading">
          <p className="section-tag">Selected Work</p>
          <h2>Products and systems tied to real repos</h2>
          <p>
            These project summaries are based on locally verifiable repository names,
            package metadata, and README content available in the workspace.
          </p>
        </div>

        <div className="project-grid">
          {portfolioData.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-domain">{project.domain}</span>
              </div>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="work">
        <article className="content-card">
          <div className="section-heading">
            <p className="section-tag">Execution</p>
            <h2>Delivery patterns recruiters and hiring teams can expect</h2>
          </div>

          <div className="timeline">
            {portfolioData.deliveryModes.map((item) => (
              <div className="timeline-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="content-card availability-card">
          <p className="section-tag">Availability</p>
          <h2>Open for impactful engineering roles</h2>
          <p>
            I am available for conversations around senior frontend, full-stack, and
            platform-leaning software engineering work.
          </p>
          <ul className="availability-list">
            {portfolioData.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="content-card chat-section" id="chat">
        <div className="section-heading">
          <p className="section-tag">AI Brief</p>
          <h2>Chat with a portfolio copilot</h2>
          <p>
            This assistant uses server-side OpenRouter access, so the browser no longer
            carries the API key in the shipped bundle.
          </p>
        </div>

        <PortfolioChat />
      </section>
    </main>
  )
}

export default App
