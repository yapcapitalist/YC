import React from "react";
import middlebrain from '../assets/middle-brain.svg';



const CurriculumSection = () => {
  const items = [
    {
      title: "MONTH 1\nESSENTIALS",
      subtitle: "Mindset and Communication",
      points: [
        "Identity Building: Crafting Who You Are & What You Offer",
        "Breaking Mental Loops: Overthinking, Blank Mind, Self-Doubt",
        "How to Build Confident Presence (Posture, Eye Contact, Dress)",
        "Indian Communication Traps: Humility, Hesitation, and Assertiveness",
        "Accent Drills & Speaking Fluently Without Pretending",
        "Gestures & Body Language That Signal Authority",
      ],
    },
    {
      title: "MONTH 2\nTHE DEVELOPMENT",
      subtitle: "Writing Content",
      points: [
        "Cold Emails & DMs that Get Replies (Framework + Live Examples)",
        "Hooks, Captions, and Content Writing for LinkedIn & Instagram",
        "On-Cam Video Confidence: Psychology, Setup, Delivery",
        "Real Structures: 3 Types (Story, Insight, CTA)",
        "Vlog & Pitch Video Frameworks (Personal Story > Offer)",
        "Speaking Prompts to Practice for High-Stakes Scenarios",
      ],
    },
    {
      title: "MONTH 3\nMASTERY",
      subtitle: "Sales and Business",
      points: [
        "How to Start a Freelance/Service Business from Zero",
        "Lead Gen Systems: Cold Outreach, Referrals, Content Funnels",
        "Negotiation Tactics + Handling Objection",
        "Positioning to Raise Prices",
        "Sales Call Breakdown: Intro, Problem, Offer, Close",
        "Advanced Offers: Repeatable Packages (Anchor, Bonuses, Scarcity)",
      ],
    },
  ];

  return (
    <div className="relative bg-black text-white py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          What You’ll Learn – The Curriculum
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          The YC Method: Built to Elevate You in 12 Weeks<br />
          <span className="text-sm">
            We recommend allocating a minimum of <strong>15–30 hours per week</strong> to
            create standout work & get the most out of the program experience.
          </span>
        </p>
      </div>

      {/* Timeline Vertical Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500 opacity-20 z-0"></div>

      {/* Timeline Dots */}
      {[0.15, 0.5, 0.85].map((pos, index) => (
        <div
          key={index}
          className="absolute left-1/2 transform -translate-x-1/2 z-10"
          style={{ top: `${pos * 100}%` }}
        >
          <div className="h-6 w-6 bg-yellow-400 rounded-full border-4 border-black shadow-lg"></div>
        </div>
      ))}

      {/* Brain SVG in Center */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-90 max-w-sm w-full">
        <img
          src={middlebrain} // Replace this with your image path
          alt="Brain"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Curriculum Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#101010] border border-gray-700 p-6 rounded-xl shadow-lg flex flex-col gap-3"
          >
            <h3 className="whitespace-pre-line text-yellow-400 font-semibold text-xl">
              {item.title}
            </h3>
            <p className="text-white font-medium">{item.subtitle}</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumSection;
