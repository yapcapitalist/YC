import React from "react";
import StickyHeader from "./Head.jsx";
import ProgramDetails from './Program-Details.jsx';
import Footer from "./Footer.jsx";


export default function Master() {
  const embedUrl = "https://drive.google.com/file/d/1ikvZfoeIYqfQuY8rgHlJnqpRnqohI1Cg/preview";

  return (
    <>
                          <StickyHeader />
    
    <section className="w-full bg-black flex-col flex justify-center items-center py-10 pb-16 sm:pb-[158px] max-w-6xl mx-auto">
      <h2 className="font-bold !text-[#fefe00] mb-12 text-center">
        Masterclass </h2>
      <div className="w-full max-w-5xl aspect-video border-4 border-[#fefe00] rounded-2xl">
        <iframe
          src={embedUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full rounded-2xl shadow-lg border-0"
        ></iframe>
      </div>
    </section>

              <ProgramDetails />

              <Footer />

    </>
  );
}
