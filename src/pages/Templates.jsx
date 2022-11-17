import '../styles/Templates.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import { useRef } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faTimes, faSliders, faStar, faRotateForward } from '@fortawesome/free-solid-svg-icons';
import { templates } from '../services/data';
config.autoAddCss = false;
export default function TemplatesScreen() {
  const mobilefilter = useRef();
  const temp = useRef();
  const handleFilterChange = () => {
    mobilefilter.current.classList.toggle('hidden');
    temp.current.style.maxHeight = '100vh';
  };
  const handleClose = () => {
    mobilefilter.current.classList.toggle('hidden');
    temp.current.style.maxHeight = 'unset';
  };

  return (
    <div className="templates__screen">
      {/* <Header /> */}
      <div className="templates">
        <TabHeader heading="Templates" />
        <div className="templates__container" ref={temp}>
          <div className="templates__filter">
            <p onClick={handleFilterChange} className="cursor-pointer">
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faSliders} />
              Filter
            </p>
            <p className="cursor-pointer">
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faPlus} />
              Add a new template
            </p>
          </div>
          <div class="templates__groups">
            {templates.map((item, index) => (
              <TemplateCard item={item} key={index} />
            ))}
          </div>
          <div class="templates__pagination">
          <p><FontAwesomeIcon icon={faRotateForward} classname="social__icons" /><span className="">Show more </span></p>
           

          </div>
          <div className="mobile__filter__navigation-menu hidden" ref={mobilefilter}>
            <div className="mobile__navigation-overlay">
              <div className="mobile__navigation-overlay-content">
                <div className="mobile__navigation-header-right flex justify-end">
                  <FontAwesomeIcon
                    icon={faTimes}
                    classname="social__icons"
                    className="text-pink-500 text-3xl"
                    onClick={handleClose}
                  />
                </div>
                <form>
                  <div className="filter__form-types">
                    <p className="my-2">Choose Type</p>

                    <div className="filter__form-type">
                      <input type="checkbox" className="" />
                      <label className="">Blog</label>
                    </div>
                    <div className="filter__form-type">
                      <input type="checkbox" className="" />
                      <label className="">Online Store </label>
                    </div>
                    <div className="filter__form-type">
                      <input type="checkbox" className="" />
                      <label className="">Portfolio</label>
                    </div>
                    <div className="filter__form-type">
                      <input type="checkbox" className="" />
                      <label className="">Memberships</label>
                    </div>
                    <div className="filter__form-type">
                      <input type="checkbox" className="" />
                      <label className="">Launch Page</label>
                    </div>
                  </div>

                  <div class="filter__form-slide">
                    <p className="text-left">Choose Price:</p>
                    <input type="range" min="1" max="100" value="50" />
                  </div>

                  <div className="filter__form-topics">
                    <p className="my-2">Choose Topic:</p>

                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Popular Designs</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">All Templates </label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Art & Design</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Photography</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Health & Beauty</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Personal & CV</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Fashion</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Professional Services</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Local Business</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Community</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Food</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Entertainment</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Travel</label>
                    </div>
                    <div className="filter__form-topic">
                      <input type="checkbox" className="" />
                      <label className="">Restaurents</label>
                    </div>
                  </div>

                  <div className="filter__form-action flex justify-center mt-5">
                    <button className="primary__button" onClick={handleClose}>
                      APPLY FILTERS{' '}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function TemplateCard({ item }) {
  const starColored = Array.from({ length: item.stars });
  const starNotColored = Array.from({ length: 5 - item.stars });

  return (
    <div className="template__card__outer">
      <div className="template__card">
        <div className="template__card-image">
          <img src="templates.png" />
        </div>
        <div className="flex items-center flex-1">
          <div className="template__card-info">
            <div className="template__card-heading">
              <h1>{item.title}</h1>
              <div className="template__card-subheading">
                <p>{item.by}</p>
              </div>
            </div>
            <div className="template__card-extrainfo ">
              <div className="template__card-tags">
                {item.tags.map((tag, index) => (
                  <span key={index}>#{tag}</span>
                ))}
              </div>

              <div className="template__card-ratings">
                <p>
                  {starColored.map(() => (
                    <FontAwesomeIcon className="social__icons text-pink-500" icon={faStar} />
                  ))}
                  {starNotColored.map(() => (
                    <FontAwesomeIcon className="social__icons" icon={faStar} />
                  ))}
                  (256)
                </p>
              </div>
            </div>
            <div className="template__card-actions">
              <h2>${item.price}</h2>

              <div className="template__card-buttons">
                <div className="tertiary__button-outer">
                  <button className="tertiary__button">CONFIGURE</button>
                </div>
                <button className="primary__button">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>

        <div className="template__card-buttons-2">
          <div className="tertiary__button-outer">
            <button className="tertiary__button">CONFIGURE</button>
          </div>
          <button className="primary__button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
