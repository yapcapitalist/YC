import React from "react";

export default function Popup({ message, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-[#1a1a1a] text-white px-6 py-5 rounded-xl shadow-lg border border-yellow-500 max-w-sm w-[90%] text-center animate-fadeIn">
                <p className="text-base sm:text-lg mb-4 leading-relaxed">{message}</p>
                <button
                    onClick={onClose}
                    className="hover:text-white bg-black hover:bg-[#fefe00] text-white font-medium px-5 py-2 rounded transition"
                >
                    OK
                </button>
            </div>
        </div>
    );
}
