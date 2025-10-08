import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import yclogo from "../assets/YAAP_CAPITAL.svg";
import GradientButton from "./ui/GradientButton";

export default function StickyHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const pageLocation = pathname === "/webinar";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pageLocation) {
      const el = document.getElementById("webform");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [pageLocation]);

  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);

  const gotoWaitlist = () => {
    const scrollToTarget = () => {
      const el = document.getElementById("program-details");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (pathname === "/") {
      scrollToTarget();
    } else {
      navigate("/");
      setTimeout(scrollToTarget, 450);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all overflow-hidden duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3 relative">
        {/* Hamburger (left, only mobile) */}

        {/* Centered Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <div className="w-8 sm:w-11">
              <img src={yclogo} alt="Logo" className="w-full h-auto" />
            </div>
          </Link>
        </div>

        {/* Right-side button */}
        <div className="absolute sm:relative sm:left-0 left-1/2 transform -translate-x-1/2 flex items-center z-[60]">
          {pageLocation ? (
            <GradientButton
              onClick={() =>
                window.open(
                  "https://pages.razorpay.com/pl_RJ7BNosGN9dF4e/view",
                  "_blank"
                )
              }
            >
              RESERVE MY SEAT
            </GradientButton>
          ) : (
            <GradientButton onClick={gotoWaitlist}>JOIN WAITLIST</GradientButton>
          )}
        </div>

        <button
          className="md:hidden text-white !p-0 z-[64]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Full-Screen Slide-In Menu with Smooth Transition */}
<div
  className={`fixed top-0 right-0 h-screen bg-black/95 backdrop-blur-md flex flex-col items-start justify-start gap-4 text-white text-2xl font-medium transform transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-[62] px-8 py-20 ${
    menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
  }`}
  style={{
    width: "fit-content",
    minWidth: "250px",
    inset: "0 0 0 auto",
    pointerEvents: menuOpen ? "auto" : "none",
  }}
>
  {/* Close button */}
  {/* <button
    onClick={() => setMenuOpen(false)}
    className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
    aria-label="Close menu"
  >
    <X size={28} />
  </button> */}

  {/* Menu links */}
  <Link
    to="/resources"
    onClick={() => setMenuOpen(false)}
    className="hover:text-[#fefefe] transition-colors duration-200 mt-16 !text-[16px]"
  >
    Resources
  </Link>

  <Link
    to="/masterclass"
    onClick={() => setMenuOpen(false)}
    className="hover:text-[#fefefe] transition-colors duration-200 !text-[16px]"
  >
    Agency Masterclass
  </Link>
</div>

    </header>
  );
}
