import '../styles/Templates.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function TemplatesScreen() {
  return (
    <div className="templates__screen">
      {/* <Header /> */}
      <div className="templates">
        <TabHeader heading="templates" />
        <div className="templates__container">
          <div className="templates__filter">
            <p>
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faHeart} />
              Filter
            </p>
            <p>
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faHeart} />
              Add a new group
            </p>
          </div>
          <div class="templates__groups">
            <StorageCard />
            <StorageCard />
            <StorageCard />
            <StorageCard />
          </div>
          <div class="templates__pagination">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function StorageCard() {
  return (
    <div className="template__card__outer">
      <div className="template__card">
        <div className="template__card-image">
          <img src="templates.png" />
        </div>
        <div className="flex items-center flex-1">
          <div className="template__card-info">
            <div className="template__card-heading">
              <h1>Multipurpose technology website template</h1>
              <div className="template__card-subheading">
                <p>Company Name one</p>
              </div>
            </div>
            <div className="flex justify-between my-5">
              <div className="template__card-tags">
                <span>Lorem</span>
                <span>Ipsum</span>
                <span>Tuit</span>
              </div>

              <div className="template__card-ratings">
                <p>
                  <FontAwesomeIcon className="social__icons text-pink-500" icon={faHeart} />
                  <FontAwesomeIcon className="social__icons text-pink-500" icon={faHeart} />
                  <FontAwesomeIcon className="social__icons text-pink-500" icon={faHeart} />
                  <FontAwesomeIcon className="social__icons" icon={faHeart} />
                  <FontAwesomeIcon className="social__icons" icon={faHeart} />
                  stars
                </p>
              </div>
            </div>
            <div className="template__card-actions">
              <h2>$130</h2>

              <div className="template__card-buttons">
                <div className="tertiary__button-outer">
                  <button className="tertiary__button">CONFIGURE</button>
                </div>
                <button className="primary__button">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
