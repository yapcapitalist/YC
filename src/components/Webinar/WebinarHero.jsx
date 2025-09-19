import { useEffect } from "react";
import dot from "../../assets/Dot Background.svg";
import Illustration from "../../assets/Header.png";
import GradientButton from "../ui/GradientButton";

export default function WebHero() {
  // useEffect(() => {
  //   if (!document.getElementById("razorpay-embed-btn-js")) {
  //     const script = document.createElement("script");
  //     script.defer = true;
  //     script.id = "razorpay-embed-btn-js";
  //     script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
  //     document.body.appendChild(script);
  //   } else {
  //     const rzp = window["_rzp_"];
  //     rzp && rzp.init && rzp.init();
  //   }
  // }, []);

  return (
    <section className="relative bg-black overflow-hidden text-white min-h-[550px] sm:min-h-screen flex items-center justify-center px-1 py-0 sm:py-20 pb-0">
      <img
        src={Illustration}
        alt=""
        className="object-fill absolute top-[0px] left-1/2 -translate-x-1/2 z-4"
      />

      <div className="absolute grid-svg hero-gridsvg bottom-[-168px] right-[-534px] [@media(min-width:1600px)]:right-[-644px] !z-6">
        <img src={dot} alt="" />
      </div>

      <div className="max-w-6xl text-center z-10">
        <h1 className="leading-tight mb-6">
          Unlock the Proven System Behind High-Performance Agencies
        </h1>

        <p className="px-2 sm:py-0 max-w-3xl mx-auto">
          Gurmeet has turned years of trial, error, and scaling into a repeatable
          framework that delivers clarity for teams, consistency for clients, and
          growth that compounds. In this live session, you’ll see exactly how it
          works.
        </p>

        <p className="text-sm text-white-600 font-semibold my-4">
          28 Sep 2025 | 02:00 PM IST
        </p>
        <p className="text-sm text-white-600 font-semibold mt-2">
          Paid Live Webinar | Limited Seats
        </p>

        {/* <div
          className="razorpay-embed-btn"
          data-url="https://pages.razorpay.com/pl_RJ7BNosGN9dF4e/view"
          data-text="RESERVE MY SEAT"
          data-color="#fefe00"
          data-size="large"
        ></div> */}
        <GradientButton
          onClick={() => {
            window.open("https://pages.razorpay.com/pl_RJ7BNosGN9dF4e/view", "_blank");
          }}                            // className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-medium"
        >
          RESERVE MY SEAT
        </GradientButton>
      </div>
    </section>
  );
}
