import './Footer.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import {
  faHeart,
  faMessage,
  faAward,
  faCaretDown,
  faLongArrowRight,
  faMagnifyingGlassArrowRight,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__primary">
        <div className="footer__primary-left">
          <div className="footer__primary-left__logo">
            <img src="logo.png" width="50" height="50" />
            <div className="footer__primary-left__text">
              Templates <span>X</span>
            </div>
          </div>
          <div className="footer__primary-left__subtext">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, orci leo, pharetra id. Lobortis pellentesque
              ipsum quis enim. Hac mattis magna ultrices eros imperdiet.
            </p>
          </div>

          <div className="footer__primary-left__social">
            <div>
              <a href="#">
                <FontAwesomeIcon classname="social__icons" icon={faLinkedinIn} />
              </a>{' '}
            </div>
            <div>
              <a href="#">
                {' '}
                <FontAwesomeIcon classname="social__icons" icon={faFacebookF} />
              </a>
            </div>
            <div>
              <a href="#">
                {' '}
                <FontAwesomeIcon classname="social__icons" icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__primary-middle">
          <h1>Quick Links</h1>
          <div className="footer__primary-middle__navitems">
            <a href="#">Home</a>
            <a href="#">FAQs</a>
            <a href="#">API Documentation</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="footer__primary-right">
          <h1>Newsletter</h1>
          <p>Please enter your email</p>
          <form>
            <input type="text" placeholder="Email" className="primary__input" />
            <button>
              {' '}
              <FontAwesomeIcon classname="social__icons" icon={faLongArrowRight} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer__secondary">
        <div className="footer__secondary-copyright">
          <p className="">&copy; 2022 TemplatesX. All rights reserved</p>
        </div>

        <div className="footer__secondary-navitems">
          <a href="#">Cookies</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
