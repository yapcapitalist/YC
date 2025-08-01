// import scroll from '../assets/Scroll.svg';
// import heroBrain from '../assets/hero-brain.svg';
import dot from "../assets/Dot Background.svg";
import Illustration from '../assets/Header.png'




export default function Hero() {
  return (
    <section className="relative bg-black overflow-hidden text-white min-h-[550px] sm:min-h-screen flex items-center justify-center px-1 py-0 sm:py-20 pb-0 relative overflow-hidden">

      <img src={Illustration} alt="" className="object-fill absolute top-[0px] left-1/2 -translate-x-1/2  z-4" />

      <div className="absolute grid-svg hero-gridsvg bottom-[-168px] right-[-534px] [@media(min-width:1600px)]:right-[-644px] !z-6">
        <img src={dot} alt="" width="" height="" />
      </div>

      <div className="max-w-6xl text-center z-10">
        <h1 className="leading-tight mb-6">You are only as good as you communicate</h1>

        <p className="px-2 sm:py-0 max-w-3xl mx-auto">
          India’s Most Selective 12-Week Communication Cohort for Ambitious 
          Founders, Professionals and Freelancers.
        </p>

        <p className="text-sm text-white-600 font-semibold mt-2">
          20 Seats | Handpicked | No Fluff
        </p>

        
        {/* <div className="w-full flex flex-col items-center justify-center align-center">
          <p className="w-[28%] h-2 bg-gray-700 rounded-full overflow-hidden my-4 sm:my-8">
            <span className="block h-full bg-[#fefe00] w-[44%] rounded-full"></span>
          </p>
          <p>Only 14 Seats Avilable</p>
        </div> */}

        {/* Optional down arrow */}
        {/* Down arrow with sequential brightening effect */}
        <div className="mt-6 flex justify-center items-center"
          onClick={() => {
            const el = document.getElementById("program-details");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}>
          <svg class="homesvg" width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1L21 14L41 1"
              stroke="#868600"
              strokeWidth="2"
              className="arrow-path-1"
            />
            <path
              d="M1 8L21 21L41 8"
              stroke="#868600"
              strokeWidth="2"
              className="arrow-path-2"
            />
            <path
              d="M1 15L21 28L41 15"
              stroke="#868600"
              strokeWidth="2"
              className="arrow-path-3"
            />
            <path
              d="M1 22L21 35L41 22"
              stroke="#868600"
              strokeWidth="2"
              className="arrow-path-4"
            />
            <path
              d="M1 29L21 42L41 29"
              stroke="#868600"
              strokeWidth="2"
              className="arrow-path-5"
            />
          </svg>
        </div>

        {/* CSS for the brightening animation */}
        <style jsx>{`
  @keyframes brighten {
    0%, 80% {
      opacity: 0.1;
      filter: brightness(0.3);
    }
    20%, 60% {
      opacity: 1;
      filter: brightness(2) drop-shadow(0 0 3px #868600);
    }
  }

  .arrow-path-1 {
    animation: brighten 4s ease-in-out infinite;
    animation-delay: 0s;
  }

  .arrow-path-2 {
    animation: brighten 4s ease-in-out infinite;
    animation-delay: 0.4s;
  }

  .arrow-path-3 {
    animation: brighten 4s ease-in-out infinite;
    animation-delay: 0.6s;
  }

  .arrow-path-4 {
    animation: brighten 4s ease-in-out infinite;
    animation-delay: 0.8s;
  }

  .arrow-path-5 {
    animation: brighten 4s ease-in-out infinite;
    animation-delay: 0.10s;
  }
`}</style>
      </div>

    </section>
  );
}
