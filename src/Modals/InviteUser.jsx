import '../styles/Modals/InviteUser.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';

export default function InviteUserModal(props) {
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
        <div className="invite-user-modal modal" ref={modal}>
            <div className="modal-container">
                <div className="modal-content modal-open" ref={modalContent}>
                    <button
                        class="invite-user-content-close close"
                        onClick={handleClose}
                    >
                        &times;
                    </button>
                    <div className="invite-user-modal__heading">
                        <h1>Invite User</h1>
                    </div>

                    <form>
                        <div className="invite-user__form-name my-2">
                            <label className="text-sm">Full name</label>
                            <input
                                type="text"
                                placeholder="Please enter your full name"
                                className="primary__input my-1"
                            />
                        </div>
                        <div className="invite-user__form-email my-2">
                            <label className="text-sm">Email</label>
                            <input
                                type="email"
                                placeholder="Please enter your email"
                                className="primary__input my-1"
                            />
                        </div>
                        <div className="invite-user__form-roles">
                            <p className="my-2">Select a role for user</p>

                            <div className="invite-user__form-role">
                                <input type="checkbox" className="" />
                                <label className="">Administrator</label>
                            </div>
                            <div className="invite-user__form-role">
                                <input type="checkbox" className="" />
                                <label className="">Developer </label>
                            </div>
                            <div className="invite-user__form-role">
                                <input type="checkbox" className="" />
                                <label className="">Manager</label>
                            </div>
                            <div className="invite-user__form-role">
                                <input type="checkbox" className="" />
                                <label className="">Designer</label>
                            </div>
                        </div>
                        <div className="invite-user__form-action flex justify-center mt-5">
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
                                SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
