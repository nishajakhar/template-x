import './EmailBuilder.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMinus,
    faPlus,
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faAlignJustify,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Text() {
    return (
        <div className="text">
            <div className="left">
                <div className="section">
                    <div className="section__heading">
                        <h1>Text</h1>
                        <FontAwesomeIcon
                            className="social__icons pl-3"
                            icon={faCaretDown}
                        />
                    </div>

                    <div className="section-items">
                        <div className="section-item">
                            <p>Color</p>
                            <p>
                                <input
                                    type="color"
                                    style={{
                                        width: '25px',

                                        backgroundColor: 'white',
                                    }}
                                />
                            </p>
                        </div>

                        <div className="section-item">
                            <p>Line Height</p>
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
                            <p>Text Align</p>
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
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section__heading">
                    <h1>Links</h1>
                    <FontAwesomeIcon
                        className="social__icons pl-3"
                        icon={faCaretDown}
                    />
                </div>
                <div className="section-items">
                    <div className="section-item">
                        <p>Inherit Body Styles</p>
                        <div className="inputgroup">
                            <input type="checkbox" className="" />
                            <label className="inputgroup-label"></label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section__heading">
                    <h1>General</h1>
                    <FontAwesomeIcon
                        className="social__icons pl-3"
                        icon={faCaretDown}
                    />
                </div>
                <div className="section-items padding-container">
                    <div className="section-item ">
                        <p className="padding-heading">Container Padding</p>
                        <div className="inputgroup">
                            <input type="checkbox" className="" />
                            <label className="inputgroup-label"></label>
                        </div>
                    </div>

                    <div className="section-item">
                        <p>All Sides</p>
                        <div>
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
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section__heading">
                    <h1>Responsive Design</h1>
                    <FontAwesomeIcon
                        className="social__icons pl-3"
                        icon={faCaretDown}
                    />
                </div>
                <div className="section-items">
                    <div className="section-item">
                        <p>Hide on Desktop</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
