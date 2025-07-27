import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 pt-16 pb-8">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-6">
        {/* Left Contact Info */}
        <div className="space-y-4">
          <div className="inline-block bg-[#ffff00] text-black font-bold px-2 py-1 text-sm rounded">
            YC
          </div>
          <div className="text-white text-sm">example@gmail.com</div>
          <div className="text-white text-sm">+91 1234567890</div>
        </div>

        {/* Center Title */}
        <div className="text-center">
          <h2 className="text-2xl font-bold" style={{ color: '#ffff00' }}>
            Contact Us
          </h2>
        </div>

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
      <div className="w-full h-px bg-gray-800 my-8" />

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500">
        © COPYRIGHT 2025 Gogrowth Labs PVT LTD.
      </div>
    </footer>
  );
};

export default Footer;
