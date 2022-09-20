import './FAQ.scss';
import Category from './Category';
import FaqItem from './FaqItem';

export default function FAQ() {
  return (
    <div className="faq">
      <div className="faq__heading">
        <h1>FAQ</h1>
      </div>
      <div className="faq__filters">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>

      <div className="faq__items">
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
      </div>
      <div className="circle__faq-1"></div>

      <div className="circle__faq-2"></div>
    </div>
  );
}
