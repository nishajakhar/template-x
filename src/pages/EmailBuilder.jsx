import '../styles/EmailBuilder.scss';
import '../styles/shared.scss';

import TabHeader from '../components/common/TabHeader/TabHeader';
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
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faAlignJustify,
    faMagnifyingGlass,
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
                            <div className="email-builder__main__canvas">
                                <div>
                                    <span>
                                        {' '}
                                        No content here. Drag content from
                                        right.
                                    </span>
                                </div>
                            </div>
                            {activeItem == 0 && (
                                <div className="email-builder__main__editor__1">
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img
                                                src="/sections.png"
                                                width="25"
                                            />
                                        </div>
                                        <h1>Columns</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img src="/button.png" width="25" />
                                        </div>
                                        <h1>Button</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img
                                                src="/divider2.png"
                                                width="25"
                                            />
                                        </div>
                                        <h1>Divider</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img
                                                src="/heading.png"
                                                width="25"
                                            />
                                        </div>
                                        <h1>Heading</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img src="/code.png" width="25" />
                                        </div>
                                        <h1>HTML</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img src="/image.png" width="25" />
                                        </div>
                                        <h1>Image</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img
                                                src="/hamburger.png"
                                                width="25"
                                            />
                                        </div>
                                        <h1>Menu</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img src="/user.png" width="25" />
                                        </div>
                                        <h1>Social</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img src="/text.png" width="25" />
                                        </div>
                                        <h1>Text</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img src="/timer.png" width="25" />
                                        </div>
                                        <h1>Timer</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img src="/video.png" width="25" />
                                        </div>
                                        <h1>Video</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img src="/slider.png" width="25" />
                                        </div>
                                        <h1>Carousel</h1>
                                    </div>
                                    <div className="email-builder__main__editor-item">
                                        <div className="editor-item-image">
                                            <img
                                                src="/loading.png"
                                                width="25"
                                            />
                                        </div>
                                        <h1>GIF</h1>
                                    </div>
                                </div>
                            )}

                            {activeItem == 1 && (
                                <div className="email-builder__main__editor__2">
                                    <h1>Blank</h1>
                                    <div className="left">
                                        <div className="email-builder__main__editor-item item-1">
                                            <div className="w-full"></div>
                                        </div>
                                        <div className="email-builder__main__editor-item item-2">
                                            <div className="w-1/2"></div>
                                            <div className="w-1/2"></div>
                                        </div>
                                        <div className="email-builder__main__editor-item item-3">
                                            <div className="w-1/3"></div>
                                            <div className="w-1/3"></div>
                                            <div className="w-1/3"></div>
                                        </div>
                                        <div className="email-builder__main__editor-item item-4">
                                            <div className="flex-1"></div>
                                            <div className="flex-1"></div>
                                            <div className="flex-1"></div>
                                            <div className="flex-1"></div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="email-builder__main__editor-item item-5">
                                            <div className="w-1/3"></div>
                                            <div className="w-2/3"></div>
                                        </div>
                                        <div className="email-builder__main__editor-item item-6">
                                            <div className="w-2/3"></div>
                                            <div className="w-1/3"></div>
                                        </div>
                                        <div className="email-builder__main__editor-item item-7">
                                            <div className="w-1/6"></div>
                                            <div className="w-2/6"></div>
                                            <div className="w-1/6"></div>
                                            <div className="w-2/6"></div>
                                        </div>
                                        <div className="email-builder__main__editor-item item-8">
                                            <div className="w-2/6"></div>
                                            <div className="w-1/6"></div>
                                            <div className="w-2/6"></div>
                                            <div className="w-1/6"></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeItem == 2 && (
                                <div className="email-builder__main__editor__4">
                                    <div className="left">
                                        <div className="email-builder__main__editor-item">
                                            <div className="email-builder__main__editor-item__heading">
                                                <h1>General</h1>
                                                <FontAwesomeIcon
                                                    className="social__icons pl-3"
                                                    icon={faCaretDown}
                                                />
                                            </div>

                                            <div className="email-builder__main__editor-item__body-general">
                                                <div className="email-builder__main__editor-item__body__item">
                                                    <p>Text Color</p>
                                                    <p>
                                                        5A2FB2<span></span>
                                                    </p>
                                                </div>
                                                <div className="email-builder__main__editor-item__body__item">
                                                    <p>Background Color</p>
                                                    <p>5A2FB2</p>
                                                </div>
                                                <div className="email-builder__main__editor-item__body__item">
                                                    <p>Content Width</p>
                                                    <p>
                                                        <span className="pr-2 bolder">
                                                            <FontAwesomeIcon
                                                                className="social__icons pl-3"
                                                                icon={faMinus}
                                                            />
                                                        </span>
                                                        500
                                                        <span className="pl-2 bolder">
                                                            <FontAwesomeIcon
                                                                className="social__icons pl-3"
                                                                icon={faPlus}
                                                            />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="email-builder__main__editor-item__body__item">
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
                                                            icon={
                                                                faAlignJustify
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="email-builder__main__editor-item__body__item">
                                                    <p>Font Family</p>
                                                    <select
                                                        style={{
                                                            background: 'none',
                                                            outline: 'none',
                                                        }}
                                                    >
                                                        <option>Raleway</option>
                                                        <option>
                                                            Montserrat
                                                        </option>
                                                        <option>Cursive</option>
                                                        <option>Lato</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="email-builder__main__editor-item">
                                            <div className="email-builder__main__editor-item__heading">
                                                <h1>Email Settings</h1>
                                                <FontAwesomeIcon
                                                    className="social__icons pl-3"
                                                    icon={faCaretDown}
                                                />
                                            </div>

                                            <div className="email-builder__main__editor-item__body-email">
                                                <div className="email-builder__main__editor-item__body__item">
                                                    <h1>Preheader Text</h1>
                                                    <input
                                                        type="text"
                                                        className="primary__input"
                                                        placeholder="Please enter preheader text"
                                                    />
                                                    <p>
                                                        A preheader is the short
                                                        summary text that
                                                        follows the subject line
                                                        when viewing an email
                                                        from the inbox.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="email-builder__main__editor-item">
                                            <div className="email-builder__main__editor-item__heading">
                                                <h1>Links</h1>
                                                <FontAwesomeIcon
                                                    className="social__icons pl-3"
                                                    icon={faCaretDown}
                                                />
                                            </div>
                                            <div className="email-builder__main__editor-item__body-links">
                                                <div className="email-builder__main__editor-item__body__item">
                                                    <p>Text Color</p>
                                                    <p>
                                                        5A2FB2<span></span>
                                                    </p>
                                                </div>
                                                <div className="email-builder__main__editor-item__body__item">
                                                    <p>Underline</p>
                                                    <input type="checkbox" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeItem == 3 && (
                                <div className="email-builder__main__editor__5">
                                    <div className="email-builder__main__editor-search">
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
                                        <p className="pt-4">
                                            Powered by Unsplash, Pexels,
                                            Pixabay.{' '}
                                        </p>
                                        <p>
                                            All images licensed under Creative
                                            Commons Zero.
                                        </p>
                                    </div>
                                    <div className="email-builder__main__editor-body">
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
                            )}
                        </div>
                    </div>
                    <div className="color__circles circle__18"></div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}
