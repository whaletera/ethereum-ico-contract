import { Reveal } from '../lib/motion'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <Reveal>
          <div className="contact__card">
            <div className="contact__glow" aria-hidden="true" />
            <p className="eyebrow eyebrow--light">Next step</p>
            <h2 className="contact__title">
              Tell us what is <em>stuck.</em>
            </h2>
            <p className="contact__body">
              A 30-minute call, no deck. We will tell you whether we can help, roughly what it would
              take, and — if we are not the right fit — who is.
            </p>

            <div className="contact__actions">
              <a
                className="btn btn--light btn--lg"
                href="mailto:whaletera@gmail.com?subject=Intro%20call%20with%20ThinkWell%20AI"
              >
                Book an intro call
                <svg viewBox="0 0 16 16" aria-hidden="true" className="btn__arrow">
                  <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" fill="none" />
                </svg>
              </a>
              <a className="btn btn--outline-light btn--lg" href="mailto:whaletera@gmail.com">
                whaletera@gmail.com
              </a>
            </div>

            <dl className="contact__facts">
              <div>
                <dt>Response time</dt>
                <dd>Within 1 working day</dd>
              </div>
              <div>
                <dt>Studios</dt>
                <dd>London · New York</dd>
              </div>
              <div>
                <dt>Next available start</dt>
                <dd>Early December</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
