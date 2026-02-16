import { products } from '../data/siteContent';

const cityImage =
  'https://images.pexels.com/photos/18020531/pexels-photo-18020531.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Products() {
  return (
    <section className="section alt">
      <div className="container">
        <p className="eyebrow">Other Agent Products</p>
        <h1>Nigeria-relevant AI products for serious operators.</h1>
        <p className="lead">
          Extend DropX Agent with specialized products and harnesses that solve fulfillment, support, and compliance
          bottlenecks.
        </p>

        <div className="cards">
          {products.map((item) => (
            <article className="card" key={item.name}>
              <h2>{item.name}</h2>
              <p className="muted">{item.audience}</p>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>

        <img src={cityImage} alt="Urban road context for delivery operations" className="wide-image" />
      </div>
    </section>
  );
}
