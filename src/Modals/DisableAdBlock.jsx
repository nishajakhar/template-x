import '../styles/Modals/DisableAdBlock.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';

export default function DisableAdBlockModal(props) {
    const modal = useRef(0);
    const modalContent = useRef(0);

    const handleClose = async e => {
        e.preventDefault();
        modalContent.current.classList.remove('modal-open');
        modalContent.current.classList.add('modal-close');
        await new Promise(r => setTimeout(r, 300));
        modal.current.style.display = 'none';
        props.open(0);
    };
    return (
        <div className="adblock-modal modal" ref={modal}>
            <div className="modal-container">
                <div className="modal-content modal-open" ref={modalContent}>
                    <button
                        class="adblock-content-close close"
                        onClick={handleClose}
                    >
                        &times;
                    </button>

                    <div className="adblock-modal__heading">
                        <h1>Please disable AdBlock</h1>
                    </div>

                    <div className="adblock-modal__subheading">
                        <p>
                            Through AdBlock, the ad part of the site may not be
                            displayed correctly. Please disable the blocker or
                            add the current page or site completely to the
                            exclusion. Or just turn off AdBlock. Thank you!
                        </p>
                    </div>

                    <div className="adblock-modal__actions">
                        <button
                            className="primary__button"
                            onClick={handleClose}
                        >
                            ACCEPT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
