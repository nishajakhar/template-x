import '../styles/ForgotPassword.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';

export default function ForgotPasswordScreen() {
  return (
    <div className="forgot__screen">
      {/* <Header /> */}
      <div className="forgot">
        <div className="forgot__container">
          <div className="forgot__form">
            <div className="forgot__form-heading">
              <h1 className="forgot__form-heading__text">Forgot Password</h1>
              <p className="forgot__form-subheading">
                Enter your registered email below to receive password reset instruction
              </p>
            </div>
            <form>
              <div className="forgot__form-email">
                <label className="">Email</label>
                <input type="text" placeholder="Please enter your email" className="primary__input" />
              </div>

              <div className="forgot__form-remember text-center">
                <label className="">
                  Remember Password? &nbsp;
                  <span>
                    <a className="text-orange-500 underline">Log In</a>
                  </span>
                </label>
              </div>
              <div className="forgot__form-button">
                <button className="primary__button">SEND</button>
              </div>
            </form>
          </div>
          <div className="circle__forgot-1"></div>
          <div className="circle__forgot-2"></div>
          <div className="circle__forgot-3"></div>
        </div>
      </div>
      <div className="circle__forgot-4"></div>
      <div className="circle__forgot-5"></div>
      <div className="circle__forgot-6"></div>
      <div className="circle__forgot-7"></div>
      <div className="circle__forgot-8"></div>
    </div>
  );
}
