import { useCallback, useState } from 'react'
import Hero from './components/Hero.jsx'
import ProjectCase from './components/ProjectCase.jsx'
import MoreWork from './components/MoreWork.jsx'
import ContactPanel from './components/ContactPanel.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import Lightbox from './components/Lightbox.jsx'
import { projects } from './data/portfolio.js'

export default function App() {
  const [lightbox, setLightbox] = useState(null)

  const openGallery = useCallback((project, index) => {
    setLightbox({ project, index })
  }, [])

  const closeGallery = useCallback(() => setLightbox(null), [])

  const navigate = useCallback((step) => {
    setLightbox((current) => {
      if (!current) return current
      const total = current.project.gallery.length + 1
      const next = (current.index + step + total) % total
      return { project: current.project, index: next }
    })
  }, [])

  return (
    <>
      <Hero />
      <main>
        <section id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="work-title">selected work</h2>
              <span className="sec-note">
                Four case studies. Select any image to enlarge it.
              </span>
            </div>
            {projects.map((project) => (
              <ProjectCase
                key={project.id}
                project={project}
                onOpenGallery={openGallery}
              />
            ))}
          </div>
        </section>
        <ContactPanel />
        <MoreWork />
        <About />
        <Experience />
      </main>
      <ContactFooter />
      {lightbox && (
        <Lightbox
          project={lightbox.project}
          index={lightbox.index}
          onClose={closeGallery}
          onNavigate={navigate}
        />
      )}
    </>
  )
}
