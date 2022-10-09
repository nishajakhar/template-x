import { Link } from 'react-router-dom';
import '../styles/Login.scss';
import '../styles/shared.scss';

import { useNavigate } from 'react-router';
import ROUTES from '../services/routes';

import Header from '../components/common/Header/Header';
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function LoginScreen({ setLogin }) {
  const navigate = useNavigate();

  return (
    <div className="login__screen">
      {/* <Header /> */}
      <div className="login">
        <div className="login__container">
          <div className="login__form">
            <div className="login__form-heading">
              <h1 className="login__form-heading__text">Log In</h1>
              <p className="login__form-subheading">
                Dont have a account?{' '}
                <Link to="/signup" className="text-orange-500">
                  Signup
                </Link>
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
                <Link to="forgot-password" className="login__form-forgot__pwd">
                  Forgot password?
                </Link>
              </div>
              <div className="login__form-button">
                <button
                  className="primary__button"
                  onClick={e => {
                    e.preventDefault();
                    setLogin(true);
                    navigate(ROUTES.HOME);
                  }}
                >
                  LOG IN
                </button>
              </div>
            </form>
          </div>
          <div className="circle__login-1"></div>
          <div className="circle__login-2"></div>
          <div className="circle__login-3"></div>
        </div>
      </div>
      <div className="circle__login-4"></div>
      <div className="circle__login-5"></div>
      <div className="circle__login-6"></div>
      <div className="circle__login-7"></div>
      <div className="circle__login-8"></div>
    </div>
  );
}
