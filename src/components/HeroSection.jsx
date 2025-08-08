import React, { useEffect, useState } from "react";
import PresaleCard from "./PresaleCard";
import bgMask from "../assets/Mask group.png";
import MobileImg from "../assets/Logo/Mobile/Rectangle 3147.png";

const HeroSection = () => {
const [bgImage, setBgImage] = useState(bgMask); // ✅ Correct for .jsx

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth <= 500) {
        setBgImage(MobileImg);
      } else {
        setBgImage(bgMask);
      }
    };

    updateBg(); // set on initial load
    window.addEventListener("resize", updateBg); // update on resize

    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <section>
      <div
        className="relative px-6 overflow-hidden w-[95%] items-start justify-start mx-auto rounded-3xl"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto cols lg:grid-cols-2 gap-16 items-start justify-start min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-heading text-3xl md:text-3xl pt-10 lg:text-4xl font-extrabold text-white leading-tight">
              INSTITUTIONAL{" "}
              <span className="bg-gradient-to-r from-cta to-secondary bg-clip-text text-transparent">
                GRADE
              </span>
              <br />
              SECURITY AND <br />
              STAKING ON{" "}
              <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
                SOLANA
              </span>
            </h1>
            <div className="flex gap-4 text-[19px] lg:text-[25px] pt-2">
              <button className="text-white font-normal h-[37px] w-[160px] lg:h-[51px] lg:w-[215px] rounded-[7px] bg-[#5bc6de] hover:shadow-cta/25 hover:scale-105 transition-all duration-200">
                Launch App
              </button>
              <button className="text-white font-normal h-[37px] w-[160px] lg:h-[51px] lg:w-[215px] rounded-[7px] bg-[#49d6cc] hover:shadow-cta/25 hover:scale-105 transition-all duration-200">
                Buy Token
              </button>
            </div>
            {/* Mobile: Presale Card */}
            <div
              className="lg:hidden flex justify-center pb-96 lg:pb-2"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <PresaleCard />
            </div>
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden lg:flex items-center justify-start relative">
            <PresaleCard />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:items-start">
        <p className="hidden lg:block w-[40%]"></p>
        <p className="w-full text-[15px] lg:text-[22px] lg:w-[50%] text-center lg:text-left px-4">
          Chaincross is a decentralized protocol on Solana, offering secure token locking, staking, and anti-rug mechanisms for transparency, accountability, and investor protection in token launches and DeFi.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
