import { profile, ARROW } from '../data/portfolio.js'

function Arrow() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path d={ARROW} />
    </svg>
  )
}

// Chapter 06 — "let's work together" panel, straight after the case
// studies. Same green panel treatment as the site's other panels
// (#0c3b2e, 28px radius), left aligned, one idea: get in touch.
// Links are Giovanni's real addresses only; no LinkedIn.
export default function ContactPanel() {
  return (
    <section className="contact-panel-sec" aria-labelledby="contact-panel-title">
      <div className="wrap">
        <div className="contact-panel">
          <div className="cp-head">
            <span className="cp-label">[ contact ]</span>
            <span className="cp-num">06</span>
          </div>
          <h2 id="contact-panel-title">let&rsquo;s work together.</h2>
          <p className="cp-intro">
            Have a product to design, or a role to fill? Email is the fastest way to reach me.
          </p>
          <div className="cp-actions">
            <a className="btn btn-white" href={`mailto:${profile.email}`}>
              email me
              <Arrow />
            </a>
            <a
              className="btn btn-outline-light"
              href={profile.behance}
              target="_blank"
              rel="noreferrer"
            >
              view on behance
              <Arrow />
            </a>
          </div>
          <div className="cp-meta">
            <span>jakarta, indonesia</span>
            <span>ui/ux designer</span>
            <span>ottodigital group</span>
          </div>
        </div>
      </div>
    </section>
  )
}
