import '../styles/PageNotFound.scss';
import '../styles/shared.scss';

import { Link } from 'react-router-dom';
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
        <div className="pagenotfound__container">
          <div className="pagenotfound__heading">
            <h1>Oops...</h1>
            <h1>Page Not Found...</h1>
            <div>
              <Link to="/">
                <button className="primary__button">GO TO HOME</button>
              </Link>
            </div>
          </div>

          <div className="pagenotfound__image">
            <div className="pagenotfound__image-container">
              <img src="404.png" />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <div className="color__circles circle__4"></div>
      <div className="color__circles circle__5"></div>
    </div>
  );
}
