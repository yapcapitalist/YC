import React from 'react';
import yclogo from '../assets/YAAP_CAPITAL.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-9 text-white px-6 md:px-12 pb-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row-reverse justify-between items-center gap-6">
        <div className='flex flex-row w-auto gap-6'>

          <div className="flex flex-col gap-4">
            <Link to="/termsandconditions"><p>Terms And Conditions</p></Link>
            <Link to="/privacy"><p>Privacy Policy</p></Link>
            <Link to="/resources"><p>Resources</p></Link>

          </div>

          {/* Center Menu */}
          <div className="flex flex-col gap-4">
            <Link to="/contact"><p>Contact Us</p></Link>
            <Link to="/refundandcancelation"><p>Refund and Cancelation</p></Link>
            <Link to="/masterclass"><p>MasterClass</p></Link>

          </div>
        </div>

        {/* Right Logo */}
        <div className="w-28">
          <img src={yclogo} alt="YAAP Capital Logo" />
        </div>
      </div>

      {/* Copyright */}
      <span className="flex justify-center mt-6 pt-6 text-gray-500 w-full text-center">
        © COPYRIGHT 2025 Gogrowth Labs PVT LTD.
      </span>
    </footer>
  );
};

export default Footer;
