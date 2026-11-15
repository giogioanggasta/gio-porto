import { about } from '../data/portfolio.js'
import Skills from './Skills.jsx'

export default function About() {
  return (
    <section id="about" style={{ paddingTop: 10 }} aria-labelledby="about-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="about-title">about &amp; skills</h2>
          <span className="sec-note">How I work and what I use</span>
        </div>
        <p className="about-lead">research first, pixels second.</p>
        <div className="about-cols">
          <div>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <Skills />
        </div>
      </div>
    </section>
  )
}
