import '../styles/APIDocs.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function APIDocsScreen() {
  return (
    <div className="apidocs__screen">
      <Header />
      <div className="apidocs">
        <div className="apidocs__container"></div>
      </div>
      <Footer />
    </div>
  );
}
