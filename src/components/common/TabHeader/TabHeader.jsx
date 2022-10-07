import './TabHeader.scss';
import '../../../styles/shared.scss';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function TabHeader(props) {
  return (
    <div className="tab__header">
      <div className="tab__header-route">
        <div>
          <a href="#">
            <FontAwesomeIcon classname="social__icons" icon={faHeart} />
          </a>
        </div>
        <div>
          <a href="#">
            <FontAwesomeIcon classname="social__icons" icon={faHeart} />
          </a>
        </div>
        <div>
          <a href="#" className="text-orange-400">
            Cookie
          </a>
        </div>
      </div>
      <div className="tab__header-heading">
        <h1>{props.heading}</h1>
      </div>
      <div className="circle__head-1"></div>
      <div className="circle__head-2"></div>
    </div>
  );
}
