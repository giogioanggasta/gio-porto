import { moreWork } from '../data/portfolio.js'

export default function MoreWork() {
  return (
    <section id="more-work" aria-labelledby="more-work-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="more-work-title">more work</h2>
          <span className="sec-note">Full case studies on Behance</span>
        </div>
        <div className="more-grid">
          {moreWork.map((item) => (
            <article className="more-card" key={item.id}>
              <span className="more-label">{item.label}</span>
              <span className="more-company">{item.company}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="more-period">{item.period}</p>
              <a href={item.behance} target="_blank" rel="noreferrer">
                view on behance
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
