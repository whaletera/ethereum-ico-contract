import { useState } from 'react'
import { Reveal } from '../lib/motion'

const faqs = [
  {
    q: 'What does an engagement typically cost?',
    a: 'Discoveries start at £18k for two to three weeks. Build engagements usually land between £60k and £180k depending on scope, and fractional leadership runs on a monthly retainer. We quote fixed prices against a defined outcome so there are no surprise invoices.',
  },
  {
    q: 'Do you work with our existing engineers?',
    a: 'Almost always. Our best work is pair-building inside your team and your stack. If you have no in-house engineering yet, we can build the first version ourselves and help you hire the people who will own it.',
  },
  {
    q: 'Which models and vendors do you use?',
    a: 'Whatever fits the job. We are deliberately model-agnostic and regularly run side-by-side evaluations across frontier and open-weight models. The evaluation harness matters far more than the logo on the API.',
  },
  {
    q: 'How do you handle data privacy and regulation?',
    a: 'Privacy, residency and model risk are scoped in week one, not bolted on at the end. We routinely work inside regulated environments and can support EU AI Act classification, DPIA preparation and internal model risk review.',
  },
  {
    q: 'What if the honest answer is that AI will not help?',
    a: 'Then we say so, usually in the first week, and you have spent a fraction of what a full build would cost. Roughly one in five discoveries ends with a recommendation not to build. We would rather be useful than billable.',
  },
  {
    q: 'How quickly can you start?',
    a: 'Most engagements begin within two to four weeks. We hold one slot per month for urgent work where a stalled programme is already costing more than the fix.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section faq" id="faq">
      <div className="shell faq__grid">
        <div className="faq__intro">
          <Reveal>
            <p className="eyebrow">Questions</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section__title">
              Asked before <em>every kickoff.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="section__lede">
              If yours is not here, ask it directly. We answer email within one working day, usually
              with a real answer rather than a call request.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a className="link-arrow" href="mailto:whaletera@gmail.com">
              whaletera@gmail.com
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </a>
          </Reveal>
        </div>

        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span>{item.q}</span>
                      <span className="faq__icon" aria-hidden="true">
                        <span />
                        <span />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq__panel"
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                  >
                    <div className="faq__panel-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
