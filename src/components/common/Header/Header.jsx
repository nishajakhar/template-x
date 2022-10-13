import { useRef, useState } from 'react';
import './Header.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOut, faTimes, faUser, faCaretDown, faCancel } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
export default function Header({ login, setLogin }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const loginmenu = useRef();
  const mobile = useRef();

  const profilemenu = useRef();

  const handleGetStarted = () => {
    console.log('I am handle get started...', loginmenu.current);
    loginmenu.current.classList.toggle('hidden');
  };
  const handleGetProfile = () => {
    profilemenu.current.classList.toggle('hidden');
  };
  const handleMobileMenu = () => {
    console.log('I am cliked.....');
    mobile.current.classList.toggle('hidden');
  };

  return (
    <>
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
            <div
              className={'header__primary-navitem ' + (active == 0 ? 'item-active' : '')}
              onClick={() => setActive(0)}
            >
              <Link to="/">Home</Link>
            </div>
            <div
              className={'header__primary-navitem ' + (active == 1 ? 'item-active' : '')}
              onClick={() => setActive(1)}
            >
              <Link to="/faqs">FAQs</Link>
            </div>
            <div
              className={'header__primary-navitem ' + (active == 2 ? 'item-active' : '')}
              onClick={() => setActive(2)}
            >
              <Link to="/team-account">API Docs</Link>
            </div>
            <div
              className={'header__primary-navitem ' + (active == 3 ? 'item-active' : '')}
              onClick={() => setActive(3)}
            >
              <Link to="/pricing">Pricing</Link>
            </div>
            <div
              className={'header__primary-navitem ' + (active == 4 ? 'item-active' : '')}
              onClick={() => setActive(4)}
            >
              <Link to="/blog">Blog</Link>
            </div>
            <div
              className={'header__primary-navitem ' + (active == 5 ? 'item-active' : '')}
              onClick={() => setActive(5)}
            >
              <Link to="/contact-us">Contact</Link>
            </div>
          </div>
          {login && (
            <div onClick={handleGetProfile} className="header__primary-username">
              <p>
                {' '}
                <FontAwesomeIcon icon={faUser} classname="social__icons" className="text-pink-500" />
                Cornelia S.
              </p>
            </div>
          )}
          {!login && (
            <div className="header__primary-actions">
              <button className="primary__button" onClick={handleGetStarted}>
                GET STARTED
              </button>
            </div>
          )}
          <div className="header__primary-collapse">
            <div onClick={handleMobileMenu}>
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faBars} />
            </div>
          </div>
        </div>

        <div className="header__primary-menu hidden" ref={loginmenu}>
          <div>
            <div className="menu-top">
              <h1>Are you Registered?</h1>
              <Link
                to="/login"
                onClick={() => {
                  loginmenu.current.classList.toggle('hidden');
                }}
              >
                <button className="primary__button">LOGIN</button>
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
                        loginmenu.current.classList.toggle('hidden');
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

        <div className="header__primary-login-menu hidden" ref={profilemenu}>
          <div className="header__primary-login-menu-navitem">
            <Link to="/profile" className="">
              Profile
            </Link>
          </div>
          <div
            className="header__primary-login-menu-navitem"
            onClick={() => {
              profilemenu.current.classList.toggle('hidden');
            }}
          >
            <Link
              to="/team-account"
              className=""
              onClick={() => {
                profilemenu.current.classList.toggle('hidden');
              }}
            >
              Team Account
            </Link>
          </div>
          <div
            className="header__primary-login-menu-navitem"
            onClick={() => {
              profilemenu.current.classList.toggle('hidden');
            }}
          >
            <Link to="/templates" className="">
              Templates
            </Link>
          </div>
          <div
            className="header__primary-login-menu-navitem"
            onClick={() => {
              profilemenu.current.classList.toggle('hidden');
            }}
          >
            <Link to="/emails" className="">
              Emails
            </Link>
          </div>
          <div
            className="header__primary-login-menu-navitem"
            onClick={() => {
              profilemenu.current.classList.toggle('hidden');
            }}
          >
            <Link to="/contact-us" className="">
              Help
            </Link>
          </div>
          <div
            className="header__primary-login-menu-logout"
            onClick={() => {
              profilemenu.current.classList.toggle('hidden');
            }}
          >
            <div classname="">
              <FontAwesomeIcon
                icon={faSignOut}
                classname="social__icons"
                className="pr-1"
                onClick={() => {
                  profilemenu.current.classList.toggle('hidden');
                  setLogin(false);
                  navigate('/');
                }}
              />
              Logout
            </div>
          </div>
        </div>
      </div>
      <div className="mobile__navigation-menu hidden" ref={mobile}>
        <div className="mobile__navigation-overlay">
          <div className="mobile__navigation-overlay-content">
            <div className="mobile__navigation-header flex justify-between">
              <div className="mobile__navigation-header-left flex">
                <img src="logoX.png" width="50" />
                <div className="mobile__navigation-header-left__text">
                  Templates <span>X</span>
                </div>
              </div>
              <div className="mobile__navigation-header-right">
                <FontAwesomeIcon
                  icon={faTimes}
                  classname="social__icons"
                  className="text-pink-500 text-5xl"
                  onClick={handleMobileMenu}
                />
              </div>
            </div>
            <div className="mobile__navigation-navitems">
              <div className={'mobile__navigation-navitem ' + (active == 0 ? 'item-active' : '')}>
                <Link
                  to="/"
                  onClick={() => {
                    setActive(0);
                    handleMobileMenu();
                  }}
                >
                  Home
                </Link>
              </div>
              <div className={'mobile__navigation-navitem ' + (active == 1 ? 'item-active' : '')}>
                <Link
                  to="/faqs"
                  onClick={() => {
                    setActive(1);
                    handleMobileMenu();
                  }}
                >
                  FAQs
                </Link>
              </div>
              <div className={'mobile__navigation-navitem ' + (active == 2 ? 'item-active' : '')}>
                <Link
                  to="/team-account"
                  onClick={() => {
                    setActive(2);
                    handleMobileMenu();
                  }}
                >
                  API Docs
                </Link>
              </div>
              <div className={'mobile__navigation-navitem ' + (active == 3 ? 'item-active' : '')}>
                <Link
                  to="/pricing"
                  onClick={() => {
                    setActive(3);
                    handleMobileMenu();
                  }}
                >
                  Pricing
                </Link>
              </div>
              <div className={'mobile__navigation-navitem ' + (active == 4 ? 'item-active' : '')}>
                <Link
                  to="/blog"
                  onClick={() => {
                    setActive(4);
                    handleMobileMenu();
                  }}
                >
                  Blog
                </Link>
              </div>
              <div className={'mobile__navigation-navitem ' + (active == 5 ? 'item-active' : '')}>
                <Link
                  to="/contact-us"
                  onClick={() => {
                    setActive(5);
                    handleMobileMenu();
                  }}
                >
                  Contact
                </Link>
              </div>

              {!login && (
                <div className="mobile__navigation-submenu" ref={mobile}>
                  <div>
                    <div className="menu-top">
                      <h1>Are you Registered?</h1>
                      <Link to="/login">
                        <button
                          className="primary__button"
                          onClick={() => {
                            mobile.current.classList.toggle('hidden');
                          }}
                        >
                          LOGIN
                        </button>
                      </Link>
                    </div>
                    <div className="menu-bottom">
                      <h1>First time on the site?</h1>
                      <div className="mt-5 flex justify-center">
                        <div className="tertiary__button-outer">
                          <Link to="/signup">
                            <button
                              className="tertiary__button"
                              onClick={() => {
                                mobile.current.classList.toggle('hidden');
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
              )}
              {login && (
                <div onClick={handleGetProfile} className="mobile__navigation-username">
                  <p>
                    {' '}
                    <FontAwesomeIcon icon={faUser} classname="social__icons" className="pr-2" />
                    Cornelia S.
                  </p>
                </div>
              )}
              <div className="mobile__navigation-footer">
                <div className="mobile__navigation-social">
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
                <div className="mobile__navigation-translate">
                  {' '}
                  <p className="px-1">ENG</p>
                  <FontAwesomeIcon icon={faCaretDown} classname="social__icons" className="text-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
