import '../styles/Blog.scss';
import '../styles/shared.scss';

import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import TabHeader from '../components/common/TabHeader/TabHeader';
import BlogHeadCard from '../components/Blog/BlogHeadCard';
import BlogCard from '../components/Blog/BlogCard';
import { blogs } from '../services/data';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faRefresh,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function BlogScreen() {
    return (
        <div className="blog__screen">
            {/* <Header /> */}
            <div className="blog">
                <TabHeader heading="Blog">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras morbi lorem vel non ultrices. Quis metus, enim nunc
                        neque et a eget sed lectus.
                    </p>
                    <form>
                        <input
                            type="text"
                            placeholder="Email"
                            className="primary__input"
                        />
                        <button>
                            {' '}
                            <FontAwesomeIcon
                                classname="social__icons"
                                icon={faMagnifyingGlass}
                            />
                        </button>
                    </form>
                </TabHeader>
                <div className="blog__container">
                    <div className="blog__head">
                        <BlogHeadCard />
                    </div>
                    <div class="blog__items">
                        {blogs.map((blog, index) => (
                            <BlogCard key={index} blog={blog} />
                        ))}
                    </div>
                    <div class="blog__button">
                        <button>
                            {' '}
                            <FontAwesomeIcon
                                className="social__icons"
                                icon={faRefresh}
                            />
                            Show More
                        </button>
                    </div>
                </div>
                <div className="color__circles circle__18"></div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
