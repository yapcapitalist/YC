import React from "react";
import "./alumniModal.css";

const AlumniModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-body">
          {/* Left - Image */}
          <div className="modal-image-section">
            <img src={data.profileImage} alt={data.name} className="modal-image" />
          </div>

          {/* Right - Details */}
          <div className="modal-details-section">
            <h2 className="modal-name">{data.name}</h2>
            
            <div className="modal-info">
              <span className="info-badge">{data.location}</span>
              <span className="info-badge">{data.cohort}</span>
            </div>

            <p className="modal-headline">{data.headline}</p>

            <p className="modal-description">{data.description}</p>

            {/* Social Links */}
            <div className="modal-socials">
              <a 
                href={data.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link twitter"
                title="Twitter"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a14.028 14.028 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href={data.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
                title="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.252-.129.604-.129.957v5.41h-3.553s.047-8.733 0-9.633h3.553v1.36c.423-.652 1.178-1.581 2.868-1.581 2.049 0 3.586 1.338 3.586 4.213v5.641zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.963-1.71 1.192 0 1.915.75 1.929 1.71 0 .951-.737 1.71-1.977 1.71zm1.582 11.597H3.656V9.819h3.263v10.633zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            <a 
                href={data.graduation} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link certificate"
                title="Certificate"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 5v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-2 0H5v12h14V5zm-8 9c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniModal;
