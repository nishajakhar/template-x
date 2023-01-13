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
export default function Blocks({ setActiveItem }) {
    return (
        <div className="content">
            <div className="item">
                <div className="editor-item-image">
                    <img src="/sections.png" width="25" />
                </div>
                <h1>Columns</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/button.png" width="25" />
                </div>
                <h1>Button</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/divider2.png" width="25" />
                </div>
                <h1>Divider</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/heading.png" width="25" />
                </div>
                <h1>Heading</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/code.png" width="25" />
                </div>
                <h1>HTML</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/image.png" width="25" />
                </div>
                <h1>Image</h1>
            </div>
            <div className="item" onClick={() => setActiveItem(5)}>
                <div className="editor-item-image">
                    <img src="/hamburger.png" width="25" />
                </div>
                <h1>Menu</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/user.png" width="25" />
                </div>
                <h1>Social</h1>
            </div>
            <div
                className="item cursor-pointer"
                onClick={() => setActiveItem(4)}
            >
                <div className="editor-item-image">
                    <img src="/text.png" width="25" />
                </div>
                <h1>Text</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/timer.png" width="25" />
                </div>
                <h1>Timer</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/video.png" width="25" />
                </div>
                <h1>Video</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/slider.png" width="25" />
                </div>
                <h1>Carousel</h1>
            </div>
            <div className="item">
                <div className="editor-item-image">
                    <img src="/loading.png" width="25" />
                </div>
                <h1>GIF</h1>
            </div>
        </div>
    );
}
