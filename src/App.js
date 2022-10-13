import './styles/index.scss';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from './services/routes';
import LoginScreen from './pages/Login';
import SignupScreen from './pages/Signup';
import HomeScreen from './pages/Home';
import ForgotPasswordScreen from './pages/ForgotPassword';
import EmailSentScreen from './pages/EmailSent';
import CookieScreen from './pages/Cookie';
import FAQScreen from './pages/FAQ';
import PricingScreen from './pages/Pricing';
import ContactUsScreen from './pages/ContactUs';
import BlogScreen from './pages/Blog';
import APIDocsScreen from './pages/APIDocs';
import PageNotFoundScreen from './pages/PageNotFound';
import ServerErrorScreen from './pages/ServerError';
import ProfileScreen from './pages/Profile';
import TeamAccountScreen from './pages/TeamAccount';
import CompanyGroupsScreen from './pages/CompanyGroups';
import CompanyGroupDetailScreen from './pages/CompanyGroupDetail';
import PaymentPlanScreen from './pages/PaymentPlan';
import PaymentScreen from './pages/Payment';
import StoragesScreen from './pages/Storages';
import StorageDetailScreen from './pages/StorageDetail';
import TemplatesScreen from './pages/Templates';
import EmailsScreen from './pages/Emails';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ApiDocsSection from './pages/ApiDocsSection';

function App() {
  const [login, setLogin] = useState(false);
  console.log('I am login.....', login);
  return (
    <>
      <BrowserRouter>
        <Header login={login} setLogin={setLogin} />

        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginScreen setLogin={setLogin} />} />
          <Route path={ROUTES.SIGNUP} element={<SignupScreen setLogin={setLogin} />} />
          <Route path={ROUTES.HOME} element={<HomeScreen />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordScreen />} />
          <Route path={ROUTES.EMAIL_SENT} element={<EmailSentScreen />} />
          <Route path={ROUTES.COOKIE} element={<CookieScreen />} />
          <Route path={ROUTES.FAQ} element={<FAQScreen />} />
          <Route path={ROUTES.PRICING} element={<PricingScreen />} />
          <Route path={ROUTES.CONTACT_US} element={<ContactUsScreen />} />
          <Route path={ROUTES.BLOG} element={<BlogScreen />} />
          <Route path={ROUTES.SERVER_ERROR} element={<ServerErrorScreen />} />
          <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFoundScreen />} />
          <Route path={ROUTES.API_DOCS} element={<APIDocsScreen />} />
          <Route path={ROUTES.API_DOCS} element={<APIDocsScreen />}>
            <Route path=":sectionSlug" element={<ApiDocsSection />} />
            <Route index element={<ApiDocsSection />} />
          </Route>
          <Route path={ROUTES.PROFILE} element={<ProfileScreen />} />
          <Route path={ROUTES.TEAM_ACCOUNT} element={<TeamAccountScreen />} />
          <Route path={ROUTES.COMPANY_GROUPS} element={<CompanyGroupsScreen />} />
          <Route path={ROUTES.COMPANY_GROUP_DETAIL} element={<CompanyGroupDetailScreen />} />
          <Route path={ROUTES.PAYMENT_PLAN} element={<PaymentPlanScreen />} />
          <Route path={ROUTES.PAYMENT} element={<PaymentScreen />} />
          <Route path={ROUTES.STORAGES} element={<StoragesScreen />} />
          <Route path={ROUTES.STORAGE_DETAIL} element={<StorageDetailScreen />} />
          <Route path={ROUTES.TEMPLATES} element={<TemplatesScreen />} />
          <Route path={ROUTES.EMAILS} element={<EmailsScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
