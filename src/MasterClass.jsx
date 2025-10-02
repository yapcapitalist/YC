import React from "react";

export default function Master() {
  const embedUrl = "https://drive.google.com/file/d/1ikvZfoeIYqfQuY8rgHlJnqpRnqohI1Cg/preview";

  return (
    <section className="w-full bg-black flex-col flex justify-center items-center py-10">
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
  );
}
