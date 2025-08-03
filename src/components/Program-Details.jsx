import React, { use } from "react";
import { useRef } from "react";
import dot from "../assets/Dot Background.svg";
import { Link } from 'react-router-dom';
import { useEffect } from "react";


const ProgramDetails = () => {
    // const programDetails = useRef(null);

useEffect(() => {
  const elements = document.querySelectorAll(".border-gradient");
  if (!elements.length) return;

  let angle = 0;
  let animationFrameId;

  const rotate = () => {
    angle = (angle + 1) % 360;
    elements.forEach(el => {
      el.style.setProperty("--gradient-angle", `${angle}deg`);
    });
    animationFrameId = requestAnimationFrame(rotate);
  };

  rotate();

  return () => cancelAnimationFrame(animationFrameId);
}, []);


    return (
        <section className="relative pb-12 sm:pb-[158px] px-6 sm:px-4 max-w-[1600px] mx-auto overflow-hidden">
            <div className="absolute grid-svg top-[-268px] h-[100vh ] left-[-320px] !z-0">
                <img src={dot} alt="" width="" height="" />
            </div>
            <div className="relative text-center mb-7 sm:mb-20 z-1">
                <h2 className="mb-4">Program Details</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    If this sounds like something you’ve been looking for, we’d love to get to know you further and explore if you’d be a good fit!
                </p>
            </div>

            <div className="relative flex flex-col sm:flex-row gap-6 z-1 max-w-6xl mx-auto">
                <div className="flex flex-col w-[100%] sm:w-[50%] gap-6">
                    {/* Left Box */}
                    <div className="bg-[#131012] border border-gray-600 rounded-xl p-4 sm:px-6 sm:py-6 sm:pb-16 sm:h-[452px]">
                        <p className="!text-[#fefe00] font-small mb-4 !font-bold">Your Next Level Starts Here</p>
                        <ul className="space-y-2 sm:space-y-4 text-gray-200">
                            <li className="flex items-start gap-2">
                                <span className="mt-2 sm:mt-0 text-yellow-400"><svg className="checksvg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span className="spannum ">
                                    Admission Into The Upcoming Cohort With Lifetime Access To Sessions, Full Curriculum, Private Resources & Session Recordings.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 sm:mt-0 text-yellow-400"><svg className="checksvg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span className="spannum ">Personalized Mentorship And Guidance On Building A Fulfilling Career</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 sm:mt-0 text-yellow-400"><svg className="checksvg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span className="spannum ">Application-Based Admission Only</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 sm:mt-0 text-yellow-400"><svg className="checksvg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span className="spannum ">Scholarships Available For High-Potential Candidates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-400"><svg className="checksvg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span className="spannum ">* We will accept only 20 applicants</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 sm:mt-0 text-yellow-400"><svg className="checksvg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z" fill="#FEFE00" />
                                </svg>
                                </span>
                                <span className="spannum ">You Directly Learn With Communication Experts And Businessmen</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Box */}

                    {/* <div className="bg-[#131012] flex flex-col border border-gray-600 rounded-xl p-5 h-[158px]">
                        <p className="!text-[#fefe00] font-small !font-bold mb-2">PAYMENT OPTIONS</p>
                        <span className="spannum text-gray-300">
                            Upfront: Pay Via Razorpay Or Stripe As An Individual Or <a href="#" className="!text-[#fefe00] underline">Via Company</a> To Avail Invoice For GST Benefit After Payment.
                        </span>
                        <span className="spannum text-gray-300 mt-2">EMI: Available For 3—24mo Duration</span>
                    </div> */}
                </div>

                {/* Payment Options */}
                <div className=" flex flex-col w-[100%] sm:w-[50%] space-y-6" id="program-details">
                    <div className="bg-[#131012] border border-gray-600 rounded-xl p-5 flex flex-col h-auto sm:h-[452px]">
                        <p className="!font-bold font-small !text-[#fefe00] mb-4">INTERESTED?</p>
                        <span className="spannum text-gray-300 mb-4">
                            We Offer This Cohort Only 20 Members And Every Application Is Assessed And Individually Handpicked Based On Our Internal Criteria.
                        </span>
                        <span className="spannum text-gray-300 mb-4">
                            Applications For Cohort Are Now Open.
                        </span>
                        <span className="spannum text-gray-300 mb-4">
                            Submit An Early Application Below To Join The Waitlist. Your Application Will Get An Early Preference When Enrolments Begin Sometime In September 2025.
                        </span>
                        <span className="spannum text-gray-300 mb-4 sm:mb-20">
                            The tentative date to start cohort is 1st of November
                        </span>
                        <Link to="/apply" className="w-full">
                            <button className="border-gradient w-full bg-[#fefe00] text-black font-semibold py-3 px-6 rounded-full">
                                Submit Application
                            </button>

                        </Link>
                        <span className="spannum text-gray-400 text-sm mt-5">
                            Please Take Some Time To Answer The Questions — We Use This To Assess Whether You’d Be A Good Fit
                        </span>
                    </div>


                </div>
            </div>
            <div className=" relative grid bg-[#131012] md:grid-cols-2 gap-6 p-5 border border-gray-600 rounded-xl h-auto sm:h-[158px] z-10 w-full  max-w-6xl mx-auto mt-8">
                <div className="bg-black flex flex-col gap-2 sm:gap-0 rounded-xl p-6 sm:p-0 h-full justify-center text-center">
                    <span className="price-light text-sm !font-bold sm:!text-base mb-2">PAY UPFRONT</span>
                    <span className="price-bold text-3xl font-bold !text-[#fefe00] ">₹69,000</span>
                    <span className="price-light text-gray-400 mt-1 text-sm">₹58,474 + 18% GST Via Razorpay</span>
                </div>

                <div className="bg-black flex flex-col rounded-xl gap-2 sm:gap-0 p-6 sm:p-0 h-full justify-center text-center">
                    <span className="price-light text-sm !font-bold sm:!text-base mb-2">PAY VIA STRIPE</span>
                    <span className="price-bold text-3xl font-bold !text-[#fefe00] ">$800</span>
                    <span className="price-light text-gray-400 mt-1 text-sm">For International Payments</span>
                </div>
            </div>
        </section>
    );
};

export default ProgramDetails;
