import { useEffect, useRef, useState } from 'react';

import '../styles/Home.scss';
import '../styles/shared.scss';
import CookieModal from '../Modals/Cookie';
import Header from '../components/common/Header/Header';
import HomeBanner from '../components/Home/HomeBanner/HomeBanner';
import Card from '../components/Home/Card/Card';
import TemplateCatalog from '../components/Home/TemplateCatalog/TemplateCatalog';
import Description from '../components/Home/Description/Description';
import Features from '../components/Home/Features/Features';
import Platforms from '../components/Home/Platforms/Platforms';
import Pricing from '../components/Home/Pricing/Pricing';
import FAQ from '../components/Home/FAQ/FAQ';
import Footer from '../components/common/Footer/Footer';
import CookieConfigModal from '../Modals/CookieConfig';
import DisableAdBlockModal from '../Modals/DisableAdBlock';
import PaymentFailedModal from '../Modals/PaymentFailed';

export default function HomeScreen() {
    const [open, setOpen] = useState(0);

    const test = useRef();

    return (
        <>
            {/* <div className={open ? '' : 'hidden'}> */}
            {/* <CookieConfigModal open={setOpen} /> */}
            {open == 2 && <CookieModal open={setOpen} className="hidden" />}
            {open == 1 && <DisableAdBlockModal open={setOpen} />}
            {/* <CompanyGroupConfigModal open={setOpen} /> */}
            {/* <InviteUserModal open={setOpen} /> */}
            {/* <PaymentSuccessModal open={setOpen} /> */}
            {open == 3 && <PaymentFailedModal open={setOpen} />}
            {/* <AddStorageModal open={setOpen} /> */}
            {/* <EditStorageModal open={setOpen} /> */}
            {/* <ChooseStorageModal open={setOpen} /> */}
            {/* <SettingsModal open={setOpen} /> */}
            {/* </div> */}
            <div className="test__screen" ref={test}>
                <button
                    onClick={() => setOpen(1)}
                    className="block my-5 p-3 bg-pink-500"
                >
                    Ad Block Modal
                </button>
                <button
                    onClick={() => setOpen(2)}
                    className="block my-5 p-3 bg-pink-500"
                >
                    Cookie Modal
                </button>
                <button
                    onClick={() => setOpen(3)}
                    className="block my-5 p-3 bg-pink-500"
                >
                    Payment Failed Modal
                </button>
            </div>
        </>
    );
}
