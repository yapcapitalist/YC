import React from "react";
import YCForm from "./YcForm.jsx";
import Reshero from "./Res-hero.jsx";
import YCContactFooter from './Footer.jsx';
import StickyHeader from "./Head.jsx";


export default function DriveVideoPlayer() {
  const fileId = "1nwE9iRmP5a9SHh-2wB_u2T1zZbeLAorA";
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div>
                      <StickyHeader />
        
        <Reshero/>

      <div className="w-full max-w-6xl mx-auto pb-12 sm:pb-[158px] px-6 sm:px-4 ">
        <h2 className="font-bold !text-[#fefe00] mb-12 text-center">
         Communication Masterclass
      </h2>
        <iframe
          src={embedUrl}
          width="100%"
          height="480"
          allow="autoplay"
          className="rounded-xl shadow-lg border-4 border-[#fefe00] rounded-2xl"
        ></iframe>
      </div>

      <YCForm />
      
    <YCContactFooter/>
    </div>
  );
}
