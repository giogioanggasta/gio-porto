import { ARROW, moreWork } from '../data/portfolio.js'

export default function MoreWork() {
  return (
    <section style={{ paddingTop: 0 }} aria-labelledby="more-work-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="more-work-title">more work</h2>
          <span className="sec-note">Full case studies on Behance</span>
        </div>
        <div className="more-grid">
          {moreWork.map((item) => (
            <div className="more-card" key={item.id}>
              <div className={`more-banner mb-${item.banner}`}>
                <span>{item.label}</span>
              </div>
              <div className="more-body">
                <span className="co">{item.company}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="when">{item.period}</span>
                <a href={item.behance} target="_blank" rel="noreferrer">
                  view on behance
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path d={ARROW} />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
