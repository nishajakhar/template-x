import '../styles/Home.scss';
import '../styles/shared.scss';

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

export default function HomeScreen() {
  return (
    <>
      <div className="home__screen">
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
