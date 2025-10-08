import React from "react";
import StickyHeader from "./Head.jsx";
import ProgramDetails from './Program-Details.jsx';
import Footer from "./Footer.jsx";
import yclogo from '../assets/YAAP_CAPITAL.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import GradientButton from "./ui/GradientButton";



export default function Master() {
  // const embedUrl = "https://drive.google.com/file/d/1ikvZfoeIYqfQuY8rgHlJnqpRnqohI1Cg/preview";

  const gotoWaitlist = () => {
    const scrollToTarget = () => {
      const el = document.getElementById("program-details");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    scrollToTarget();

  };

  return (
    <>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div>
          <Link to="/">
            <div className="w-8 sm:w-11">
              <img src={yclogo} alt="Logo" className="w-full h-auto" />
            </div>
          </Link>
        </div>

        <div className="flex items-center">
          <GradientButton onClick={gotoWaitlist}>
            JOIN WAITLIST
          </GradientButton>
        </div>
      </div> */}

      <StickyHeader/>

      <section className="w-full bg-black flex-col flex justify-center items-center py-10 pb-16 sm:pb-[158px] px-4 sm:px-0 max-w-6xl mx-auto">
        <h2 className="font-bold !text-[#fefe00] mb-12 text-center">
         Agency Masterclass </h2>
        <div className="w-full max-w-5xl aspect-video border-4 border-[#fefe00] rounded-2xl master-frame">
          <iframe width="auto" height="auto" src="https://www.youtube.com/embed/vQFbUbpQmD8?si=X4kTgdhVcg5vvItd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      <ProgramDetails />

      <Footer />

    </>
  );
}
