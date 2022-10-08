import '../styles/FAQ.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import FaqItem from '../components/Home/FAQ/FaqItem';
import Category from '../components/Home/FAQ/Category';

// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function faqScreen() {
  return (
    <div className="faq__screen">
      {/* <Header /> */}
      <div className="faq">
        <TabHeader heading="FAQ" />

        <div className="faq__filters">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>

        <div className="faq__container">
          <div className="faq__items">
            <FaqItem />
            <FaqItem />
            <FaqItem />
            <FaqItem />
            <FaqItem />
            <FaqItem />
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
