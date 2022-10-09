import './Blog.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function BlogCard({ blog }) {
  return (
    <div className="blog__card-container">
      <div className="blog__card">
        <div className="blog__card-image">
          <img src={blog.img} />
        </div>
        <div className="blog__card-content__outer">
          <div className="blog__card-content">
            <h3 className="card__date">{blog.date}</h3>
            <div className="card__heading" style={{ fontSize: '15px' }}>
              <h1>{blog.title}</h1>
            </div>
            <div className="card__description">
              <p>{blog.description} </p>{' '}
            </div>
            <div className="card__hastags">
              {blog.tags.map(tag => (
                <span>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
