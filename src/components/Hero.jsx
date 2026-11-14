import { profile } from '../data/portfolio.js'

export default function Hero() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            giovanni anggasta<i>.</i>
          </a>
          <nav className="nav-links" aria-label="Main">
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

          <div className="stage" aria-label="Portfolio cover">
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
              <svg width="34" height="38" viewBox="0 0 34 38" fill="none" aria-hidden="true">
                <path
                  d="M4 2 L30 20 L17.5 22.5 L24 35 L18.5 37.5 L12 25 L4 32 Z"
                  fill="#0057ff"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="cursor-tag">
                giovanni anggasta
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#f6e94c" aria-hidden="true">
                  <path d="M12 1 L14.4 9.6 L23 12 L14.4 14.4 L12 23 L9.6 14.4 L1 12 L9.6 9.6 Z" />
                </svg>
              </span>
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

          <div className="hero-meta">
            <div className="item">
              <b>{profile.role}</b>
              <span>{profile.availableNote}</span>
            </div>
            <div className="item">
              <b>{profile.projectCount}</b>
              <span>{profile.projectCountNote}</span>
            </div>
            <div className="item">
              <b>{profile.location}</b>
              <span>{profile.phoneDisplay}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
