import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import yclogo from '../assets/YAAP_CAPITAL.svg';
import GradientButton from "./ui/GradientButton";

export default function StickyHeader() {

  const { pathname } = useLocation()
  const Navigate = useNavigate();

  const pageLocation = pathname === '/webinar'

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all overflow-hidden duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className={`transition-all duration-300 ${scrolled
            ? "opacity-100 -translate-y-4 pointer-events-none mt-4"
            : "opacity-100 translate-y-0 mt-4"
            }`}
        >
          <Link to="/">

            <div className="w-8 sm:w-11">
              <img src={yclogo} alt="Logo" className="w-full h-auto" />
            </div>

          </Link>

        </div>
        <div className="">

        {/* Button */}
        <GradientButton
          onClick={() => {
            const targetId = pageLocation ? "webform" : "program-details";

            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >

          {pageLocation ? 'JOIN WEBINAR' : 'JOIN WAITLIST'}

        </GradientButton>

        {!pageLocation && (
          <GradientButton
            onClick={() => {
              Navigate('/webinar')
                  window.scrollTo({ top: 0, behavior: "smooth" });

            }}
          >

            JOIN WEBINAR

          </GradientButton>
        )}
        </div>
      </div>
    </header>
  );
}
