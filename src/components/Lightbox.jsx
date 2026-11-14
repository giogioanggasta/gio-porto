import { useEffect } from 'react'

export default function Lightbox({ project, index, onClose, onNavigate }) {
  const images = [project.cover, ...project.gallery]
  const current = images[index]

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate(1)
      if (event.key === 'ArrowLeft') onNavigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onNavigate])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery, image ${index + 1} of ${images.length}`}
      onClick={onClose}
    >
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close gallery">
          Close
        </button>
        <img src={current.src} alt={current.alt} />
        <p className="lightbox-caption">
          {project.title}: {current.caption || 'Cover'} · {index + 1} / {images.length}
        </p>
        <div className="lightbox-nav">
          <button type="button" onClick={() => onNavigate(-1)}>
            Previous
          </button>
          <button type="button" onClick={() => onNavigate(1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
