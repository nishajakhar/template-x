import '../styles/PaymentPlan.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import Card from '../components/Home/Card/Card';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function PaymentPlanScreen() {
  return (
    <div className="payment-plan__screen">
      {/* <Header /> */}
      <div className="payment-plan">
        <TabHeader heading="Standard Plan" />
        <div className="payment-plan__container">
          <div className="payment-plan__heading">
            <h1 className="payment-plan__heading-text">Main Advantages</h1>
          </div>
          <div className="payment-plan__advantages">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="payment-plan__subheading">
            <h1 className="payment-plan__subheading-text">After subscribing you will receive:</h1>
          </div>
          <div className="payment-plan__items">
            <ul>
              <li>Lorem ipsum dolor sit amet ghgh dksasid usyd ydias isj sjijs jajaj jasja </li>
              <li>consectetur adipiscing elit. </li>
              <li>Urna vel viverra fringilla jksdks ksjdskjds sjdjsdj sjdjsd djsdjslj dljsdlld sljdl</li>
              <li>eget suspendisse urna.</li>
            </ul>
          </div>
          <div className="payment-plan__actions">
            <div className="payment-plan__price">
              <div className="payment-plan__price-main">
                <p>PROMO</p>
                <h2>
                  50$<span>/monthly</span>
                </h2>
              </div>
              <div className="payment-plan__price-striked">
                <p>70$/monthly</p>
              </div>
            </div>
            <button className="primary__button">CONFIGURE</button>
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
