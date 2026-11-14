import { useCallback, useEffect, useRef } from 'react'
import { lightboxCaps } from '../data/portfolio.js'

export default function Lightbox({ project, index, onClose, onNavigate }) {
  const images = [project.cover, ...project.gallery]
  const caps = lightboxCaps[project.id] || images.map((img) => img.caption || 'Cover')
  const current = images[index]
  const currentCap = caps[index] || current.caption || 'Cover'
  const closeRef = useRef(null)
  const touchX = useRef(null)

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate(1)
      if (event.key === 'ArrowLeft') onNavigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onNavigate])

  // Lock page scroll while open and focus the close button, as on the site.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (closeRef.current) closeRef.current.focus()
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const onTouchStart = useCallback((event) => {
    touchX.current = event.changedTouches[0].clientX
  }, [])

  const onTouchEnd = useCallback(
    (event) => {
      if (touchX.current === null) return
      const dx = event.changedTouches[0].clientX - touchX.current
      if (Math.abs(dx) > 48) onNavigate(dx < 0 ? 1 : -1)
      touchX.current = null
    },
    [onNavigate],
  )

  return (
    <div
      className="lightbox open"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        className="lb-btn lb-close"
        ref={closeRef}
        onClick={onClose}
        aria-label="Close viewer"
      >
        ✕
      </button>
      <button
        type="button"
        className="lb-btn lb-prev"
        onClick={() => onNavigate(-1)}
        aria-label="Previous image"
      >
        ‹
      </button>
      <img src={current.src} alt={currentCap} />
      <button
        type="button"
        className="lb-btn lb-next"
        onClick={() => onNavigate(1)}
        aria-label="Next image"
      >
        ›
      </button>
      <div className="lb-caption">
        {currentCap} · {index + 1} / {images.length}
      </div>
    </div>
  )
}
