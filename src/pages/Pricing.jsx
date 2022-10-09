import '../styles/Pricing.scss';
import '../styles/shared.scss';

import { useState } from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import PricingCard from '../components/Home/Pricing/PricingCard';
import { pricing } from '../services/data';
import TabHeader from '../components/common/TabHeader/TabHeader';
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function PricingScreen() {
  const [active, setActive] = useState('Monthly');

  return (
    <div className="pricing__screen">
      {/* <Header /> */}
      <TabHeader heading="Pricing" />

      <div className="pricing">
        <div className="pricing__container">
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

          <div className="pricing__cards">
            {pricing.map((item, index) => (
              <PricingCard item={item} key={index} />
            ))}
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
