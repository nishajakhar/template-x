import '../styles/CompanyGroups.scss';
import '../styles/shared.scss';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import { companyGroups } from '../services/data';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faSquare,
  faMessage,
  faSliders,
  faPlus,
  faAward,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function CompanyGroupsScreen() {
  return (
    <div className="company__screen">
      {/* <Header /> */}
      <div className="company">
        <TabHeader heading="Company One" />
        <div className="company__container">
          <div className="company__filter">
            <p className="cursor-pointer">
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faSliders} />
              Filter
            </p>
            <p className="cursor-pointer">
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faPlus} />
              Add a new group
            </p>
          </div>
          <div class="company__groups">
            {companyGroups.map((group, index) => (
              <CompanyCard key={index} group={group} />
            ))}
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
      {/* <Footer /> */}
    </div>
  );
}

function CompanyCard({ group }) {
  return (
    <div className="company__card__outer">
      <div className="company__card">
        <div className="company__card-heading">
          <h1>{group.title}</h1>
          <div className="company__card-more">
            <Link to="/team-account/company-groups/company-group-detail">See Details</Link>
          </div>
        </div>
        <div className="company__card-subheading">
          {' '}
          <p>Total users with this role: 25</p>
        </div>

        <div className="company__card-items">
          {' '}
          <ul>
            {group.items.map((item, index) => (
              <li>
                {' '}
                <FontAwesomeIcon className="social__icons" icon={faSquare} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="company__card-more-2 ">
          <Link to="/team-account/company-groups/company-group-detail">See Details</Link>
        </div>
      </div>
    </div>
  );
}
