import { Reveal } from '../lib/motion'

const shots = [
  {
    src: '/images/discovery-workshop.jpg',
    alt: 'A consulting team mapping problems on a wall of sticky notes during a discovery workshop',
    tag: 'Discovery week',
    title: 'Mapping the real problem',
    body: 'Two days with the people who actually do the work — before anyone opens a model.',
    size: 'feature',
    index: '01',
  },
  {
    src: '/images/strategy-flipchart.jpg',
    alt: 'A consultant presenting an AI roadmap on a flipchart to a client team',
    tag: 'Roadmap',
    title: 'The plan, on one wall',
    body: 'Sequenced by value and effort, not by what is trending.',
    size: 'tall',
    index: '02',
  },
  {
    src: '/images/engineering-whiteboard.jpg',
    alt: 'Three engineers discussing architecture and evaluation metrics at a whiteboard',
    tag: 'Architecture',
    title: 'Evaluation before features',
    body: 'Gold sets, failure modes and cost per task, agreed up front.',
    size: 'small',
    index: '03',
  },
  {
    src: '/images/business-case.jpg',
    alt: 'A team reviewing a business case chart on a whiteboard in a bright meeting room',
    tag: 'Business case',
    title: 'Numbers your CFO believes',
    body: 'Every pilot carries a baseline it has to beat.',
    size: 'small',
    index: '04',
  },
  {
    src: '/images/working-in-stack.jpg',
    alt: 'A team working on laptops and dashboards around a shared table',
    tag: 'Your stack',
    title: 'Built with your engineers',
    body: 'Pair-building inside your repo, your cloud, your standards.',
    size: 'small',
    index: '05',
  },
  {
    src: '/images/client-handover.jpg',
    alt: 'A consultant shaking hands with a client at the end of an engagement',
    tag: 'Handover',
    title: 'Left with the muscle',
    body: 'Runbooks, training and a team that no longer needs us.',
    size: 'small',
    index: '06',
  },
]

export default function Gallery() {
  return (
    <section className="section gallery" id="inside">
      <div className="shell">
        <div className="section__head section__head--split">
          <div>
            <Reveal>
              <p className="eyebrow">Inside the work</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section__title">
                What AI consulting <em>actually looks like.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="gallery__note">
            <p>
              Less keynote, more whiteboard. Six moments from a typical engagement — the rooms,
              sketches and working sessions where decisions get made.
            </p>
          </Reveal>
        </div>

        <div className="gallery__grid">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.src}
              delay={i * 60}
              className={`gallery__cell gallery__cell--${shot.size}`}
            >
              <figure className="shot">
                <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                <span className="shot__index">{shot.index}</span>
                <figcaption>
                  <span className="shot__tag">{shot.tag}</span>
                  <strong className="shot__title">{shot.title}</strong>
                  <span className="shot__body">{shot.body}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
