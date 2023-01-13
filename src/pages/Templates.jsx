import '../styles/Templates.scss';
import '../styles/shared.scss';

import Filter from '../components/common/Filter/Filter';

import TabHeader from '../components/common/TabHeader/TabHeader';
import { useRef, useState, useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faPlus,
    faTimes,
    faSliders,
    faRotateForward,
    faStar as faStarSolid,
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { templates } from '../services/data';
config.autoAddCss = false;
export default function TemplatesScreen() {
    const [open, setOpen] = useState(false);
    const temp = useRef();
    useEffect(() => {
        if (open) temp.current.style.maxHeight = '100vh';
        else temp.current.style.maxHeight = 'unset';
    }, [open]);

    return (
        <>
            <div className="templates__screen">
                {/* <Header /> */}
                <div className="templates">
                    <TabHeader heading="Templates" />
                    <div className="templates__container" ref={temp}>
                        <div className="templates__filter">
                            <p
                                onClick={() => setOpen(!open)}
                                className="cursor-pointer"
                            >
                                {' '}
                                <FontAwesomeIcon
                                    className="social__icons"
                                    icon={faSliders}
                                />
                                Filter
                            </p>
                            <p className="cursor-pointer">
                                {' '}
                                <FontAwesomeIcon
                                    className="social__icons"
                                    icon={faPlus}
                                />
                                Add a new template
                            </p>
                        </div>
                        <div class="templates__groups">
                            {templates.map((item, index) => (
                                <TemplateCard item={item} key={index} />
                            ))}
                        </div>
                        <div class="templates__pagination">
                            <p>
                                <FontAwesomeIcon
                                    icon={faRotateForward}
                                    classname="social__icons"
                                />
                                <span className="">Show more </span>
                            </p>
                        </div>
                        {open && <Filter open={setOpen} />}
                    </div>

                    <div className="color__circles circle__18"></div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}

function TemplateCard({ item }) {
    const starColored = Array.from({ length: item.stars });
    const starNotColored = Array.from({ length: 5 - item.stars });

    return (
        <div className="template__card__outer">
            <div className="template__card">
                <div className="template__card-image">
                    <img src="templates.png" />
                </div>
                <div className="flex items-center flex-1">
                    <div className="template__card-info">
                        <div className="template__card-heading">
                            <h1>{item.title}</h1>
                            <div className="template__card-subheading">
                                <p>{item.by}</p>
                            </div>
                        </div>
                        <div className="template__card-extrainfo ">
                            <div className="template__card-tags">
                                {item.tags.map((tag, index) => (
                                    <span key={index}>#{tag}</span>
                                ))}
                            </div>

                            <div className="template__card-ratings">
                                <p>
                                    {starColored.map(() => (
                                        <FontAwesomeIcon
                                            className="social__icons star-colored"
                                            icon={faStarSolid}
                                        />
                                    ))}
                                    {starNotColored.map(() => (
                                        <FontAwesomeIcon
                                            className="social__icons"
                                            icon={faStar}
                                        />
                                    ))}
                                    (256)
                                </p>
                            </div>
                        </div>
                        <div className="template__card-actions">
                            <h2>${item.price}</h2>

                            <div className="template__card-buttons">
                                <div className="tertiary__button-outer">
                                    <button className="tertiary__button">
                                        CONFIGURE
                                    </button>
                                </div>
                                <button className="primary__button">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="template__card-buttons-2">
                    <div className="tertiary__button-outer">
                        <button className="tertiary__button">CONFIGURE</button>
                    </div>
                    <button className="primary__button">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}
