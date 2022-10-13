import '../styles/Modals/PaymentFailed.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';

export default function PaymentFailedModal(props) {
  const modal = useRef(0);
  const modalContent = useRef(0);

  const handleClose = async e => {
    e.preventDefault();
    modalContent.current.classList.remove('modal-open');
    modalContent.current.classList.add('modal-close');
    await new Promise(r => setTimeout(r, 300));
    modal.current.style.display = 'none';
    props.open(false);
  };
  return (
    <div className="payment-fail-modal modal" ref={modal}>
      <div className="modal-container">
        <div className="modal-content modal-open" ref={modalContent}>
          <button class="payment-fail-content-close close" onClick={handleClose}>
            &times;
          </button>

          <div className="payment-fail-modal__heading">
            <h1>Payment failed</h1>
          </div>

          <div className="payment-fail-modal__subheading">
            Your transaction has failed due to some technical error.
            <br />
            Please try again
          </div>

          <div className="payment-fail-modal__actions">
            <div className="tertiary__button-outer">
              <button className="tertiary__button" onClick={handleClose}>
                CLOSE
              </button>
            </div>
            <button className="primary__button" onClick={handleClose}>
              TRY AGAIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
