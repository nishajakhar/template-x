import './Header.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Header() {
  return (
    <div className="header">
      <div className="header__secondary">
        <div className="header__secondary-container">
          <div className="header__secondary-social">
            <div>
              <a href="#">
                <FontAwesomeIcon className="social__icons" icon={faHeart} />
              </a>{' '}
            </div>
            <div>
              <a href="#">
                {' '}
                <FontAwesomeIcon className="social__icons" icon={faMessage} />
              </a>
            </div>
            <div>
              <a href="#">
                {' '}
                <FontAwesomeIcon className="social__icons" icon={faAward} />
              </a>
            </div>
          </div>
          <div className="header__secondary-translate">
            {' '}
            <p className="px-1">ENG</p>
            <FontAwesomeIcon icon={faCaretDown} classname="social__icons" className="text-pink-500" />
          </div>
        </div>
      </div>
      <div className="header__primary">
        <div className="header__primary-left">
          <img src="logoX.png" width="50" />
          <div className="header__primary-left__text">
            Templates <span>X</span>
          </div>
        </div>
        <div className="header__primary-navitems">
          <a href="#">Home</a>
          <a href="#">FAQs</a>
          <a href="#">API Docs</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="header__primary-actions">
          <button className="primary__button">GET STARTED</button>
        </div>
        <div className="header__primary-collapse">
          <a href="#">
            {' '}
            <FontAwesomeIcon className="social__icons" icon={faMessage} />
          </a>
        </div>
      </div>
    </div>
  );
}
