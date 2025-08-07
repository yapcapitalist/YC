import React from "react";
import dot from "../assets/Dot Background.svg";
import brain from '../assets/Brainnew.svg'
import braind from '../assets/Braind.svg'

const benefits = [
    {
        title: "Close deals",
        className: "top-[12.4%] left-1/2 -translate-x-1/2 sm:top-[10%] sm:left-1/2 sm:-translate-x-1/2"
    },
    {
        title: "On camera fluency",
        className: "top-[27.6%] right-[4%] sm:top-[28%] sm:right-[5.2%]"
    },
    {
        title: "Public Speaking",
        className: "top-[45.4%] right-[0.6%] sm:top-[59%] sm:right-[-2%]"
    },
    {
        title: "Confidence",
        className: "bottom-[26.8%] right-[2.8%] sm:bottom-[-2.8%] sm:right-[3.6%]"
    },
    {
        title: "Articulate Mind",
        className: "bottom-[12.4%] right-[32%] sm:bottom-[-18%] sm:right-[34.8%]"
    },
    {
        title: "1% entrepreneur",
        className: "bottom-[27%] left-[20%] -translate-x-1/2 sm:bottom-[-2.8%] sm:left-[19.4%]"
    },
    {
        title: "Command respect",
        className: "top-[45.8%] left-[0.8%] sm:top-[59%] sm:left-[-2%]"
    },
    {
        title: "Wins rooms",
        className: "top-[27.6%] left-[4%] sm:top-[28%] sm:left-[6.2%]"
    },
];

