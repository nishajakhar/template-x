import '../styles/Payment.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function PaymentScreen() {
  return (
    <div className="payment__screen">
      {/* <Header /> */}
      <div className="payment">
        <TabHeader heading="Payment" />
        <div className="payment__container">
          <div className="payment__info">
            <h1 className="payment__info-price">$50</h1>
            <select>
              <option>1 articles</option>
            </select>
            <div className="payment__info-plan">
              <p>Standard plan 1 monthly</p>
              <p>$50</p>
            </div>
            <div className="payment__info-billing">
              <div className="payment__info-billing__heading">
                <h1>Billing Information:</h1>
                <p>Edit</p>
              </div>
              <div className="payment__info-billing__item">
                <h1>Company Name</h1>
                <p>Apple</p>
              </div>
              <div className="payment__info-billing__item">
                <h1>Email Address</h1>
                <p>corneliafox@gmail.com</p>
              </div>
              <div className="payment__info-billing__item">
                <h1>VAT number</h1>
                <p>34729745628936394</p>
              </div>
            </div>
          </div>
          <div className="payment__form">
            <div className="payment__form-input">
              <label className="">Email</label>
              <input type="text" placeholder="Please enter your email" className="primary__input" />
            </div>

            <div className="payment__form-input">
              <label className="">Card Information</label>
              <input type="text" placeholder="Please enter card number" className="primary__input" />
            </div>
            <div>
              <div className="payment__form-input">
                <label className="">MM/YY</label>
                <input type="text" placeholder="Please enter mm / yy" className="primary__input" />
              </div>
              <div className="payment__form-input">
                <label className="">CVV</label>
                <input type="text" placeholder="Please enter cvv" className="primary__input" />
              </div>
            </div>
            <div className="payment__form-input">
              <label className="">Name on card</label>
              <input type="text" placeholder="Please enter name on card" className="primary__input" />
            </div>
            <div className="payment__form-input">
              <label className="">Country or region</label>

              <select>
                <option>Please select your country</option>
              </select>
            </div>

            <div className="payment__form-button">
              <button className="primary__button">Pay $50</button>
            </div>
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
