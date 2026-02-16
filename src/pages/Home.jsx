import { Link } from 'react-router-dom';
import SafeImage from '../components/SafeImage';
import PageMeta from '../components/PageMeta';
import { contactChannels, coreFeatures, howItWorks, pricingTeaser, trustSignals } from '../data/siteContent';

const heroImage = '/images/hero-logistics.svg';

export default function Home() {
  return (
    <>
      <PageMeta
        title="DropX Agent | Autonomous Logistics Operations for Nigeria"
        description="Automate dispatch, routing, and customer updates for individuals and businesses across Nigeria."
      />
      <section className="hero section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Autonomous logistics operations</p>
            <h1>Autonomous Logistics Operations for Nigeria (Individuals + Businesses)</h1>
            <p className="lead">
              DropX Agent helps you run dispatch, routing, customer updates, and payment follow-up with less manual
              stress and better operational control.
            </p>
            <div className="cta-row">
              <Link to="/contact" className="btn primary">Book Demo</Link>
              <a href={contactChannels.whatsappUrl} className="btn ghost" target="_blank" rel="noreferrer">
                Start Pilot on WhatsApp
              </a>
            </div>
            <div className="quick-contact-row">
              <span>Direct contact:</span>
              <a href={`mailto:${contactChannels.email}`}>{contactChannels.email}</a>
            </div>
          </div>
          <SafeImage src={heroImage} alt="Logistics dashboard and city delivery concept" className="hero-img" />
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
          <h2>How it works</h2>
          <div className="timeline">
            {howItWorks.map((item) => (
              <article className="timeline-item" key={item.step}>
                <SafeImage src={item.icon} alt={item.title} className="step-icon" />
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
          <h2>Operational trust signals</h2>
          <div className="cards">
            {trustSignals.map((item) => (
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
