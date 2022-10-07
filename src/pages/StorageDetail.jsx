import '../styles/StorageDetail.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function StorageDetailScreen() {
  return (
    <div className="storage-detail__screen">
      <Header />
      <div className="storage-detail">
        <TabHeader heading="Storage Detail" />
        <div className="storage-detail__container">
          <div className="storage-detail__header">
            <div className="storage-detail__header-img">
              <img src="/Outlook.png" />
            </div>
            <div className="storage-detail__header-info">
              <div className="storage-detail__header-title">
                <h1>Subscription</h1>
              </div>
              <div className="storage-detail__header-description">
                <p>Individual Subscription to lorem ipsum for 1 month USD 150</p>
              </div>
            </div>
            <div className="storage-detail__header-button">
              <a href="#">Edit Storage</a>
            </div>
          </div>

          <div className="storage-detail__main">
            <p className="">Dear Cornelle</p>
            <p className="">You have purchased such a subscription for 1 month</p>
          </div>

          <div className="storage-detail__properties">
            <div className="storage-detail__property-item">
              <p>Type</p>
              <p>Google cloud storage</p>
            </div>
            <div className="storage-detail__property-item">
              <p>Access Key</p>
              <p>57862157426987411</p>
            </div>
            <div className="storage-detail__property-item">
              <p>Secret Access Key</p>
              <p>5cs83ms63na027kva7z53ng0sy</p>
            </div>
            <div className="storage-detail__property-item">
              <p>Region</p>
              <p>India</p>
            </div>
            <div className="storage-detail__property-item">
              <p>Bucket Name</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="storage-detail__property-item">
              <p>Assigned Name</p>
              <p>Lorem</p>
            </div>
          </div>

          <div className="storage-detail__unsubscribe">
            <p>
              To unsubscribe, <span>click here</span>
            </p>
          </div>

          <div className="storage-detail__disclaimer">
            <p>If you cancel now, untill July 9, 2022, you will still be able to use the subscription</p>
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      <Footer />
    </div>
  );
}