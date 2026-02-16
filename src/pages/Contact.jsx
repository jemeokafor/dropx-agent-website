import { useState } from 'react';
import PageMeta from '../components/PageMeta';
import { contactChannels } from '../data/siteContent';

const initialForm = {
  fullName: '',
  email: '',
  company: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.fullName.trim()) return 'Please enter your full name.';
    if (!form.email.includes('@')) return 'Please enter a valid email address.';
    if (form.message.trim().length < 20) return 'Please provide at least 20 characters in your message.';
    return '';
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: 'error', message: error });
      return;
    }

    setStatus({ type: 'success', message: 'Thanks! Your request has been received. We will contact you shortly.' });
    setForm(initialForm);
  };

  return (
    <>
      <PageMeta
        title="Contact | DropX Agent"
        description="Book a demo, start a pilot, or reach DropX Agent via WhatsApp and direct email."
      />
      <section className="section alt">
      <div className="container narrow">
        <p className="eyebrow">Contact</p>
        <h1>Let’s design your logistics workflow together.</h1>
        <p className="lead">
          Share your current delivery process and we’ll map where AI automation can cut delays and improve customer
          experience.
        </p>

        <div className="cta-row top-contact-cta">
          <a href={contactChannels.whatsappUrl} className="btn ghost" target="_blank" rel="noreferrer">Start Pilot on WhatsApp</a>
          <a href={`mailto:${contactChannels.email}`} className="btn primary">Email DropX Team</a>
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label>
            Full name
            <input name="fullName" type="text" placeholder="Your name" value={form.fullName} onChange={onChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@company.com" value={form.email} onChange={onChange} required />
          </label>
          <label>
            Company / Business
            <input name="company" type="text" placeholder="Business name" value={form.company} onChange={onChange} />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your dispatch and delivery flow"
              value={form.message}
              onChange={onChange}
              required
            />
          </label>
          <button type="submit" className="btn primary">Request Demo</button>

          {status.type === 'success' && <p className="form-success">{status.message}</p>}
          {status.type === 'error' && <p className="form-error">{status.message}</p>}
        </form>

        <div className="contact-meta">
          <p><strong>Email:</strong> {contactChannels.email}</p>
          <p><strong>WhatsApp:</strong> {contactChannels.whatsappLabel}</p>
        </div>
      </div>
      </section>
    </>
  );
}
