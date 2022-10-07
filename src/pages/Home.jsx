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
import CompanyGroupConfigModal from '../Modals/CompanyGroupConfig';
import InviteUserModal from '../Modals/InviteUser';
import PaymentSuccessModal from '../Modals/PaymentSuccess';
import PaymentFailedModal from '../Modals/PaymentFailed';
import AddStorageModal from '../Modals/AddStorage';
import EditStorageModal from '../Modals/EditStorage';
import ChooseStorageModal from '../Modals/ChooseStorage';

export default function HomeScreen() {
  const home = useRef();
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (open) {
      home.current.style.maxHeight = '100vh';
      home.current.style.overflow = 'hidden';
    } else {
      home.current.style.overflow = 'unset';
      home.current.style.overflowX = 'hidden';
    }
  }, [open]);
  // const cookieModal = useRef();
  // useEffect(() => {
  //   cookieModal.display.style = 'block';
  // }, []);
  return (
    <>
      {/* <CookieModal open={setOpen} /> */}

      {/* <CookieConfigModal open={setOpen} /> */}
      {/* <DisableAdBlockModal open={setOpen} /> */}
      {/* <CompanyGroupConfigModal open={setOpen} /> */}
      {/* <InviteUserModal open={setOpen} /> */}
      {/* <PaymentSuccessModal open={setOpen} /> */}
      {/* <PaymentFailedModal open={setOpen} /> */}
      {/* <AddStorageModal open={setOpen} /> */}
      {/* <EditStorageModal open={setOpen} /> */}
      <ChooseStorageModal open={setOpen} />

      <div className="home__screen" ref={home}>
        <Header />
        <HomeBanner />
        <div className="home__screen-categories">
          <Card />
          <Card />
          <Card />
        </div>
        <TemplateCatalog />
        <Description />
        <Features />
        <Platforms />
        <Pricing />
        <FAQ />
        <Footer />
        <div className="circle__home-1"></div>
        <div className="circle__home-2"></div>
      </div>
    </>
  );
}