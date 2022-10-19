import '../styles/Storages.scss';
import '../styles/shared.scss';
import { Link } from 'react-router-dom';
import ChooseStorageModal from '../Modals/ChooseStorage';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import AddStorageModal from '../Modals/AddStorage';
import { useState } from 'react';
import { storages } from '../services/data';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown, faSliders, faPlus } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function StoragesScreen() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={open ? '' : 'hidden'}>
        <AddStorageModal open={setOpen} />
      </div>
      <div className="storages__screen">
        {/* <Header /> */}
        <div className="storages">
          <TabHeader heading="Storages" />
          <div className="storages__container">
            <div className="storages__filter">
              <p className="cursor-pointer">
                {' '}
                <FontAwesomeIcon className="social__icons" icon={faSliders} />
                Filter
              </p>
              <p onClick={() => setOpen(true)} className="cursor-pointer">
                {' '}
                <FontAwesomeIcon className="social__icons" icon={faPlus} />
                Add new storage
              </p>
            </div>
            <div class="storages__groups">
              {storages.map((item, index) => (
                <StorageCard item={item} index={index} key={index} />
              ))}
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
        {/* <Footer /> */}
      </div>
    </>
  );
}

function StorageCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={open ? '' : 'hidden'}>
        <ChooseStorageModal open={setOpen} />
      </div>
      <Link to="/storages/storage-detail">
        <div className="storage__card__outer">
          <div className="storage__card">
            <div className="storage__card-image">
              <img src="Mail.png" />
            </div>
            <div className="storage__card-info">
              <div className="storage__card-heading">
                <h1>{item.title}</h1>
                <div className="storage__card-selected">{item.selected && <p>Selected </p>}</div>
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
                  ${item.price}
                  <span>/monthly</span>
                </h2>
                <button
                  className={item.selected ? 'primary__button-disabled disabled bg-gray-300' : 'primary__button'}
                  disabled={item.selected}
                  onClick={() => setOpen(true)}
                >
                  SELECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
