import '../styles/Modals/ChooseStorage.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';

export default function ChooseStorageModal(props) {
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
        <div className="choose-storage-modal modal" ref={modal}>
            <div className="modal-container">
                <div className="modal-content modal-open" ref={modalContent}>
                    <button
                        class="choose-storage-content-close close"
                        onClick={handleClose}
                    >
                        &times;
                    </button>

                    <div className="choose-storage-modal__heading">
                        <h1>Choose storage?</h1>
                    </div>

                    <div className="choose-storage-modal__subheading">
                        Are you sure you want to select the{' '}
                        <span>“Lorem Ipsum”</span> storage?
                    </div>

                    <div className="choose-storage-modal__actions">
                        <div className="tertiary__button-outer">
                            <button
                                className="tertiary__button modal__button"
                                onClick={handleClose}
                            >
                                CLOSE
                            </button>
                        </div>
                        <button
                            className="primary__button"
                            onClick={handleClose}
                        >
                            YES
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
