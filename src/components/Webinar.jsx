import React from 'react'
import Hero from './Hero.jsx'
import Curriculum from './Curriculumn.jsx';
import StartCreatorCareer from './ReadytoStart.jsx';
import StickyHeader from './Head.jsx';
import Footer from './Footer.jsx';


const Webinar = () => {
    return (
        <div>
            <StickyHeader />
            <Hero />
            <Curriculum />
            <StartCreatorCareer />
            <Footer/>
        </div>
    )
}

export default Webinar