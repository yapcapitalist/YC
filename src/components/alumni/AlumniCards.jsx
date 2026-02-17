import React from "react";
import { Linkedin, Twitter } from "lucide-react";
import "./alumni.css";

const AlumniCard = ({ data, onClick }) => {
  const roleLine = [data.title, data.company ? `at ${data.company}` : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article className="alumni-row" onClick={onClick}>
      <div className="alumni-card-image-wrap">
        <img className="alumni-card-image" src={data.profileImage} alt={data.name} />
      </div>

      <div className="alumni-card-content">
        <h3 className="alumni-card-name">{data.name}</h3>
        {roleLine && <p className="alumni-card-role">{roleLine}</p>}

        <div className="alumni-card-socials">
          {data.twitter && (
            <a
              href={data.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="alumni-card-social-link"
              onClick={(event) => event.stopPropagation()}
              aria-label={`${data.name} on Twitter`}
            >
              <Twitter size={24} strokeWidth={1.9} />
            </a>
          )}

          {data.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="alumni-card-social-link"
              onClick={(event) => event.stopPropagation()}
              aria-label={`${data.name} on LinkedIn`}
            >
              <Linkedin size={24} strokeWidth={1.9} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default AlumniCard;
