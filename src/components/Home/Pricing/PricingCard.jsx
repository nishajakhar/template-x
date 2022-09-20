import './Pricing.scss';
export default function PricingCard() {
  return (
    <div className="pricing__card-outer">
      <div className="pricing__card">
        <div className="pricing__card-heading">
          <h1>STANDARD</h1>
          <p>PROMO</p>
        </div>
        <div className="pricing__card-list">
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet consect eturadipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet consecteturadi piscing elit.</li>
            <li>Lorem ipsum dolor sit amet consecteturadipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet consecte turadipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet consecteturadipis cing elit.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className="pricing__cards-price">
          <p>70$/monthly</p>
          <h2>
            50$<span>/monthly</span>
          </h2>
        </div>
        <div class="pricing__choose">
          <button className="primary__button">CHOOSE</button>
        </div>
      </div>
    </div>
  );
}
