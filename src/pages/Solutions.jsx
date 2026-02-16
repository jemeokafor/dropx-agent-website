import SafeImage from '../components/SafeImage';
import PageMeta from '../components/PageMeta';

const teamImage = '/images/solutions-team.svg';

export default function Solutions() {
  return (
    <>
      <PageMeta
        title="Solutions | DropX Agent"
        description="Logistics automation solutions for Nigerian individuals, startups, and operations teams."
      />
      <section className="section">
      <div className="container">
        <p className="eyebrow">Solutions</p>
        <h1>Built for individuals, startups, and growing logistics businesses.</h1>
        <p className="lead">
          From one-person delivery hustle to multi-location operations, DropX Agent helps teams execute faster with
          fewer operational blind spots.
        </p>

        <div className="grid-2 split-top">
          <article className="card">
            <h2>For individuals</h2>
            <ul className="clean-list">
              <li>Same-day pickup and drop coordination</li>
              <li>Delivery status updates in plain language</li>
              <li>Simple request flow with less back-and-forth</li>
            </ul>
          </article>
          <article className="card">
            <h2>For businesses</h2>
            <ul className="clean-list">
              <li>Dispatch planning across Lagos, Abuja, and beyond</li>
              <li>Operational dashboards for order and rider visibility</li>
              <li>Escalation handling when routes or drop-offs fail</li>
            </ul>
          </article>
        </div>

        <SafeImage src={teamImage} alt="Business team planning logistics operations" className="wide-image" />
      </div>
      </section>
    </>
  );
}
