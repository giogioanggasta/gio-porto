import { ARROW } from '../data/portfolio.js'
import SafariQuest from './SafariQuest.jsx'

function ArrowIcon({ size = 13 }) {
  return (
    <svg
      width={size}
      height={size}
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

export default function ProjectCase({ project, onOpenGallery }) {
  return (
    <article className="project">
      <p className="statement">{project.statement}</p>
      <div className={`panel panel-${project.panel}`}>
        <svg
          className="panel-route"
          viewBox="0 0 1100 480"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={project.route.d}
            fill="none"
            stroke={project.route.stroke}
            strokeWidth="3"
            strokeDasharray="4 14"
            strokeLinecap="round"
          />
        </svg>
        <div className="panel-head">
          <span className="p-title">
            {project.number} · {project.shortTitle}
          </span>
          <span className="p-meta">
            {project.category}
            {project.date ? ` · ${project.date}` : ''}
          </span>
        </div>
        <button
          type="button"
          className="cover-card"
          onClick={() => onOpenGallery(project, 0)}
          aria-label={`Open ${project.title} gallery`}
        >
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            width="1920"
            height="1080"
            loading="lazy"
          />
          <span className="zoom">view gallery</span>
        </button>
        <div className="panel-cap">
          <span>Role: {project.role}</span>
          <span>{project.focus}</span>
        </div>
      </div>

      <div className="proj-body">
        <div>
          <p>{project.description}</p>
          {project.designNote ? <p>{project.designNote}</p> : null}
          <div className="tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ul className="highlights">
          {project.highlights.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.id === 'taman-safari' ? <SafariQuest /> : null}

      <div className="gallery">
        {project.gallery.map((img, i) => (
          <button
            type="button"
            key={img.src}
            onClick={() => onOpenGallery(project, i + 1)}
            aria-label={`${project.title} image: ${img.caption}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <span className="cap">{img.caption}</span>
          </button>
        ))}
      </div>

      <div className="proj-links">
        {project.links.map((link) => (
          <a
            key={link.href}
            className="proj-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
            <ArrowIcon />
          </a>
        ))}
      </div>
    </article>
  )
}
