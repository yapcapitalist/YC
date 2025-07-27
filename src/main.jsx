import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero.jsx'
import WhyYc from './components/WhyYc.jsx'
import WhoThisIsFor from './components/WhoThisIsFor.jsx'
import TheManBehindYc from './components/TheManBehindYc.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Extraordinary from './components/Extraordinary.jsx'
import YCDifference from './components/TheYcDifference.jsx'
import YCForm from './components/YcForm.jsx'
// import Curriculumn from './components/Curriculumn.jsx'
// import YCContactFooter from './components/Footer.jsx'
import WhatIsYC from './components/WhatIsYc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <WhyYc />
    <WhoThisIsFor />
    <WhyChooseUs />
    {/* <Curriculumn /> */}
    {/* <Extraordinary /> */}
    <WhatIsYC />
    <YCForm />
    <YCDifference />
    <TheManBehindYc />
    {/* <YCContactFooter /> */}
  </StrictMode>,
)
