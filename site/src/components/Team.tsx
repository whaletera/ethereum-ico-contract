import { Reveal } from '../lib/motion'

const team = [
  {
    name: 'Mei-Lin Chen',
    role: 'Founder & Principal',
    bio: 'Former head of ML platform at a FTSE 100 insurer. Mei-Lin leads strategy engagements and is usually the person asking the uncomfortable question.',
    photo: '/images/team/mei-lin-chen.jpg',
    focus: 'Strategy · Governance',
  },
  {
    name: 'Lukas Weber',
    role: 'Partner, Engineering',
    bio: 'Fifteen years building systems that cannot afford to be wrong. Lukas runs applied engineering, evaluation and the on-call handover.',
    photo: '/images/team/lukas-weber.jpg',
    focus: 'Systems · Evaluation',
  },
  {
    name: 'Yuna Park',
    role: 'Partner, Data',
    bio: 'Data platforms and retrieval architecture. Yuna joins when the answer is less about models and more about the plumbing underneath them.',
    photo: '/images/team/yuna-park.jpg',
    focus: 'Data · Retrieval',
  },
  {
    name: 'Anders Lindqvist',
    role: 'Head of Enablement',
    bio: 'Designs the workshops and internal playbooks. Anders has trained over 900 people across product, ops and leadership teams.',
    photo: '/images/team/anders-lindqvist.jpg',
    focus: 'Training · Adoption',
  },
]

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="shell">
        <div className="section__head section__head--split">
          <div>
            <Reveal>
              <p className="eyebrow">The people</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section__title">
                Four partners. <em>No bench.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="team__note">
            <p>
              Everyone who scopes your work is also on it. We deliberately stay small — it is the
              only way the person in the room can also read the code.
            </p>
          </Reveal>
        </div>

        <div className="team__grid">
          {team.map((person, i) => (
            <Reveal key={person.name} delay={i * 70} className="person-wrap">
              <article className="person">
                <div className="person__photo">
                  <img
                    src={person.photo}
                    alt={`${person.name}, ${person.role} at ThinkWell AI`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="person__focus">{person.focus}</span>
                </div>
                <div className="person__body">
                  <h3 className="person__name">{person.name}</h3>
                  <p className="person__role">{person.role}</p>
                  <p className="person__bio">{person.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="team__band">
            <div>
              <span className="team__band-num">12</span>
              <span className="team__band-label">
                senior specialists in our associate network, called in by problem — never by
                headcount.
              </span>
            </div>
            <a className="btn btn--line" href="#contact">
              Meet the team on a call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
