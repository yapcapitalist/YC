import { useEffect, useState } from "react";
import yclogo from '../assets/YAAP_CAPITAL.svg' // Assuming you have a logo image

export default function StickyHeader() {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className={`transition-all duration-300 ${scrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
            }`}
        >
          <div className="relative w-11 rounded z-2">
            <img src={yclogo} alt="" />
          </div>
        </div>

        <button
          className="!px-17 py-3 rounded-full my-[36px] !m-0"
          onClick={() => {
            const el = document.getElementById("program-details");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          JOIN WAITLIST
        </button>
      </div>
    </header>
  );
}
