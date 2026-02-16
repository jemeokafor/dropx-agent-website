import { Link } from 'react-router-dom';
import { contactChannels } from '../data/siteContent';

export default function StickyCTA() {
  return (
    <div className="sticky-cta" aria-label="Quick actions">
      <Link to="/contact" className="btn primary">Book Demo</Link>
      <a href={contactChannels.whatsappUrl} className="btn ghost" target="_blank" rel="noreferrer">Start Pilot</a>
    </div>
  );
}
