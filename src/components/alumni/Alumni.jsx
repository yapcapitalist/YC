import React, { useState } from "react";
import AlumniCard from "./AlumniCards";
import AlumniModal from "./AlumniModal";
import alumniData from "./alumniData";
import "./alumni.css";
// import dot from "../../assets/hero-brain.svg";
import Illustration from '../../assets/Header.png'

const Alumni = () => {
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  return (
    <section className="flex flex-col relative py-16 sm:py-[158px] px-4 sm:px-25 overflow-hidden">
            <img src={Illustration} alt="" className="object-fill absolute top-[0px] left-1/2 -translate-x-1/2  z-0" />

      {/* <div className="absolute grid-svg hero-gridsvg bottom-[-168px] right-[-534px] [@media(min-width:1600px)]:right-[-644px] !z-6">
        <img src={dot} alt="" width="" height="" />
      </div> */}
      <h2 className="text-center py-21 sm:py-21 z-7">YC-Alumni</h2>
      <div className="alumni-section z-7">
      {alumniData.map((item) => (
        <AlumniCard 
          key={item.id} 
          data={item} 
          onClick={() => setSelectedAlumni(item)}
        />
      ))}
      
      {selectedAlumni && (
        <AlumniModal 
          data={selectedAlumni} 
          onClose={() => setSelectedAlumni(null)}
        />
      )}
      </div>
    </section>
  );
};

export default Alumni;