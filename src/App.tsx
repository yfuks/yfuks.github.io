import React from 'react'
import { Card } from './components/ui/Card'
import { Section } from './components/ui/Section'
import { Header } from './components/Header'
import { Link } from './components/ui/Link'
import { ProjectCard } from './components/ProjectCard'

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  url?: string
  tech?: string[]
  features?: string[]
  imageUrl?: string
}

const projects: Project[] = [
  {
    id: 'salut-cheffe',
    title: 'Salut Cheffe',
    subtitle: 'Recipe site · Full‑stack',
    description:
      'French cooking recipe site for my sister, a cooking influencer. I built it alone with emphasis on SEO, accessibility and responsiveness.',
    url: 'https://salutcheffe.com/',
    tech: ['TypeScript', 'Next.js (ISR)', 'Supabase', 'Tailwind', 'GitHub Actions'],
    features: [
      'Dashboard to add & manage recipes and categories',
      'Authentication (email, Google, Microsoft)',
      'CI/CD with GitHub Actions',
      'User reviews on recipes',
    ],
    imageUrl: '/salutcheffe-preview.png',
  },
]

function App() {
  return (
    <main>
      <Section>
        <div className="stack stack--page">
          <Header>
            <Header.Left>
              <a href="#top" className="top-bar-logo" aria-label="Back to top of Yoann Fuks portfolio">
                <span className="top-bar-logo-pill">yfuks</span>
              </a>
            </Header.Left>
            <Header.Right>
              <nav className="top-bar-nav" aria-label="Main">
                <Link href="#about" className="top-bar-link">About</Link>
                <Link href="#projects" className="top-bar-link">Portfolio</Link>
              </nav>
              <a href="/resume/" className="btn btn--primary top-bar-resume">
                My resume
              </a>
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
                  I build <span>full-stack</span> products.
                </h1>
                <blockquote className="hero-body hero-body--accent" cite="Yoann Fuks">
                  "I create serious projects without taking myself too seriously."
                </blockquote>
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

              <div className="projects-list">
                {projects.map((project) => (
                  <ProjectCard key={project.id}>
                    {project.imageUrl && (
                      <ProjectCard.Image src={project.imageUrl} alt={`${project.title} screenshot`} />
                    )}
                    <ProjectCard.Content>
                      <ProjectCard.Title>{project.title}</ProjectCard.Title>
                      <ProjectCard.Subtitle>{project.subtitle}</ProjectCard.Subtitle>
                      <ProjectCard.Description>{project.description}</ProjectCard.Description>
                      {project.tech && project.tech.length > 0 && (
                        <ProjectCard.Tech tech={project.tech} />
                      )}
                      {project.features && project.features.length > 0 && (
                        <ProjectCard.Features features={project.features} />
                      )}
                      {project.url && (
                        <ProjectCard.Link href={project.url}>
                          View site / Voir le site
                        </ProjectCard.Link>
                      )}
                    </ProjectCard.Content>
                  </ProjectCard>
                ))}
              </div>
            </section>
          </Card>
        </div>
      </Section>
    </main>
  )
}

export default App
