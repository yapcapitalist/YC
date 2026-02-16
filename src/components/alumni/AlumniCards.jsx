import React from "react";
import "./alumni.css";

const AlumniCard = ({ data, onClick }) => {
  return (
    <div className="alumni-row" onClick={onClick}>
      {/* LEFT GRID */}
      <div className="alumni-left">
        <div className="grid-item profile">
          <img src={data.profileImage} alt={data.name} />
        </div>

        <div className="grid-item location">
          <span>{data.location}</span>
        </div>

        <div className="grid-item cohort">
          <span>{data.cohort}</span>
        </div>

        <div className="grid-item name">
          <h3>{data.name}</h3>
        </div>
{/* 
        <div className="grid-item level">
          <span>Level up as a designer</span>
        </div> */}

        <div className="grid-item company">
          <img src={data.companyLogo} alt={data.company} />
          {/* <span>{data.title}</span> */}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="alumni-right flex flex-col alumni-fill-available justify-between">
        <h3>{data.headline}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default AlumniCard;