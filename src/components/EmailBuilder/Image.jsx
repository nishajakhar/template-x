import './EmailBuilder.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faArrowRotateForward,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Image({ setOpen }) {
    return (
        <div className="image">
            <div className="image-search">
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
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
                <p className="pt-4">Powered by Unsplash, Pexels, Pixabay. </p>
                <p>All images licensed under Creative Commons Zero.</p>
            </div>
            <div className="images">
                <div
                    className="editor-item-image"
                    onClick={() => setOpen(true)}
                >
                    <img src="/unsplash.png" />
                </div>

                <div
                    className="editor-item-image"
                    onClick={() => setOpen(true)}
                >
                    <img src="/unsplash2.png" />
                </div>

                <div
                    className="editor-item-image"
                    onClick={() => setOpen(true)}
                >
                    <img src="/unsplash3.png" />
                </div>

                <div
                    className="editor-item-image"
                    onClick={() => setOpen(true)}
                >
                    <img src="/unsplash4.png" />
                </div>

                <div
                    className="editor-item-image"
                    onClick={() => setOpen(true)}
                >
                    <img src="/unsplash5.png" />
                </div>

                <div
                    className="editor-item-image"
                    onClick={() => setOpen(true)}
                >
                    <img src="/unsplash6.png" />
                </div>

                <div
                    className="editor-item-image"
                    onClick={() => setOpen(true)}
                >
                    <img src="/unsplash7.png" />
                </div>

                <div
                    className="editor-item-image"
                    onClick={() => setOpen(true)}
                >
                    <img src="/unsplash8.png" />
                </div>
            </div>
            <div className="show-more">
                <FontAwesomeIcon
                    classname="social__icons pr-2"
                    icon={faArrowRotateForward}
                />
                Show More
            </div>
        </div>
    );
}
