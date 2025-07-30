import React, { useState } from "react";
// import dot from "../assets/Dot Background.svg";

const youtubeVideoIds = [
    "pwfzmo6QT1A",
    "Fx1LdidhY3A",
    "4LBXXEhtv_8",
    "X3MG4fEJiF0",
    "HU7TMhkQHhA",
    "k0QYSKLY4tE"
];

export default function WhatIsYC() {
    const [mainVideoId, setMainVideoId] = useState(youtubeVideoIds[0]);

    return (
        <div >
            <section className="relative maincon container pb-[158px]" style={{
                maxWidth: 1200,
                margin: "0 auto",
            }}>

                {/* <div className="absolute grid-svg !w-2/3 top-0 right-[-300px] !z-0">
                <img src={dot} alt="" width="" height="" />
            </div>
*/}
                <div className="absolute top-6 left-0">
                    <svg width="356" height="380" viewBox="0 0 356 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.6">
                            <path opacity="0.5" d="M203.586 109.357V108.357H204.586V109.357H203.586ZM208.919 374.492C208.919 377.437 206.531 379.825 203.586 379.825C200.64 379.825 198.253 377.437 198.253 374.492C198.253 371.546 200.64 369.158 203.586 369.158C206.531 369.158 208.919 371.546 208.919 374.492ZM0.0195465 109.357V108.357H203.586V109.357V110.357H0.0195465V109.357ZM203.586 109.357H204.586V374.492H203.586H202.586V109.357H203.586Z" fill="url(#paint0_linear_326_4023)" />
                            <path opacity="0.5" d="M355.344 191.744C355.344 194.69 352.956 197.077 350.011 197.077C347.065 197.077 344.677 194.69 344.677 191.744C344.677 188.799 347.065 186.411 350.011 186.411C352.956 186.411 355.344 188.799 355.344 191.744ZM0.0194092 191.744V190.744H164.301V191.744V192.744H0.0194092V191.744ZM164.301 191.744V190.744H350.011V191.744V192.744H164.301V191.744Z" fill="url(#paint1_linear_326_4023)" />
                            <path opacity="0.5" d="M162.513 281.62C162.513 284.566 160.125 286.953 157.18 286.953C154.234 286.953 151.846 284.566 151.846 281.62C151.846 278.675 154.234 276.287 157.18 276.287C160.125 276.287 162.513 278.675 162.513 281.62ZM0.000137329 281.62V280.62H73.7783V281.62V282.62H0.000137329V281.62ZM73.7783 281.62V280.62H157.18V281.62V282.62H73.7783V281.62Z" fill="url(#paint2_linear_326_4023)" />
                            <path opacity="0.5" d="M246.441 157.291V156.291H247.441V157.291H246.441ZM251.775 293.603C251.775 296.549 249.387 298.936 246.441 298.936C243.496 298.936 241.108 296.549 241.108 293.603C241.108 290.658 243.496 288.27 246.441 288.27C249.387 288.27 251.775 290.658 251.775 293.603ZM0.0189362 157.291V156.291H246.441V157.291V158.291H0.0189362V157.291ZM246.441 157.291H247.441V293.603H246.441H245.441V157.291H246.441Z" fill="url(#paint3_linear_326_4023)" />
                            <path opacity="0.5" d="M164.301 142.312V143.312H165.301V142.312H164.301ZM169.634 6.00049C169.634 3.05496 167.246 0.66716 164.301 0.66716C161.355 0.66716 158.967 3.05496 158.967 6.00049C158.967 8.946 161.355 11.3338 164.301 11.3338C167.246 11.3338 169.634 8.946 169.634 6.00049ZM0.0191345 142.312V143.312H164.301V142.312V141.312H0.0191345V142.312ZM164.301 142.312H165.301V6.00049H164.301H163.301V142.312H164.301Z" fill="url(#paint4_linear_326_4023)" />
                            <path opacity="0.5" d="M291.084 224.698V225.698H292.084V224.698H291.084ZM296.417 88.3862C296.417 85.4407 294.03 83.0529 291.084 83.0529C288.138 83.0529 285.751 85.4407 285.751 88.3862C285.751 91.3317 288.138 93.7196 291.084 93.7196C294.03 93.7196 296.417 91.3317 296.417 88.3862ZM0.0197449 224.698V225.698H291.084V224.698V223.698H0.0197449V224.698ZM291.084 224.698H292.084V88.3862H291.084H290.084V224.698H291.084Z" fill="url(#paint5_linear_326_4023)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_326_4023" x1="0.0195465" y1="109.357" x2="156.897" y2="399.717" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#000100" />
                                <stop offset="1" stop-color="#FEFE00" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_326_4023" x1="-15.1588" y1="191.744" x2="350.011" y2="191.744" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3E3E00" />
                                <stop offset="1" stop-color="#FEFE00" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_326_4023" x1="0.0198064" y1="281.62" x2="157.159" y2="281.62" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#000100" />
                                <stop offset="1" stop-color="#FEFE00" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_326_4023" x1="-8.01659" y1="152.048" x2="217.443" y2="330.284" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#000100" />
                                <stop offset="1" stop-color="#FEFE00" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_326_4023" x1="0.0191296" y1="142.312" x2="135.987" y2="-18.0117" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#000100" />
                                <stop offset="1" stop-color="#FEFE00" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_326_4023" x1="0.0197492" y1="224.698" x2="264.61" y2="48.6075" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#000100" />
                                <stop offset="1" stop-color="#FEFE00" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div> 
                <div className="relative z-1">

                    <h2 className="text-center"> What is YC? </h2>

                    <p className="py-12 pb-4 text-center max-w-3xl mx-auto">YC is India’s most exclusive 3-month communication mastery program — built for professionals, founders, and creators who want to turn their voice into capital.</p>

                    <div className="py-4 text-center max-w-3xl mx-auto">

                        <p>Whether you want to speak with authority, create powerful content, or close high-ticket clients — YC gives you the tools, training, and systems to become impossible to ignore.Inside, you’ll learn how to:</p>

                        <ul className="text-center mb-8">

                            <li>Communicate with clarity, confidence, and influence</li>

                            <li>Build a magnetic online presence through content</li>

                            <li>Monetize your skills through sales, strategy, and storytelling</li>
                        </ul>
                        <ul>
                            <li>This isn’t just a course. It’s a transformation.</li>
                            <li>By the end of 12 weeks, you won’t just sound different — you’ll be different.</li>

                            <li>Only the sharpest minds get in.</li>
                            <li>And once you're in, you never operate the same again.     </li>
                        </ul>

                    </div>
                </div>

            </section>
        </div>
    );
}