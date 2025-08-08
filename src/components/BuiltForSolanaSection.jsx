import React, { useEffect, useState } from "react";
import bgImage from "../assets/dashboard 2 1.png";
import MobileImg from "../assets/Logo/Mobile/Rectangle 3156.png";

const BuiltForSolanaSection = () => {
  const [background, setBackground] = useState(bgImage); // Default to desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setBackground(MobileImg);
      } else {
        setBackground(bgImage);
      }
    };

    handleResize(); // Set initial background
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="px-4 max-w-7xl mx-auto">
      <div
        className="bg-background-card rounded-3xl p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden min-h-[420px] lg:min-h-[380px] pb-60"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "2px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
            0 0 0 2px rgba(255, 255, 255, 0.3),
            0 0 0 4px rgba(34, 197, 94, 0.6),
            0 0 0 6px rgba(59, 130, 246, 0.4),
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Gradient border overlay */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `
              linear-gradient(45deg, 
                rgba(255, 255, 255, 0.4) 0%, 
                rgba(34, 197, 94, 0.6) 33%, 
                rgba(59, 130, 246, 0.5) 66%, 
                rgba(255, 255, 255, 0.3) 100%
              )
            `,
            mask: `
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0)
            `,
            maskComposite: "xor",
            WebkitMask: `
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0)
            `,
            WebkitMaskComposite: "xor",
            padding: "2px",
          }}
        />

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>

        {/* Additional glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cta-green/20 to-purple-500/20 rounded-3xl blur-sm -z-10"></div>

        <div className="flex-1 flex flex-col gap-8 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            BUILT EXCLUSIVELY FOR SOLANA
          </h2>
          <p className="text-white/90 max-w-2xl text-[16px] lg:text-[21px] leading-relaxed drop-shadow-md">
            Chaincross uses Solana's fast throughput and low fees for a scalable, cost-effective, and user-friendly
            experience for builders and investors.
          </p>
          <div className="flex flex-col text-[18px] lg:text-[28px] lg:text-2xl gap-4">
            <button className="bg-[#09D553] text-white font-normal w-[310px] justify-start h-[40px] lg:w-[496px] lg:h-[51px] rounded-[6px] hover:shadow-cta-green/25 hover:scale-105 transition-all duration-200">
              Explore the Solana Integration
            </button>
            <button className="bg-[#2CD3B6] shadow-2xl hover:shadow-cta/25 hover:scale-105 text-white font-normal h-[37px] w-[165px] lg:h-[51px] lg:w-[242px] rounded-[6px] transition-all duration-200">
              Buy Now
            </button>
          </div>
        </div>

        <div className="flex-1 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default BuiltForSolanaSection;
