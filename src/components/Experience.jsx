import { experience, education } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="experience-title">experience</h2>
          <span className="sec-note">Education listed below</span>
        </div>
        <div className="exp-list">
          {experience.map((job) => (
            <article className="exp-row" key={`${job.title}-${job.period}`}>
              <div className="exp-meta">
                <span>{job.period}</span>
                <span>{job.place}</span>
              </div>
              <div>
                <h3>
                  {job.title} · {job.company}
                </h3>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <h3 className="edu-title">education</h3>
        <div className="edu-list">
          {education.map((edu) => (
            <div className="edu-row" key={edu.title}>
              <span>{edu.period}</span>
              <div>
                <h4>{edu.title}</h4>
                <p>{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
