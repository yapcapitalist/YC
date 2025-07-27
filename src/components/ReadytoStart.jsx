import React from 'react';
import readyImage from '../assets/ready.png'; // Adjust path if needed

const StartCreatorCareer = () => {
  return (
    <div className="bg-black text-center px-6 pb-[158px]">
      {/* Image */}
      <img
        src={readyImage}
        alt="Ready to Start Your Creator Career"
        className="mx-auto max-w-[800px] w-full mb-20"
      />

      {/* Glowing Button */}
      <button className="">
        SUBMIT ENTRANCE APPLICATION
      </button>
    </div>
  );
};

export default StartCreatorCareer;
