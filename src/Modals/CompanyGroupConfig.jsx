import '../styles/Modals/CompanyGroupConfig.scss';
import '../styles/modalShared.scss';
import { useRef } from 'react';

export default function CompanyGroupConfigModal(props) {
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
    <div className="company-group-config-modal modal" ref={modal}>
      <div className="modal-container">
        <div className="modal-content modal-open" ref={modalContent}>
          <button class="company-group-config-content-close close" onClick={handleClose}>
            &times;
          </button>
          <div className="company-group-config-modal__heading">
            <h1>Configure group</h1>
          </div>

          <div className="company-group-config-modal__subheading">
            <p>Designers group</p>
          </div>
          <form>
            <div className="company-group-config__form-name">
              <label className="">Name Group</label>
              <input type="text" placeholder="Designer" className="primary__input my-2" />
            </div>
            <div className="company-group-config__form-properties">
              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Lorem ipsum dolor sit amet consecteturadipiscing elit.</label>
              </div>
              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Lectus in lectus massa non in donec ultrices arcu habitant. </label>
              </div>
              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Lectus in lectus massa.</label>
              </div>
              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Eget et, amet, diam sed id.</label>
              </div>
              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Quis interdum metus netus amet dolor nunc, odio.</label>
              </div>
              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Nunc ut risus et sit scelerisque.</label>
              </div>
              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Eget vivamus aliquet ornare quis mauris, scelerisque magna felis.</label>
              </div>

              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Eget vivamus aliquet ornare quis mauris, scelerisque magna felis.</label>
              </div>

              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Eget vivamus aliquet ornare quis mauris, scelerisque magna felis.</label>
              </div>

              <div className="company-group-config__form-property-item">
                <input type="checkbox" className="" />
                <label className="">Eget vivamus aliquet ornare quis mauris, scelerisque magna felis.</label>
              </div>
            </div>
            <div className="company-group-config__form-action flex justify-center my-5">
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
