import PageMeta from '../components/PageMeta';

export default function About() {
  return (
    <>
      <PageMeta
        title="About | DropX Agent"
        description="DropX Agent mission, principles, and Nigeria-first logistics operations philosophy."
      />
      <section className="section">
      <div className="container narrow">
        <p className="eyebrow">About DropX Agent</p>
        <h1>We make logistics execution feel less chaotic and more controllable.</h1>
        <p className="lead">
          DropX Agent is built for Nigerian realities: dense traffic, rapid order growth, and customer expectations that
          demand speed and clarity.
        </p>

        <div className="card">
          <h2>Operating principles</h2>
          <ul className="clean-list">
            <li>Friendly communication, precise execution.</li>
            <li>Operational transparency across every dispatch step.</li>
            <li>Automation with human override where it matters.</li>
            <li>Designed to help local teams scale sustainably.</li>
          </ul>
        </div>
      </div>
      </section>
    </>
  );
}
