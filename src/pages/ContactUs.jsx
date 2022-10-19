import '../styles/ContactUs.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';

// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function ContactUsScreen() {
  return (
    <div className="contactus__screen">
      {/* <Header /> */}
      <div className="contactus">
        <TabHeader heading="Contact Us" />
        <div className="contactus__container">
          <div className="contactus__form">
            <div className="contactus__form-heading">
              <h1 className="contactus__form-heading__text">Can we help you?</h1>
            </div>
            <form>
              <div className="contactus__form-inputs">
                <div className="contactus__form-question">
                  <label className="">Question</label>
                  <input type="text" placeholder="Please enter your question" className="primary__input" />
                </div>
                <div className="contactus__form-email">
                  <label className="">Email</label>
                  <input type="text" placeholder="Please enter your email" className="primary__input" />
                </div>
              </div>
              <div className="contactus__form-message">
                <label className="">Message</label>
                <textarea placeholder="Please enter your message" rows="5" className="primary__input" />
              </div>
              <div className="contactus__form-policy">
                <input type="checkbox" className="bg-pink-300 m-1" />
                <label className="px-1">
                  I agree to <span className="text-orange-400 underline">Privacy Policy</span>
                </label>
              </div>

              <div className="contactus__form-button">
                <button className="primary__button">SEND</button>
              </div>
            </form>
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
