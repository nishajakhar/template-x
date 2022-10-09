import '../styles/TeamAccount.scss';
import '../styles/shared.scss';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import { teamAccounts } from '../services/data';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faFilter,
  faLongArrowRight,
  faMessage,
  faAward,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function TeamAccountScreen() {
  return (
    <div className="team__screen">
      {/* <Header /> */}
      <div className="team">
        <TabHeader heading="Team Account">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi lorem vel non ultrices. Quis metus, enim
            nunc neque et a eget sed lectus.
          </p>
          <form>
            <input type="text" placeholder="Email" className="primary__input" />
            <button>
              {' '}
              <FontAwesomeIcon classname="social__icons" icon={faLongArrowRight} />
            </button>
          </form>
        </TabHeader>
        <div className="team__container">
          <div className="team__filter">
            <p>
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faFilter} />
              Filter
            </p>
          </div>
          <div class="team__accounts">
            {teamAccounts.map((account, index) => (
              <TeamCard key={index} account={account} />
            ))}
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
      {/* <Footer /> */}
    </div>
  );
}

function TeamCard({ account }) {
  return (
    <div className="team__card__outer">
      <div className="team__card">
        <div className="team__card-heading">
          <div className="team__card-title">
            <div className="team__card-subheading">
              <p> {account.selected && 'Selected'} &nbsp;</p>
            </div>

            <h1>{account.title}</h1>
          </div>

          <div className="team__card-description">
            {' '}
            <p>{account.description} </p>
          </div>
        </div>
        <div className="team__card-info">
          <div className="team__card-more">
            <Link to="/team-account/company-groups">See Details</Link>
          </div>

          <div className="team__card-button">
            {' '}
            <button type="button" className={'primary__button ' + (account.selected ? 'disabled:opacity-25' : '')}>
              SELECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
