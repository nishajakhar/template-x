import './Card.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Card({ category }) {
  console.log('I am category......', category);
  return (
    <div>
      <div className="card__icon">
        <div className="card__icon-image">
          <img src={category?.img || ''} />
        </div>

        <div className="card__outer">
          <div className="card">
            <h1>{category?.title || ''}</h1>
            <p>{category?.description || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
