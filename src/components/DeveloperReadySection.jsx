import React, { useEffect, useState } from "react";
import bgImage from "../assets/dashboard 3.png";
import MobileImg from "../assets/Logo/Mobile/Rectangle 3159.png";

const DeveloperReadySection = () => {
  const [background, setBackground] = useState(bgImage); // default to desktop

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth <= 420) {
        setBackground(MobileImg);
      } else {
        setBackground(bgImage);
      }
    };

    updateBg(); // Set initial background
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <section className="mt-10 px-4 max-w-7xl mx-auto">
      <div className="relative">
        {/* Glowing border effect */}
        <div
          className="absolute -inset-1 rounded-3xl blur-sm"
          style={{
            background: "linear-gradient(45deg, #ff0080, #ff0080)",
            opacity: 0.8,
          }}
        />

        {/* Border */}
        <div
          className="absolute inset-0 rounded-3xl p-[2px]"
          style={{
            background: "linear-gradient(45deg, #ff0080, #ff0080)",
          }}
        >
          <div className="h-full w-full rounded-3xl bg-black" />
        </div>

        {/* Main content */}
        <div
          className="relative sm:bg-cover bg-black rounded-3xl p-16 flex flex-col lg:flex-row items-center gap-12 min-h-[500px]"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex-1 flex flex-col gap-6 pb-56 lg:pb-1">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
              DEVELOPER <span className="sm:hidden lg:text-white">–</span> READY
            </h2>
            <p className="text-white/90 text-[16px] lg:text-[21px] max-w-3xl leading-relaxed">
              Chaincross offers a developer suite with APIs, <br />
              SDKs, and smart contracts to streamline locking <br />
              and staking on Solana.
            </p>
            <ul className="text-white/90 text-[16px] lg:text-[21px] list-disc pl-6 mb-4">
              <li>Solana-native smart contract kits</li>
              <li>Anchor framework compatibility</li>
              <li>REST APIs & Webhook support</li>
              <li>Step-by-step technical documentation</li>
            </ul>
            <div className="flex text-[20px] lg:text-[26px] flex-col pb-44 lg:pb-1 gap-4">
              <button
                className="text-white font-normal hover:shadow-cta-green/25 hover:scale-105 transition-all h-[38px] w-[200px] lg:h-[51px] lg:w-[298px] rounded-[6px] duration-200"
                style={{ backgroundColor: "#CB128A" }}
              >
                Developer Portal
              </button>
              <button
                className="text-white text-xl lg:text-2xl hover:shadow-cta-green/25 hover:scale-105 transition-all font-normal h-[37px] w-[165px] lg:h-[51px] lg:w-[252px] rounded-[6px] duration-200"
                style={{ backgroundColor: "#00d4aa" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperReadySection;
