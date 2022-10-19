import './TemplateCatalog.scss';
import '../../../styles/shared.scss';
import { Link } from 'react-router-dom';
export default function TemplateCatalog() {
  return (
    <div className="catalog">
      <div className="catalog__heading">
        <h1>Our Templates</h1>
        <Link to="/templates">
          {' '}
          <button className="primary__button">CATALOG</button>
        </Link>
      </div>
      <div className="catalog__items">
        <img src="templates.png" />
        <img src="templates.png" />
        <img src="templates.png" />
        <img src="templates.png" />
        <img src="templates.png" />
        <img src="templates.png" />
        <img src="templates.png" />
        <img src="templates.png" />
        <img src="templates.png" />
        <img src="templates.png" />
        <img src="templates.png" />
      </div>
    </div>
  );
}