const WhyYc = () => {
    return (
        <div className="relative pb-12 sm:pb-[248px] px-0 sm:px-4 max-w-[1600px] mx-auto ">

            <div className="absolute grid-svg top-[100px] left-[-100px]">
                <img src={dot} alt="" width="" height="" />
            </div>
            <div className="absolute top-[-40px] right-[0px] sm:top-[240px] sm:right-8">
                <svg class="mobsvg" width="356" height="380" viewBox="0 0 356 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                        <path opacity="0.5" d="M152.425 109.357V108.357H151.425V109.357H152.425ZM147.091 374.492C147.091 377.437 149.479 379.825 152.425 379.825C155.37 379.825 157.758 377.437 157.758 374.492C157.758 371.546 155.37 369.158 152.425 369.158C149.479 369.158 147.091 371.546 147.091 374.492ZM355.991 109.357V108.357H152.425V109.357V110.357H355.991V109.357ZM152.425 109.357H151.425V374.492H152.425H153.425V109.357H152.425Z" fill="url(#paint0_linear_313_3598)" />
                        <path opacity="0.5" d="M0.666667 191.744C0.666667 194.689 3.05448 197.077 6 197.077C8.94552 197.077 11.3333 194.689 11.3333 191.744C11.3333 188.798 8.94552 186.411 6 186.411C3.05448 186.411 0.666667 188.798 0.666667 191.744ZM355.991 191.744V190.744H191.71V191.744V192.744H355.991V191.744ZM191.71 191.744V190.744H6V191.744V192.744H191.71V191.744Z" fill="url(#paint1_linear_313_3598)" />
                        <path opacity="0.5" d="M193.498 281.62C193.498 284.565 195.886 286.953 198.831 286.953C201.777 286.953 204.164 284.565 204.164 281.62C204.164 278.674 201.777 276.287 198.831 276.287C195.886 276.287 193.498 278.674 193.498 281.62ZM356.011 281.62V280.62H282.232V281.62V282.62H356.011V281.62ZM282.232 281.62V280.62H198.831V281.62V282.62H282.232V281.62Z" fill="url(#paint2_linear_313_3598)" />
                        <path opacity="0.5" d="M109.569 157.291V156.291H108.569V157.291H109.569ZM104.236 293.603C104.236 296.549 106.624 298.937 109.569 298.937C112.515 298.937 114.903 296.549 114.903 293.603C114.903 290.658 112.515 288.27 109.569 288.27C106.624 288.27 104.236 290.658 104.236 293.603ZM355.992 157.291V156.291H109.569V157.291V158.291H355.992V157.291ZM109.569 157.291H108.569V293.603H109.569H110.569V157.291H109.569Z" fill="url(#paint3_linear_313_3598)" />
                        <path opacity="0.5" d="M191.71 142.312V143.312H190.71V142.312H191.71ZM186.377 6C186.377 3.05447 188.764 0.666672 191.71 0.666672C194.655 0.666672 197.043 3.05447 197.043 6C197.043 8.94551 194.655 11.3333 191.71 11.3333C188.764 11.3333 186.377 8.94551 186.377 6ZM355.992 142.312V143.312H191.71V142.312V141.312H355.992V142.312ZM191.71 142.312H190.71V6H191.71H192.71V142.312H191.71Z" fill="url(#paint4_linear_313_3598)" />
                        <path opacity="0.5" d="M64.9268 224.698V225.698H63.9268V224.698H64.9268ZM59.5934 88.3864C59.5934 85.4408 61.9812 83.053 64.9268 83.053C67.8723 83.053 70.2601 85.4408 70.2601 88.3864C70.2601 91.3319 67.8723 93.7197 64.9268 93.7197C61.9812 93.7197 59.5934 91.3319 59.5934 88.3864ZM355.991 224.698V225.698H64.9268V224.698V223.698H355.991V224.698ZM64.9268 224.698H63.9268V88.3864H64.9268H65.9268V224.698H64.9268Z" fill="url(#paint5_linear_313_3598)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_313_3598" x1="355.991" y1="109.357" x2="199.114" y2="399.717" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#000100" />
                            <stop offset="1" stop-color="#FEFE00" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_313_3598" x1="371.17" y1="191.744" x2="6" y2="191.744" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3E3E00" />
                            <stop offset="1" stop-color="#FEFE00" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_313_3598" x1="355.991" y1="281.62" x2="198.852" y2="281.62" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#000100" />
                            <stop offset="1" stop-color="#FEFE00" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_313_3598" x1="364.027" y1="152.049" x2="138.567" y2="330.284" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#000100" />
                            <stop offset="1" stop-color="#FEFE00" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_313_3598" x1="355.992" y1="142.312" x2="220.023" y2="-18.0122" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#000100" />
                            <stop offset="1" stop-color="#FEFE00" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_313_3598" x1="355.991" y1="224.698" x2="91.4004" y2="48.6076" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#000100" />
                            <stop offset="1" stop-color="#FEFE00" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="text-center px-4">
                <h2 className="text-yellow-400 text-3xl font-bold mb-0">Why YC Cohort?</h2>
                <p className="!text-[#ABABAB] mt-2 mb-4 sm:mt-2 sm:mb-2 ">Why YC? Because The Best Deserve The Better.</p>
                <p className="text-gray-300 max-w-3xl mx-auto">
                    Most people learn English. You’ll learn <span className=" !text-[15px] sm:!text-[22px] text-[#ffff00]">leadership communication</span>—the kind that closes deals, wins rooms, and commands respect. This isn’t a spoken English class. This is a career-defining experience that turns sharp minds into powerful communicators.
                </p>
            </div>
            <div className="relative max-w-6xl mx-auto mt-0 sm:mt-[88px] h-[280px] sm:h-[600px] w-[340px] sm:w-auto z-2">
                {/* Center Image */}

                <div className="absolute top-1/2 left-1/2 w-[520px] h-[350px] -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block">
                    <img src={braind} alt="" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 sm:hidden">
                    <img src={brain} alt="brain" width="" height=""/>
                </div>

                {/* Cards */}
                {benefits.map((item, idx) => (
                    <div key={idx} className={`absolute ${item.className} w-[116px] sm:w-[348px]`} >
                        <div className="bg-gradient-to-br from-[#FEFE00] to-[#464600] p-[1px] rounded-[4px] sm:rounded-[10px]">
                            <div className="bg-[#131013] flex items-center rounded-[4px] sm:rounded-[9px] px-1 py-1 sm:px-5 sm:py-4">
                                <div className="rounded-[8px] sm:rounded-full border-1 sm:border-2 border-[#FEFE00] p-[2px] sm:p-[10px] mr-1 sm:mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className=" w-2 h-2 sm:w-4 sm:h-4 text-[#FEFE00]"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                                    </svg>
                                </div>
                                <p className="text-white !text-[10px] sm:!text-[18px]">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyYc;
