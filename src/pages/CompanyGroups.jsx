import '../styles/CompanyGroups.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function CompanyGroupsScreen() {
  return (
    <div className="company__screen">
      <Header />
      <div className="company">
        <TabHeader heading="Company One" />
        <div className="company__container">
          <div className="company__filter">
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
          <div class="company__groups">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </div>
          <div class="company__pagination">
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

function CompanyCard() {
  return (
    <div className="company__card__outer">
      <div className="company__card">
        <div className="company__card-heading">
          <h1>Company Name One</h1>
          <div className="company__card-more">
            <a href="">See Details</a>
          </div>
        </div>
        <div className="company__card-subheading">
          {' '}
          <p>Total users with this role: 25</p>
        </div>

        <div className="company__card-items">
          {' '}
          <ul>
            <li>Lorem ipsum dolor sit amet ghgh dksasid usyd ydias isj sjijs jajaj jasja </li>
            <li>consectetur adipiscing elit. </li>
            <li>Urna vel viverra fringilla </li>
            <li>eget suspendisse urna.</li>
            <li>Est massa mauris, tellus, quisque. </li>
            <li>Ac auctor scelerisque gravida </li>
            <li>maecenas molestie quam.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
