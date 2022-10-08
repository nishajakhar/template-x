import { useState } from 'react';
import './Pricing.scss';
import PricingCard from './PricingCard';
export default function Pricing() {
  const [active, setActive] = useState('Monthly');
  return (
    <div className="pricing__container">
      <div className="pricing">
        <div className="pricing__heading">
          <h1>Pricing</h1>
          <div className="pricing__heading-filter">
            <div className={active == 'Monthly' ? 'active' : ''}>
              <button onClick={() => setActive('Monthly')}>MONTHLY</button>
              <div></div>
            </div>
            <div className={active == 'Yearly' ? 'active' : ''}>
              <button onClick={() => setActive('Yearly')}>YEARLY</button>
              <div></div>
            </div>
          </div>
        </div>
        <div className="pricing__cards">
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
      <div className="circle__pricing-1"></div>
      <div className="circle__pricing-2"></div>
    </div>
  );
}
