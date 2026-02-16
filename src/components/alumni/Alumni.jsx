import React, { useState } from "react";
import AlumniCard from "./AlumniCards";
import AlumniModal from "./AlumniModal";
import alumniData from "./alumniData";
import "./alumni.css";

const Alumni = () => {
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  return (
    <section className="alumni-section relative py-16 sm:py-[158px] px-4 sm:px-25 overflow-hidden">
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
    </section>
  );
};

export default Alumni;