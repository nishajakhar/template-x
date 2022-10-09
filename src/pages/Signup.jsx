import '../styles/Signup.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import { useNavigate } from 'react-router';
import ROUTES from '../services/routes';

export default function SignupScreen({ setLogin }) {
  const navigate = useNavigate();
  return (
    <div className="signup__screen">
      {/* <Header /> */}
      <div className="signup">
        <div className="signup__container">
          <div className="signup__form">
            <div className="signup__form-heading">
              <h1 className="signup__form-heading__text">Create TemplatesX account</h1>
              <p className="signup__form-subheading">
                Already have an account?{' '}
                <a href="#" className="text-orange-500 underline">
                  Log in
                </a>
              </p>
            </div>
            <form>
              <div className="signup__form-name">
                <label className="">Name</label>
                <input type="text" placeholder="Please enter your name" className="primary__input" />
              </div>
              <div className="signup__form-email">
                <label className="">Email</label>
                <input type="text" placeholder="Please enter your email" className="primary__input" />
              </div>
              <div className="signup__form-password">
                <label className="">Password</label>
                <input type="password" placeholder="Please enter your password" className="primary__input" />
              </div>
              <div className="signup__form-repeat__password">
                <label className="">Repeat Password</label>
                <input type="password" placeholder="Please repeat your password" className="primary__input" />
              </div>
              <div className="flex justify-between py-3">
                <div className="signup__form-remember">
                  <input type="checkbox" checked className="bg-pink-300 m-1" />
                  <label className="px-1">
                    I agree to{' '}
                    <span>
                      <a className="text-orange-500 underline">Privacy Policy</a>
                    </span>
                  </label>
                </div>
              </div>
              <div className="signup__form-button">
                <button
                  className="primary__button"
                  onClick={e => {
                    e.preventDefault();
                    setLogin(true);
                    navigate(ROUTES.HOME);
                  }}
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
          </div>
          <div className="circle__signup-1"></div>
          <div className="circle__signup-2"></div>
          <div className="circle__signup-3"></div>
        </div>
      </div>
      <div className="circle__signup-4"></div>
      <div className="circle__signup-5"></div>
      <div className="circle__signup-6"></div>
      <div className="circle__signup-7"></div>
      <div className="circle__signup-8"></div>
    </div>
  );
}
