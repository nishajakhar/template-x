import './FAQ.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

export default function FaqItem() {
  return (
    <div>
      <div className="faqItem__outer">
        <div className="faqItem">
          <h1>Lorem ipsum dolor sit amet?</h1>
          <div>
            <a href="#">
              <FontAwesomeIcon classname="social__icons" icon={faMessage} />
            </a>
          </div>
        </div>
      </div>
      <div className="faqItem__expand">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut nibh vitae fusce neque nibh metus. Etiam
          pellentesque ac interdum nisl tristique lectus mollis. Sed vel, lacus cursus enim nulla viverra elementum
          feugiat vitae. Praesent maecenas morbi sit elementum, velit nibh sed urna, orci. Congue tempus, ac sapien, et
          sed semper nisl ornare odio. Sagittis tellus pretium, adipiscing proin vestibulum augue lorem. Ac pharetra ac
          urna, mattis. Consequat, porta porta dignissim sollicitudin eget ipsum facilisi eu. Sed ac risus proin auctor
          pulvinar tristique sit.
        </p>
      </div>
    </div>
  );
}
