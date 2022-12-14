import '../styles/Modals/PhotoEdit.scss';
import '../styles/modalShared.scss';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faClockRotateLeft,
    faSliders,
    faCrop,
    faRotate,
    faPencil,
    faShapes,
    faEye,
    faRotateForward,
    faRotateBackward,
    faCaretDown,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function PhotoEditModal(props) {
    const [active, setActive] = useState(0);
    const [font, setFont] = useState('Times New Roman');
    const [showFontMenu, setShowFontMenu] = useState(false);
    const modal = useRef(0);
    const modalContent = useRef(0);

    const handleClose = async e => {
        e.preventDefault();
        modalContent.current.classList.remove('modal-open');
        modalContent.current.classList.add('modal-close');
        await new Promise(r => setTimeout(r, 300));
        modal.current.style.display = 'none';
        props.open(false);
    };
    return (
        <div className="photo-edit-modal modal" ref={modal}>
            <div className="modal-container">
                <div className="modal-content modal-open" ref={modalContent}>
                    <button
                        class="photo-edit-content-close close"
                        onClick={handleClose}
                    >
                        &times;
                    </button>
                    {active == 0 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Photo Editing</h1>
                            </div>

                            <div className="photo-edit-modal__filters">
                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(1)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/filter.png" />
                                    </div>
                                    <h1>Filter</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(2)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/resize.png" />
                                    </div>{' '}
                                    <h1>Resize</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(3)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/crop.png" />
                                    </div>{' '}
                                    <h1>Crop</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(4)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/transform.png" />
                                    </div>{' '}
                                    <h1>Transform</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(5)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/draw.png" />
                                    </div>{' '}
                                    <h1>Draw</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(6)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/text1.png" />
                                    </div>{' '}
                                    <h1>Text</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(7)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/shapes.png" />
                                    </div>{' '}
                                    <h1>Shapes</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(8)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/stickers.png" />
                                    </div>{' '}
                                    <h1>Stickers</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(9)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/frame.png" />
                                    </div>{' '}
                                    <h1>Frame</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(10)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/corners.png" />
                                    </div>{' '}
                                    <h1>Corners</h1>
                                </div>

                                <div
                                    className="photo-edit-modal__filters-item"
                                    onClick={() => setActive(11)}
                                >
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/background.png" />
                                    </div>{' '}
                                    <h1>Background</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/merge.png" />
                                    </div>{' '}
                                    <h1>Merge</h1>
                                </div>
                            </div>
                        </div>
                    )}

                    {active == 1 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Filter</h1>
                            </div>

                            <div className="photo-edit-modal__filters__1">
                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/grayscale.png" />
                                    </div>
                                    <h1>Grayscale</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/black&white.png" />
                                    </div>{' '}
                                    <h1>Black & White</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/sharpen.png" />
                                    </div>{' '}
                                    <h1>Sharpen</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/invert.png" />
                                    </div>{' '}
                                    <h1>Invert</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Vintage</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/polaroid.png" />
                                    </div>{' '}
                                    <h1>Polaroid</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/kodachrome.png" />
                                    </div>{' '}
                                    <h1>Kodachrome</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/sharpen.png" />
                                    </div>{' '}
                                    <h1>Sharpen</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/polaroid.png" />
                                    </div>{' '}
                                    <h1>Polaroid</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Vintage</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/black&white.png" />
                                    </div>{' '}
                                    <h1>Black & White</h1>
                                </div>
                            </div>
                        </div>
                    )}

                    {active == 2 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Resize</h1>
                            </div>

                            <div className="photo-edit-modal__filters__2">
                                <div className="photo-edit-modal__filters-left">
                                    <div>
                                        <p>Width</p>
                                        <input
                                            type="number"
                                            placeholder="4532"
                                        />
                                    </div>
                                    <div>
                                        <p>Height</p>
                                        <input
                                            type="number"
                                            placeholder="4532"
                                        />
                                    </div>
                                </div>
                                <div className="photo-edit-modal__filters-right">
                                    <div>
                                        <input type="checkbox" />
                                        <label>Maintain Aspect Ratio</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <label>Use Percentages</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {active == 3 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Crop</h1>
                            </div>

                            <div className="photo-edit-modal__filters__3">
                                <div className="photo-edit-modal__filters-left">
                                    <div>
                                        <p>Width</p>
                                        <input
                                            type="number"
                                            placeholder="4532"
                                        />
                                    </div>
                                    <div>
                                        <p>Height</p>
                                        <input
                                            type="number"
                                            placeholder="4532"
                                        />
                                    </div>
                                </div>
                                <div className="photo-edit-modal__filters-right">
                                    <div className="ratio-inputs">
                                        <input type="checkbox" />
                                        <label>Keep Ratio</label>
                                    </div>
                                    <div className="ratio-options">
                                        <div className="ratio-item">
                                            <div
                                                className="ratio-box"
                                                style={{ height: '18px' }}
                                            >
                                                &nbsp;
                                            </div>
                                            <p className="ratio-text">3:2</p>
                                        </div>
                                        <div className="ratio-item">
                                            <div
                                                className="ratio-box"
                                                style={{ height: '16px' }}
                                            >
                                                &nbsp;
                                            </div>
                                            <p className="ratio-text">5:3</p>
                                        </div>
                                        <div className="ratio-item">
                                            <div
                                                className="ratio-box"
                                                style={{ height: '20px' }}
                                            >
                                                &nbsp;
                                            </div>
                                            <p className="ratio-text">4:3</p>
                                        </div>
                                        <div className="ratio-item">
                                            <div
                                                className="ratio-box"
                                                style={{ height: '20px' }}
                                            >
                                                &nbsp;
                                            </div>
                                            <p className="ratio-text">5:4</p>
                                        </div>
                                        <div className="ratio-item">
                                            <div
                                                className="ratio-box"
                                                style={{ height: '18px' }}
                                            >
                                                &nbsp;
                                            </div>
                                            <p className="ratio-text">6:4</p>
                                        </div>
                                        <div className="ratio-item">
                                            <div
                                                className="ratio-box"
                                                style={{ height: '24px' }}
                                            >
                                                &nbsp;
                                            </div>
                                            <p className="ratio-text">7:5</p>
                                        </div>
                                        <div className="ratio-item">
                                            <div
                                                className="ratio-box"
                                                style={{ height: '20px' }}
                                            >
                                                &nbsp;
                                            </div>
                                            <p className="ratio-text">10:8</p>
                                        </div>
                                        <div className="ratio-item">
                                            <div
                                                className="ratio-box"
                                                style={{ height: '14px' }}
                                            >
                                                &nbsp;
                                            </div>
                                            <p className="ratio-text">16:9</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {active == 4 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Transform</h1>
                            </div>

                            <div className="photo-edit-modal__filters__4">
                                <div className="photo-edit-modal__filters-left">
                                    <p className="background-text">
                                        {' '}
                                        <FontAwesomeIcon
                                            className="social__icons px-1"
                                            icon={faRotateForward}
                                        />
                                    </p>
                                    <p className="background-text">
                                        {' '}
                                        <FontAwesomeIcon
                                            className="social__icons px-1"
                                            icon={faRotateBackward}
                                        />
                                    </p>
                                </div>
                                <div className="photo-edit-modal__filters-right">
                                    <p className="background-text">
                                        {' '}
                                        <FontAwesomeIcon
                                            className="social__icons px-1"
                                            icon={faRotateForward}
                                        />
                                    </p>
                                    <p className="background-text">
                                        {' '}
                                        <FontAwesomeIcon
                                            className="social__icons px-1"
                                            icon={faRotateForward}
                                        />
                                    </p>

                                    <input type="range" />
                                </div>
                            </div>
                        </div>
                    )}
                    {active == 5 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Draw</h1>
                            </div>

                            <div className="photo-edit-modal__filters__5">
                                <div className="photo-edit-modal__filters-left">
                                    <div className="brush-colors">
                                        <div
                                            className="black"
                                            style={{ background: '#000000' }}
                                        ></div>
                                        <div
                                            className="white"
                                            style={{ background: '#FFFFFF' }}
                                        ></div>
                                        <div
                                            className="red"
                                            style={{ background: '#F22613' }}
                                        ></div>
                                        <div
                                            className="orange"
                                            style={{ background: '#F9690E' }}
                                        ></div>
                                        <div
                                            className="white"
                                            style={{ background: '#FDE3A7' }}
                                        ></div>
                                        <div
                                            className="green"
                                            style={{ background: '#049372' }}
                                        ></div>
                                        <div
                                            className="blue"
                                            style={{ background: '#1E8BC3' }}
                                        ></div>
                                        <div
                                            className="pink"
                                            style={{ background: '#8E44AD' }}
                                        ></div>
                                    </div>
                                    <p>Brush Color</p>
                                </div>

                                <div className="photo-edit-modal__filters-middle text-center">
                                    <div className="flex justify-center">
                                        {' '}
                                        <img src="/draw.png" />
                                    </div>
                                    <p>Brush Type</p>
                                </div>

                                <div className="photo-edit-modal__filters-right">
                                    <div className="brush-sizes">
                                        <div
                                            className="xtrasmall"
                                            style={{
                                                height: '5px',
                                                width: '5px',
                                            }}
                                        ></div>

                                        <div
                                            className="small"
                                            style={{
                                                height: '10px',
                                                width: '10px',
                                            }}
                                        ></div>
                                        <div
                                            className="medium"
                                            style={{
                                                height: '15px',
                                                width: '15px',
                                            }}
                                        ></div>
                                        <div
                                            className="large"
                                            style={{
                                                height: '20px',
                                                width: '20px',
                                            }}
                                        ></div>
                                        <div
                                            className="xtralarge"
                                            style={{
                                                height: '25px',
                                                width: '25px',
                                            }}
                                        ></div>
                                    </div>
                                    <p>Brush Type </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {active == 6 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Text</h1>
                            </div>

                            <div className="photo-edit-modal__filters__6">
                                <div className="photo-edit-modal__filters-left">
                                    <div className="brush-colors">
                                        <div
                                            className="black"
                                            style={{ background: '#000000' }}
                                        ></div>
                                        <div
                                            className="white"
                                            style={{ background: '#FFFFFF' }}
                                        ></div>
                                        <div
                                            className="red"
                                            style={{ background: '#F22613' }}
                                        ></div>
                                        <div
                                            className="orange"
                                            style={{ background: '#F9690E' }}
                                        ></div>
                                        <div
                                            className="white"
                                            style={{ background: '#FDE3A7' }}
                                        ></div>
                                        <div
                                            className="green"
                                            style={{ background: '#049372' }}
                                        ></div>
                                        <div
                                            className="blue"
                                            style={{ background: '#1E8BC3' }}
                                        ></div>
                                        <div
                                            className="pink"
                                            style={{ background: '#8E44AD' }}
                                        ></div>
                                    </div>
                                    <p>Color Picker</p>
                                </div>

                                <div className="photo-edit-modal__filters-middle text-center">
                                    <div className="flex justify-center">
                                        {' '}
                                        <img src="/text1.png" />
                                    </div>
                                    <p>Add Text</p>
                                </div>

                                <div className="photo-edit-modal__filters-right">
                                    <div className="font-styles">
                                        <div
                                            className="font-style-heading flex gap-x-5"
                                            onClick={() =>
                                                setShowFontMenu(!showFontMenu)
                                            }
                                        >
                                            <p>{font}</p>
                                            <FontAwesomeIcon
                                                classname="social__icons__1 pr-5"
                                                icon={faCaretDown}
                                            />
                                        </div>
                                        {showFontMenu && (
                                            <div className="font-menu">
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
                                                            icon={
                                                                faMagnifyingGlass
                                                            }
                                                        />
                                                    </button>
                                                </form>
                                                <p
                                                    style={{
                                                        fontFamily:
                                                            'Times New Roman',
                                                    }}
                                                    onClick={() => {
                                                        setFont(
                                                            'Times New Roman'
                                                        );
                                                        setShowFontMenu(false);
                                                    }}
                                                >
                                                    Times New Roman
                                                </p>
                                                <p
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                    }}
                                                    onClick={() => {
                                                        setFont('Poppins');
                                                        setShowFontMenu(false);
                                                    }}
                                                >
                                                    Poppins
                                                </p>
                                                <p
                                                    style={{
                                                        fontFamily: 'Podkova',
                                                    }}
                                                    onClick={() => {
                                                        setFont('Podkova');
                                                        setShowFontMenu(false);
                                                    }}
                                                >
                                                    Podkova
                                                </p>
                                                <p
                                                    style={{
                                                        fontFamily: 'Notable',
                                                    }}
                                                    onClick={() => {
                                                        setFont('Notable');
                                                        setShowFontMenu(false);
                                                    }}
                                                >
                                                    Notable
                                                </p>
                                                <p
                                                    style={{
                                                        fontFamily: 'Sarabun',
                                                    }}
                                                    onClick={() => {
                                                        setFont('Sarabun');
                                                        setShowFontMenu(false);
                                                    }}
                                                >
                                                    Sarabun
                                                </p>
                                                <p
                                                    style={{
                                                        fontFamily: 'Wire one',
                                                    }}
                                                    onClick={() => {
                                                        setFont('Wire One');
                                                        setShowFontMenu(false);
                                                    }}
                                                >
                                                    Wire One
                                                </p>
                                                <p
                                                    style={{
                                                        fontFamily: 'Zona Pro',
                                                    }}
                                                    onClick={() => {
                                                        setFont('Zona Pro');
                                                        setShowFontMenu(false);
                                                    }}
                                                >
                                                    Zona Pro
                                                </p>
                                                <p
                                                    style={{
                                                        fontFamily: 'Share',
                                                    }}
                                                    onClick={() => {
                                                        setFont('Share');
                                                        setShowFontMenu(false);
                                                    }}
                                                >
                                                    Share
                                                </p>
                                                <p
                                                    style={{
                                                        fontFamily: 'Miama',
                                                    }}
                                                    onClick={() => {
                                                        setFont('Miama');
                                                        setShowFontMenu(false);
                                                    }}
                                                >
                                                    Miama
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <p className="subheading">Font </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {active == 7 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Shapes</h1>
                            </div>

                            <div className="photo-edit-modal__filters__7">
                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/circle.png" />
                                    </div>
                                    <h1>Circle</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/rectangle.png" />
                                    </div>{' '}
                                    <h1>Rectangle</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/triangle.png" />
                                    </div>{' '}
                                    <h1>Triangle</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/oval.png" />
                                    </div>{' '}
                                    <h1>Ellipse</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/arrow.png" />
                                    </div>{' '}
                                    <h1>Arrow №1</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/arrow2.png" />
                                    </div>{' '}
                                    <h1>Arrow №2</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/arrow3.png" />
                                    </div>{' '}
                                    <h1>Arrow №3</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/circle.png" />
                                    </div>{' '}
                                    <h1>Circle</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/rectangle.png" />
                                    </div>{' '}
                                    <h1>Rectangle</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/oval.png" />
                                    </div>{' '}
                                    <h1>Ellipse</h1>
                                </div>
                            </div>
                        </div>
                    )}

                    {active == 8 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Stickers</h1>
                            </div>

                            <div className="photo-edit-modal__filters__8">
                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/emoticons.png" />
                                    </div>
                                    <h1>Emoticons</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/doodles.png" />
                                    </div>{' '}
                                    <h1>Doodles</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/landmarks.png" />
                                    </div>{' '}
                                    <h1>Landmarks</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/star.png" />
                                    </div>{' '}
                                    <h1>Stars</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/clouds.png" />
                                    </div>{' '}
                                    <h1>Clouds</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/cloud.png" />
                                    </div>{' '}
                                    <h1>Bubble</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/transportation.png" />
                                    </div>{' '}
                                    <h1>Transportation</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/emoticons.png" />
                                    </div>{' '}
                                    <h1>Emoticons</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/star.png" />
                                    </div>{' '}
                                    <h1>Stars</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/clouds.png" />
                                    </div>{' '}
                                    <h1>Clouds</h1>
                                </div>
                            </div>
                        </div>
                    )}
                    {active == 9 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Frame</h1>
                            </div>

                            <div className="photo-edit-modal__filters__9">
                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>
                                    <h1>Basic</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Pine</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Oak</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Rainbow</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Grunge №1</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Grunge №2</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Ebony</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Oak</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Pine</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Basic</h1>
                                </div>

                                <div className="photo-edit-modal__filters-item">
                                    <div className="photo-edit-modal__filters-image">
                                        <img src="/vintage.png" />
                                    </div>{' '}
                                    <h1>Rainbow</h1>
                                </div>
                            </div>
                        </div>
                    )}

                    {active == 10 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Corners</h1>
                            </div>

                            <div className="photo-edit-modal__filters__10">
                                <div className="photo-edit-modal__filters-body">
                                    <p>Radius</p>
                                    <input type="range" />
                                    <p>30</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {active == 11 && (
                        <div>
                            <div className="photo-edit-modal__heading">
                                <h1>Background</h1>
                            </div>

                            <div className="photo-edit-modal__filters__11">
                                <div className="photo-edit-modal__filters-body">
                                    <div className="brush-colors">
                                        <div
                                            className="black"
                                            style={{ background: '#000000' }}
                                        ></div>
                                        <div
                                            className="white"
                                            style={{ background: '#FFFFFF' }}
                                        ></div>
                                        <div
                                            className="red"
                                            style={{ background: '#F22613' }}
                                        ></div>
                                        <div
                                            className="orange"
                                            style={{ background: '#F9690E' }}
                                        ></div>
                                        <div
                                            className="white"
                                            style={{ background: '#FDE3A7' }}
                                        ></div>
                                        <div
                                            className="green"
                                            style={{ background: '#049372' }}
                                        ></div>
                                        <div
                                            className="blue"
                                            style={{ background: '#1E8BC3' }}
                                        ></div>
                                        <div
                                            className="pink"
                                            style={{ background: '#8E44AD' }}
                                        ></div>
                                    </div>
                                    <p className="pt-2 text-sm">
                                        Color Background
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="photo-edit-modal__subheading relative">
                        <img src="/Photo.png" width="400" />
                        <div className="absolute top-2">
                            <FontAwesomeIcon
                                classname="social__icons pr-2"
                                icon={faClockRotateLeft}
                            />
                        </div>

                        <div className="absolute top-16">
                            <FontAwesomeIcon
                                classname="social__icons pr-2"
                                icon={faCopy}
                            />
                        </div>
                    </div>

                    <div className="photo-edit-modal__zoom flex gap-x-5">
                        <p>Zoom</p>
                        <input type="range" className="w-1/2" />
                        <p>15%</p>
                    </div>

                    <div className="photo-edit-modal__actions">
                        <div className="tertiary__button-outer">
                            {active == 0 ? (
                                <button
                                    className="tertiary__button"
                                    onClick={handleClose}
                                >
                                    CANCEL
                                </button>
                            ) : (
                                <button
                                    className="tertiary__button"
                                    onClick={e => {
                                        e.preventDefault();
                                        setActive(0);
                                    }}
                                >
                                    GO BACK
                                </button>
                            )}
                        </div>

                        <button
                            className="primary__button"
                            onClick={handleClose}
                        >
                            SAVE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
