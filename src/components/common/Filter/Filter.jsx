import './Filter.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faPlus,
    faTimes,
    faSliders,
    faStar,
    faRotateForward,
} from '@fortawesome/free-solid-svg-icons';
export default function Filter({ open }) {
    const oninput = e => {
        var value =
            ((e.target.value - e.target.min) / (e.target.max - e.target.min)) *
            100;
        e.target.style.background =
            'linear-gradient(to right, #cf46f1 0%, #cf46f1 ' +
            value +
            '%, #fff ' +
            value +
            '%, white 100%)';
    };
    const handleClose = () => {
        open(false);
    };

    return (
        <div className="mobile__filter__navigation-menu">
            <div className="mobile__navigation-overlay">
                <div className="mobile__navigation-overlay-content">
                    <div className="mobile__navigation-header-mobile flex justify-between">
                        <div className="mobile__navigation-header-left flex">
                            <img src="logoX.png" width="50" />
                            <div className="mobile__navigation-header-left__text">
                                Templates <span>X</span>
                            </div>
                        </div>
                        <div className="mobile__navigation-header-right">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="close-icon"
                                onClick={handleClose}
                            />
                        </div>
                    </div>

                    <div className="mobile__navigation-header-close flex justify-end">
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="close-icon"
                            onClick={handleClose}
                        />
                    </div>
                    <form>
                        <div className="filter__form-types">
                            <p className="my-2">Choose Type</p>

                            <div className="filter__form-type">
                                <input type="checkbox" className="" />
                                <label className="">Blog</label>
                            </div>
                            <div className="filter__form-type">
                                <input type="checkbox" className="" />
                                <label className="">Online Store </label>
                            </div>
                            <div className="filter__form-type">
                                <input type="checkbox" className="" />
                                <label className="">Portfolio</label>
                            </div>
                            <div className="filter__form-type">
                                <input type="checkbox" className="" />
                                <label className="">Memberships</label>
                            </div>
                            <div className="filter__form-type">
                                <input type="checkbox" className="" />
                                <label className="">Launch Page</label>
                            </div>
                        </div>

                        <div class="filter__form-slide">
                            <p className="text-left">Choose Price:</p>
                            <div className="text-left w-2/3">
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    className="myinput w-full"
                                    onInput={oninput}
                                />
                                <div className="flex justify-between text-xs">
                                    <p>$0</p>
                                    <p>$500</p>
                                </div>
                            </div>
                        </div>

                        <div className="filter__form-topics">
                            <p className="my-2">Choose Topic:</p>

                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Popular Designs</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">All Templates </label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Art & Design</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Photography</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Health & Beauty</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Personal & CV</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Fashion</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">
                                    Professional Services
                                </label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Local Business</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Community</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Food</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Entertainment</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Travel</label>
                            </div>
                            <div className="filter__form-topic">
                                <input type="checkbox" className="" />
                                <label className="">Restaurents</label>
                            </div>
                        </div>

                        <div className="filter__form-action flex justify-center my-5">
                            <button
                                className="primary__button"
                                onClick={handleClose}
                            >
                                APPLY FILTERS{' '}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
