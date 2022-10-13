import { Offcanvas } from 'react-bootstrap';
import { Menu } from './Menu';
import './offcanvas.scss';
import { Link } from 'react-router-dom';
import { X as CloseIcon } from 'react-feather';

export const MenuOffcanvas = ({ isOpen, close, menu }) => {
  return (
    <Offcanvas
      id="api-docs-offcanvas"
      className="api-docs-offcanvas"
      backdropClassName="api-offcanvas-backdrop"
      show={isOpen}
      onHide={close}
      placement="start"
    >
      <Offcanvas.Header>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/" className="logo">
              <img src="/logoX.png" alt="converterx logo" />
            </Link>
            <button className="btn btn-default close-btn" onClick={close}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="api-docs-offcanvas-menu-wrapper">
          <Menu menu={menu} />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
