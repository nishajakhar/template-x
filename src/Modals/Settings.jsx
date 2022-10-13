import '../styles/Modals/Settings.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';

export default function SettingsModal(props) {
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
    <div className="settings-modal modal" ref={modal}>
      <div className="modal-container">
        <div className="modal-content modal-open" ref={modalContent}>
          <button class="settings-content-close close" onClick={handleClose}>
            &times;
          </button>
          <div className="settings-modal__heading">
            <h1>Settings</h1>
          </div>

          <form>
            <div className="settings__form-info">
              <div className="settings__form-left">
                <div className="settings__form-input flex justify-between">
                  <label className="">Enable Search</label>
                  <input type="checkbox" className="" />
                </div>
                <div className="settings__form-input flex justify-between">
                  <label className="">Enable Filters</label>
                  <input type="checkbox" className="" />
                </div>
                <div className="settings__form-input flex justify-between">
                  <label className="">Enable bulk actions</label>
                  <input type="checkbox" className="" />
                </div>
                <div className="settings__form-sort">
                  <p>Default sort attribute</p>
                  <div className="flex">
                    <div className="title-sort">
                      <select>
                        <option>Title</option>
                        <option>Company</option>
                        <option>Ratings</option>
                      </select>
                    </div>
                    <div className="order-sort">
                      <select>
                        <option>ASC</option>
                        <option>DESC</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="settings__form-input flex justify-between">
                  <label className="">Schedule once, publish everywhere</label>
                  <input type="checkbox" className="" />
                </div>
                <div className="settings__form-input-socials"></div>
                <div className="settings__form-input">
                  <label className="">Items Per Page</label>
                  <input type="number" placeholder="Please enter name storage" className="primary__input my-2" />
                </div>

                <div className="settings__form-view-items">
                  <div className="settings__view-header flex justify-between">
                    <h1>View</h1>
                    <h1>Add</h1>
                  </div>
                  <div className="settings__form-view-item flex justify-between">
                    <p>id</p> <span>X</span>
                  </div>
                  <div className="settings__form-view-item flex">
                    <p>slug</p> <span>X</span>
                  </div>
                  <div className="settings__form-view-item flex">
                    <p>created_at</p> <span>X</span>
                  </div>
                  <div className="settings__form-view-item flex">
                    <p>title</p> <span>X</span>
                  </div>
                </div>
              </div>
              <div className="settings__form-right">
                <div className="settings__form-right-header flex justify-between py-2">
                  <p className="text-lg text-pink-700">Displayed Fields</p>
                  <span className="text-lg text-orange-500 underline">Reset</span>
                </div>

                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">author</label>
                </div>
                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">category</label>
                </div>
                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">created_at</label>
                </div>
                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">id</label>
                </div>
                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">image</label>
                </div>
                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">publish_at</label>
                </div>
                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">ready</label>
                </div>
                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">slug</label>
                </div>
                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">title</label>
                </div>
                <div className="settings__form-input">
                  <input type="checkbox" className="" />
                  <label className="">updated_at</label>
                </div>
              </div>
            </div>
            <div className="settings__form-action flex justify-center my-5">
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
