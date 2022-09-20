import './TemplateCatalog.scss';
import '../../../styles/shared.scss';

export default function TemplateCatalog() {
  return (
    <div className="catalog">
      <div className="catalog__heading">
        <h1>Our Templates</h1>
        <button className="primary__button">CATALOG</button>
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
