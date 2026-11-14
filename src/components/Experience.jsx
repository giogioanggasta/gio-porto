import { experience, education } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience" style={{ paddingTop: 10 }} aria-labelledby="experience-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="experience-title">experience</h2>
          <span className="sec-note">Education listed below</span>
        </div>
        <div className="exp-list">
          {experience.map((job) => (
            <div className="exp-row" key={`${job.title}-${job.period}`}>
              <div className="exp-when">
                <b>{job.period}</b>
                {job.place}
              </div>
              <div>
                <h3>
                  {job.title} <span>· {job.company}</span>
                </h3>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="edu">
          {education.map((edu) => (
            <div className={`edu-card edu-${edu.tone}`} key={edu.title}>
              <span className="yr">{edu.period}</span>
              <h3>{edu.title}</h3>
              <p>{edu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
