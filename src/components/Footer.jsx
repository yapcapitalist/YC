import React from 'react';
import yclogo from '../assets/YAAP_CAPITAL.svg'

const Footer = () => {
  return (
    <footer className="text-white px-6 md:px-12 pb-8">
      <div className="relative text-center z-8">
          <h2 className="pb-12">
            Contact Us
          </h2>
      </div>
        
      {/* Main Grid */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 pb-12 sm:pb-50 z-0">
        {/* Left Contact Info */}
        <div className="space-y-4 flex sm:block items-center flex-col sm:flex-row  z-2">
          <div className="relative w-11 rounded">
            <img src={yclogo} alt="" />
          </div>
          <p className="">info@yapcapitalist.com</p>
          <p className="">+91 99520 34731</p>
        </div>

        {/* Center Title */}

        {/* Right Policy Buttons */}
        <div className="flex flex-row sm:flex-col flex-wrap justify-center gap-2 sm:gap-0 items-end space-y-3 w-full md:w-auto">
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
        </div>
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
