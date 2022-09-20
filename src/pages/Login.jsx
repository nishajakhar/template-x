import '../styles/Login.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function LoginScreen() {
  return (
    <div className="login__screen">
      <Header />
      <div className="login">
        <div className="login__container">
          <div className="login__form">
            <div className="login__form-heading">
              <h1 className="login__form-heading__text">Log In</h1>
              <p className="login__form-subheading">
                Dont have a account?{' '}
                <a href="#" className="text-orange-500">
                  Signup
                </a>
              </p>
            </div>
            <form>
              <div className="login__form-email">
                <label className="">Email</label>
                <input type="text" placeholder="Please enter your email" className="primary__input" />
              </div>
              <div className="login__form-password">
                <label className="">Password</label>
                <input type="password" placeholder="Please enter your password" className="primary__input" />
              </div>
              <div className="flex justify-between py-3">
                <div className="login__form-remember">
                  <input type="checkbox" checked className="bg-pink-300 m-1" />
                  <label className="px-1">Remember for 30 days</label>
                </div>
                <a href="#" className="login__form-forgot__pwd">
                  Forgot password?
                </a>
              </div>
              <div className="login__form-button">
                <button className="primary__button">LOG IN</button>
              </div>
            </form>
          </div>
          <div className="color__circles circle__1"></div>
          <div className="color__circles circle__2"></div>
          <div className="color__circles circle__3"></div>
        </div>
      </div>
      <div className="color__circles circle__4"></div>
      <div className="color__circles circle__5"></div>
      <div className="color__circles circle__6"></div>
      <div className="color__circles circle__7"></div>
      <div className="color__circles circle__8"></div>
    </div>
  );
}
