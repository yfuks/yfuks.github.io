import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Card } from './components/ui/Card'
import { Section } from './components/ui/Section'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './components/Icons'

const projectIds = ['salut-cheffe'] as const

const projectMeta: Record<
  (typeof projectIds)[number],
  { url: string; imageUrl: string }
> = {
  'salut-cheffe': {
    url: 'https://salutcheffe.com/',
    imageUrl: '/salutcheffe-preview.png',
  },
}

function App() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const basePath = pathname.startsWith('/fr') ? '/fr' : ''

  return (
    <main>
      <Section>
        <div className="stack stack--page">
          <Header>
            <Header.Left>
              <a
                href={`${basePath}#top`}
                className="top-bar-logo"
                aria-label={t('nav.backToTop')}
              >
                <span className="top-bar-logo-pill">yfuks</span>
              </a>
            </Header.Left>
            <Header.Right>
              <nav className="top-bar-nav" aria-label="Main">
                <Link to={`${basePath}#projects`} className="top-bar-link">
                  {t('nav.portfolio')}
                </Link>
                <span className="top-bar-lang" aria-label="Language">
                  <Link
                    to="/"
                    className={`top-bar-lang-link ${basePath === '' ? 'is-active' : ''}`}
                    aria-current={basePath === '' ? 'page' : undefined}
                  >
                    EN
                  </Link>
                  <span className="top-bar-lang-sep" aria-hidden="true">
                    /
                  </span>
                  <Link
                    to="/fr"
                    className={`top-bar-lang-link ${basePath === '/fr' ? 'is-active' : ''}`}
                    aria-current={basePath === '/fr' ? 'page' : undefined}
                  >
                    FR
                  </Link>
                </span>
              </nav>
              <div className="top-bar-social">
                <a
                  href="https://github.com/yfuks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="top-bar-social-link"
                  aria-label={t('hero.links.github')}
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/yoann-fuks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="top-bar-social-link"
                  aria-label={t('hero.links.linkedin')}
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:yoannfuks@gmail.com"
                  className="top-bar-social-link"
                  aria-label={t('hero.links.email')}
                >
                  <EmailIcon />
                </a>
              </div>
              <a href="/resume/" className="btn btn--primary top-bar-resume">
                {t('nav.resume')}
              </a>
            </Header.Right>
          </Header>

          {/* Hero / presentation */}
          <Card aria-label="About Yoann">
            <section id="about" className="stack hero-section">
              <div className="stack">
                <div className="avatar">
                  <img
                    src="/yfuks.jpeg"
                    alt=""
                    className="avatar-image"
                    aria-hidden="true"
                  />
                </div>

                <div className="pill">
                  <span className="pill-dot" aria-hidden="true" />
                  <span>{t('hero.greeting')}</span>
                </div>
              </div>

              <div className="stack">
                <h1 className="hero-heading">
                  {t('hero.headline')}
                </h1>
                <blockquote
                  className="hero-body hero-body--accent"
                  cite="Yoann Fuks"
                >
                  &quot;{t('hero.tagline')}&quot;
                </blockquote>
                <div className="hero-links">
                  <a
                    href="https://github.com/yfuks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-link"
                    aria-label={t('hero.links.github')}
                  >
                    <GitHubIcon />
                    <span>{t('hero.links.github')}</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yoann-fuks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-link"
                    aria-label={t('hero.links.linkedin')}
                  >
                    <LinkedInIcon />
                    <span>{t('hero.links.linkedin')}</span>
                  </a>
                  <a
                    href="mailto:yoann@yfuks.dev"
                    className="hero-link"
                    aria-label={t('hero.links.email')}
                  >
                    <EmailIcon />
                    <span>{t('hero.links.email')}</span>
                  </a>
                </div>
              </div>
            </section>
          </Card>

          {/* Projects list */}
          <Card aria-label="Projects">
            <section id="projects" className="projects-section">
              <header className="projects-header">
                <div className="pill pill--subtle">
                  <span className="pill-dot" aria-hidden="true" />
                  <span>{t('projects.sectionLabel')}</span>
                </div>
                <h2 className="projects-title">{t('projects.title')}</h2>
                <p className="projects-intro">{t('projects.intro')}</p>
              </header>

              <div className="projects-list">
                {projectIds.map((id) => {
                  const meta = projectMeta[id]
                  const title = t(`projects.items.${id}.title`)
                  const tech = t(`projects.items.${id}.tech`, {
                    returnObjects: true,
                  }) as string[]
                  const features = t(`projects.items.${id}.features`, {
                    returnObjects: true,
                  }) as string[]

                  return (
                    <ProjectCard key={id}>
                      {meta.imageUrl && (
                        <ProjectCard.Image
                          src={meta.imageUrl}
                          alt={t('projects.screenshotAlt', { title })}
                        />
                      )}
                      <ProjectCard.Content>
                        <ProjectCard.Title>{title}</ProjectCard.Title>
                        <ProjectCard.Subtitle>
                          {t(`projects.items.${id}.subtitle`)}
                        </ProjectCard.Subtitle>
                        <ProjectCard.Description>
                          {t(`projects.items.${id}.description`)}
                        </ProjectCard.Description>
                        {tech.length > 0 && (
                          <ProjectCard.Tech tech={tech} />
                        )}
                        {features.length > 0 && (
                          <ProjectCard.Features features={features} />
                        )}
                        {meta.url && (
                          <ProjectCard.Link href={meta.url}>
                            {t('projects.viewSite')}
                          </ProjectCard.Link>
                        )}
                      </ProjectCard.Content>
                    </ProjectCard>
                  )
                })}
              </div>
            </section>
          </Card>
        </div>
      </Section>
    </main>
  )
}

export default App
