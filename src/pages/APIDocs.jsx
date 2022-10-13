import '../styles/APIDocs.scss';
import '../styles/shared.scss';
import { Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Menu } from '../components/api-docs/Menu';
import { MenuOffcanvas } from '../components/api-docs/MenuOffcanvas';
import { MOCK_MENU } from '../services/data';
import TabHeader from '../components/common/TabHeader/TabHeader';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOut, faTimes, faUser, faCaretDown, faCancel } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function APIDocsScreen() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const mobile = useRef();
  const handleMobileMenu = () => {
    console.log('I am cliked.....');
    mobile.current.classList.toggle('hidden');
  };
  useEffect(() => {
    setLoading(true);
    setMenu(MOCK_MENU);
    setLoading(false);
  }, []);

  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div className="apidocs__screen">
      <TabHeader heading="API Documentation" />

      {/* <Header /> */}
      <div className="apidocs">
        <div className="apidocs__container">
          {!loading && !!menu.sectionGroups && (
            <div className="container">
              {/* oofcanvas menu */}
              <MenuOffcanvas menu={menu} isOpen={open} close={closeMenu} />
              <div className="row docs-row">
                <div className="col docs-menu-col">
                  <div className="docs-menu-col-inner">
                    <Menu menu={menu} />
                  </div>
                </div>
                <div className="col docs-content-col">
                  <div className="doc-mobile-menu-button">
                    <div onClick={handleMobileMenu} className="">
                      {' '}
                      <FontAwesomeIcon className="social__icons pr-3 text-pink-500" icon={faBars} /> Menu
                    </div>
                  </div>
                  <div>
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mobile__navigation-menu hidden" ref={mobile}>
          <div className="mobile__navigation-overlay">
            <div className="mobile__navigation-overlay-content">
              <div className="mobile__navigation-header flex justify-end">
                <FontAwesomeIcon
                  icon={faTimes}
                  classname="social__icons"
                  className="text-pink-500 text-4xl"
                  onClick={handleMobileMenu}
                />
              </div>
              <div className="docs-menu-col-inner text-left pl-8 my-10">
                <Menu menu={menu} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
