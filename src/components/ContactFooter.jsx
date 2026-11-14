import { profile, contact } from '../data/portfolio.js'

export default function ContactFooter() {
  return (
    <footer id="contact" className="footer" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="contact-kicker">[contact]</p>
        <h2 id="contact-title">
          {contact.heading}
          <br />
          {contact.subheading}
        </h2>
        <p className="footer-name">
          giovanni <span>anggasta</span>
        </p>
        <div className="contact-grid">
          <a href={`mailto:${profile.email}`}>
            <span>email</span>
            <b>{profile.email}</b>
          </a>
          <a href={profile.phoneHref}>
            <span>phone · jakarta, indonesia</span>
            <b>{profile.phoneDisplay}</b>
          </a>
          <a href={profile.behance} target="_blank" rel="noreferrer">
            <span>behance · full case studies</span>
            <b>{profile.behanceLabel}</b>
          </a>
          <a href={profile.cvUrl} download>
            <span>cv</span>
            <b>download cv</b>
          </a>
        </div>
        <div className="footer-base">
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
