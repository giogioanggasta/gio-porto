import { about } from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="about-sec">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="about-title">about and skills</h2>
          <span className="sec-note">How I work and what I use</span>
        </div>
        <p className="about-headline">{about.headline}</p>
        <div className="about-grid">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
