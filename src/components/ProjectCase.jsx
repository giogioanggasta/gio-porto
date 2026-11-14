export default function ProjectCase({ project, onOpenGallery }) {
  const allImages = [project.cover, ...project.gallery]
  return (
    <article className="project" id={`project-${project.id}`}>
      <p className="statement">{project.statement}</p>
      <div className={`panel panel-${project.panel}`}>
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
          <span>
            {project.role} · {project.focus}
          </span>
          <span>
            {allImages.length} images · select any image to enlarge it
          </span>
        </div>
      </div>

      <div className="proj-body">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.designNote}</p>
          <a
            className="text-link"
            href={project.behance}
            target="_blank"
            rel="noreferrer"
          >
            view on behance
          </a>
        </div>
        <div>
          <ul className="tag-list">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <ul className="highlight-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="thumb-row">
            {project.gallery.map((img, i) => (
              <button
                type="button"
                key={img.src}
                className="thumb"
                onClick={() => onOpenGallery(project, i + 1)}
                aria-label={`Open ${project.title} image: ${img.caption}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span>{img.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
