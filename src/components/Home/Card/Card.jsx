import './Card.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Card() {
  return (
    <div className="card__icon">
      <div className="card__icon-image">
        <img src="cardicon.png" />
      </div>

      <div className="card__outer">
        <div className="card">
          <h1>Lorem ipsum dolar</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in lectus massa non in donec ultrices arcu
            habitant. Faucibus nisl massa urna in id neque.
          </p>
        </div>
      </div>
    </div>
  );
}
