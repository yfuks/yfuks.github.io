import { Card } from './components/ui/Card.jsx'
import { Section } from './components/ui/Section.jsx'
import { Button } from './components/ui/Button.jsx'
import { Header } from './components/Header.jsx'

const projects = [
  {
    id: 'proj-1',
    title: 'Monitoring & tooling',
    subtitle: 'Observability / dev‑experience',
    description:
      'Dashboards, automation and small tools that make engineers faster and production calmer.',
  },
  {
    id: 'proj-2',
    title: 'Product experiments',
    subtitle: 'Full‑stack prototypes',
    description:
      'From idea to usable MVP: APIs, frontends and a bit of design to validate concepts quickly.',
  },
  {
    id: 'proj-3',
    title: 'Open‑source & learning',
    subtitle: 'Sharing along the way',
    description:
      'Tiny libraries, blog posts and learning projects—because writing and shipping is how I learn.',
  },
]

function App() {
  return (
    <main>
      <Section as="div">
        <div className="stack stack--page">
          <Header>
            <Header.Left>
              <a href="#top" className="top-bar-logo" aria-label="Back to top of Yoann Fuks portfolio">
                <span className="top-bar-logo-pill">yoann</span>
              </a>
            </Header.Left>
            <Header.Right>
              <nav className="top-bar-nav" aria-label="Main">
                <a href="#about" className="top-bar-link">About</a>
                <a href="#projects" className="top-bar-link">Portfolio</a>
                <a href="#skills" className="top-bar-link">Skills</a>
                <a href="#blog" className="top-bar-link">Blog</a>
              </nav>
              <Button as="a" href="/resume/" variant="primary" className="top-bar-resume">
                My resume
              </Button>
            </Header.Right>
          </Header>

          {/* Hero / presentation */}
          <Card aria-label="About Yoann">
            <section id="about" className="stack hero-section">
              <div className="stack">
                <div className="avatar" aria-hidden="true">
                  <span className="avatar-initials">YF</span>
                </div>

                <div className="pill">
                  <span className="pill-dot" aria-hidden="true" />
                  <span>Bonjour, I&apos;m Yoann</span>
                </div>
              </div>

              <div className="stack">
                <h1 className="hero-heading">
                  I build <span>full‑stack</span> stuff that actually works.
                </h1>
                <p className="hero-body">
                  Code, products &amp; experiments. I like turning messy problems into small,
                  well‑tested pieces that ship to production without drama.
                </p>
              </div>

              <div className="hero-footer">
                <Button as="a" href="#projects" variant="primary">
                  <span>View projects</span>
                  <span className="btn-icon" aria-hidden="true">
                    →
                  </span>
                </Button>
                <Button as="a" href="/resume/" variant="ghost">
                  My resume
                </Button>
              </div>
            </section>
          </Card>

          {/* Projects list */}
          <Card aria-label="Projects">
            <section id="projects" className="projects-section">
              <header className="projects-header">
                <div className="pill pill--subtle">
                  <span className="pill-dot" aria-hidden="true" />
                  <span>Projects / Projets</span>
                </div>
                <h2 className="projects-title">A few things I&apos;ve worked on</h2>
                <p className="projects-intro">
                  Selection of technical work, side‑projects and experiments. Detailed case
                  studies are coming soon.
                </p>
              </header>

              <div className="projects-grid">
                {projects.map((project) => (
                  <article key={project.id} className="project-card">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-description">{project.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </Card>

          {/* Simple placeholders so top links scroll somewhere */}
          <Card aria-label="Skills">
            <section id="skills" className="meta-section">
              <h2 className="meta-title">Skills</h2>
              <p className="meta-body">
                Full‑stack web, tooling, monitoring and developer experience. This section will
                highlight concrete stacks and examples.
              </p>
            </section>
          </Card>

          <Card aria-label="Blog">
            <section id="blog" className="meta-section">
              <h2 className="meta-title">Blog</h2>
              <p className="meta-body">
                Short notes on things I&apos;m learning or building. Articles and snippets will
                land here.
              </p>
            </section>
          </Card>
        </div>
      </Section>
    </main>
  )
}

export default App
