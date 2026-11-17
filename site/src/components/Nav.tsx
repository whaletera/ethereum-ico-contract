import { useEffect, useState } from 'react'
import LogoMark from './LogoMark'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#work', label: 'Work' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav__inner">
          <a className="brand" href="#top" aria-label="ThinkWell AI home">
            <span className="brand__mark" aria-hidden="true">
              <LogoMark />
            </span>
            <span className="brand__word">
              ThinkWell<span className="brand__accent">&nbsp;AI</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="btn btn--ghost nav__email" href="mailto:whaletera@gmail.com">
              whaletera@gmail.com
            </a>
            <a className="btn btn--solid" href="#contact">
              Start a conversation
              <svg viewBox="0 0 16 16" aria-hidden="true" className="btn__arrow">
                <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </a>
            <button
              type="button"
              className={`burger ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile" className="mobile__nav">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: `${60 + i * 45}ms` }}
              onClick={() => setOpen(false)}
            >
              <span className="mobile__index">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--solid mobile__cta" href="#contact" onClick={() => setOpen(false)}>
          Start a conversation
        </a>
        <p className="mobile__meta">London · New York · Remote-first</p>
      </div>
    </>
  )
}
