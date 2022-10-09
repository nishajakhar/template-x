import './TabHeader.scss';
import '../../../styles/shared.scss';
import { Link } from 'react-router-dom';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCaretRight } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function TabHeader(props) {
  return (
    <div className="tab__header">
      <div className="tab__header-route">
        <div>
          <Link to="/">
            <FontAwesomeIcon classname="social__icons" icon={faHouse} />
          </Link>
        </div>
        <div>
          <FontAwesomeIcon classname="social__icons" icon={faCaretRight} />
        </div>
        <div>
          <Link to="/blog" className="text-orange-400">
            {props.heading}
          </Link>
        </div>
      </div>

      {!props.children && (
        <div className="tab__header-heading py-20">
          <h1>{props.heading}</h1>
        </div>
      )}
      {props.children && (
        <div className="py-10">
          <div className="tab__header-heading">
            <h1>{props.heading}</h1>
          </div>
          <div className="tab__form">{props.children}</div>{' '}
        </div>
      )}

      <div className="circle__head-1"></div>
      <div className="circle__head-2"></div>
    </div>
  );
}
