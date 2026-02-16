import { Link } from 'react-router-dom';
import { coreFeatures, howItWorks, pricingTeaser } from '../data/siteContent';

const heroImage =
  'https://images.unsplash.com/photo-1700177924938-c5d19f5bb3cb?auto=format&fit=crop&w=1400&q=80';

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Nigeria-focused autonomous logistics AI</p>
            <h1>Move deliveries faster with a friendly AI operations partner.</h1>
            <p className="lead">
              DropX Agent helps individuals and businesses coordinate pickup, dispatch, and delivery workflows with less
              stress and better visibility.
            </p>
            <div className="cta-row">
              <Link to="/contact" className="btn primary">Book a Demo</Link>
              <Link to="/solutions" className="btn ghost">See Solutions</Link>
            </div>
          </div>
          <img src={heroImage} alt="Busy city traffic representing Nigerian delivery routes" className="hero-img" />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Core features for modern logistics teams</h2>
          <div className="cards">
            {coreFeatures.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How DropX Agent works</h2>
          <div className="timeline">
            {howItWorks.map((item) => (
              <article className="timeline-item" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Pricing teaser</h2>
          <ul className="clean-list">
            {pricingTeaser.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="muted">Need custom workflow automation? We tailor plans for your operations reality.</p>
        </div>
      </section>
    </>
  );
}
