import '../styles/PageNotFound.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function PageNotFoundScreen() {
  return (
    <div className="pagenotfound__screen">
      {/* <Header /> */}
      <div className="pagenotfound">
        <img src="404.png" />
        <div className="pagenotfound__container">
          <div className="pagenotfound__heading">
            <h1>Oops...</h1>
            <h1>Page Not Found...</h1>
          </div>

          <button className="primary__button">GO TO HOME</button>
        </div>
      </div>
      {/* <Footer /> */}
      <div className="color__circles circle__4"></div>
      <div className="color__circles circle__5"></div>
    </div>
  );
}
