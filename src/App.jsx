import { Card } from './components/ui/Card.jsx'
import { Section } from './components/ui/Section.jsx'
import { Button } from './components/ui/Button.jsx'

function App() {
  return (
    <main>
      <Section as="div">
        <Card aria-label="Intro card">
          <div className="stack stack--lg">
            <div className="stack">
              <div className="avatar" aria-hidden="true">
                <span className="avatar-initials">YF</span>
              </div>

              <div className="pill">
                <span className="pill-dot" aria-hidden="true" />
                <span>Bonjour, hello</span>
              </div>
            </div>

            <div className="stack">
              <h1 className="hero-heading">
                Yoann builds <span>full‑stack</span> stuff that actually works.
              </h1>
              <p className="hero-body">
                Portfolio / portfolio — projets, produits &amp; expérimentations. Bientôt : une
                sélection de travaux techniques et créatifs au fil des années.
              </p>
            </div>

            <div className="hero-footer">
              <Button variant="primary">
                <span>View projects</span>
                <span className="btn-icon" aria-hidden="true">
                  →
                </span>
              </Button>
              <Button as="a" href="#resume" variant="ghost">
                My resume
              </Button>
            </div>
          </div>
        </Card>
      </Section>
    </main>
  )
}

export default App
