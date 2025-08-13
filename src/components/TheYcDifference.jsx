import React from 'react';
import dot from "../assets/Dot Background.svg";
import realresult from "../assets/realresult.png"
import lines from "../assets/lines.svg"

export default function YCDifference() {
  return (
    <div className="relative min-h-screen bg-black pb-12 sm:pb-[158px] px-6 sm:px-4 max-w-[1600px] mx-auto overflow-hidden">

      <div className="absolute top-0 right-[0px] !z-1">
        <img src={lines} alt="" width="" height="" />
      </div>

      <div className="relative z-10">
        {/* Title */}
        <h2 className="mb-12 text-center">
          The YC Difference
        </h2>

        {/* Grid Layout - 3 columns with equal height cards */}
        <div className="grid  grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Real Results - card with image first */}
          <div className="border border-gray-600 bg-transparent backdrop-blur-md rounded-xl p-5 flex flex-col h-60 sm:h-74">
            {/* <div className="bg-gray-800 rounded-lg mb-4 flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">
                <img src={realresult} alt="" />
              </div>
            </div> */}
            <p className="mb-3 sizediff !text-[#ffff00] !font-extrabold">Real Results</p>
            <p className="price-light">
              You’ll improve how you speak, write, and communicate in real situations — not just in theory. By the end of the cohort, you’ll notice the difference every time you talk, pitch, explain, or present.
            </p>
          </div>

          {/* Hands-On Training - card with text first */}
          <div className="border border-gray-600 bg-transparent backdrop-blur-md rounded-xl p-5 flex flex-col h-60 sm:h-74">
            <p className=" mb-3 size-diff !text-[#ffff00] !font-extrabold">Hands-On Communication Training</p>
            <p className="mb-4 price-light">
              Each week, you’ll complete practical tasks — voice drills, camera work, negotiation roleplays, and live feedback. Over 100 reps across formats, designed to build skill through action.
            </p>
            {/* <div className="bg-gray-800 rounded-lg flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div> */}
          </div>

          {/* Work With Real Channels - card with image first */}
          <div className="border border-gray-600 bg-transparent backdrop-blur-md rounded-xl p-5 flex flex-col h-60 sm:h-74">
            {/* <div className="bg-gray-800 rounded-lg mb-4 flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div> */}
            <p className=" mb-3 size-diff !text-[#ffff00] !font-extrabold">Learn From Real Leaders</p>
            <p className="price-light">
              Throughout the cohort, you’ll learn directly from founders, operators, and communication experts. Guest sessions include top entrepreneurs and business leaders sharing how they use communication every day.

            </p>
          </div>

          {/* Business accurate - card with text first */}
          <div className="border border-gray-600 bg-transparent backdrop-blur-md rounded-xl p-5 flex flex-col h-60 sm:h-74">
            <p className="mb-3 size-diff !text-[#ffff00] !font-extrabold">Built by Practitioners</p>
            <p className="mb-4 price-light">
              The systems taught in YC come from real business experience — not classrooms. You’ll learn what works in sales calls, hiring interviews, team meetings, and public speaking — from people who do it themselves.
            </p>
            {/* <div className="bg-gray-800 rounded-lg flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div> */}
          </div>

          {/* Mindset - card with text first */}
          <div className="border border-gray-600 bg-transparent backdrop-blur-md rounded-xl p-5 flex flex-col h-60 sm:h-74">
            {/* <div className="bg-gray-800 rounded-lg flex-1 flex items-center justify-center">
              <div className="text-gray-500 text-sm">Image Placeholder</div>
            </div> */}
            <p className="!text-[#ffff00] size-diff !font-extrabold mb-3">Confidence Through Practice</p>
            <p className="price-light text-gray-300 text-sm leading-relaxed mb-4">
              You’ll build a more confident and clear version of yourself — not by theory, but through repetition, feedback, and real-world speaking tasks. One step at a time, week by week.
            </p>
          </div>

          {/* Community - card with text first */}
          <div className="border border-gray-600 bg-transparent backdrop-blur-md rounded-xl p-5 flex flex-col h-60 sm:h-74">
            <p className="!text-[#ffff00] size-diff !font-extrabold mb-3">Supportive Peer Group</p>
            <p className="price-light text-gray-300 text-sm leading-relaxed mb-4">
              You’ll be part of a small group of ambitious, sharp people — each improving their communication alongside you. The environment is encouraging, focused, and designed for growth.
            </p>
            {/* <div className="bg-gray-800 rounded-lg flex-1 flex items-center justify-center">
              <div className="price-light text-gray-500 text-sm">Image Placeholder</div>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
}