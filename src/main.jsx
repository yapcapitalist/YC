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
// import SocialLinks from './components/Social.jsx';

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
              <Extraordinary />
              <FormatStructure />
              <WalkWith />
              <YCForm />
              <YCDifference />
              <ProgramDetails />
              <TheManBehindYc />
              {/* <SocialLinks/> */}
              <FAQSection />
              <YCContactFooter />
            </>
          }
        />

        {/* Application Page */}
        <Route path="/apply" element={<Apply />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path='/termsandconditions' element={<TermsandCondition/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
