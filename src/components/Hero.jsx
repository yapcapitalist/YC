import scroll from '../assets/Scroll.svg';
import heroBrain from '../assets/hero-brain.svg';
import dot from "../assets/Dot Background.svg";


export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-4 py-20 pb-0 relative overflow-hidden">

      <img src={heroBrain} alt="" className="max-w-[800px] object-fill absolute top-[0px] left-1/2 -translate-x-1/2 opacity-80 z-1" />

      <div className="absolute grid-svg top0 right-[-368px] !z-0">
        <img src={dot} alt="" width="" height="" />
      </div>

      <div className="max-w-6xl text-center z-10">
        <h1 className="leading-tight mb-6">
          You are only as good as you <br />
          communicate
        </h1>

        <p className="">
          India’s Most Selective 12-Week Communication Cohort for Ambitious<br />
          Founders, Professionals and Graduates.
        </p>

        <button className="bg-yellow-400 text-black font-semibold !px-17 py-3 rounded-full shadow-lg hover:shadow-yellow-500 transition duration-200 my-[36px]">
          JOIN WAITLIST
        </button>

        <p className="text-sm text-white-600 font-semibold">
          20 Seats | Handpicked | No Fluff
        </p>

        {/* Optional down arrow */}
        <div className="mt-6 flex justify-center items-center">
          <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L21 14L41 1" stroke="#868600" stroke-width="2" />
            <path d="M1 8L21 21L41 8" stroke="#868600" stroke-opacity="0.5" stroke-width="2" />
            <path d="M1 15L21 28L41 15" stroke="#868600" stroke-opacity="0.35" stroke-width="2" />
            <path d="M1 22L21 35L41 22" stroke="#868600" stroke-opacity="0.2" stroke-width="2" />
            <path d="M1 29L21 42L41 29" stroke="#868600" stroke-opacity="0.1" stroke-width="2" />
          </svg>
        </div>
      </div>

    </section>
  );
}
