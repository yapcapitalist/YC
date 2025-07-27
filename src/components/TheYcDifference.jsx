import React from 'react';

export default function YCDifference() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-18">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="mb-12 text-center">
          The YC Difference
        </h2>
        
        {/* Grid Layout - 3 columns with equal height cards */}
        <div className="grid grid-cols-3 gap-6">
          {/* Real Results - card with image first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <div className="bg-gray-800 rounded-lg mb-4 flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div>
            <p className="mb-3 !text-[#ffff00] !font-extrabold">Real Results</p>
            <p className="">
              Build Real Channels With Millions Of Followers During The Program.
            </p>
          </div>
          
          {/* Hands-On Training - card with text first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <p className=" mb-3 !text-[#ffff00] !font-extrabold">Hands-On Training</p>
            <p className="mb-4">
              Create 100+ Videos With Expert Guidance.
            </p>
            <div className="bg-gray-800 rounded-lg flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div>
          </div>
          
          {/* Work With Real Channels - card with image first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <div className="bg-gray-800 rounded-lg mb-4 flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div>
            <p className=" mb-3 !text-[#ffff00] !font-extrabold">Work With Real Channels</p>
            <p className="">
              Shadow Our Team Managing Channels With Millions Of Followers.
            </p>
          </div>
          
          {/* Business accurate - card with text first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <p className="mb-3 !text-[#ffff00] !font-extrabold">Business accurate</p>
            <p className="mb-4">
              Learn From Real Founders And Run Business Like Experts.
            </p>
            <div className="bg-gray-800 rounded-lg flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div>
          </div>
          
          {/* Mindset - card with text first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <div className="bg-gray-800 rounded-lg flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div>
            <p className="!text-[#ffff00] !font-extrabold mb-3">Mindset</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Apply Real World Mindset.
            </p>
          </div>
          
          {/* Community - card with text first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <p className="!text-[#ffff00] !font-extrabold mb-3">Community</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Access India's Best Network Of Communicators And Founders.
            </p>
            <div className="bg-gray-800 rounded-lg flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}