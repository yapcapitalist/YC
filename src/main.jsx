import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Hero from './components/Hero.jsx';
import WhyYc from './components/WhyYc.jsx';
import WhoThisIsFor from './components/WhoThisIsFor.jsx';
import TheManBehindYc from './components/TheManBehindYc.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import WalkWith from './components/WalkWith.jsx';
import ProgramDetails from './components/Program-Details.jsx';
import FormatStructure from './components/Format.jsx';
import StickyHeader from './components/Head.jsx';
import WhatIsYc from './components/WhatIsYc.jsx';
import FAQSection from './components/Faq.jsx';
import YCContactFooter from './components/Footer.jsx';
import Curriculum from './components/Curriculumn.jsx';
import Extraordinary from './components/Extraordinary.jsx';
import YCDifference from './components/TheYcDifference.jsx';
import YCForm from './components/YcForm.jsx';
import Apply from './components/Apply.jsx'; // <== New application page
import ApplicationForm from './components/Question.jsx';
import TermsandCondition from './components/TermsandCondition.jsx';
import SocialLinks from './components/Social.jsx';
import BonusTracks from './components/BonusTracks.jsx';
import Webinar from './components/Webinar/Webinar.jsx';
import Widget from './components/Widget.jsx';
import AiProofHero from './components/FutureProof.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import ContactUs from './components/ContactUs.jsx'
import RefundCancelation from './components/Refund-Cancelation.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <StickyHeader />
              <Hero />
              <WhatIsYc />
              <WhyYc />
              <WhoThisIsFor />
              <WhyChooseUs />
              <Curriculum />
              <BonusTracks />
              <Extraordinary />
              <FormatStructure />
              <WalkWith />
              <YCForm />
              <YCDifference />
              <ProgramDetails />
              <TheManBehindYc />
              <SocialLinks />
              <AiProofHero />
              <FAQSection />
              <YCContactFooter />
              <Widget apiUrl="https://chatbot-box-production.up.railway.app/chat" />
            </>
          }
        />

        {/* Application Page */}
        <Route path="/apply" element={
          <>
            <Widget apiUrl="https://chatbot-box-production.up.railway.app/chat" />
            <Apply />
          </>} />
        <Route path="/application-form" element={
          <>
            <Widget apiUrl="https://chatbot-box-production.up.railway.app/chat" />
            <ApplicationForm />
          </>
        } />
        <Route path='/termsandconditions' element={
          <>
            <Widget apiUrl="https://chatbot-box-production.up.railway.app/chat" />
            <TermsandCondition />
          </>
        } />
        <Route path='/webinar' element={
          <>
            <Widget apiUrl="https://chatbot-box-production.up.railway.app/chat" />
            <Webinar />
          </>
        } />

        <Route path='/privacy' element={
          <>
            <Widget apiUrl="https://chatbot-box-production.up.railway.app/chat" />
            <PrivacyPolicy />
          </>
        } />

        <Route path='/contact' element={
          <>
            <Widget apiUrl="https://chatbot-box-production.up.railway.app/chat" />
            <ContactUs />
          </>
        } />

        <Route path='/refund' element={
          <>
            <Widget apiUrl="https://chatbot-box-production.up.railway.app/chat" />
            <RefundCancelation />
          </>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
