import React, { useState } from "react";
import yclogo from '../assets/YAAP_CAPITAL.svg';
import dot from "../assets/Dot Background.svg";
import BGillustrate from "../assets/BGillustrate.svg";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import GradientButton from "./ui/GradientButton";
import Popup from "./ui/popup";

const questions = [
    { label: "Your Name", type: "text" },
    { label: "Where did you hear about this YC?", options: ["YouTube", "Twitter", "LinkedIn", "Instagram", "From a friend or colleague", "Other"] },
    { label: "Your public profile Link (LinkedIn Link, Twitter etc.)", type: "text" },
    { label: "Which of these describes you best?", options: ["Aspiring Creator", "Working Professional", "Artist", "Freelancer", "Entrepreneur", "Other"] },
    { label: "How many years of work experience do you have?", type: "text" },
    { label: "Tell us more about yourself!", type: "text" },
    { label: "On a scale of 1–10, how comfortable are you with communication?", options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
    { label: "What are your current challenges when it comes to communication?", type: "text" },
    { label: "Why are you applying to the YC Cohort?", type: "text" },
    { label: "What outcome would make these 12 weeks worth it for you?", type: "text" },
    { label: "Are you ready to dedicate 15–30 hrs/week?", options: ["Yes", "No"] },
];

export default function ApplicationForm() {
    const [current, setCurrent] = useState(-1); // Start with email collection
    const [popupMessage, setPopupMessage] = useState("");
const [phone, setPhone] = useState("");

    const [answers, setAnswers] = useState(Array(questions.length).fill(""));
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleSubmit = async () => {
        // Validate email and answers
        if (!email || !email.includes('@')) {
            setPopupMessage("Please enter a valid email address.");
            return;
        }
        
        if (!phone || !/^\d{10}$/.test(phone)) {
            setPopupMessage("Please enter a valid 10-digit phone number.");
            return;
        }
        // Check if all questions are answered
        const unanswered = answers.some((answer, index) => !answer.trim());
        if (unanswered) {
            setPopupMessage("Please answer all questions before submitting.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Prepare data for Google Sheets to match your Apps Script expectations
            const formData = {
                email: email,
                    phone: phone,
                answers: answers
            };

            console.log("Submitting data:", formData);

            // Send to Google Sheets
            const response = await fetch('https://script.google.com/macros/s/AKfycbxznuOh2fnPdgiTet2WPH594TP6aFhaiHKNr50mu3AGXZawi96vqyAi0pGwSJ4MdZcFsQ/exec?action=done', {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log("Google Sheets response:", response);

            // Prepare EmailJS data
            const emailFormData = questions.map((q, i) =>
                `${i + 1}. ${q.label}\n→ ${answers[i] || "(No answer)"}\n`
            ).join("\n\n");

            const emailParams = {
                message: emailFormData,
                user_email: email,
                user_phone: phone,
                to_email: 'your-email@example.com', // Add your recipient email
            };

            // Send email via EmailJS
            await emailjs.send(
                'service_yprdy7i',
                'template_i6ufiek',
                emailParams,
                '0JqlPgikGhhqhh965'
            );

            console.log("Email sent successfully");
            setPopupMessage("Application submitted successfully!");

            // Reset form
            setEmail("");
            setAnswers(Array(questions.length).fill(""));
            setCurrent(-1);

        } catch (error) {
            console.error("Submission error:", error);
            setPopupMessage("There was an error submitting the form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderRightSide = () => {
        if (current === -1) {
            return (
                    <div className="w-full max-w-md text-white space-y-6">
                        <div>
                            <p className="text-lg mb-2 font-semibold">Your Email <span className="text-[#FFD700]">*</span></p>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 p-2 rounded-md bg-transparent border-b border-yellow-600 outline-none text-white placeholder-gray-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <p className="text-lg mb-2 font-semibold">Your Phone Number <span className="text-[#FFD700]">*</span></p>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full mt-2 p-2 rounded-md bg-transparent border-b border-yellow-600 outline-none text-white placeholder-gray-400"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <GradientButton
                            onClick={() => {
                                if (!email || !email.includes('@')) {
                                    alert("Please enter a valid email address.");
                                } else if (!phone || !/^\d{10}$/.test(phone)){
                                    alert("Please enter a valid phone number.");
                                } else {
                                    setCurrent(0);
                                }
                            }}
                            className="mt-4 px-5 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition rounded-md"
                        >
                            Next →
                        </GradientButton>
                    </div>
            );
        }

        const q = questions[current];
        return (
            <div className="w-full max-w-md text-white">
                <p className="text-lg !text-[18px] !text-[22px] mb-6 font-semibold">
                    {q.label} <span className="text-[#FFD700]">*</span>
                </p>

                {q.options ? (
                    <div className="flex flex-col gap-4">
                        {q.options.map((opt, idx) => (
                            <label key={idx} className="flex items-center gap-3 cursor-pointer text-white hover:text-yellow-400 transition">
                                <input
                                    type="radio"
                                    name={`q-${current}`}
                                    value={opt}
                                    checked={answers[current] === opt}
                                    onChange={() => handleSelect(opt)}
                                    className="appearance-none w-4 h-4 border-2 border-yellow-500 rounded-full checked:bg-yellow-500 relative"
                                />
                                <span className="relative !text-[18px]">
                                    {answers[current] === opt && (
                                        <span className="absolute -left-7 top-1/2 !text-[18px] transform -translate-y-1/2 w-2 h-2 bg-yellow-500 rounded-full"></span>
                                    )}
                                    {opt}
                                </span>
                            </label>
                        ))}
                    </div>
                ) : (
                    <textarea
                        value={answers[current]}
                        onChange={(e) => handleSelect(e.target.value)}
                        className="w-full mt-2 p-2 rounded-md bg-transparent border-b border-yellow-600 outline-none text-white placeholder-gray-400 resize-none"
                        placeholder="Type your answer here..."
                        rows={q.type === "text" && (q.label.includes("Tell us more") || q.label.includes("challenges") || q.label.includes("Why are you applying") || q.label.includes("outcome")) ? 4 : 1}
                    />
                )}

                <div className="flex gap-4 mt-8">
                    {current > 0 && (
                        <GradientButton
                            onClick={() => setCurrent(current - 1)}
                            className="px-5 py-2"
                        >
                            ← Back
                        </GradientButton>
                    )}

                    {current === questions.length - 1 ? (

                        <GradientButton
                            onClick={handleSubmit}
                            disabled={isSubmitting || !answers[current]}
                            className="px-5 py-2 transition rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                        </GradientButton>
                    ) : (
                        <GradientButton
                            onClick={next}
                            disabled={!answers[current]}
                            className="px-5 py-2"
                        >
                            Next →
                        </GradientButton>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="relative min-h-screen text-white px-8 sm:px-0 overflow-hidden">
            <div className="relative rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                    <div className="w-8 sm:w-11">
                        <img src={yclogo} alt="" />
                    </div>
                </Link>
            </div>

            <div className="absolute grid-svg top-[444px] right-[-424px]">
                <img src={dot} alt="" />
            </div>

            <div className="absolute right-0 top-0">
                <img src={BGillustrate} alt="" />
            </div>

            <div className=" flex flex-row p-6 gap-10 lg:gap-20 max-w-xl lg:max-w-6xl mx-auto sm:min-h-screen items-start justify-start min-h-[100dvh]">
                <div className="w-full lg:w-1/2 hidden sm:block">
                    <span className="!font-medium">Applying for</span>
                    <p className=" !font-bold !text-[#fefe00] !text-[30px] mb-4">The YC Communication Cohort</p>

                    <div className="py-2 border-b border-[#fefe00]">
                        <label className="text-sm text-white">Email <span className="text-yellow-400">*</span></label>
                        <div className="mt-1 bg-[#141414] rounded-xl py-2 px-3 min-h-[40px] flex items-center">
                            {email || <span className="text-gray-500">Not entered yet</span>}
                        </div>
                    </div>

                    {questions.map((q, i) => (
                        <div className="py-2 border-b border-[#fefe00]" key={i}>
                            <label className="text-sm text-white">{q.label} <span className="text-yellow-400">*</span></label>
                            <div className="mt-1 bg-[#141414] rounded-xl py-2 px-3 min-h-[40px] flex items-center">
                                {answers[i] || <span className="text-gray-500">Not answered yet</span>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full lg:w-1/2 z-10 flex">{renderRightSide()}</div>
            </div>

            {popupMessage && (
    <Popup
        message={popupMessage}
        onClose={() => {setPopupMessage("");  
              window.location.href = "/";
        }
        }
        
    />
)}

        </div>
    );
}