import '../styles/Modals/Cookie.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';

export default function CookieModal(props) {
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
    <div className="cookie-modal modal" ref={modal}>
      <div className="modal-container">
        <div className="modal-content modal-open" ref={modalContent}>
          <button class="cookie-content-close close" onClick={handleClose}>
            &times;
          </button>

          <div className="cookie-modal__image">
            <img src="/cookie.png" />
          </div>
          <div className="cookie-modal__heading">
            <h1>This website uses cookies</h1>
          </div>

          <div className="cookie-modal__subheading">
            <p>
              We use cookies to personalize and enhance your experience on our site and improve the delivery of ads to
              you. Visit our <span className="text-orange-500">Cookie Policy</span> to learn more. By clicking "accept",
              you agree to our use of cookies.
            </p>
          </div>

          <div className="cookie-modal__actions">
            <div className="tertiary__button-outer">
              <button className="tertiary__button">CONFIGURE</button>
            </div>
            <button className="primary__button">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}
