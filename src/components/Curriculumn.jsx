import { Brain } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import mainbrain from "../assets/Main brain.png"
import trophyicon from "../assets/trophyicon.svg"
import maskicon from "../assets/maskicon.svg"
import discussiionicon from "../assets/discussiionicon.svg"
import dot from "../assets/Dot Background.svg";



export default function Component() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index)
          }
        },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <div className="relative text-white min-h-screen p-8 pb-[158px]">
      <div className="absolute grid-svg !w-2/3 bottom-0 left-[-108px] !z-0">
        <img src={dot} alt="" width="" height="" />
      </div>
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-4">What You'll Learn - The Curriculum</h2>

        <div className="max-w-2xl mx-auto">
          <p className="text-xl font-semibold mb-4">The "1%" Method: Built to Elevate You in 12 Weeks</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            We recommend allocating a minimum of 15-20 hours per week to create standard work & get the most out of the
            program experience.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="z-1 max-w-4xl mx-auto relative" style={{ height: "fit-content" }}>
        {/* Background image container - full width from first to last brain */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 w-full">
          <img src={mainbrain} alt="" />
        </div>

        {/* Vertical connecting line - only from first to last brain */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-px border-l-2 border-dotted border-gray-600"
          style={{
            top: "2rem",
            bottom: "24rem",
          }}
        ></div>

        {/* Month 1 - Essentials */}
        <div className="flex items-start mb-16" ref={sectionRefs[0]}>
          <div className="w-1/2 pr-8">
            <div className="bg-[#131012] backdrop-blur-md p-6 rounded-lg">
              <p className="!font-semibold mb-2">MONTH 1</p>
              <h2 className="font-bold !text-[#fefe00] !text-[28px] mb-4">ESSENTIALS</h2>
              <p className="text-gray-400 text-sm mb-4">Mindset and Communication</p>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Lifestyle Building: Crafting Who You Are & What You Offer</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Breaking Mental Loops, Overthinking, Brain Mist, Self-Doubt</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>How to Build Confident Presence Through Your Voice</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Instant Communication Tactic: Humility, Hesitation, and Assertiveness</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Accent Drills & Speaking Fluently Without Preparing</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Gestures & Body Language That Signal Authority</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center bg-black w-18 h-16 rounded-full border-2 border-white-600 relative z-10">
            <Brain className={`w-8 h-8 ${activeSection === 0 ? "text-[#fefe00]" : "text-white-400"}`} />
          </div>

          <div className="w-1/2 pl-8"></div>
        </div>

        {/* Month 2 - The Development */}
        <div className="flex items-start mb-16" ref={sectionRefs[1]}>
          <div className="w-1/2 pr-8"></div>

          <div className="flex items-center justify-center bg-black w-18 h-16 rounded-full border-2 border-white-600 relative z-10">
            <Brain className={`w-8 h-8 ${activeSection === 1 ? "text-[#fefe00]" : "text-white-400"}`} />
          </div>

          <div className="w-1/2 pl-8">
            <div className="bg-[#131012] backdrop-blur-md p-6 rounded-lg">
              <p className="text-cyan-400 text-sm font-semibold mb-2">MONTH 2</p>
              <h2 className=" font-bold !text-[#fefe00] !text-[28px] mb-4">THE DEVELOPMENT</h2>
              <p className="text-gray-400 text-sm mb-4">Writing Genius</p>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Daily Email Writing: Building Your Online Presence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Storytelling + Live Examples</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Headlines, Hooks, and Curiosity Writing for LinkedIn & Instagram</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>One-Take Video Confidence, Authenticity, Ideas Delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Rapid Structures: 5 Types (Story, Insight, Call to Action)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Vlog & Film Video Frameworks (Personal Story + Offer)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Speaking Prompts to Practice for High-Stakes Scenarios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Month 3 - Mastery */}
        <div className="flex items-start" ref={sectionRefs[2]}>
          <div className="w-1/2 pr-8">
            <div className="bg-[#131012] backdrop-blur-md p-6 rounded-lg">
              <p className="text-cyan-400 text-sm font-semibold mb-2">MONTH 3</p>
              <h2 className="font-bold !text-[#fefe00] !text-[28px] mb-4">MASTERY</h2>
              <p className="text-gray-400 text-sm mb-4">Sales and Business</p>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>How to Start a Freelance/Service Business from Zero</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sales Call Frameworks + Outreach, Referrals, Content Funnels</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Negotiation Tactics + Handling Objection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Positioning as a Premium Provider</span>
                </li>
                <li className="flex items-start">
                  <span className=" mr-2">•</span>
                  <span>Sales Call Breakdown: Intro, Problem, Solution, Close</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Offer Design: Build Irresistible Packages (Market, Bonuses, Scarcity)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center bg-black w-18 h-16 rounded-full border-2 border-white-600 relative z-10">
            <Brain className={`w-8 h-8 ${activeSection === 2 ? "text-[#fefe00]" : "text-white-400"}`} />
          </div>

          <div className="w-1/2 pl-8"></div>
        </div>



      </div>

      <div className="relative z-1 max-w-3xl mx-auto mt-20">
        {/* <div className="flex justify-center mb-10">
          <div className="bg-[#1E1E1E] px-6 py-2 rounded-full border border-[#fefe00] text-[#fefe00] text-sm font-semibold flex items-center gap-2">
            <span className="text-yellow-400">✨</span> Beyond the Curriculum
          </div>
        </div> */}

        <div className="space-y-8">
          {/* Item 1 */}
          <div className="flex items-start gap-4 border-b border-[#fefe00] py-6">
            <div className="w-[52] h-[52]">
              <img src={discussiionicon} alt="" />
            </div>
            <div>
              <h4 className="!font-semibold text-lg text-white">Live 1:1 Feedback</h4>
              <p className="!text-gray-400 text-sm">Personal coaching with mentors who won’t let you hide.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 border-b border-[#fefe00] pb-6">
            <div className="w-[52] h-[52]">
              <img src={maskicon} alt="" />
            </div>
            <div>
              <h4 className="!font-semibold text-lg text-white">High-Stake Roleplays</h4>
              <p className="!text-gray-400 text-sm">Simulate real-world scenarios. Build confidence under pressure.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 border-b border-[#fefe00] pb-6">
            <div className="w-[52] h-[52]">
              <img src={trophyicon} alt="" />
            </div>
            <div>
              <h4 className="!font-semibold text-lg text-white">Final Showcase</h4>
              <p className="!text-gray-400 text-sm">Present your skills to elite judges. No scripts. Just you.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
