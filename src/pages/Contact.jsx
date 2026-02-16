export default function Contact() {
  return (
    <section className="section alt">
      <div className="container narrow">
        <p className="eyebrow">Contact</p>
        <h1>Let’s design your logistics workflow together.</h1>
        <p className="lead">
          Share your current delivery process and we’ll map where AI automation can cut delays and improve customer
          experience.
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Full name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@company.com" required />
          </label>
          <label>
            Company / Business
            <input type="text" placeholder="Business name" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell us about your dispatch and delivery flow" required />
          </label>
          <button type="submit" className="btn primary">Request Demo</button>
        </form>

        <div className="contact-meta">
          <p><strong>Email:</strong> hello@dropxagent.com</p>
          <p><strong>WhatsApp:</strong> +234 800 000 0000</p>
        </div>
      </div>
    </section>
  );
}
