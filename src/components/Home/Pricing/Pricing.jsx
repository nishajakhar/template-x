import './Pricing.scss';
import PricingCard from './PricingCard';
export default function Pricing() {
  return (
    <div className="pricing__container">
      <div className="pricing">
        <div className="pricing__heading">
          <h1>Pricing</h1>
          <div className="pricing__heading-filter">
            <div>
              <p>MONTHLY</p>
            </div>
            <div>
              <p>YEARLY</p>
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
