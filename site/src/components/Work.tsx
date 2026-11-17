import { Reveal, useInView } from '../lib/motion'
import { useEffect, useState } from 'react'

const cases = [
  {
    client: 'Northwind Bank',
    sector: 'Financial services',
    title: 'An underwriting copilot that analysts actually trust',
    body: 'We rebuilt a stalled document-review pilot around retrieval quality and a strict citation contract, then instrumented it so risk could audit every answer.',
    metrics: [
      { value: '41%', label: 'faster decisions' },
      { value: '9 wks', label: 'pilot to rollout' },
      { value: '0', label: 'audit findings' },
    ],
  },
  {
    client: 'Loom Health',
    sector: 'Healthcare',
    title: 'Clinical notes drafted, not rewritten',
    body: 'A specialty-aware drafting assistant embedded in the EHR, with a human review gate and an eval set built from 4,000 de-identified encounters.',
    metrics: [
      { value: '6.2h', label: 'saved per clinician / week' },
      { value: '94%', label: 'draft acceptance' },
      { value: '3', label: 'clinics live in Q1' },
    ],
  },
  {
    client: 'Atlas Logistics',
    sector: 'Supply chain',
    title: 'Forecasting that pays for itself monthly',
    body: 'Replaced spreadsheet forecasts with a probabilistic model and a plain-language override tool for planners who knew better than the numbers.',
    metrics: [
      { value: '18%', label: 'fewer empty miles' },
      { value: '$2.4M', label: 'annualised margin' },
      { value: '11 wks', label: 'to production' },
    ],
  },
]

function CountUp({ value }: { value: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.6)
  const [display, setDisplay] = useState(value.replace(/[\d.]+/, '0'))
  const numeric = parseFloat(value.replace(/[^\d.]/g, ''))

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return
    const decimals = (value.split('.')[1] || '').replace(/\D/g, '').length
    const duration = 1100
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      const current = (numeric * eased).toFixed(decimals)
      setDisplay(value.replace(/[\d.]+/, current))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, numeric, value])

  return <span ref={ref}>{display}</span>
}

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="shell">
        <div className="section__head section__head--split">
          <div>
            <Reveal>
              <p className="eyebrow">Selected work</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section__title">
                Outcomes we can <em>name.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="work__note">
            <p>
              Client names used with permission. Figures are measured against the baseline set at
              kickoff, not against a vendor benchmark.
            </p>
          </Reveal>
        </div>

        <div className="work__list">
          {cases.map((item, i) => (
            <Reveal key={item.client} delay={i * 70}>
              <article className="case">
                <div className="case__intro">
                  <div className="case__meta">
                    <span className="case__client">{item.client}</span>
                    <span className="case__sector">{item.sector}</span>
                  </div>
                  <h3 className="case__title">{item.title}</h3>
                  <p className="case__body">{item.body}</p>
                </div>
                <dl className="case__metrics">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd>
                        <CountUp value={metric.value} />
                      </dd>
                      <dt>{metric.label}</dt>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
