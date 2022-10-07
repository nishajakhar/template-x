import '../styles/EmailSent.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';

export default function EmailSentScreen() {
  return (
    <div className="emailSent__screen">
      <Header />
      <div className="emailSent">
        <div className="emailSent__container">
          <div className="emailSent__form">
            <div className="emailSent__form-heading">
              <h1 className="emailSent__form-heading__text">Email has been sent!</h1>
              <p className="emailSent__form-subheading">
                Please check your inbox and click in the received link to reset a password
              </p>
            </div>
            <div className="emailSent__form-button">
              <button className="primary__button">LOGIN</button>
            </div>
            <div className="emailSent__login-link text-center">
              <label className="">
                Didn't Receive the link? &nbsp;
                <span>
                  <a className="text-orange-500 underline">Resend</a>
                </span>
              </label>
            </div>
          </div>
          <div className="circle__email-1"></div>
          <div className="circle__email-2"></div>
          <div className="circle__email-3"></div>
        </div>
      </div>
      <div className="circle__email-4"></div>
      <div className="circle__email-5"></div>
      <div className="circle__email-6"></div>
      <div className="circle__email-7"></div>
      <div className="circle__email-8"></div>
    </div>
  );
}
