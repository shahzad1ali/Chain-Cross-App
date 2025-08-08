import React, { useEffect, useState } from "react";
import bgImage from "../assets/dashboard 4.png";
import MobileImg from "../assets/Logo/Mobile/Rectangle 3163.png";

const SecurityAuditSection = () => {
  const [background, setBackground] = useState(bgImage);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth <= 420) {
        setBackground(MobileImg);
      } else {
        setBackground(bgImage);
      }
    };

    updateBackground(); // initial check
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div
        className="pb-72 lg:pb-9 pr-4 lg:pr-0 bg-background-card min-h-[420px] lg:min-h-[380px] border-2 border-cta-purple rounded-3xl p-12 flex flex-col lg:flex-row items-center gap-12"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(34, 197, 94, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        <div className="gap-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
            SECURITY & AUDIT
          </h2>
          <p className="text-white/90 text-[16px] lg:text-[21px] max-w-2xl leading-relaxed drop-shadow-md pt-3">
            Chaincross ensures security with audited <br />
            contracts, open-source access, third-party <br />
            verification, and transparent governance.
          </p>
          <ul className="text-white/90 text-[16px] lg:text-[21px] list-disc pl-6 mt-10">
            <li>Solana-native smart contract kits</li>
            <li>Anchor framework compatibility</li>
            <li>REST APIs & Webhook support</li>
            <li>Step-by-step technical documentation</li>
          </ul>
          <div className="flex flex-col gap-4 pb-11 lg:pb-0 pt-10">
            <button className="bg-cta-purple text-white font-normal text-[20px] hover:shadow-cta-purple/25 hover:scale-105 transition-all h-[38px] w-[200px] lg:h-[51px] lg:w-[290px] rounded-[6px]">
              View Audit Report
            </button>
            <button className="bg-cta text-white font-normal h-[37px] text-[20px] w-[165px] lg:h-[51px] lg:w-[250px] rounded-[6px] hover:bg-cta-hover hover:scale-105 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAuditSection;
