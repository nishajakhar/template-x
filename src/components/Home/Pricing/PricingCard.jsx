import { Link } from 'react-router-dom';
import './Pricing.scss';
export default function PricingCard({ item }) {
  return (
    <div className="pricing__card-outer">
      <div className="pricing__card">
        <div className="pricing__card-heading">
          <h1>{item.title}</h1>
          {item.promo && <p>PROMO</p>}
        </div>
        <div className="pricing__card-list">
          <ul className="available">
            {item.available.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
          <ul className="not-available">
            {item.notAvailable.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="pricing__cards-price">
          {item.secondaryPrice && <p>{item.secondaryPrice}/monthly</p>}

          {item.primaryPrice && (
            <h2>
              {item.primaryPrice}
              <span>/monthly</span>
            </h2>
          )}
        </div>
        <div class="pricing__choose">
          <Link to="/payment-plan">
            <button className="primary__button">CHOOSE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
