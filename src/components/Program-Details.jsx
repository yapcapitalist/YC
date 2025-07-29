import React from "react";
import dot from "../assets/Dot Background.svg";

const ProgramDetails = () => {
    return (
        <section className="relative text-white pb-[158px] max-w-6xl mx-auto">
            <div className="absolute grid-svg top-[-268px] !w-2/3 left-[-320px] !z-0">
                <img src={dot} alt="" width="" height="" />
            </div>
            <div className="relative text-center mb-20 z-1">
                <h2 className="mb-4">Program details</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    If this sounds like something you’ve been looking for, we’d love to get to know you further and explore if you’d be a good fit!
                </p>
            </div>

            <div className="relative flex gap-6 z-1">
                <div className="flex flex-col gap-6">
                    {/* Left Box */}
                    <div className="bg-[#1a1a1a] border border-gray-600 rounded-xl px-6 py-6 pb-16 h-[452px]">
                        <p className="!text-[#fefe00] mb-4 !font-bold">Your Next Level Starts Here</p>
                        <ul className="space-y-4 text-gray-200">
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-400"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span>
                                    Admission Into The Upcoming Cohort With Lifetime Access To Sessions, Full Curriculum, Private Resources & Session Recordings.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-400"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span>Personalized Mentorship And Guidance On Building A Fulfilling Career</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-400"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span>Application-Based Admission Only</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-400"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span>Scholarships Available For High-Potential Candidates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-400"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span>* Only 20 Seats Per Cohort</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-400"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span>You Directly Learn With Communication Experts And Businessmen</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Box */}

                    <div className="bg-[#1a1a1a] flex flex-col border border-gray-600 rounded-xl p-5 h-[158px]">
                        <p className="!text-[#fefe00] !font-bold mb-2">PAYMENT OPTIONS</p>
                        <span className="text-gray-300">
                            Upfront: Pay Via Razorpay Or Stripe As An Individual Or <a href="#" className="!text-[#fefe00] underline">Via Company</a> To Avail Invoice For GST Benefit After Payment.
                        </span>
                        <span className="text-gray-300 mt-2">EMI: Available For 3—24mo Duration</span>
                    </div>
                </div>

                {/* Payment Options */}
                <div className=" flex flex-col space-y-6">
                    <div className="bg-[#1a1a1a] border border-gray-600 rounded-xl p-5 flex flex-col h-[452px]">
                        <p className="!font-bold !text-[#fefe00] mb-4">INTERESTED?</p>
                        <span className="text-gray-300 mb-4">
                            We Offer This Cohort Only 20 Members And Every Application Is Assessed And Individually Handpicked Based On Our Internal Criteria.
                        </span>
                        <span className="text-gray-300 mb-4">
                            Applications For Cohort Are Now Open.
                        </span>
                        <span className="text-gray-300 mb-20">
                            Submit An Early Application Below To Join The Waitlist. Your Application Will Get An Early Preference When Enrolments Begin Sometime In July 2025.
                        </span>
                        <button className="bg-transparent border border-yellow-400 transition">
                            Submit Application
                        </button>
                        <span className="text-gray-400 text-sm mt-5">
                            Please Take Some Time To Answer The Questions — We Use This To Assess Whether You’d Be A Good Fit
                        </span>
                    </div>

                    <div className="grid bg-[#1a1a1a] md:grid-cols-2 gap-6 p-5 border border-gray-600 rounded-xl h-[158px]">
                        <div className="bg-black flex flex-col rounded-xl p-6 text-center">
                            <span className="text-sm text-gray-400 mb-2">PAY UPFRONT</span>
                            <span className="text-3xl font-bold !text-[#fefe00] ">₹69,000</span>
                            <span className="text-gray-400 mt-1 text-sm">₹58,474 + 18% GST Via Razorpay</span>
                        </div>

                        <div className="bg-black flex flex-col rounded-xl p-6 text-center">
                            <span className="text-sm text-gray-400 mb-2">PAY VIA STRIPE</span>
                            <span className="text-3xl font-bold !text-[#fefe00] ">$800</span>
                            <span className="text-gray-400 mt-1 text-sm">For International Payments</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramDetails;
