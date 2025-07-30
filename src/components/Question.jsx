import React, { useState } from "react";
import yclogo from '../assets/YAAP_CAPITAL.svg'
import dot from "../assets/Dot Background.svg";
import BGillustrate from "../assets/BGillustrate.svg";
import { Link } from "react-router-dom";

const questions = [
    {
        label: "Where did you hear about this course?",
        options: ["YouTube", "Twitter", "LinkedIn", "Instagram", "From a friend or colleague", "Other"],
    },
    {
        label: "Your public profile Link (LinkedIn, Twitter etc.)",
        type: "text",
    },
    {
        label: "Which of these describes you best?",
        type: ["Aspiring Creator","Working Professional","Student","Freelancer","Entrepreneur","Career Switcher"],
    },
    {
        label: "How many years of work experience do you have?",
        type: "text",
    },
    {
        label: "Tell us more about yourself!",
        type: "text",
    },
    {
        label: "On a scale of 1–5, how comfortable are you with communication?",
        type: ["0","1","2","3","4","5","6","7","8","9","10"],
    },
    {
        label: "What are your current challenges when it comes to communication?",
        type: "text",
    },
    {
        label: "Why are you applying to the YC Cohort?",
        type: "text",
    },
    {
        label: "What outcome would make these 12 weeks worth it for you?",
        type: "text",
    },
    {
        label: "Are you ready to dedicate 15–30 hrs/week?",
        type: "text",
    },
];

export default function ApplicationForm() {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(""));

    const handleSelect = (value) => {
        const updated = [...answers];
        updated[current] = value;
        setAnswers(updated);
    };

    const next = () => {
        if (current < questions.length - 1) {
            setCurrent(current + 1);
        }
    };

    const renderRightSide = () => {
        const q = questions[current];
        return (
            <div className="w-full max-w-md text-white">
                <p className="text-lg mb-6 font-semibold">
                    {q.label} <span className="text-[#FFD700]">*</span>
                </p>

                {q.options ? (
                    <div className="flex flex-col gap-4">
                        {q.options.map((opt, idx) => (
                            <label
                                key={idx}
                                className="flex items-center gap-3 cursor-pointer text-white"
                            >
                                <input
                                    type="radio"
                                    name={`q-${current}`}
                                    value={opt}
                                    checked={answers[current] === opt}
                                    onChange={() => handleSelect(opt)}
                                    className="appearance-none w-4 h-4 border-2 border-yellow-500 rounded-full checked:bg-yellow-500"
                                />
                                {opt}
                            </label>
                        ))}
                    </div>
                ) : (
                    <input
                        type="text"
                        value={answers[current]}
                        onChange={(e) => handleSelect(e.target.value)}
                        className="w-full mt-2 p-2 rounded-md bg-transparent border-b border-yellow-600 outline-none text-white"
                    />
                )}

                <button
                    onClick={next}
                    className="mt-8 px-5 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition rounded-md"
                >
                    Next →
                </button>
            </div>
        );
    };

    return (
        <div className="relative min-h-screen text-white">

            <div className="relative  rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                <div className='w-11'>
                    <img src={yclogo} alt="" />
                </div>
                </Link>
            </div>

            <div className="absolute grid-svg top-[444px] right-[-424px]">
                <img src={dot} alt="" width="" height="" />
            </div>

            <div className="absolute right-0">
                <img src={BGillustrate} alt="" />
            </div>

            <div className="flex flex-row p-6 gap-10 lg:gap-20 max-w-xl lg:max-w-6xl mx-auto">
                {/* Left: Question List with Answers */}
                <div className="w-full lg:w-1/2">
                    <span className="!font-medium">Applying for</span>
                    <p className=" !font-bold !text-[#fefe00] !text-[30px] mb-4">
                        The YC Communication Cohort
                    </p>

                    {questions.map((q, i) => (
                        <div className="py-2 border-b bodrder-2 border-[#fefe00]" key={i}>
                            <label className="text-sm text-white">{q.label} <span className="text-yellow-400">*</span></label>
                            <div className="mt-1 bg-[#141414] rounded-xl py-2 min-h-[40px] flex items-center">
                                {answers[i] ? answers[i] : ""}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Current Question Panel */}
                <div className="w-full lg:w-1/2">{renderRightSide()}</div>
            </div>
        </div>
    );
}
