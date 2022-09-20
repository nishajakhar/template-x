import '../styles/Blog.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import BlogHeadCard from '../components/Blog/BlogHeadCard';
import BlogCard from '../components/Blog/BlogCard';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function BlogScreen() {
  return (
    <div className="blog__screen">
      <Header />
      <div className="blog">
        <TabHeader heading="Blog" />
        <div className="blog__container">
          <div className="blog__head">
            <BlogHeadCard />
          </div>
          <div class="blog__items">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div class="blog__button">
            <button>
              {' '}
              <FontAwesomeIcon className="social__icons" icon={faHeart} />
              Show More
            </button>
          </div>
        </div>
        <div className="color__circles circle__18"></div>
      </div>
      <Footer />
    </div>
  );
}
