import '../styles/CompanyGroupDetail.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function CompanyGroupDetailScreen() {
  return (
    <div className="cgd__screen">
      {/* <Header /> */}
      <div className="cgd">
        <TabHeader heading="Designers" />
        <div className="cgd__container">
          <div className="cgd__items">
            {' '}
            <ul>
              <li>Lorem ipsum dolor sit amet ghgh dksasid usyd ydias isj sjijs jajaj jasja </li>
              <li>consectetur adipiscing elit. </li>
              <li>Urna vel viverra fringilla </li>
              <li>eget suspendisse urna.</li>
              <li>Est massa mauris, tellus, quisque. </li>
              <li>Ac auctor scelerisque gravida </li>
              <li>maecenas molestie quam ja skask ahsakas ak ksjksjka aksjkasj akjksaja.</li>
            </ul>
            <div className="cgd__items-configure">
              <button className="primary__button">CONFIGURE</button>
            </div>
          </div>

          <div className="cgd__user-filter">
            <p>
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faHeart} />
              Filter
            </p>
            <p>
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faHeart} />
              Add a new user
            </p>
          </div>
          <div class="cgd__users">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
          <div class="cgd__pagination mt-16">
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

function UserCard() {
  return (
    <div className="user__card__outer">
      <div className="user__card">
        <div className="user__card-image flex justify-center mb-3">
          <img src="/Office.png" width="80" />
        </div>
        <div className="user__card-heading text-center">
          <h1>
            <a href="">Rachel Williams</a>
          </h1>
        </div>

        <div className="user__card-subheading text-center">
          <p>rachelwilliams@gmail.com</p>
        </div>

        <div className="user__card-details">
          <div className="flex justify-between">
            <h1>Position:</h1>
            <p>Designer</p>
          </div>

          <div className="flex justify-between">
            <h1>Country:</h1>
            <p>India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
