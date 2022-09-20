import './Blog.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function BlogCard() {
  return (
    <div className="blog__card-container">
      <div className="blog__card">
        <div className="blog__card-image">
          <img src="Blog.png" />
        </div>
        <div className="blog__card-content__outer">
          <div className="blog__card-content">
            <h3 className="card__date">June 24, 2022</h3>
            <div className="card__heading" style={{ fontSize: '15px' }}>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit accumsan, felis urna, dignissim vitae dolor, ac
                nulla quis.
              </h1>
            </div>
            <div className="card__description">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in lectus massa non in donec ultrices
                arcu habitant. Faucibus nisl massa urna in id neque.
              </p>{' '}
            </div>
            <div className="card__hastags">
              <span>#lorem</span>
              <span>#ipsum</span>
              <span>#sit</span>
              <span>#amet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
