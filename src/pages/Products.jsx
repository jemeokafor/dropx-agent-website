import { Link } from 'react-router-dom';
import SafeImage from '../components/SafeImage';
import PageMeta from '../components/PageMeta';
import { products } from '../data/siteContent';

const cityImage = '/images/products-city.svg';

export default function Products() {
  return (
    <>
      <PageMeta
        title="Products | DropX Agent"
        description="Explore DropX Agent products for dispatch delays, payment friction, and routing reliability in Nigeria."
      />
      <section className="section alt">
      <div className="container">
        <p className="eyebrow">Other Agent Products</p>
        <h1>Nigeria-relevant AI products for serious operators.</h1>
        <p className="lead">
          Extend DropX Agent with specialized products and harnesses that solve dispatch delays, payment friction, and
          routing chaos.
        </p>

        <div className="cards products-grid">
          {products.map((item) => (
            <article className="card product-card" key={item.name}>
              <h2>{item.name}</h2>
              <p><strong>Problem solved:</strong> {item.problem}</p>
              <p><strong>Who it’s for:</strong> {item.audience}</p>
              <p><strong>Key outcome:</strong> {item.outcome}</p>
              <Link to="/contact" className="btn ghost product-cta">{item.cta}</Link>
            </article>
          ))}
        </div>

        <SafeImage src={cityImage} alt="Urban logistics illustration for Nigeria-focused products" className="wide-image" />
      </div>
      </section>
    </>
  );
}
