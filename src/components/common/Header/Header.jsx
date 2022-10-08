import { useRef, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
export default function Header() {
  const [active, setActive] = useState(0);
  const menu = useRef();
  const handleGetStarted = () => {
    menu.current.classList.toggle('hidden');
  };
  return (
    <div className="header">
      <div className="header__secondary">
        <div className="header__secondary-container">
          <div className="header__secondary-social">
            <div>
              <a href="#">
                <FontAwesomeIcon className="social__icons" icon={faLinkedinIn} />
              </a>{' '}
            </div>
            <div>
              <a href="#">
                {' '}
                <FontAwesomeIcon className="social__icons" icon={faFacebookF} />
              </a>
            </div>
            <div>
              <a href="#">
                {' '}
                <FontAwesomeIcon className="social__icons" icon={faTwitter} />
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
          <div className={'header__primary-navitem ' + (active == 0 ? 'item-active' : '')} onClick={() => setActive(0)}>
            <Link to="/">Home</Link>
          </div>
          <div className={'header__primary-navitem ' + (active == 1 ? 'item-active' : '')} onClick={() => setActive(1)}>
            <Link to="/faqs">FAQs</Link>
          </div>
          <div className={'header__primary-navitem ' + (active == 2 ? 'item-active' : '')} onClick={() => setActive(2)}>
            <Link to="/team-account">API Docs</Link>
          </div>
          <div className={'header__primary-navitem ' + (active == 3 ? 'item-active' : '')} onClick={() => setActive(3)}>
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className={'header__primary-navitem ' + (active == 4 ? 'item-active' : '')} onClick={() => setActive(4)}>
            <Link to="/blog">Blog</Link>
          </div>
          <div className={'header__primary-navitem ' + (active == 5 ? 'item-active' : '')} onClick={() => setActive(5)}>
            <Link to="/contact-us">Contact</Link>
          </div>
        </div>
        <div className="header__primary-actions">
          <button className="primary__button" onClick={handleGetStarted}>
            GET STARTED
          </button>
        </div>
        <div className="header__primary-collapse">
          <a href="#">
            {' '}
            <FontAwesomeIcon className="social__icons" icon={faBars} />
          </a>
        </div>
      </div>
      <div className="header__primary-menu hidden" ref={menu}>
        <div>
          <div className="menu-top">
            <h1>Are you Registered?</h1>
            <Link to="/login">
              <button
                className="primary__button"
                onClick={() => {
                  menu.current.classList.toggle('hidden');
                }}
              >
                LOGIN
              </button>
            </Link>
          </div>
          <div className="menu-bottom">
            <h1>First time on the site?</h1>
            <p>After a quick registration, you will get access to many features and additional benefits.</p>
            <div className="mt-5 flex justify-center">
              <div className="tertiary__button-outer">
                <Link to="/signup">
                  <button
                    className="tertiary__button"
                    onClick={() => {
                      menu.current.classList.toggle('hidden');
                    }}
                  >
                    CONFIGURE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
