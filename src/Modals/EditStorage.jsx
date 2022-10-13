import '../styles/Modals/EditStorage.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';

export default function EditStorageModal(props) {
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
    <div className="edit-storage-modal modal" ref={modal}>
      <div className="modal-container">
        <div className="modal-content modal-open" ref={modalContent}>
          <button class="edit-storage-content-close close" onClick={handleClose}>
            &times;
          </button>
          <div className="edit-storage-modal__heading">
            <h1>Edit Storage</h1>
          </div>

          <form>
            <div className="edit-storage__form-input">
              <label className="">Name Storage</label>
              <input type="text" placeholder="Please enter name storage" className="primary__input my-2" />
            </div>

            <div className="edit-storage__form-input">
              <label className="">Description</label>
              <textarea rows="5" placeholder="Please enter description" className="my-2" className="primary__input" />
            </div>

            <div className="edit-storage__form-input">
              <label className="">Type</label>
              <select className="my-2">
                <option>Please choose type</option>
                <option>Ipsum</option>
                <option>Lorem</option>
              </select>
            </div>
            <div className="edit-storage__form-subheading">
              <h1>Personal Information</h1>
            </div>
            <div className="edit-storage__form-input">
              <label className="">Name</label>
              <input type="text" placeholder="Please enter your name" className="primary__input my-2" />
            </div>

            <div className="edit-storage__form-input">
              <label className="">Email</label>
              <input type="text" placeholder="Please enter your email" className="primary__input my-2" />
            </div>

            <div className="edit-storage__form-input">
              <label className="">Region</label>
              <select className="my-2">
                <option>Please choose type</option>
                <option>Ipsum</option>
                <option>Lorem</option>
              </select>{' '}
            </div>

            <div className="edit-storage__form-input">
              <label className="">Access Key</label>
              <input type="password" placeholder="Please enter your access key" className="primary__input my-2" />
            </div>

            <div className="edit-storage__form-input">
              <label className="">Secret Access Key</label>
              <input type="text" placeholder="Please enter your secret access key" className="primary__input my-2" />
            </div>

            <div className="edit-storage__form-input">
              <label className="">Bucket Name</label>
              <input type="text" placeholder="Please enter your bucket name" className="primary__input my-2" />
            </div>

            <div className="edit-storage__form-input">
              <label className="">Assigned Name</label>
              <input type="text" placeholder="Please enter bucket assigned name" className="primary__input my-2" />
            </div>
            <div className="edit-storage__form-action flex justify-center my-5">
              <div className="tertiary__button-outer">
                <button className="tertiary__button" onClick={handleClose}>
                  CLOSE
                </button>
              </div>
              <button className="primary__button" onClick={handleClose}>
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
