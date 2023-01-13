import './EmailBuilder.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMinus,
    faPlus,
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faCaretDown,
    faAlignJustify,
    faDownload,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
export default function Menu() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    return (
        <div className="menu">
            <div className="section">
                <div className="section__heading">
                    <h1>Columns</h1>
                    <FontAwesomeIcon
                        className="social__icons pl-3"
                        icon={faCaretDown}
                    />
                </div>
                <div className="blocks">
                    <div className="item item-1">
                        <div className="w-full "></div>
                    </div>
                    <div className="item item-2 ">
                        <div className="w-1/2 "></div>
                        <div className="w-1/2 "></div>
                    </div>
                    <div className="item item-3">
                        <div className="w-1/3"></div>
                        <div className="w-1/3"></div>
                        <div className="w-1/3"></div>
                    </div>
                    <div className="item item-4">
                        <div className="flex-1"></div>
                        <div className="flex-1"></div>
                        <div className="flex-1"></div>
                        <div className="flex-1"></div>
                    </div>

                    <div className="item item-5">
                        <div className="w-1/3"></div>
                        <div className="w-2/3"></div>
                    </div>
                    <div className="item item-6">
                        <div className="w-2/3"></div>
                        <div className="w-1/3"></div>
                    </div>
                    <div className="item item-7">
                        <div className="w-1/6"></div>
                        <div className="w-2/6"></div>
                        <div className="w-1/6"></div>
                        <div className="w-2/6"></div>
                    </div>
                    <div className="item item-8">
                        <div className="w-2/6"></div>
                        <div className="w-1/6"></div>
                        <div className="w-2/6"></div>
                        <div className="w-1/6"></div>
                    </div>
                </div>{' '}
            </div>

            <div className="section">
                <div className="section__heading">
                    <h1>Columns Properties</h1>
                    <FontAwesomeIcon
                        className="social__icons pl-3"
                        icon={faCaretDown}
                    />
                </div>
                <div className="section__subheading">
                    <p>Column 1</p>
                    <p>Column 2</p>
                </div>
                <div className="section-items">
                    <div className="section-item flex justify-between">
                        <p>Background Color</p>
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
                    <div className="section-items padding-container mb-6">
                        <div className="section-item ">
                            <p className="padding-heading">Padding</p>
                            <div className="inputgroup">
                                <input type="checkbox" className="" />
                                <label className="inputgroup-label"></label>
                            </div>
                        </div>
                        <div className="section-item">
                            <p>All Sides</p>
                            <div className="number-input">
                                <span
                                    className="pr-2 bolder"
                                    onClick={() => setNumber1(number1 - 1)}
                                >
                                    <FontAwesomeIcon
                                        className="social__icons"
                                        icon={faMinus}
                                    />
                                </span>
                                <p>{number1}</p>
                                <span
                                    className="pl-2 bolder"
                                    onClick={() => setNumber1(number1 + 1)}
                                >
                                    <FontAwesomeIcon
                                        className="social__icons"
                                        icon={faPlus}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-items padding-container">
                    <div className="section-item ">
                        <p className="padding-heading">Border</p>
                        <div className="inputgroup">
                            <input type="checkbox" className="" />
                            <label className="inputgroup-label"></label>
                        </div>
                    </div>

                    <div className="section-item">
                        <p>
                            Solid{' '}
                            <FontAwesomeIcon
                                className="social__icons pl-3"
                                icon={faCaretDown}
                            />
                        </p>
                        <div className="flex gap-x-2 items-center">
                            <p>5A2FB2</p>
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
                    </div>
                    <div className="number-input">
                        <span
                            className="pr-2 bolder"
                            onClick={() => setNumber2(number2 - 1)}
                        >
                            <FontAwesomeIcon
                                className="social__icons"
                                icon={faMinus}
                            />
                        </span>
                        <p>{number2}</p>
                        <span
                            className="pl-2 bolder"
                            onClick={() => setNumber2(number2 + 1)}
                        >
                            <FontAwesomeIcon
                                className="social__icons"
                                icon={faPlus}
                            />
                        </span>
                    </div>
                </div>

                <div className="section">
                    <div className="section__heading">
                        <h1>Row Properties</h1>
                        <FontAwesomeIcon
                            className="social__icons pl-3"
                            icon={faCaretDown}
                        />
                    </div>
                    <div className="section-items">
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
                        <div className="section-item items-center">
                            <p>Content Background Color</p>
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
                            <div>
                                <p>Background Image</p>
                                <h3 className="text-lg pt-3 pb-2">Image URL</h3>
                                <div className="image-upload">
                                    <form>
                                        <input
                                            type="text"
                                            placeholder="Please upload image..."
                                            className="primary__input"
                                        />
                                        <button>
                                            {' '}
                                            <FontAwesomeIcon
                                                classname="social__icons"
                                                icon={faDownload}
                                            />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>{' '}
                    <div className="section-items padding-container">
                        <div className="section-item ">
                            <p className="padding-heading">Padding</p>
                            <div className="inputgroup">
                                <input type="checkbox" className="" />
                                <label className="inputgroup-label"></label>
                            </div>
                        </div>
                        <div className="section-item">
                            <p>All Sides</p>

                            <div className="number-input">
                                <span
                                    className="pr-2 bolder"
                                    onClick={() => setNumber3(number3 - 1)}
                                >
                                    <FontAwesomeIcon
                                        className="social__icons"
                                        icon={faMinus}
                                    />
                                </span>
                                <p>{number3}</p>
                                <span
                                    className="pl-2 bolder"
                                    onClick={() => setNumber3(number3 + 1)}
                                >
                                    <FontAwesomeIcon
                                        className="social__icons"
                                        icon={faPlus}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section__heading">
                        <h1>Row Properties</h1>
                        <FontAwesomeIcon
                            className="social__icons pl-3"
                            icon={faCaretDown}
                        />
                    </div>
                    <div className="section-items">
                        <div className="section-item">
                            <p>Hide on Desktop</p>
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
