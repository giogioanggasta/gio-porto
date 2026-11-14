// Interactive Taman Safari Quest prototype.
// Every screen is an original Figma frame (440 x 956 px one-by-one
// exports), shown pixel for pixel. Only the motion is rebuilt: the map
// zooms in to a pin, the detail page slides up from below, and the
// "Mission Complete!" card pops up over the map — the same transitions
// as Smart Animate in the Figma prototype.
// Flow (31 screens): home, Red Panda intro, 4 tutorial screens, map,
// then per mission: map zoom, mission detail, Scan QR, success popup
// over the next map — and the "MISSION COMPLETE!" finale at 1,900 pts.
import { useCallback, useEffect, useRef, useState } from 'react'
import { asset, safariMissions, safariSteps } from '../data/portfolio.js'

const TOTAL_POINTS = 1900
const CONFETTI_COLORS = ['#f6e94c', '#ff7a1a', '#22a35a', '#0057ff', '#e5484d', '#ffffff']

function progressAt(idx) {
  let pts = 0
  const done = [false, false, false, false, false]
  for (let i = 0; i <= idx && i < safariSteps.length; i += 1) {
    const step = safariSteps[i]
    if (step.successOf !== undefined) {
      done[step.successOf] = true
      pts += safariMissions[step.successOf].pts
    }
  }
  return { pts, done }
}

function fmt(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function makeConfetti() {
  return Array.from({ length: 34 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    animationDuration: `${1.1 + Math.random() * 1.4}s`,
    animationDelay: `${Math.random() * 0.45}s`,
    width: `${6 + Math.random() * 6}px`,
    height: `${9 + Math.random() * 8}px`,
  }))
}

