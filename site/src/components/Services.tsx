import { Reveal } from '../lib/motion'

const services = [
  {
    index: '01',
    title: 'AI strategy & roadmap',
    body: 'A clear-eyed view of where AI actually pays off in your business — sequenced into a 12-month roadmap your board can read and your engineers can build.',
    image: '/images/services/strategy.jpg',
    alt: 'Two consultants mapping an AI roadmap on a chalkboard',
    points: ['Opportunity mapping', 'Build vs. buy', 'Board-ready business case'],
    glyph: (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.3" />
        <path d="M16 5v22M5 16h22" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Applied AI engineering',
    body: 'Production systems, not demos. Retrieval, agents, and evaluation harnesses written by people who have carried the pager for them.',
    image: '/images/services/engineering.jpg',
    alt: 'Hands typing production code on a laptop',
    points: ['LLM product builds', 'RAG & agent systems', 'Eval-driven development'],
    glyph: (
      <svg viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.3" />
        <path d="M12 16h8M16 12v8" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Data foundations',
    body: 'Models are only as good as the context you give them. We fix the pipelines, taxonomies and feedback loops that make AI reliable.',
    image: '/images/services/data.jpg',
    alt: 'Rows of server racks in a data centre',
    points: ['Context architecture', 'Retrieval quality', 'Feedback instrumentation'],
    glyph: (
      <svg viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="9" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M7 9v14c0 2 4 3.6 9 3.6s9-1.6 9-3.6V9" stroke="currentColor" strokeWidth="1.3" />
        <path d="M7 16c0 2 4 3.6 9 3.6s9-1.6 9-3.6" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Governance & assurance',
    body: 'Model risk, privacy, EU AI Act readiness and red-teaming — handled early, so legal and security are allies instead of late-stage blockers.',
    image: '/images/services/governance.jpg',
    alt: 'Security engineer reviewing test output during a red-team exercise',
    points: ['Risk classification', 'Red-teaming', 'Policy & controls'],
    glyph: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M16 5l9 3.6v7.2c0 5.4-3.6 9.4-9 11.2-5.4-1.8-9-5.8-9-11.2V8.6L16 5z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M12.2 16.2l2.8 2.8 5-5.6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    index: '05',
    title: 'Team enablement',
    body: 'Workshops and embedded coaching that leave your people fluent in AI — able to evaluate, prompt and challenge systems without us in the room.',
    image: '/images/services/enablement.jpg',
    alt: 'Consultant presenting an AI training session to a team',
    points: ['Exec briefings', 'Builder cohorts', 'Internal playbooks'],
    glyph: (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="22" cy="14" r="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 25c.6-4 3.6-6 7-6s6.4 2 7 6M20 19c3 0 5.4 1.8 6 5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    index: '06',
    title: 'Interim AI leadership',
    body: 'A fractional head of AI for the eighteen months it takes to hire one — setting standards, hiring, and keeping momentum across teams.',
    image: '/images/services/leadership.jpg',
    alt: 'Interim AI lead presenting to a leadership team',
    points: ['Fractional leadership', 'Hiring & team design', 'Operating cadence'],
    glyph: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M6 24V13l10-6 10 6v11" stroke="currentColor" strokeWidth="1.3" />
        <path d="M11 24v-7h10v7" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <div className="section__head">
          <Reveal>
            <p className="eyebrow">What we do</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section__title">
              Six ways we help, <em>one way of working.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="section__lede">
              Most engagements combine strategy and engineering. You get a partner who can write the
              memo and the code, without a handoff in between.
            </p>
          </Reveal>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60} className="service-wrap">
              <article className="service">
                <div className="service__media">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="service__index">{service.index}</span>
                  <span className="service__glyph" aria-hidden="true">
                    {service.glyph}
                  </span>
                </div>
                <div className="service__inner">
                  <h3 className="service__title">{service.title}</h3>
                  <p className="service__body">{service.body}</p>
                  <ul className="service__points">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
