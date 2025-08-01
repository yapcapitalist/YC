import React from 'react';
import dot from "../assets/Dot Background.svg";

export default function YCDifference() {
  return (
    <div className="relative min-h-screen bg-black pb-12 sm:pb-[158px] px-6 sm:px-4 max-w-[1600px] mx-auto overflow-hidden">

      <div className="absolute grid-svg !w-2/3 top-0 right-[-300px] !z-0">
                      <img src={dot} alt="" width="" height="" />
      </div>

      <div className="relative z-10">
        {/* Title */}
        <h2 className="mb-12 text-center">
          The YC Difference
        </h2>
        
        {/* Grid Layout - 3 columns with equal height cards */}
        <div className="grid  grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Real Results - card with image first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <div className="bg-gray-800 rounded-lg mb-4 flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div>
            <p className="mb-3 sdiffize- !text-[#ffff00] !font-extrabold">Real Results</p>
            <p className="price-light">
              Build Real Channels With Millions Of Followers During The Program.
            </p>
          </div>
          
          {/* Hands-On Training - card with text first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <p className=" mb-3 size-diff !text-[#ffff00] !font-extrabold">Hands-On Training</p>
            <p className="mb-4 price-light">
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
            <p className=" mb-3 size-diff !text-[#ffff00] !font-extrabold">Work With Real Channels</p>
            <p className="price-light">
              Shadow Our Team Managing Channels With Millions Of Followers.
            </p>
          </div>
          
          {/* Business accurate - card with text first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <p className="mb-3 size-diff !text-[#ffff00] !font-extrabold">Business accurate</p>
            <p className="mb-4 price-light">
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
            <p className="!text-[#ffff00] size-diff !font-extrabold mb-3">Mindset</p>
            <p className="price-light text-gray-300 text-sm leading-relaxed mb-4">
              Apply Real World Mindset.
            </p>
          </div>
          
          {/* Community - card with text first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <p className="!text-[#ffff00] size-diff !font-extrabold mb-3">Community</p>
            <p className="price-lighttext-gray-300 text-sm leading-relaxed mb-4">
              Access India's Best Network Of Communicators And Founders.
            </p>
            <div className="bg-gray-800 rounded-lg flex-1 flex items-center justify-center">
              <div className="price-light text-gray-500 text-sm">Image Placeholder</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}