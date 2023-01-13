import './EmailBuilder.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMinus,
    faPlus,
    faAlignCenter,
    faAlignJustify,
    faAlignLeft,
    faAlignRight,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Body() {
    return (
        <div className="body">
            <div className="left">
                <div className="section section-general">
                    <div className="section__heading">
                        <h1>General</h1>
                        <FontAwesomeIcon
                            className="social__icons pl-3"
                            icon={faCaretDown}
                        />
                    </div>

                    <div className="section__items general">
                        <div className="section-item items-center">
                            <p>Text Color</p>
                            <p>
                                5A2FB2
                                <span className="pl-2">
                                    <input
                                        type="color"
                                        style={{
                                            width: '25px',

                                            backgroundColor: 'white',
                                        }}
                                    />
                                </span>
                            </p>
                        </div>
                        <div className="section-item items-center">
                            <p>Background Color</p>
                            <p>
                                5A2FB2
                                <span className="pl-2">
                                    <input
                                        type="color"
                                        style={{
                                            width: '25px',

                                            backgroundColor: 'white',
                                        }}
                                    />
                                </span>
                            </p>
                        </div>
                        <div className="section-item">
                            <p>Content Width</p>
                            <p>
                                <span className="pr-2 bolder">
                                    <FontAwesomeIcon
                                        className="social__icons text-pink-400"
                                        icon={faMinus}
                                    />
                                </span>
                                500
                                <span className="pl-2 bolder">
                                    <FontAwesomeIcon
                                        className="social__icons text-pink-400"
                                        icon={faPlus}
                                    />
                                </span>
                            </p>
                        </div>
                        <div className="section-item">
                            <p>Content Alignment</p>
                            <div>
                                <FontAwesomeIcon
                                    className="social__icons pl-3"
                                    icon={faAlignLeft}
                                />
                                <FontAwesomeIcon
                                    className="social__icons pl-3"
                                    icon={faAlignCenter}
                                />
                                <FontAwesomeIcon
                                    className="social__icons pl-3"
                                    icon={faAlignRight}
                                />
                                <FontAwesomeIcon
                                    className="social__icons pl-3"
                                    icon={faAlignJustify}
                                />
                            </div>
                        </div>
                        <div className="section-item">
                            <p>Font Family</p>
                            <select
                                style={{
                                    background: 'none',
                                    outline: 'none',
                                }}
                            >
                                <option>Raleway</option>
                                <option>Montserrat</option>
                                <option>Cursive</option>
                                <option>Lato</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="section section-email">
                    <div className="section__heading">
                        <h1>Email Settings</h1>
                        <FontAwesomeIcon
                            className="social__icons pl-3"
                            icon={faCaretDown}
                        />
                    </div>

                    <div className="section__items email">
                        <div className="section-item">
                            <h1>Preheader Text</h1>
                            <input
                                type="text"
                                className="primary__input"
                                placeholder="Please enter preheader text"
                            />
                            <p>
                                A preheader is the short summary text that
                                follows the subject line when viewing an email
                                from the inbox.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section section-links">
                    <div className="section__heading">
                        <h1>Links</h1>
                        <FontAwesomeIcon
                            className="social__icons pl-3"
                            icon={faCaretDown}
                        />
                    </div>
                    <div className="section__items links items-center">
                        <div className="section-item items-center">
                            <p>Text Color</p>
                            <p>
                                5A2FB2{' '}
                                <span className="pl-2">
                                    <input
                                        type="color"
                                        style={{
                                            width: '25px',

                                            backgroundColor: 'white',
                                        }}
                                    />
                                </span>
                            </p>
                        </div>
                        <div className="section-item">
                            <p>Underline</p>
                            <div className="inputgroup">
                                <input type="checkbox" className="" />
                                <label className="inputgroup-label"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
