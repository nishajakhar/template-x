import '../styles/Emails.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function EmailsScreen() {
  return (
    <div className="emails__screen">
      <Header />
      <div className="emails">
        <TabHeader heading="Emails" />
        <div className="emails__container">
          <div className="emails__filter">
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
          <div class="emails__groups">
            <EmailCard />
            <EmailCard />
            <EmailCard />
            <EmailCard />
          </div>
          <div class="emails__pagination">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      <Footer />
    </div>
  );
}

function EmailCard() {
  return (
    <div className="email__card__outer">
      <div className="email__card">
        <div className="email__card-image">
          <img src="templates.png" />
        </div>
        <div className="flex items-center flex-1">
          <div className="email__card-info">
            <div className="email__card-heading">
              <h1>Mail Name One</h1>
              <FontAwesomeIcon className="social__icons text-pink-500" icon={faHeart} />
            </div>
            <div className="email__card-subheading">
              <p>Company Name one</p>
            </div>
            <div className="email__card-tags">
              <span>Lorem</span>
              <span>Ipsum</span>
              <span>Tuit</span>
            </div>

            <div className="email__card-actions">
              <button className="primary__button">OPEN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