export default function SafariQuest() {
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  const [confetti, setConfetti] = useState([])
  const timerRef = useRef(null)
  const popupTimerRef = useRef(null)

  const step = safariSteps[idx]
  const { pts, done } = progressAt(idx)
  const doneCount = done.filter(Boolean).length

  const stopPlay = useCallback(() => {
    setPlaying(false)
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const show = useCallback(
    (nextIdx) => {
      setIdx(Math.max(0, Math.min(safariSteps.length - 1, nextIdx)))
    },
    [],
  )

  const next = useCallback(() => {
    setIdx((current) => {
      if (current >= safariSteps.length - 1) {
        stopPlay()
        return current
      }
      return current + 1
    })
  }, [stopPlay])

  const prev = useCallback(() => {
    setIdx((current) => (current > 0 ? current - 1 : current))
  }, [])

  // Success popup appears 380ms after the map step lands.
  useEffect(() => {
    if (popupTimerRef.current) window.clearTimeout(popupTimerRef.current)
    if (step.popup) {
      popupTimerRef.current = window.setTimeout(() => setPopupVisible(true), 380)
    } else {
      setPopupVisible(false)
    }
    return () => {
      if (popupTimerRef.current) window.clearTimeout(popupTimerRef.current)
    }
  }, [idx, step.popup])

  // Confetti on the finale trophy screen.
  useEffect(() => {
    if (!step.finale) return undefined
    setConfetti(makeConfetti())
    const t = window.setTimeout(() => setConfetti([]), 3400)
    return () => window.clearTimeout(t)
  }, [idx, step.finale])

  // Autoplay: one screen every 2.4s.
  useEffect(() => {
    if (!playing) return undefined
    timerRef.current = window.setInterval(() => {
      setIdx((current) => {
        if (current >= safariSteps.length - 1) {
          stopPlay()
          return current
        }
        return current + 1
      })
    }, 2400)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [playing, stopPlay])

  useEffect(() => () => {
    if (timerRef.current) window.clearInterval(timerRef.current)
    if (popupTimerRef.current) window.clearTimeout(popupTimerRef.current)
  }, [])

  function togglePlay() {
    if (playing) {
      stopPlay()
      return
    }
    if (idx >= safariSteps.length - 1) show(0)
    setPlaying(true)
  }

  function jumpToMission(missionIdx) {
    stopPlay()
    const firstStep = safariSteps.findIndex((s) => s.mission === missionIdx)
    if (firstStep >= 0) show(firstStep)
  }

  function onPhoneKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      stopPlay()
      next()
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      stopPlay()
      prev()
    }
  }

  const scoreMsg =
    doneCount === 5
      ? 'All missions complete! 1,900 points collected — the Red Panda Plush can be claimed.'
      : doneCount > 0
        ? `${doneCount} of 5 missions complete. On to the next mission.`
        : 'Click the phone or the “Next” button to run the flow.'

  return (
    <div className="quest-demo" id="questDemo">
      <div className="quest-head">
        <h3>
          interactive prototype — <em>try it right here</em>
        </h3>
        <span className="quest-live">
          <i /> Original Figma screens · clickable
        </span>
      </div>
      <p className="quest-sub">
        The screens are <b>not redrawn</b>: every screen in this phone is an
        original frame from the Taman Safari Quest Figma file, now using the
        full-resolution one-by-one exports (440 × 956 px each). Only the
        motion is rebuilt — the transitions between screens mimic Smart
        Animate in the prototype: the map zooms in to a pin, the detail page
        slides up from below, and the “Mission Complete!” popup appears over
        the map.
      </p>
      <div className="quest-layout">
        <div>
          <div className="quest-steps" aria-label="Prototype flow">
            <span><b>1</b> Home &amp; intro</span>
            <span><b>2</b> Map tutorial</span>
            <span><b>3</b> Zoom to pin</span>
            <span><b>4</b> Mission detail</span>
            <span><b>5</b> Scan QR</span>
            <span><b>6</b> Success popup</span>
            <span><b>7</b> Mission Complete</span>
          </div>
          <ol className="mission-list">
            {safariMissions.map((mission, i) => (
              <li key={mission.area}>
                <button
                  type="button"
                  className={`mission-item${i === step.mission ? ' is-active' : ''}${done[i] ? ' is-done' : ''}`}
                  onClick={() => jumpToMission(i)}
                >
                  <span className="m-num">{done[i] ? '✓' : i + 1}</span>
                  <span>
                    <span className="m-title">
                      Level {i + 1} · {mission.area} — {mission.title}
                    </span>
                    <span className="m-desc" style={{ display: 'block' }}>
                      Original frames: map zoom, mission detail, QR scan, success popup.
                    </span>
                  </span>
                  <span className="m-pts">{mission.pts} pts</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="quest-controls">
            <button type="button" className="q-btn q-btn-primary" onClick={togglePlay}>
              {playing ? '⏸ Playing… click to stop' : '▶ Play full flow'}
            </button>
            <button
              type="button"
              className="q-btn q-btn-ghost"
              onClick={() => {
                stopPlay()
                show(0)
              }}
            >
              ↺ Restart
            </button>
          </div>
          <div className="quest-score" aria-live="polite">
            <div className="score-num">
              <span>{fmt(pts)}</span> <small>points</small>
            </div>
            <div className="score-lab">
              Target: <b style={{ color: '#fff' }}>1,900 points</b> to claim the Red Panda Plush
              <br />
              <span>{scoreMsg}</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${Math.min(100, Math.round((pts / TOTAL_POINTS) * 100))}%` }}
              />
            </div>
          </div>
          <p className="quest-hint">
            How to try it: click the phone (or the Next button) to advance step
            by step — exactly the Figma frame order, from home to “MISSION
            COMPLETE!”. Click a mission in the list on the left to jump
            straight to it.
          </p>
        </div>
        <div className="phone-col">
          <div
            className="phone"
            role="button"
            tabIndex={0}
            aria-label="Taman Safari Quest prototype — click to go to the next screen"
            onClick={() => {
              stopPlay()
              next()
            }}
            onKeyDown={onPhoneKeyDown}
          >
            <div className="phone-screen">
              {safariSteps.map((s, i) => (
                <div key={s.img} className={`scr anim-${s.anim}${i === idx ? ' is-current' : ''}`}>
                  <img
                    src={s.img}
                    alt={`Original Figma screen from Taman Safari Quest — ${s.cap}`}
                  />
                </div>
              ))}
              <div className={`q-popup${popupVisible && step.popup ? ' is-show' : ''}`}>
                <img
                  src={step.popup || asset('/images/safari-quest/quest-success1.png')}
                  alt={
                    step.successOf !== undefined
                      ? `Original Figma popup — ${safariMissions[step.successOf].area} mission complete`
                      : ''
                  }
                />
              </div>
              <div className="confetti">
                {confetti.map((piece, i) => (
                  <i key={i} style={piece} />
                ))}
              </div>
            </div>
          </div>
          <div className="q-nav">
            <button
              type="button"
              className="q-step-btn"
              onClick={() => {
                stopPlay()
                prev()
              }}
            >
              ‹ Back
            </button>
            <span className="q-step-count">
              Screen {idx + 1} / {safariSteps.length}
            </span>
            <button
              type="button"
              className="q-step-btn"
              onClick={() => {
                stopPlay()
                next()
              }}
            >
              Next ›
            </button>
          </div>
          <p className="q-step-label">{step.cap}</p>
        </div>
      </div>
    </div>
  )
}
