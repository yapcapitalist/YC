import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero.jsx'
import WhyYc from './components/WhyYc.jsx'
import WhoThisIsFor from './components/WhoThisIsFor.jsx'
import TheManBehindYc from './components/TheManBehindYc.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Extraordinary from './components/Extraordinary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <WhyYc />
    <WhoThisIsFor/>
    <WhyChooseUs />
    <Extraordinary />
    <TheManBehindYc/>
  </StrictMode>,
)
