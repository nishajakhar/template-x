import '../styles/Profile.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import { invoices } from '../services/data';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faInfo, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function ProfileScreen() {
  return (
    <div className="profile__screen">
      {/* <Header /> */}
      <div className="profile">
        <TabHeader heading="Profile" />
        <div className="profile__container">
          <div className="profile__form">
            <div className="profile__form-heading mb-5">
              <h1 className="profile__form-heading__text">Profile Information</h1>
            </div>
            <form>
              <div className="profile__form-inputs flex">
                <div className="profile__form-name">
                  <h5 className="">Name</h5>
                  <input type="text" placeholder="Please enter your name" className="primary__input" />
                </div>
                <div className="profile__form-vat">
                  <h5 className="">VAT number</h5>
                  <input type="text" placeholder="Please enter your VAT Number" className="primary__input" />
                </div>
              </div>
              <div className=" profile__form-inputs flex">
                <div className="profile__form-email">
                  <h5 className="">Email</h5>
                  <input type="text" placeholder="Please enter your email" className="primary__input" />
                </div>
                <div className="profile__form-company">
                  <h5 className="pb-2">Company Name</h5>
                  <input type="text" placeholder="Please enter your company name" className="primary__input" />
                </div>
              </div>

              <div className=" profile__form-inputs flex">
                <div className="profile__form-gender">
                  <h5 className="">Gender</h5>
                  <div className="flex justify-between items-center content-center">
                    <div className="relative">
                      {' '}
                      <input type="radio" name="gender" />
                      &nbsp; Female
                    </div>
                    <div className="relative">
                      <input type="radio" name="gender" />
                      &nbsp; Male
                    </div>
                    <div className="relative">
                      <input type="radio" name="gender" />
                      &nbsp;I don't want to specify
                    </div>
                  </div>
                </div>
                <div className="profile__form-birthday">
                  <h5 className="">Birthday</h5>
                  <input type="date" className="primary__input" />
                </div>
              </div>
              <div className="profile__form-inputs flex my-16">
                <div className="profile__form-password flex-col">
                  <h1>Password</h1>
                  <h5 className="">Password</h5>
                  <input type="password" placeholder="Please enter your password" className="primary__input" />
                  <div className="text-center">
                    <button className="primary__button">CHANGE PASSWORD</button>
                  </div>
                </div>

                <div className="profile__form-inputs profile__form-pricing__plan">
                  <h1 className="mb-8">Pricing Plan</h1>
                  <div className="flex justify-between mb-8">
                    <p>Standard Pricing Plan</p>
                    <FontAwesomeIcon
                      className="social__icons bg-yellow-600 text-black rounded-full px-2  py-1 text-xs"
                      icon={faInfo}
                    />
                  </div>

                  <div className="text-center">
                    <button className="primary__button">CHANGE</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="profile__invoices">
            <h1>Invoices</h1>
            <table className="profile__invoices-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((item, index) => (
                  <Invoice key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="show-more py-5 flex justify-center">
            <span className="text-orange-400 underline ">Show more</span>
          </div>
          <div className="profile__form-button flex justify-center py-5">
            <button className="primary__button">SAVE CHANGES</button>
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function Invoice({ item }) {
  return (
    <tr>
      {/* <div className="invoice__outer">
        <div className="invoice__inner"> */}
      <td>{item.description}</td>
      <td>{item.date}</td>
      <td>${item.price}</td>
      <td>****{item.paymentMethod}</td>
      {/* </div>
      </div> */}
    </tr>
  );
}
