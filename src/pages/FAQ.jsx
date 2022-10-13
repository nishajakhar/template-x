import '../styles/FAQ.scss';
import '../styles/shared.scss';
import { useState } from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import FaqItem from '../components/Home/FAQ/FaqItem';
import Category from '../components/Home/FAQ/Category';
import { faq, faqCategories } from '../services/data';
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// config.autoAddCss = false;
export default function FaqScreen() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expand, setExpand] = useState(0);

  return (
    <div className="faq__screen">
      {/* <Header /> */}
      <TabHeader heading="FAQ" />

      <div className="faq-screen">
        <div className="faq-screen__filters">
          {faqCategories.map((item, index) => (
            <Category
              title={item}
              key={index}
              index={index}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </div>
        <div className="faq-screen__container">
          <div className="faq-screen__items">
            {faq.map((faqItem, index) => {
              console.log('I a key...', index);
              return <FaqItem key={index} index={index} faqItem={faqItem} expand={expand} setExpand={setExpand} />;
            })}
          </div>
        </div>

        <div className="color__circles circle__18"></div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
