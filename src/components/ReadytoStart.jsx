import React from 'react';
import readyImage from '../assets/ready.png'; // Adjust path if needed

const StartCreatorCareer = () => {
  return (
    <div className="bg-black text-center py-24 px-6">
      {/* Image */}
      <img
        src={readyImage}
        alt="Ready to Start Your Creator Career"
        className="mx-auto max-w-[800px] w-full mb-12"
      />

      {/* Glowing Button */}
      <button
        className="relative text-black font-bold text-xs md:text-sm px-6 py-3 rounded-full bg-black border-2 border-yellow-400 hover:bg-yellow-400 transition-colors duration-300"
        style={{
          boxShadow: '0 0 0 3px black, 0 0 0 6px #ffff00',
          color: '#ffff00',
        }}
      >
        SUBMIT ENTRANCE APPLICATION
      </button>
    </div>
  );
};

export default StartCreatorCareer;
