import LogoMark from './LogoMark'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="#top" aria-label="ThinkWell AI home">
              <span className="brand__mark" aria-hidden="true">
                <LogoMark />
              </span>
              <span className="brand__word">
                ThinkWell<span className="brand__accent">&nbsp;AI</span>
              </span>
            </a>
            <p>
              ThinkWell AI is the AI consultancy of CleverCurrent. We work with teams who would
              rather ship something real than something impressive.
            </p>
          </div>

          <div className="footer__cols">
            <div>
              <p className="footer__label">Explore</p>
              <a href="#services">Services</a>
              <a href="#approach">Approach</a>
              <a href="#work">Work</a>
              <a href="#team">Team</a>
            </div>
            <div>
              <p className="footer__label">Contact</p>
              <a href="mailto:whaletera@gmail.com">whaletera@gmail.com</a>
              <a href="https://thinkwellai.io/">thinkwellai.io</a>
              <a href="mailto:whaletera@gmail.com?subject=Careers%20at%20ThinkWell%20AI">
                Careers
              </a>
              <span>+44 20 7946 0912</span>
            </div>
            <div>
              <p className="footer__label">Studios</p>
              <span>14 Clerkenwell Green</span>
              <span>London EC1R 0DP</span>
              <span>New York, NY</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} CleverCurrent Ltd. ThinkWell AI is a CleverCurrent brand.
          </span>
          <div className="footer__legal">
            <a href="#faq">Privacy</a>
            <a href="#faq">Terms</a>
            <a href="#faq">AI policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
