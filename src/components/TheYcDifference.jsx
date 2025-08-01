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
            Build your digital footprint while you're learning.
Work on your own content, communication, and business strategy — not just theory. By the end of the cohort, you’ll have a real online presence, refined communication skills, and a monetizable personal brand.

            </p>
          </div>
          
          {/* Hands-On Training - card with text first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <p className=" mb-3 size-diff !text-[#ffff00] !font-extrabold">Hands-On Execution</p>
            <p className="mb-4 price-light">
            Create 100+ videos, emails, and scripts — with expert feedback.
            From voice drills to camera presence, cold emails to content hooks — every skill is built through projects, tasks, and weekly assignments. No fluff. Just execution.
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
            <p className=" mb-3 size-diff !text-[#ffff00] !font-extrabold">Learn From Live Channels</p>
            <p className="price-light">
            Work alongside our team managing channels with millions of views.
Get behind-the-scenes access to how high-performing content is planned, shot, edited, and scaled — and apply those systems to your own page.

            </p>
          </div>
          
          {/* Business accurate - card with text first */}
          <div className="custom-border rounded-xl p-5 flex flex-col h-80">
            <p className="mb-3 size-diff !text-[#ffff00] !font-extrabold">Business by Builders</p>
            <p className="mb-4 price-light">
            Learn business from real founders — not theorists.
Understand client acquisition, offer positioning, and how to close deals. Execute projects like a real business owner, not a passive learner.

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
            <p className="!text-[#ffff00] size-diff !font-extrabold mb-3">The Mindset That Pays</p>
            <p className="price-light text-gray-300 text-sm leading-relaxed mb-4">
            Confidence, clarity, and composure — practiced, not preached.
            From rejection training to cold pitching, from high-stakes speaking to personal branding — every week you’ll sharpen a mindset that commands respect and earns revenue.
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