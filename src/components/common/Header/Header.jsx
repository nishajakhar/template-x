import { useRef, useState } from 'react';
import './Header.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOut, faTimes, faUser, faCaretDown, faCancel, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
export default function Header({ login, setLogin }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(0);
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
    setMobileMenu(!mobileMenu);
    if (mobileMenu == false) {
      document.body.style.maxHeight = 'unset';
    } else {
      document.body.style.maxHeight = '100vh';
    }
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
              <select className="header__secondary-translate-select">
                <option>ENG</option>
                <option>GER</option>
                <option>SPA</option>
              </select>
              {/* <p className="px-1">ENG</p>
              <FontAwesomeIcon icon={faCaretDown} classname="social__icons" className="text-pink-500" /> */}
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
              <Link to="/api-docs">API Docs</Link>
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
              <p className='cursor-pointer hover:text-gray-500'>
                {' '}
                <FontAwesomeIcon icon={faUser} className="social__icons text-pink-500 pr-1" />
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
            <Link
              to="/profile"
              className=""
              onClick={() => {
                profilemenu.current.classList.toggle('hidden');
              }}
            >
              Profile
            </Link>
          </div>
          <div className="header__primary-login-menu-navitem">
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
          <div className="header__primary-login-menu-navitem">
            <Link
              to="/templates"
              className=""
              onClick={() => {
                profilemenu.current.classList.toggle('hidden');
              }}
            >
              Templates
            </Link>
          </div>
          <div className="header__primary-login-menu-navitem">
            <Link
              to="/emails"
              className=""
              onClick={() => {
                profilemenu.current.classList.toggle('hidden');
              }}
            >
              {' '}
              Emails
            </Link>
          </div>
          <div className="header__primary-login-menu-navitem">
            <Link
              to="/contact-us"
              className=""
              onClick={() => {
                profilemenu.current.classList.toggle('hidden');
              }}
            >
              {' '}
              Help
            </Link>
          </div>
          <div className="header__primary-login-menu-logout">
            <div
              classname=""
              onClick={() => {
                profilemenu.current.classList.toggle('hidden');
                setLogin(false);
                navigate('/login');
              }}
            >
              <FontAwesomeIcon icon={faSignOut} classname="social__icons" className="pr-1" />
              Logout
            </div>
          </div>
        </div>
      </div>
      { mobileMenu && 
      <div className="mobile__navigation-menu" ref={mobile}>
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
       { mobileMenuActive == 0 &&      <div className="mobile__navigation-navitems">
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
                  to="/api-docs"
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
            </div>
       }
         
       
       {mobileMenuActive == 1 && 
        <div className="mobile__navigation-navitems">
          <div className='mobile__navigation-navitem ' onClick={() => setMobileMenuActive(0)}>
            <p>            <FontAwesomeIcon icon={faCaretLeft} classname="social__icons" className="pr-2" />
Back</p>
            </div>
        <div className={'mobile__navigation-navitem ' + (active == 6 ? 'item-active' : '')}>
          <Link
            to="/profile"
            onClick={() => {
              setActive(6);
              handleMobileMenu();
            }}
          >
            Profile
          </Link>
        </div>
        <div className={'mobile__navigation-navitem ' + (active == 7 ? 'item-active' : '')}>
          <Link
            to="/tenplates"
            onClick={() => {
              setActive(7);
              handleMobileMenu();
            }}
          >
            Templates
          </Link>
        </div>
        <div className={'mobile__navigation-navitem ' + (active == 8 ? 'item-active' : '')}>
          <Link
            to="/emails"
            onClick={() => {
              setActive(8);
              handleMobileMenu();
            }}
          >
            Emails
          </Link>
        </div>
        <div className={'mobile__navigation-navitem ' + (active == 9 ? 'item-active' : '')}>
          <Link
            to="/"
            onClick={() => {
              setActive(9);
              handleMobileMenu();
            }}
          >
            Settings
          </Link>
        </div>
        <div className={'mobile__navigation-navitem ' + (active == 10 ? 'item-active' : '')}>
          <Link
            to="/"
            onClick={() => {
              setActive(10);
              handleMobileMenu();
            }}
          >
            Help
          </Link>
        </div>
         
        
      </div>
       }
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
      {login && mobileMenuActive == 0 && (
        <div onClick={() => setMobileMenuActive(1)} className="mobile__navigation-username">
          <p>
            {' '}
            <FontAwesomeIcon icon={faUser} classname="social__icons" className="pr-2" />
            Cornelia S.
          </p>
        </div>
      )}
      { login && mobileMenuActive == 1 && (
        <div onClick={handleGetProfile} className="mobile__navigation-username">
        <p>
          {' '}
          <FontAwesomeIcon icon={faSignOut} classname="social__icons" className="pr-2" />
          Logout
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
      }
       
   </>
  );
}
