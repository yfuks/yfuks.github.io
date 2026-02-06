import React, { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export function ProjectCard({ children, className = '', ...props }: React.ComponentPropsWithoutRef<'article'>) {
  return (
    <article className={`project-card ${className}`.trim()} {...props}>
      {children}
    </article>
  )
}

function ProjectCardImage({ src, alt, ...props }: React.ComponentPropsWithoutRef<'img'>) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Hide image wrapper if image fails to load
    const wrapper = e.currentTarget.closest('.project-card-image-wrapper')
    if (wrapper) {
      wrapper.style.display = 'none'
    }
  }

  return (
    <div className="project-card-image-wrapper">
      <img
        src={src}
        alt={alt}
        className="project-card-image"
        onError={handleError}
        loading="lazy"
        {...props}
      />
    </div>
  )
}

function ProjectCardContent({ children }: { children?: ReactNode }) {
  return <div className="project-card-content">{children}</div>
}

function ProjectCardTitle({ children }: { children?: ReactNode }) {
  return <h3 className="project-title">{children}</h3>
}

function ProjectCardSubtitle({ children }: { children?: ReactNode }) {
  return <p className="project-subtitle">{children}</p>
}

function ProjectCardDescription({ children }: { children?: ReactNode }) {
  return <p className="project-description">{children}</p>
}

function ProjectCardTech({ tech }: { tech: string[] }) {
  const { t } = useTranslation()
  return (
    <div className="project-tech-wrapper" aria-label="Tech stack">
      <span className="project-tech-label">{t('projects.techLabel')}</span>
      <div className="project-tech-list">
        {tech.map((item, index) => (
          <span key={index} className="project-tech-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCardFeatures({ features }: { features: string[] }) {
  const { t } = useTranslation()
  return (
    <div className="project-features-wrapper" aria-label="Features">
      <span className="project-features-label">{t('projects.featuresLabel')}</span>
      <ul className="project-features-list">
        {features.map((feature, index) => (
          <li key={index} className="project-feature-item">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCardLink({ href, children, ...props }: React.ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
      {...props}
    >
      {children}
    </a>
  )
}

ProjectCard.Image = ProjectCardImage
ProjectCard.Content = ProjectCardContent
ProjectCard.Title = ProjectCardTitle
ProjectCard.Subtitle = ProjectCardSubtitle
ProjectCard.Description = ProjectCardDescription
ProjectCard.Tech = ProjectCardTech
ProjectCard.Features = ProjectCardFeatures
ProjectCard.Link = ProjectCardLink
