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
      <Header />
      <div className="cookie">
        <div className="cookie__container">
          <TabHeader heading="Cookie" />
          <CookieInformation />
          <CookieForm />
          <CookieHistory />
        </div>
      </div>
      <Footer />
    </div>
  );
}
