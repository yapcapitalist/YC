import group from '../assets/Group.svg'
import yclogo from '../assets/YAAP_CAPITAL.svg'
import dot from "../assets/Dot Background.svg";
import { Link } from 'react-router-dom';

export default function YCApplicationSection() {
    return (
        <section className="relative px-6">

            <div className="relative  rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                    <div className='w-8 sm:w-11'>
                        <img src={yclogo} alt="" />
                    </div>
                </Link>
            </div>

            <div className="absolute grid-svg top-[280px] left-[-400px] !z-0">
                <img src={dot} alt="" width="" height="" />
            </div>

            {/* Header */}
            <div className="max-w-6xl mx-auto">
                <div className="border-1 border-[#1f1f00] mb-12 sm:mb-16 flex flex-col justify-center p-2 lg:p-6 rounded-lg">
                    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ">
                        {/* Left section */}
                        <div className="flex-1 text-center">
                            <span className="mb-2 !text-[14px]">Hey there, you're applying for</span>
                            <p className="!font-bold !text-[#fefe00] !text-[20px] sm:!text-[22px]">The YC Cohort</p>
                        </div>

                        {/* Program duration */}
                        <div className="rounded-xl w-full justify-between sm:justify-start sm:w-auto p-3 bg-[#2b2b2b] flex gap-6 lg:gap-40">
                            <div className="flex flex-col gap-1">
                                <span className="text-[#565656] mb-2">Program duration</span>
                                <p className="!text-[#fefe00] !text-[20px] sm:!text-[22px] !font-bold">
                                    12 <span className="!text-[12px] sm:!text-[20px]  font-normal">weeks</span>
                                </p>
                            </div>

                            {/* Time commitment */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[#565656] mb-2">Time commitment</span>
                                <p className="!text-[#fefe00] !text-[20px] sm:!text-[22px] !font-bold">
                                    15-30 <span className="!text-[12px] sm:!text-[20px] font-normal">hrs/week</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stepper and Box */}
                <div className="flex flex-col-reverse sm:flex-col lg:flex-row justify-between gap-10 items-end">
                    {/* Left Steps */}
                    <div className="flex flex-col gap-6">
                        <Step
                            step="01"
                            title="Submit application"
                            desc="Tell us why you’re a fit. We’re curating a tribe that’s sharp, curious, and serious about growth."
                            color="#fefe00"
                        />
                        <Step
                            step="02"
                            title="Get selected"
                            desc="If shortlisted, we’ll send you details to confirm your seat. Only 20 seats. No fluff."
                            color="#2B2B2B"
                        />
                        <Step
                            step="03"
                            title="Start your journey"
                            desc="You’re in. Time to sharpen your voice and upgrade your game."
                            color="#2B2B2B"
                            isLast
                        />
                    </div>

                    {/* Right Info Box */}
                    <div className="bg-[#111105] border border-[#2a2a2a] rounded-xl p-7 w-full max-w-md mx-auto text-center flex flex-col items-center justify-between z-1">
                        {/* Icon (can replace with actual SVG later) */}
                        <div className="mb-6">
                            <img src={group} alt="" />
                        </div>

                        <div className="font-semibold mb-2">
                            <p className='!text-[#fefe00] !font-semibold'>
                                We don’t accept everyone and that’s intentional.
                            </p>
                        </div>

                        <span className="text-sm text-[#B3B3B3] mb-6 px-2">
                            Give us the real you. The better we understand your intent, the better we can decide if this cohort is for you.
                        </span>
                        <Link to="/application-form" className="w-full">
                            <button className="bg-transparent border border-[#F9F871] text-[#F9F871] px-6 py-2 rounded-full hover:bg-[#F9F8711a] transition">
                                Start Application
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Step({ step, title, desc, color, isLast }) {
    return (
        <div className="relative pl-6">
            {/* Connecting line */}
            {!isLast && (
                <div className="absolute top-6 sm:top-8 left-26 h-20 sm:h-36 lg:h-22 border-l border-[#3a3a3a] z-0"></div>
            )}

            <div className="relative z-10 flex items-start gap-4">
                {/* Step number and dot */}
                <div className="flex gap-4 items-center">
                    <h2 className="font-bold w-14" style={{ color }}>{step}</h2>
                    <div className="w-4 h-4 outline outline-4 outline-[#4a4a00] rounded-full" style={{ backgroundColor: color }}></div>
                </div>

                {/* Step content */}
                <div>
                    <p className="!text-4 !font-bold !text-[#fefe00]">{title}</p>
                    <span className="text-sm text-[#aaa] max-w-sm">{desc}</span>
                </div>
            </div>
        </div>
    );
}
