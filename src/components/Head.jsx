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
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center z-[60]">
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
          className="md:hidden text-white !p-0 z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Full-Screen Slide-In Menu with Smooth Transition */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-white text-2xl font-medium transform transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-50 ${menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
          }`}
      >
        <Link
          to="/resources"
          onClick={() => setMenuOpen(false)}
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          Resources
        </Link>

        {/* {pageLocation ? (
          <GradientButton
            onClick={() => {
              window.open(
                "https://pages.razorpay.com/pl_RJ7BNosGN9dF4e/view",
                "_blank"
              );
              setMenuOpen(false);
            }}
          >
            RESERVE MY SEAT
          </GradientButton>
        ) : (
          <GradientButton
            onClick={() => {
              gotoWaitlist();
              setMenuOpen(false);
            }}
          >
            JOIN WAITLIST
          </GradientButton>
        )} */}

        <Link
          to="/masterclass"
          onClick={() => setMenuOpen(false)}
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          Masterclass
        </Link>


      </div>
    </header>
  );
}
