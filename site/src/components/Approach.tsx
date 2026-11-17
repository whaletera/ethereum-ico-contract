import { Reveal } from '../lib/motion'

const steps = [
  {
    n: '01',
    weeks: 'Week 0–1',
    title: 'Listen, then map',
    body: 'We interview the people doing the work — not just the sponsors. Two days of conversations usually reveals the real bottleneck, which is rarely the one in the brief.',
    detail: 'Output: opportunity map + a shortlist of three candidates worth building.',
  },
  {
    n: '02',
    weeks: 'Week 1–2',
    title: 'Prove it small',
    body: 'One narrow workflow, a real dataset, an honest baseline. If the numbers do not move in a fortnight of building, you have lost weeks instead of a quarter.',
    detail: 'Output: working spike, cost model, evaluation set, go / no-go.',
  },
  {
    n: '03',
    weeks: 'Week 3–10',
    title: 'Build it properly',
    body: 'Together with your engineers, in your stack. Evals before features, observability from day one, and a human in the loop wherever the cost of being wrong is high.',
    detail: 'Output: production system, runbooks, on-call handover.',
  },
  {
    n: '04',
    weeks: 'Ongoing',
    title: 'Leave the muscle behind',
    body: 'We document the decisions, train the team, and stay reachable. Success looks like your engineers shipping the next model improvement without calling us.',
    detail: 'Output: internal playbook, cohort training, 90-day advisory.',
  },
]

export default function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="shell">
        <div className="approach__grid">
          <div className="approach__sticky">
            <Reveal>
              <p className="eyebrow">How we work</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section__title">
                Boring process. <em>Unusually good outcomes.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="section__lede">
                We have run this play more than a hundred times. The order is not negotiable, because
                every step exists to stop you spending a year on the wrong thing.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="approach__aside">
                <span className="approach__aside-num">6 wks</span>
                <p>Median time from kickoff to something real in front of users.</p>
              </div>
            </Reveal>
          </div>

          <ol className="steps">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <li className="step">
                  <div className="step__rail" aria-hidden="true">
                    <span className="step__dot" />
                  </div>
                  <div className="step__content">
                    <div className="step__meta">
                      <span className="step__n">{step.n}</span>
                      <span className="step__weeks">{step.weeks}</span>
                    </div>
                    <h3 className="step__title">{step.title}</h3>
                    <p className="step__body">{step.body}</p>
                    <p className="step__detail">{step.detail}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
