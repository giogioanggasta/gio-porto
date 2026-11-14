import { profile, contact } from '../data/portfolio.js'

function GoArrow() {
  return (
    <span className="go">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        aria-hidden="true"
      >
        <path d="M6 18 L18 6 M9 6 H18 V15" />
      </svg>
    </span>
  )
}

export default function ContactFooter() {
  return (
    <footer id="contact" className="contact">
      <div className="wrap">
        <p className="c-kicker">
          {contact.heading} {contact.subheading}
        </p>
        <h2>
          giovanni
          <br />
          anggasta
        </h2>
        <div className="contact-cards">
          <a className="c-card c-white" href={`mailto:${profile.email}`}>
            <span className="lab">email</span>
            <span className="val">{profile.email}</span>
            <GoArrow />
          </a>
          <a className="c-card c-soft" href={profile.phoneHref}>
            <span className="lab">phone · jakarta, indonesia</span>
            <span className="val">{profile.phoneDisplay}</span>
            <GoArrow />
          </a>
          <a className="c-card c-white" href={profile.behance} target="_blank" rel="noreferrer">
            <span className="lab">behance · full case studies</span>
            <span className="val">{profile.behanceLabel}</span>
            <GoArrow />
          </a>
        </div>
        <div className="contact-actions" style={{ marginTop: 26 }}>
          <a className="btn btn-white" href={profile.cvUrl} download>
            download cv
          </a>
        </div>
        <div className="foot">
          <span>© 2026 Giovanni Anggasta, UI/UX Designer</span>
          <span>
            Jakarta, Indonesia ·{' '}
            <a href={profile.behance} target="_blank" rel="noreferrer">
              Behance
            </a>{' '}
            · <a href={`mailto:${profile.email}`}>Email</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
