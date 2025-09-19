import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import yclogo from '../assets/YAAP_CAPITAL.svg';
import GradientButton from "./ui/GradientButton";

export default function StickyHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const pageLocation = pathname === "/webinar";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Scroll to webform ONLY when webinar page loads
  useEffect(() => {
    if (pageLocation) {
      const el = document.getElementById("webform");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // small delay ensures element is in DOM
      }
    }
  }, [pageLocation]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all overflow-hidden duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className=""
        >
          <Link to="/">
            <div className="w-8 sm:w-11">
              <img src={yclogo} alt="Logo" className="w-full h-auto" />
            </div>
          </Link>
        </div>

<div className="flex items-center gap-4">
  {pageLocation ? (
    // Show only on webinar page
    <GradientButton
  onClick={() => {
            window.open("https://pages.razorpay.com/pl_RJ7BNosGN9dF4e/view", "_blank");
          }}  
    >
                RESERVE MY SEAT
    </GradientButton>
  ) : (
    // Show on every other page
    <GradientButton
      onClick={() => {
        const el = document.getElementById("program-details");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      JOIN WAITLIST
    </GradientButton>
  )}
</div>
      </div>
    </header>
  );
}
