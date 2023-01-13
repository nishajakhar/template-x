import '../styles/Modals/Code.scss';
import '../styles/modalShared.scss';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencil,
    faCopy,
    faPaste,
} from '@fortawesome/free-solid-svg-icons';

export default function CodeModal(props) {
    const [edit, setEdit] = useState(false);
    const [code, setCode] = useState(
        `<!DOCTYPE html>
     <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>HTML 5 Boilerplate</title>
            <link rel="stylesheet" href="style.css">
        </head>
     <body>
        <script src="index.js"></script>
    </body>
     </html>
     <!DOCTYPE html>
     <html lang="en">
     <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>HTML 5 Boilerplate</title>
        <link rel="stylesheet" href="style.css">
     </head>
     <body>
        <script src="index.js"></script>
     </body>
     </html>
        <link rel="stylesheet" href="style.css">
     </head>    
        <body>
            <script src="index.js"></script>
        </body>
     </html>`
    );
    const modal = useRef(0);
    const modalContent = useRef(0);

    const handleClose = async e => {
        e.preventDefault();
        modalContent.current.classList.remove('modal-open');
        modalContent.current.classList.add('modal-close');
        await new Promise(r => setTimeout(r, 300));
        modal.current.style.display = 'none';
        props.open(0);
    };
    return (
        <div className="code-modal modal" ref={modal}>
            <div className="modal-container">
                <div className="modal-content modal-open" ref={modalContent}>
                    <button
                        class="code-content-close close"
                        onClick={handleClose}
                    >
                        &times;
                    </button>

                    <div className="code-modal__buttons">
                        <button className="" onClick={() => setEdit(!edit)}>
                            <FontAwesomeIcon
                                className="social__icons pr-2"
                                icon={faPencil}
                            />
                            Edit Code
                        </button>
                        <button className="" onClick={handleClose}>
                            <FontAwesomeIcon
                                className="social__icons  pr-2"
                                icon={faPaste}
                            />
                            Paste html
                        </button>
                        <button className="" onClick={handleClose}>
                            <FontAwesomeIcon
                                className="social__icons  pr-2"
                                icon={faCopy}
                            />
                            Copy html
                        </button>
                    </div>
                    <div className="code-modal__body flex">
                        <div className="pr-2">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                            <p>7</p>
                            <p>9</p>
                            <p>10</p>
                            <p>11</p>
                            <p>12</p>
                            <p>13</p>
                            <p>14</p>
                            <p>15</p>
                            <p>16</p>
                        </div>
                        <textarea
                            rows="15"
                            className={
                                edit
                                    ? 'bg-white text-black w-full'
                                    : 'bg-transparent w-full'
                            }
                            value={code}
                        />
                    </div>

                    <div className="code-modal__actions">
                        <button
                            className="primary__button"
                            onClick={handleClose}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
