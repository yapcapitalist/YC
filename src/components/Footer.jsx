import React from 'react';
import yclogo from '../assets/YAAP_CAPITAL.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white px-6 md:px-12 pb-8">


      {/* Main Grid */}
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 pb-12 sm:pb-50 z-0 overflow-hidden">
        {/* Left Contact Info */}
        <div className="space-y-4 flex  items-center flex-col justify-center items-center sm:items-center  z-2">
          <div className="relative w-28 rounded">
            <img src={yclogo} alt="" />
          </div>
          {/* <div className="relative text-center z-8"> */}
          <h2 className="pb-0 m-0">
            Contact Us
          </h2>
          {/* </div> */}
          <a href="mailto:info@yapcapitalist.com" className="!text-[18px] mb-2">info@yapcapitalist.com</a>
          <a
            href="https://www.instagram.com/yapcapitalist/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fefe00] !mb-2 hover:underline font-medium !text-[18px]"
          >
            @yapcapitalist
          </a>
          <a
            href="https://www.instagram.com/gurmeet__oberoi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fefe00] !mb-2 hover:underline font-medium !text-[18px]"
          >
            @gurmeet__oberoi
          </a>
          <Link to="/termsandconditions">
            <p className=''>Terms And Conditions</p>
          </Link>

          <Link to="/privacy">
            <p className=''>Privacy Policy</p>
          </Link>

          <Link to="/contact">
            <p className=''>Contact Us</p>
          </Link>

          <Link to="/refudandcancelation">
            <p className=''>Refund and Cancelation</p>
          </Link>
        </div>

        {/* Center Title */}

        {/* Right Policy Buttons */}
        {/* <div className="flex flex-row sm:flex-col flex-wrap justify-center gap-2 sm:gap-0 items-end space-y-3 w-full md:w-auto">
          {[
            { label: 'PRIVACY POLICY', href: '#' },
            { label: 'REFUND POLICY', href: '#' },
            { label: 'TERMS AND CONDITIONS', href: '#' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-center text-sm font-bold uppercase border-2 rounded-md py-2 px-4 min-w-[124px] sm:min-w-[240px]"
              style={{
                color: '#ffff00',
                borderColor: '#ffff00',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffff00';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffff00';
              }}
            >
              {item.label}
            </a>
          ))}
        </div> */}
      </div>

      {/* Divider */}
      {/* <div className="w-full h-px bg-gray-800 my-8" /> */}

      {/* Copyright */}
      <span className="flex justify-center align-center w-full text-center text-gray-500">
        © COPYRIGHT 2025 Gogrowth Labs PVT LTD.
      </span>
    </footer>
  );
};

export default Footer;
