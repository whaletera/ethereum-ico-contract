const logos = [
  'Northwind Bank',
  'Loom Health',
  'Atlas Logistics',
  'Meridian Legal',
  'Kite Retail',
  'Fathom Energy',
  'Bramble Media',
]

export default function Logos() {
  return (
    <section className="logos" aria-label="Selected clients">
      <div className="shell">
        <p className="logos__label">Trusted by teams at</p>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <ul className="marquee__group" key={copy} aria-hidden={copy === 1}>
              {logos.map((name) => (
                <li key={`${copy}-${name}`}>
                  <span className="marquee__mark" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
