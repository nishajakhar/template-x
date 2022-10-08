import './HomeBanner.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faMessage,
  faAward,
  faCaretDown,
  faMagic,
  faMagicWandSparkles,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function HomeBanner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <div className="banner__left-content">
          <h1>LOREM IPSUM DOLAR SIT</h1>
          <form className="banner__left-form">
            <input type="text" placeholder="Please enter your email" className="primary__input" />
            <button className="banner__left-button primary__button largeButton">
              SEND
              <span>
                <FontAwesomeIcon classname="social__icons" icon={faMagicWandSparkles} />
              </span>
            </button>
            <button className="banner__left-button primary__button smallButton">
              <FontAwesomeIcon classname="social__icons" icon={faMagicWandSparkles} />
            </button>
          </form>
          <p>Amet consectetur adipiscing elit magna odio vitae lorem</p>
        </div>
      </div>

      <div className="banner__right">
        <div className="banner__right-content">
          <img src="home1.png" />
        </div>
      </div>
    </div>
  );
}
