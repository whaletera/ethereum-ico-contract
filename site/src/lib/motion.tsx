import { useEffect, useRef, useState, type ReactNode } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Reveals an element once it scrolls into view. */
export function useReveal<T extends HTMLElement>(threshold = 0.16) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced()) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

/** Fade-and-rise wrapper. `delay` is in milliseconds. */
export function Reveal({ children, delay = 0, className = '', style }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}

/** True once the element has entered the viewport (for counters, drawings). */
export function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced()) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}
