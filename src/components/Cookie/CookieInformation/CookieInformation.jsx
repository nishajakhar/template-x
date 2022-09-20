import './CookieInformation.scss';
import '../../../styles/shared.scss';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function CookieInformation(props) {
  return (
    <div className="cookie__information">
      <h2>Information We Collect About You</h2>
      <p>
        We want to be transparent about the data we and our partners collect and how we use it, so you can best exercise
        control over your personal data. For more information, please see our{' '}
        <span>
          <a href="#" className=" text-orange-400 underline">
            Cookie Policy
          </a>
        </span>
      </p>

      <h2>Information Our Partners Collect</h2>
      <p>
        We use a number partners to better improve your overall web browsing experience. They use cookies and other
        mechanisms to connect you with your social networks and tailor advertising to better match your interests. We
        have grouped these vendors into 3 categories based on their functional area. Click on learn more to view the
        list of vendors in each category.
      </p>
    </div>
  );
}
