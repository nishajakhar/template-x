import './EmailBuilder.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faMessage,
    faAward,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Canvas() {
    return (
        <div className="email-builder__main__canvas">
            <div>
                <span> No content here. Drag content from right.</span>
            </div>
        </div>
    );
}
