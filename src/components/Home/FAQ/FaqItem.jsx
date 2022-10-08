import { useRef } from 'react';
import './FAQ.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

export default function FaqItem({ index, faqItem, expand, setExpand }) {
  const answer = useRef();
  const handleClick = index => {
    if (expand == index) {
      answer.current.classList.toggle('hidden');
      setExpand(undefined);
    } else setExpand(index);
  };
  return (
    <div>
      <div className="faqItem__outer">
        <div className="faqItem" onClick={() => handleClick(index)}>
          <h1>{faqItem.question}</h1>
          <div>
            <FontAwesomeIcon classname="social__icons" icon={expand == index ? faMinus : faPlus} />
          </div>
        </div>
      </div>
      <div className={'faqItem__expand ' + (expand == index ? '' : 'hidden')} ref={answer}>
        <p>{faqItem.answer}</p>
      </div>
    </div>
  );
}
