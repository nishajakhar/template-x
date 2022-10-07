import '../styles/Storages.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function StoragesScreen() {
  return (
    <div className="storages__screen">
      <Header />
      <div className="storages">
        <TabHeader heading="Storages" />
        <div className="storages__container">
          <div className="storages__filter">
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
          <div class="storages__groups">
            <StorageCard />
            <StorageCard />
            <StorageCard />
            <StorageCard />
          </div>
          <div class="storages__pagination">
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

function StorageCard() {
  return (
    <div className="storage__card__outer">
      <div className="storage__card">
        <div className="storage__card-image">
          <img src="Mail.png" />
        </div>
        <div className="storage__card-info">
          <div className="storage__card-heading">
            <h1>Lorem Ipsum</h1>
            <div className="storage__card-selected">
              <p>Selected</p>
            </div>
          </div>
          <div className="storage__card-subheading">
            {' '}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A ullamcorper aenean placerat sit nisl semper
              facilisis. Suspendisse in scelerisque massa est sed rhoncus. Enim nulla consequat euismod ut gravida
              aliquam lorem.{' '}
            </p>
          </div>

          <div className="storage__card-subheading">
            {' '}
            <p>
              Non, viverra pellentesque nisl lobortis ultrices urna dignissim cras. Ipsum auctor a tincidunt quam id
              consectetur enim amet amet.
            </p>
          </div>

          <div className="storage__card-actions">
            <h2>
              50$<span>/monthly</span>
            </h2>
            <button className="primary__button">SELECT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
