import './CookieHistory.scss';
import '../../../styles/shared.scss';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function CookieHistory(props) {
  return (
    <div className="cookie__history">
      <h1 className="cookie__history-heading">Cookie change history</h1>
      <div className="cookie__history-items">
        <div className="cookie__history-item">
          <h2>23.01.2022</h2>
          <p>
            <span className="subject">You </span> switch on category
            <span> Analytical and Performance Cookies</span>
          </p>
        </div>

        <div className="cookie__history-item">
          <h2>23.01.2022</h2>
          <p>
            <span className="subject">You </span> switch on category
            <span className="cookie-name"> Advertising and Social Media Cookies</span>
          </p>
        </div>

        <div className="cookie__history-item">
          <h2>23.01.2022</h2>
          <p>
            <span className="subject">You </span> switch on category
            <span className="cookie-name"> Analytical and Performance Cookies</span>
          </p>
        </div>

        <div className="cookie__history-item">
          <h2>23.01.2022</h2>
          <p>
            <span className="subject">You </span> switch on category
            <span className="cookie-name"> Personalisation Cookies</span>
          </p>
        </div>
      </div>
    </div>
  );
}
