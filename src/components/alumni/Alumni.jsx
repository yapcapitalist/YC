import React from "react";
import AlumniCard from "./AlumniCards";
import alumniData from "./alumniData";
import "./alumni.css";

const Alumni = () => {
  return (
    <section className="alumni-section relative py-16 sm:py-[158px] px-4 sm:px-25 overflow-hidden">
      {alumniData.map((item) => (
        <AlumniCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default Alumni;