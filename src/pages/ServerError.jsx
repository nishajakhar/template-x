import '../styles/ServerError.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function ServerErrorScreen() {
  return (
    <div className="servererror__screen">
      {/* <Header /> */}
      <div className="servererror">
        <div className="servererror__container">
          <div className="servererror__heading">
            <h1>500</h1>
            <p>Oops..</p>
            <p>Internal Server Error...</p>
          </div>
          <div className="servererror__image">
            <img src="500.png" />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <div className="color__circle circle__20"></div>
      <div className="color__circle circle__21"></div>
    </div>
  );
}
