import { Fragment, useEffect, useRef, useState } from 'react'

const words = ['AI', 'strategy', 'that', 'survives']
const accent = 'contact with reality.'

function SignalChart({ drawn }: { drawn: boolean }) {
  const line =
    'M0 118 C 28 118, 34 96, 58 94 S 88 104, 106 86 S 138 62, 158 66 S 188 74, 206 52 S 238 40, 258 30 S 286 26, 300 14'
  return (
    <svg viewBox="0 0 300 130" className="signal" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b4bff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#2b4bff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L300 130 L0 130 Z`} fill="url(#fill)" className="signal__area" />
      <path
        d={line}
        fill="none"
        stroke="#2b4bff"
        strokeWidth="1.8"
        strokeLinecap="round"
        className={`signal__line ${drawn ? 'is-drawn' : ''}`}
      />
      <circle cx="300" cy="14" r="3.6" fill="#2b4bff" className={`signal__dot ${drawn ? 'is-in' : ''}`} />
    </svg>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const surface = useRef<HTMLDivElement>(null)
  const film = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 120)
    return () => window.clearTimeout(t)
  }, [])

  // The background film only runs while the hero is on screen and the tab is
  // visible, and stays on its poster frame when motion is reduced.
  useEffect(() => {
    const video = film.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let onScreen = false
    const sync = () => {
      if (onScreen && !document.hidden) void video.play().catch(() => {})
      else video.pause()
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        sync()
      },
      { threshold: 0.04 },
    )
    observer.observe(video)
    document.addEventListener('visibilitychange', sync)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', sync)
      video.pause()
    }
  }, [])

  useEffect(() => {
    const el = surface.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      el.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <section className={`hero ${mounted ? 'is-mounted' : ''}`} id="top" ref={surface}>
      <div className="hero__film" aria-hidden="true">
        <video
          ref={film}
          src="/film/hero-engagement.mp4"
          poster="/film/hero-engagement.jpg"
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        />
      </div>
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__spotlight" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="pulse" aria-hidden="true" />
An AI consultancy by CleverCurrent · est. 2019
          </p>

          <h1 className="hero__title">
            {words.map((word, i) => (
              <Fragment key={word}>
                <span className="word">
                  <span style={{ transitionDelay: `${140 + i * 70}ms` }}>{word}</span>
                </span>{' '}
              </Fragment>
            ))}
            <span className="word">
              <em style={{ transitionDelay: `${140 + words.length * 70}ms` }}>{accent}</em>
            </span>
          </h1>

          <p className="hero__sub">
            We're a small team of strategists and engineers who take ambitious companies from
            scattered AI experiments to systems in production — with the evaluation, governance and
            taste to keep them there.
          </p>

          <div className="hero__cta">
            <a className="btn btn--solid btn--lg" href="#contact">
              Book an intro call
              <svg viewBox="0 0 16 16" aria-hidden="true" className="btn__arrow">
                <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </a>
            <a className="btn btn--line btn--lg" href="#work">
              See client outcomes
            </a>
          </div>

          <dl className="hero__meta">
            <div>
              <dt>Engagements delivered</dt>
              <dd>140+</dd>
            </div>
            <div>
              <dt>Median time to first ship</dt>
              <dd>6 weeks</dd>
            </div>
            <div>
              <dt>Clients who renew</dt>
              <dd>82%</dd>
            </div>
          </dl>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="panel">
            <div className="panel__top">
              <span className="panel__label">
                <span className="panel__dot" />
                Model evaluation · live
              </span>
              <span className="panel__tag">v2.4</span>
            </div>

            <SignalChart drawn={mounted} />

            <div className="panel__axis">
              <span>Wk 1</span>
              <span>Wk 4</span>
              <span>Wk 8</span>
              <span>Wk 12</span>
            </div>

            <div className="panel__rows">
              <div className="panel__row">
                <span>Task success rate</span>
                <span className="panel__value">94.2%</span>
                <span className="panel__up">+31.8</span>
              </div>
              <div className="panel__row">
                <span>Groundedness</span>
                <span className="panel__value">0.97</span>
                <span className="panel__up">+0.14</span>
              </div>
              <div className="panel__row">
                <span>Cost / resolved task</span>
                <span className="panel__value">$0.41</span>
                <span className="panel__down">−58%</span>
              </div>
            </div>
          </div>

          <div className="float-card float-card--a">
            <span className="float-card__num">98.4</span>
            <span className="float-card__label">Eval suite pass</span>
          </div>

          <div className="float-card float-card--b">
            <span className="float-card__glyph">◎</span>
            <span className="float-card__label">Human review in loop</span>
          </div>
        </div>
      </div>
    </section>
  )
}
