import '../styles/Modals/PaymentSuccess.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';

export default function PaymentSuccessModal(props) {
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
    <div className="payment-success-modal modal" ref={modal}>
      <div className="modal-container">
        <div className="modal-content modal-open" ref={modalContent}>
          <button class="payment-success-content-close close" onClick={handleClose}>
            &times;
          </button>

          <div className="payment-success-modal__heading">
            <h1>Payment successful</h1>
          </div>

          <div className="payment-success-modal__subheading">
            <p>
              Your payment was successful
              <br />
              Thank you!
            </p>
          </div>

          <div className="payment-success-modal__transaction-id">
            <p>
              Transaction number: <span className="font-bold">149538292359</span>
            </p>
          </div>

          <div className="payment-success-modal__choose-storage">
            <a href="#">Choose storage providers</a>
          </div>

          <div className="payment-success-modal__actions">
            <div className="tertiary__button-outer">
              <button className="tertiary__button">HOME</button>
            </div>
            <button className="primary__button">CHOOSE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
