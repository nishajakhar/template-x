import './Description.scss';
import '../../../styles/shared.scss';

export default function Description() {
  return (
    <div className="description__container">
      <div className="description__outer">
        <div className="description">
          <div className="description__image">
            <img src="computer.png" />
          </div>
          <div className="description__text">
            <h1>Lorem ipsum dolar</h1>
            <p>
              Consectetur adipiscing elit. Purus mi, massa enim vulputate vel. Auctor praesent sagittis, nisi quam.
              Velit gravida hendrerit eget enim sed id semper risus.
            </p>
            <button className="secondary__button">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="circle__desc"></div>
    </div>
  );
}
