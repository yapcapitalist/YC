import React from 'react';
import { MessageSquare, Video, Trophy, Star } from 'lucide-react';

const Curriculumn = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background scattered yellow circles */}
      <div className="absolute inset-0 opacity-40">
        {/* Large circles */}
        <div className="absolute top-40 left-20 w-20 h-20 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.3}}></div>
        <div className="absolute top-60 right-32 w-16 h-16 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.25}}></div>
        <div className="absolute top-80 left-1/3 w-24 h-24 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.2}}></div>
        <div className="absolute bottom-60 right-20 w-18 h-18 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.35}}></div>
        <div className="absolute bottom-40 left-16 w-22 h-22 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.25}}></div>
        <div className="absolute bottom-80 right-40 w-20 h-20 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.3}}></div>
        
        {/* Medium circles */}
        <div className="absolute top-96 left-1/2 w-12 h-12 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.4}}></div>
        <div className="absolute top-72 left-2/3 w-10 h-10 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.45}}></div>
        <div className="absolute bottom-96 left-1/4 w-14 h-14 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.35}}></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.4}}></div>
        
        {/* Small circles */}
        <div className="absolute top-48 right-1/4 w-6 h-6 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.5}}></div>
        <div className="absolute top-32 left-10 w-4 h-4 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.6}}></div>
        <div className="absolute bottom-24 right-10 w-8 h-8 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.45}}></div>
        <div className="absolute bottom-52 left-1/2 w-6 h-6 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.5}}></div>
        <div className="absolute top-24 left-1/3 w-5 h-5 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.55}}></div>
        <div className="absolute top-88 right-1/5 w-7 h-7 rounded-full" style={{backgroundColor: '#ffff00', opacity: 0.4}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{color: '#ffff00'}}>
            What You'll Learn - The Curriculum
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            The YC Method: Built to Elevate You in 12 Weeks
          </p>
          <p className="text-base font-medium" style={{color: '#ffff00'}}>
            15-20 hours per week
          </p>
        </div>

        {/* Cards Layout - Staggered positioning */}
        <div className="relative mb-20" style={{minHeight: '600px'}}>
          {/* Month 1 - Top Left */}
          <div className="absolute top-0 left-0 w-80 bg-black rounded-xl p-6 border border-gray-800 z-20">
            <div className="mb-4">
              <div className="text-gray-400 text-sm font-medium mb-1">MONTH 1</div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#ffff00'}}>ESSENTIALS</h3>
              <p className="text-gray-400 text-sm">Mindset and communication</p>
            </div>
            
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Identity Building: Crafting Who You Are & What You Offer</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Breaking Mental Loops: Overthinking, Blank Mind, Self-Doubt</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>How to Build Confident Presence (Posture, Eye Contact, Dress)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Indian Communication Traps: Humility, Hesitation, and Assertiveness</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Accent Drills & Speaking Fluently Without Pretending</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Gestures & Body Language That Signal Authority</span>
              </li>
            </ul>
          </div>

          {/* Month 2 - Center Right */}
          <div className="absolute top-32 right-0 w-80 bg-black rounded-xl p-6 border border-gray-800 z-10">
            <div className="mb-4">
              <div className="text-gray-400 text-sm font-medium mb-1">MONTH 2</div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#ffff00'}}>THE DEVELOPMENT</h3>
              <p className="text-gray-400 text-sm">Writing Content</p>
            </div>
            
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Cold Emails & DMs that Get Replies (Framework + Live Examples)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Hooks, Captions, and Content Writing for LinkedIn & Instagram</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>One-Take Video Confidence: Psychology, Setup, Delivery</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Reel Structures: 3 Types (Story, Insight, CTA)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Vlog & Pitch Video Frameworks (Personal Story → Offer)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Speaking Prompts to Practice for High-Stakes Scenarios</span>
              </li>
            </ul>
          </div>

          {/* Month 3 - Bottom Left */}
          <div className="absolute bottom-0 left-0 w-80 bg-black rounded-xl p-6 border border-gray-800 z-10">
            <div className="mb-4">
              <div className="text-gray-400 text-sm font-medium mb-1">MONTH 3</div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#ffff00'}}>MASTERY</h3>
              <p className="text-gray-400 text-sm">Sales and Business</p>
            </div>
            
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>How to Start a Freelance/Service Business from Zero</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Lead Gen Systems: Cold Outreach, Referrals, Content Funnels</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Negotiation Tactics + Handling Objection</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Positioning as a Premium Provider</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Sales Call Breakdown: Intro, Problem, Offer, Close</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#ffff00'}}></span>
                <span>Offer Design: Build Irresistible Packages (Anchor, Bonuses, Scarcity)</span>
              </li>
            </ul>
          </div>

          {/* Spacer for absolute positioned cards */}
          <div className="h-[600px]"></div>
        </div>

        {/* Beyond the Curriculum Button */}
        <div className="text-center mb-16">
          <button className="bg-black hover:bg-gray-900 px-6 py-3 rounded-full border border-gray-700 flex items-center mx-auto transition-colors duration-300 text-sm" style={{color: '#ffff00'}}>
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
              <div className="font-medium text-sm mb-1" style={{color: '#ffff00'}}>Personal coaching with mentors who won't let you hide.</div>
              <div className="w-full h-px bg-gray-800"></div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#ffff00'}}>
              <Video className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm mb-1" style={{color: '#ffff00'}}>Simulate real-world scenarios. Build confidence under pressure.</div>
              <div className="w-full h-px bg-gray-800"></div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#ffff00'}}>
              <Trophy className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm mb-1" style={{color: '#ffff00'}}>Present your skills to elite judges. No scripts. Just you.</div>
              <div className="w-full h-px bg-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculumn;