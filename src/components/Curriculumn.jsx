import React from 'react';
import { MessageSquare, Video, Trophy, Star } from 'lucide-react';

const CurriculumDesign = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4" style={{color: '#ffff00'}}>
            What You'll Learn - The Curriculum
          </h1>
          <p className="text-white text-base mb-2">
            The YC Method: Built to Elevate You in 12 Weeks
          </p>
          <p className="text-white text-sm">
            We recommend allocating a minimum of 3 - 5 hours per week for optimal devotion!
          </p>
          <p className="text-white text-xs mt-1">
            work 8 got for ideal out of this program experience.
          </p>
        </div>

        {/* Cards Layout with Brain Image */}
        <div className="relative" style={{height: '800px'}}>
          {/* Background brain image in center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img 
              src="src\assets\brain.png" 
              alt="Brain" 
              className="w-80 h-80 opacity-15 object-contain"
            />
          </div>

          {/* Month 1 - Top Left */}
          <div className="absolute top-0 left-0 w-72 bg-black rounded-2xl p-6 border border-gray-800"  style={{ marginBottom: "60px" }}>
            <div className="mb-4">
              <div className="text-gray-400 text-xs font-medium mb-1">MONTH 1</div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#ffff00'}}>ESSENTIALS</h3>
              <p className="text-gray-400 text-xs">Mindset and communication</p>
            </div>
            
            <ul className="space-y-2 text-gray-300 text-xs">
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Identity Building: Crafting Who You Are & What You Offer</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Breaking Mental Loops: Overthinking, Blank Mind, Self-Doubt</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>How to Build Confident Presence (Posture, Eye Contact, Dress)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Indian Communication Traps: Humility, Hesitation, and Assertiveness</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Accent Drills & Speaking Fluently Without Pretending</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Gestures & Body Language That Signal Authority</span>
              </li>
            </ul>

            {/* Circular icon */}
            <div className="absolute -right-6 top-8 w-12 h-12 rounded-full border border-gray-600 bg-black flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border border-gray-500"></div>
            </div>
          </div>

          {/* Month 2 - Center Right */}
          <div className="absolute top-48 right-0 w-72 bg-black rounded-2xl p-6 border border-gray-800">
            <div className="mb-4">
              <div className="text-gray-400 text-xs font-medium mb-1">MONTH 2</div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#ffff00'}}>THE DEVELOPMENT</h3>
              <p className="text-gray-400 text-xs">Writing Content</p>
            </div>
            
            <ul className="space-y-2 text-gray-300 text-xs">
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Cold Emails & DMs that Get Replies (Framework + Live Examples)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Hooks, Captions, and Content Writing for LinkedIn & Instagram</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>One-Take Video Confidence: Psychology, Setup, Delivery</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Reel Structures: 3 Types (Story, Insight, CTA)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Vlog & Pitch Video Frameworks (Personal Story → Offer)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Speaking Prompts to Practice for High-Stakes Scenarios</span>
              </li>
            </ul>

            {/* Circular icon */}
            <div className="absolute -left-6 top-8 w-12 h-12 rounded-full border border-gray-600 bg-black flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border border-gray-500"></div>
            </div>
          </div>

          {/* Month 3 - Bottom Left */}
          <div className="absolute bottom-0 left-0 w-72 bg-black rounded-2xl p-6 border border-gray-800" style={{ top: "540px" }}>
            <div className="mb-4">
              <div className="text-gray-400 text-xs font-medium mb-1">MONTH 3</div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#ffff00'}}>MASTERY</h3>
              <p className="text-gray-400 text-xs">Sales and Business</p>
            </div>
            
            <ul className="space-y-2 text-gray-300 text-xs">
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>How to Start a Freelance/Service Business from Zero</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Lead Gen Systems: Cold Outreach, Referrals, Content Funnels</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Negotiation Tactics + Handling Objection</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Positioning as a Premium Provider</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Sales Call Breakdown: Intro, Problem, Offer, Close</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Offer Design: Build Irresistible Packages (Anchor, Bonuses, Scarcity)</span>
              </li>
            </ul>

            {/* Circular icon */}
            <div className="absolute -right-6 top-8 w-12 h-12 rounded-full border border-gray-600 bg-black flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border border-gray-500"></div>
            </div>
          </div>

          {/* Connecting lines */}
          <div className="absolute top-16 left-80 w-32 h-px bg-gray-600"></div>
          <div className="absolute top-56 right-80 w-32 h-px bg-gray-600"></div>
        </div>

        {/* Beyond the Curriculum Button */}
        <div className="text-center my-16">
          <button className="bg-black hover:bg-gray-900 px-6 py-3 rounded-full border border-gray-700 flex items-center mx-auto transition-colors duration-300 text-xs" style={{color: '#ffff00'}}>
            <Star className="w-4 h-4 mr-2" />
            Beyond the Curriculum
          </button>
        </div>

        {/* Bottom Features */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#ffff00'}}>
              <MessageSquare className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm mb-1" style={{color: '#ffff00'}}>Live 1:1 Coaching</div>
              <div className="text-white text-xs mb-2">Personal coaching with mentors who won't let you hide.</div>
              <div className="w-full h-px bg-gray-800"></div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#ffff00'}}>
              <Video className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm mb-1" style={{color: '#ffff00'}}>High-Stakes Simulation</div>
              <div className="text-white text-xs mb-2">Simulate real-world scenarios. Build confidence under pressure.</div>
              <div className="w-full h-px bg-gray-800"></div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#ffff00'}}>
              <Trophy className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm mb-1" style={{color: '#ffff00'}}>Final Showcase</div>
              <div className="text-white text-xs mb-2">Present your skills to elite judges. No scripts. Just you.</div>
              <div className="w-full h-px bg-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumDesign;