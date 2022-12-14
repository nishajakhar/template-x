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
    const [code, setCode] = useState(`  1
    <!DOCTYPE html>
    2
    <html lang="en">
    3
    <head>
    4
    <meta charset="UTF-8">
    5
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    6
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    7
    <title>HTML 5 Boilerplate</title>
    8
    <link rel="stylesheet" href="style.css">
    9
    </head>
    10
    <body>
    11
    <script src="index.js"></script>
    12
    </body>
    13
    </html>
    14
    <!DOCTYPE html>
    15
    <html lang="en">
    16
    <head>
    17
    <meta charset="UTF-8">
    18
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    19
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    20
    <title>HTML 5 Boilerplate</title>
    21
    <link rel="stylesheet" href="style.css">
    22
    </head>
    23
    <body>
    24
    <script src="index.js"></script>
    25
    </body>
    26
    </html>
    27
    <link rel="stylesheet" href="style.css">
    28
    </head>
    29
    <body>
    30
    <script src="index.js"></script>
    31
    </body>
    32
    </html>`);
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
                        <button
                            className="primary__button"
                            onClick={handleClose}
                        >
                            <FontAwesomeIcon
                                className="social__icons"
                                icon={faPencil}
                            />
                            Edit Code
                        </button>
                        <button
                            className="primary__button"
                            onClick={handleClose}
                        >
                            <FontAwesomeIcon
                                className="social__icons"
                                icon={faPaste}
                            />
                            Paste html
                        </button>
                        <button
                            className="primary__button"
                            onClick={handleClose}
                        >
                            <FontAwesomeIcon
                                className="social__icons"
                                icon={faCopy}
                            />
                            Copy html
                        </button>
                    </div>
                    <div className="code-modal__body">
                        <textarea
                            rows="15"
                            className="w-full bg-gray-500"
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
