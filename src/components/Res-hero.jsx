// import scroll from '../assets/Scroll.svg';
// import heroBrain from '../assets/hero-brain.svg';
import dot from "../assets/Dot Background.svg";
import Illustration from '../assets/Header.png'


export default function Reshero() {
  return (
    <section className="relative bg-black overflow-hidden text-white min-h-[550px] sm:min-h-screen flex items-center justify-center px-1 py-0 sm:py-20 pb-0 relative overflow-hidden">

      <img src={Illustration} alt="" className="object-fill absolute top-[0px] left-1/2 -translate-x-1/2  z-4" />

      <div className="absolute grid-svg hero-gridsvg bottom-[-168px] right-[-534px] [@media(min-width:1600px)]:right-[-644px] !z-6">
        <img src={dot} alt="" width="" height="" />
      </div>

      <div className="max-w-6xl text-center z-10">
        <h1 className="leading-tight mb-6"> 50 Applied | 4 selected</h1>
      </div>

    </section>
  );
}
