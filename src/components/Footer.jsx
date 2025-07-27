import React from "react";

export default function YCContactFooter() {
  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
        width: "100vw",
        minHeight: 230,
        fontFamily: "Manrope, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
        padding: 0,
        borderTop: "1px solid #161616",
        zIndex: 1,
      }}
    >
      {/* Background SVG - absolute left corner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          width="340"
          height="360"
          viewBox="0 0 356 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: "35vw", opacity: 0.28 }}
        >
          {/* Your SVG code or a simple translucent pattern */}
          <g opacity="0.6">
            {/* ...paths from your SVG... */}
            <rect x="30" y="30" width="170" height="130" stroke="#FEFE00" strokeWidth="1" opacity="0.12" />
          </g>
        </svg>
      </div>

      {/* Top - Contact Us Title */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "44px 0 0 0",
          zIndex: 1,
          position: "relative",
        }}
      >
        <h2
          style={{
            color: "#FFFF00",
            fontWeight: 800,
            fontSize: "2.6rem",
            letterSpacing: "-0.8px",
            lineHeight: 1.12,
            margin: 0,
          }}
        >
          Contact Us
        </h2>
      </div>

      {/* Main Grid Row: Left Info, Spacer, Right Policy */}
      <div
        className="yc-footer-main"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "22px 8vw 0 6vw",
          minHeight: 140,
          position: "relative",
          zIndex: 1,
          flexWrap: "nowrap",
        }}
      >
        {/* Left Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 15,
            minWidth: 210,
          }}
        >
          <div
            style={{
              background: "#ffff00",
              color: "#181818",
              fontWeight: 700,
              borderRadius: 9,
              fontSize: "1.20rem",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 10px #1112",
              marginBottom: 7,
              marginLeft: 2,
              letterSpacing: "0.05em",
            }}
          >
            YC
          </div>
          <div
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.12rem",
              marginBottom: 1,
              opacity: 0.96,
              letterSpacing: ".01em",
            }}
          >
            example@gmail.com
          </div>
          <div style={{ color: "#fff", fontWeight: 600, fontSize: "1.08rem", opacity: 0.96 }}>
            +91 1234567890
          </div>
        </div>
        {/* Empty Spacer */}
        <div style={{ flex: 1 }}></div>
        {/* Right Policy Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "16px",
            minWidth: 242,
            marginTop: 0,
          }}
        >
          <a href="/privacy-policy" style={policyBtnStyle}>
            PRIVACY POLICY
          </a>
          <a href="/refund-policy" style={policyBtnStyle}>
            REFUND POLICY
          </a>
          <a href="/terms-and-conditions" style={policyBtnStyle}>
            TERMS AND CONDITIONS
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "#888",
          fontWeight: 400,
          letterSpacing: "0.01em",
          fontSize: "0.93rem",
          padding: "30px 0 12px 0",
          opacity: 0.90,
          zIndex: 1,
        }}
      >
        © COPYRIGHT 2025 Gogrowth Labs PVT LTD.
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 900px) {
            .yc-footer-main {
              flex-direction: column;
              align-items: stretch !important;
              padding: 20px 3vw 0 8vw !important;
              gap: 18px;
            }
            .yc-footer-main > div {
              min-width: 0 !important;
              width: 100% !important;
              margin-bottom: 0 !important;
            }
            .yc-footer-main div[style*="alignItems: flex-end"] {
              align-items: flex-start !important;
              margin-top: 20px !important;
            }
          }
          @media (max-width: 650px) {
            .yc-footer-main {
              padding: 13px 2vw 0 3vw !important;
              gap: 14px;
            }
          }
          @media (max-width: 480px) {
            .yc-footer-main {
              padding: 6px 2vw 0 2vw !important;
            }
            .yc-footer-main > div {
              margin-bottom: 6px !important;
            }
            .yc-footer-main h2 {
              font-size: 1.25rem !important;
            }
          }
        `}
      </style>
    </footer>
  );
}

// Policy button style
const policyBtnStyle = {
  border: "2px solid #ffff00",
  borderRadius: 10,
  background: "#000",
  color: "#ffff00",
  fontWeight: 700,
  fontSize: "1rem",
  padding: "12px 32px",
  textDecoration: "none",
  letterSpacing: ".04em",
  transition: "background .12s, color .13s, border .15s",
  textAlign: "center",
  display: "block",
  minWidth: 220,
  boxShadow: "0 2px 12px #0001",
  cursor: "pointer",
};

