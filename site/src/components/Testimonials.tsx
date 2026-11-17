import { Reveal } from '../lib/motion'

const quotes = [
  {
    quote:
      'They killed two of our three ideas in the first week and were right about both. That saved us a quarter and, honestly, a lot of credibility with the board.',
    name: 'Priya Raghavan',
    role: 'Chief Operating Officer, Northwind Bank',
    initials: 'PR',
  },
  {
    quote:
      'The team didn\u2019t hand us a demo and disappear. They sat with our clinicians, rewrote the eval set twice, and left us with something we can defend.',
    name: 'Dr. Maren Ellison',
    role: 'Chief Medical Information Officer, Loom Health',
    initials: 'ME',
  },
  {
    quote:
      'I\u2019ve worked with three AI consultancies. ThinkWell AI is the only one where the engineers who pitched were the engineers who built.',
    name: 'Tom\u00e1s Ferreira',
    role: 'VP Engineering, Atlas Logistics',
    initials: 'TF',
  },
]

export default function Testimonials() {
  return (
    <section className="section quotes" aria-label="Client testimonials">
      <div className="shell">
        <div className="section__head section__head--center">
          <Reveal>
            <p className="eyebrow">In their words</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section__title">
              The part clients <em>mention first.</em>
            </h2>
          </Reveal>
        </div>

        <div className="quotes__grid">
          {quotes.map((item, i) => (
            <Reveal key={item.name} delay={i * 90} className="quote-wrap">
              <figure className="quote">
                <span className="quote__mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <span className="quote__avatar" aria-hidden="true">
                    {item.initials}
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <span className="quote__role">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
