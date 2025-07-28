import React from 'react';
import yclogo from '../assets/YAAP_CAPITAL.svg'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 pb-8">
      <div className="text-center">
          <h2 className="pb-12">
            Contact Us
          </h2>
        </div>
        
      {/* Main Grid */}
      <div className="max-w-6xl mx-auto flex justify-between items-start gap-6 pb-50">
        {/* Left Contact Info */}
        <div className="space-y-4">
          <div className="relative w-11 rounded z-2">
            <img src={yclogo} alt="" />
          </div>
          <p className="">info@yapcapitalist.com</p>
          <p className="">+91 99520 34731</p>
        </div>

        {/* Center Title */}

        {/* Right Policy Buttons */}
        <div className="flex flex-col items-end space-y-3 w-full md:w-auto">
          {[
            { label: 'PRIVACY POLICY', href: '#' },
            { label: 'REFUND POLICY', href: '#' },
            { label: 'TERMS AND CONDITIONS', href: '#' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-center text-sm font-bold uppercase border-2 rounded-md py-2 px-4 min-w-[240px]"
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
