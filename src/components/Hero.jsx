import { profile } from '../data/portfolio.js'

export default function Hero() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            giovanni anggasta<i>.</i>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#work">work</a>
            <a href="#about">about</a>
            <a href="#experience">experience</a>
            <a href="#contact">contact</a>
            <a
              className="nav-cta"
              href={profile.behance}
              target="_blank"
              rel="noreferrer"
            >
              behance
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="page-title">
        <div className="wrap">
          <div className="hero-top">
            <span>
              <b>{profile.name}</b> · {profile.role}
            </span>
            <span>
              {profile.company} · {profile.location}
            </span>
          </div>

          <div className="stage">
            <div className="sel-box" aria-hidden="true">
              UX/UI
              <span className="h tl" />
              <span className="h tr" />
              <span className="h bl" />
              <span className="h br" />
            </div>
            <h1 id="page-title">portfolio</h1>
            <span className="sticker" aria-hidden="true">
              2026
            </span>
            <div className="cursor-wrap" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#0057ff">
                <path d="M4 2 L20 12 L13 13 L9 20 Z" />
              </svg>
              <span className="cursor-tag">giovanni anggasta</span>
            </div>
          </div>

          <div className="hero-intro">
            <p className="role">
              {profile.heroLine.split('user-centered')[0]}
              <span>user-centered</span>
              {profile.heroLine.split('user-centered')[1]}
            </p>
            <p>{profile.heroIntro}</p>
          </div>

          <div className="hero-actions">
            <a className="btn btn-blue" href="#work">
              see selected work
            </a>
            <a className="btn btn-white" href={profile.cvUrl} download>
              download cv
            </a>
            <a className="btn btn-text" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <dl className="hero-meta">
            <div className="item">
              <dt>{profile.role}</dt>
              <dd>{profile.availableNote}</dd>
            </div>
            <div className="item">
              <dt>{profile.projectCount}</dt>
              <dd>{profile.projectCountNote}</dd>
            </div>
            <div className="item">
              <dt>{profile.location}</dt>
              <dd>{profile.phoneDisplay}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}
