import '../styles/Modals/CookieConfig.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';
import CookieInformation from '../components/Cookie/CookieInformation/CookieInformation';
import CookieForm from '../components/Cookie/CookieForm/CookieForm';

export default function CookieConfigModal(props) {
  const modal = useRef(0);
  const modalContent = useRef(0);
  const handleClose = async () => {
    modalContent.current.classList.remove('modal-open');
    modalContent.current.classList.add('modal-close');
    await new Promise(r => setTimeout(r, 300));
    modal.current.style.display = 'none';
    props.open(false);
  };
  return (
    <div className="cookie-config-modal modal" ref={modal}>
      <div className="modal-container">
        <div className="modal-content modal-open" ref={modalContent}>
          <button class="cookie-config-content-close close" onClick={handleClose}>
            &times;
          </button>

          <div className="cookie-config-modal__image">
            <img src="/cookie.png" />
          </div>
          <div className="cookie-config-modal__heading">
            <h1>This website uses cookies</h1>
          </div>

          <div className="cookie-config-modal__subheading">
            <p>
              We use cookies to personalize and enhance your experience on our site and improve the delivery of ads to
              you. Visit our <span className="text-orange-500">Cookie Policy</span> to learn more. By clicking "accept",
              you agree to our use of cookies.
            </p>
          </div>
          <CookieInformation />
          <CookieForm />
        </div>
      </div>
    </div>
  );
}
