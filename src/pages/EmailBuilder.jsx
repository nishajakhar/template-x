import '../styles/EmailBuilder.scss';
import '../styles/shared.scss';

import TabHeader from '../components/common/TabHeader/TabHeader';
import Canvas from '../components/EmailBuilder/Canvas';
import Content from '../components/EmailBuilder/Content';
import Body from '../components/EmailBuilder/Body';
import Image from '../components/EmailBuilder/Image';
import Menu from '../components/EmailBuilder/Menu';
import Text from '../components/EmailBuilder/Text';
import Blocks from '../components/EmailBuilder/Blocks';

import PhotoEditModal from '../Modals/PhotoEdit';
import CodeModal from '../Modals/Code';

import { useState, useRef, useEffect } from 'react';
import Category from '../components/Home/FAQ/Category';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faRefresh,
    faCaretDown,
    faCode,
    faEye,
    faDesktop,
    faMobilePhone,
    faTabletAndroid,
    faMinus,
    faArrowRotateBackward,
    faArrowRotateForward,
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

export default function EmailBuilderScreen() {
    const builder = ['Content', 'Blocks', 'Body', 'Image'];
    const [activeItem, setActiveItem] = useState(0);
    const [open, setOpen] = useState(false);
    const [openCode, setOpenCode] = useState(false);

    const [openExport, setOpenExport] = useState(false);
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [open]);
    return (
        <>
            {open && <PhotoEditModal open={setOpen} />}
            {openCode && <CodeModal open={setOpenCode} />}

            <div className="email-builder__screen">
                {/* <Header /> */}
                <div className="email-builder">
                    <TabHeader heading="Email Builder" />
                    <div className="email-builder__container">
                        <div className="email-builder__filter">
                            <div className="email-builder__filter-export">
                                <p onClick={() => setOpenExport(!openExport)}>
                                    Export
                                    <FontAwesomeIcon
                                        className="social__icons pl-3"
                                        icon={faCaretDown}
                                    />
                                </p>
                                {openExport && (
                                    <div className="export__menu">
                                        <p
                                            onClick={() => {
                                                setOpenExport(false);
                                            }}
                                        >
                                            PNG
                                        </p>

                                        <p
                                            onClick={() => {
                                                setOpenExport(false);
                                            }}
                                        >
                                            JPEG
                                        </p>
                                        <p
                                            onClick={() => {
                                                setOpenExport(false);
                                            }}
                                        >
                                            GIF
                                        </p>
                                        <p
                                            onClick={() => {
                                                setOpenExport(false);
                                            }}
                                        >
                                            TIFF
                                        </p>
                                        <p
                                            onClick={() => {
                                                setOpenExport(false);
                                            }}
                                        >
                                            BMP
                                        </p>
                                        <p
                                            onClick={() => {
                                                setOpenExport(false);
                                            }}
                                        >
                                            SVG
                                        </p>
                                        <p
                                            onClick={() => {
                                                setOpenExport(false);
                                            }}
                                        >
                                            WMF
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-x-5">
                                <p
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setOpenCode(true);
                                    }}
                                >
                                    {' '}
                                    <FontAwesomeIcon
                                        className="social__icons pr-2"
                                        icon={faCode}
                                    />
                                    See the html
                                </p>
                                <p className="background-text">
                                    {' '}
                                    <FontAwesomeIcon
                                        className="social__icons px-2"
                                        icon={faDesktop}
                                    />
                                    <FontAwesomeIcon
                                        className="social__icons px-2"
                                        icon={faMobilePhone}
                                    />
                                    <FontAwesomeIcon
                                        className="social__icons px-2"
                                        icon={faTabletAndroid}
                                    />
                                </p>
                                <p className="background-text">
                                    {' '}
                                    <FontAwesomeIcon
                                        className="social__icons px-1"
                                        icon={faArrowRotateBackward}
                                    />
                                    <FontAwesomeIcon
                                        className="social__icons px-1"
                                        icon={faArrowRotateForward}
                                    />
                                </p>
                                <p className="background-text">
                                    {' '}
                                    <FontAwesomeIcon
                                        className="social__icons px-1"
                                        icon={faEye}
                                    />
                                </p>
                                <p onClick={() => setOpen(true)}>
                                    {' '}
                                    <FontAwesomeIcon
                                        className="social__icons"
                                        icon={faRefresh}
                                    />
                                    Refresh
                                </p>
                            </div>
                        </div>
                        <div className="mobile-filter-options">
                            <p className="background-text">
                                {' '}
                                <FontAwesomeIcon
                                    className="social__icons px-2"
                                    icon={faDesktop}
                                />
                                <FontAwesomeIcon
                                    className="social__icons px-2"
                                    icon={faMobilePhone}
                                />
                                <FontAwesomeIcon
                                    className="social__icons px-2"
                                    icon={faTabletAndroid}
                                />
                            </p>
                            <p className="background-text">
                                {' '}
                                <FontAwesomeIcon
                                    className="social__icons px-1"
                                    icon={faArrowRotateBackward}
                                />
                                <FontAwesomeIcon
                                    className="social__icons px-1"
                                    icon={faArrowRotateForward}
                                />
                            </p>
                            <p className="background-text">
                                {' '}
                                <FontAwesomeIcon
                                    className="social__icons px-1"
                                    icon={faEye}
                                />
                            </p>
                        </div>
                        <div className="email-builder__heading">
                            {builder.map((item, index) => (
                                <Category
                                    title={item}
                                    key={index}
                                    index={index}
                                    activeCategory={activeItem}
                                    setActiveCategory={setActiveItem}
                                />
                            ))}
                        </div>
                        <div class="email-builder__main">
                            <Canvas />
                            {activeItem == 0 && (
                                <Content setActiveItem={setActiveItem} />
                            )}
                            {activeItem == 1 && <Blocks />}
                            {activeItem == 2 && <Body />}
                            {activeItem == 3 && <Image setOpen={setOpen} />}
                            {activeItem == 4 && <Text />}
                            {activeItem == 5 && <Menu />}
                        </div>
                    </div>
                    <div className="color__circles circle__18"></div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}
