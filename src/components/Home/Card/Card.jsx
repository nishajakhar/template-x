import './Card.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Card({ item }) {
  return (
    <div className="card__item mb-16">
      <div className="card__icon">
        <div className="card__icon-image">
          <img src={item?.img || ''} />
        </div>

        <div className="card__outer ">
          <div className="card">
            <h1>{item?.title || ''}</h1>
            <p>{item?.description || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
