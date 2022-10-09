import '../styles/Cookie.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import CookieInformation from '../components/Cookie/CookieInformation/CookieInformation';
import CookieForm from '../components/Cookie/CookieForm/CookieForm';
import CookieHistory from '../components/Cookie/CookieHistory/CookieHistory';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function CookieScreen() {
  return (
    <div className="cookie__screen">
      {/* <Header /> */}
      <TabHeader heading="Cookie" />
      <div className="cookie">
        <div className="cookie__container">
          <CookieInformation />
          <CookieForm />
          <CookieHistory />
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
