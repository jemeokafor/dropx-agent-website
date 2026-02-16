import { contactChannels } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <div>
          <p>© {new Date().getFullYear()} DropX Agent. Built for faster, smarter logistics operations in Nigeria.</p>
          <p className="muted">Data/privacy note: role-based access + audit-friendly operations logs.</p>
        </div>
        <div className="footer-cta-group">
          <a href={contactChannels.whatsappUrl} target="_blank" rel="noreferrer" className="btn ghost">WhatsApp CTA</a>
          <a href={`mailto:${contactChannels.email}`} className="btn primary">Direct Contact</a>
        </div>
      </div>
    </footer>
  );
}
