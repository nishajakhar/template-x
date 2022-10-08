import { useState } from 'react';
import './FAQ.scss';
import Category from './Category';
import FaqItem from './FaqItem';
import { faq, faqCategories } from '../../../services/data';
export default function FAQ() {
  const [expand, setExpand] = useState(0);
  console.log('I am FAQ main.....', expand);

  return (
    <div className="faq">
      <div className="faq__heading">
        <h1>FAQ</h1>
      </div>
      <div className="faq__filters">
        {faqCategories.map(item => (
          <Category title={item} />
        ))}
      </div>

      <div className="faq__items">
        {faq.map((faqItem, index) => {
          console.log('I a key...', index);
          return <FaqItem key={index} index={index} faqItem={faqItem} expand={expand} setExpand={setExpand} />;
        })}
      </div>
      <div className="circle__faq-1"></div>

      <div className="circle__faq-2"></div>
    </div>
  );
}
