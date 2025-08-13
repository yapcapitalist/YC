import React from 'react'
import WebHero from './WebinarHero.jsx'
import WebinarFor from './WebinarFor.jsx';
import Curriculum from './WebCurriculum.jsx';
// import StartCreatorCareer from '../ReadytoStart.jsx';
import StickyHeader from '../Head.jsx';
import Footer from '../Footer.jsx';
import FAQSection from '../Faq.jsx';
import YCForm from './WebinarForm.jsx';


const Webinar = () => {
    return (
        <div>
            <StickyHeader />
            <WebHero />
            <Curriculum/>
            <YCForm/>
            <WebinarFor/>
            {/* <StartCreatorCareer/> */}
            <FAQSection/>
            <Footer/>
        </div>
    )
}

export default Webinar