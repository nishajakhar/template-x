import './CookieForm.scss';
import '../../../styles/shared.scss';

import { useState, useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
export default function CookieForm(props) {
  const [number, setNumber] = useState(0);
  const [active, setActive] = useState([false, false, false]);
  const [allActive, setAllActive] = useState(false);
  const handleClose = e => {
    if (props.isModal) props.handleClose(e);
  };
  const handleChange = (e, index) => {
    console.log('I am individula...', e.target.checked, index);
    let activeCookie = active;

    if (e.target.checked) {
      activeCookie[index] = true;
      setActive(activeCookie);
    } else {
      activeCookie[index] = false;
      setActive(activeCookie);
    }
  };
  const handleAllCheckChange = e => {
    console.log('I am all...', e.target.checked);

    if (e.target.checked) {
      let activeCookie = [true, true, true];
      setActive(activeCookie);
      setAllActive(true);
    } else {
      let activeCookie = [false, false, false];
      setActive(activeCookie);
      setAllActive(false);
    }
    console.log('I am all  1111...', active);
  };
  useEffect(() => {
    if (allActive) setNumber(3);
    else {
      let total = 0;
      active.map(item => {
        if (item == true) total++;
      });
      setNumber(total);
    }

    console.log('I am here....', active, allActive);
  }, [active, allActive]);
  return (
    <div className="cookie__form">
      <form>
        <div className="cookie__form-heading">
          <h2>CATEGORIES</h2>

          <p>{number} OF 3 ALLOWED</p>
          <input type="checkbox" checked={allActive} onChange={handleAllCheckChange} />
        </div>
        <div className="cookie__form-subheading">
          <h3>Analytical and Performance Cookies</h3>
          <input type="checkbox" checked={active[0]} onChange={e => handleChange(e, 0)} />
        </div>
        <p className="subheading-description">
          These cookies allow us to provide you with online (or in-store) recommendations of products, services and
          content that match your expectations and preferences. By accepting these cookies, you are opting for an
          enriched and personalised experience.
        </p>

        <div className="cookie__form-subheading">
          <h3>Personalisation Cookies</h3>
          <input type="checkbox" checked={active[1]} onChange={e => handleChange(e, 1)} />
        </div>
        <p className="subheading-description">
          These cookies are used to measure and analyze our website audience (e.g. visitor volume, pages viewed, average
          browsing time). By accepting these cookies, you are helping us improve our website performance.
        </p>

        <div className="cookie__form-subheading">
          <h3>Analytical and Performance Cookies</h3>
          <input type="checkbox" checked={active[2]} onChange={e => handleChange(e, 2)} />
        </div>
        <p className="subheading-description">
          These cookies are used for advertisements displayed on third-party websites, including social media, are
          tailored to your preferences, and help us measure the effectiveness of our advertising campaigns. If you
          deactivate these cookies, advertising (including ours) will continue to be displayed as you browse the
          Internet, although it will not be specific to your personal interests or as relevant.
        </p>

        <div className="cookie__form-subheading">
          <h3>Functional Cookies</h3>
          <h3>Required</h3>
        </div>
        <p className="subheading-description">
          These cookies are required for optimal operation of our website, and cannot be configured. They allow us to
          offer you the key functions of the website (language used, display resolution, account access etc.), provide
          you with online advice and secure our website against any attempted fraud. (These are shell_name_change,
          ApplicationGatewayAffinity, ApplicationGatewayAffinityCORS and _evidon_*)
        </p>

        <div className="cookie__form-button">
          <div className="tertiary__button-outer" onClick={handleClose}>
            <button className="tertiary__button">DECLINE ALL</button>
          </div>
          <button className="primary__button" onClick={handleClose}>
            ACCEPT ALL
          </button>
        </div>
      </form>
    </div>
  );
}
