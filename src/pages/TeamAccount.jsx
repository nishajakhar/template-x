import '../styles/TeamAccount.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function TeamAccountScreen() {
  return (
    <div className="team__screen">
      <Header />
      <div className="team">
        <TabHeader heading="Team Account" />
        <div className="team__container">
          <div className="team__filter">
            <p>
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faHeart} />
              Filter
            </p>
          </div>
          <div class="team__accounts">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          <div class="team__pagination">
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

function TeamCard() {
  return (
    <div className="team__card__outer">
      <div className="team__card">
        <div className="team__card-subheading">
          {' '}
          <p>Selected</p>
        </div>
        <div className="team__card-heading">
          <h1>Company Name One</h1>
        </div>
        <div className="team__card-description">
          {' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vel viverra fringilla eget suspendisse urna.
            Est massa mauris, tellus, quisque. Ac auctor scelerisque gravida maecenas molestie quam.
          </p>
        </div>
        <div className="team__card-more">
          <a href="">See Details</a>
        </div>

        <div className="team__card-button">
          {' '}
          <button className="primary__button">SELECT</button>
        </div>
      </div>
    </div>
  );
}
