import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    title: "Token & Liquidity Locking",
    description:
      "Lock token allocations, team vesting, and liquidity with customizable smart contracts and transparent public locks—on-chain.",
    gradient: "from-purple-500 via-pink-500 to-purple-600",
    size: "tall",
  },
  {
    title: "Native Solana Staking Pools",
    description:
      "Deploy customizable staking programs with adjustable APY, lock durations, and reward distributions—fully on-chain.",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    size: "wide",
  },
  {
    title: "Launch Security & Compliance Tools",
    description:
      "Enhance credibility and protect investors with Chaincross locking modules, preventing early unlocks, unauthorized access, and manipulation.",
    gradient: "from-teal-400 via-green-500 to-emerald-600",
    size: "square",
  },
  {
    title: "Unified Dashboard",
    description:
      "Manage and monitor locked assets and staking pools from a single interface, with real-time data, wallet access control, and performance insights.",
    gradient: "from-purple-400 via-violet-500 to-purple-600",
    size: "tall",
  },
];

const WhatWeOfferCardsSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
            WHAT WE OFFER
          </h2>
        </div>

        {/* Mobile View: arrows outside scroll area */}
        <div className="relative md:hidden mb-6">
          {/* Arrow Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-36 transform -translate-y-1/2 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20"
          >
            <FaArrowLeft className="text-white text-lg" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-36 transform -translate-y-1/2 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20"
          >
            <FaArrowRight className="text-white text-lg" />
          </button>

          {/* Scrollable card container with padding so arrows don’t overlap */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 px-10 scrollbar-hide scroll-smooth"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[70vw] sm:w-[280px]"
              >
                <div
                  className={`bg-gradient-to-br ${card.gradient}
                    p-6 text-white flex items-center justify-center 
                    relative group transition-all duration-300 
                    rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105
                    ${
                      card.size === "tall"
                        ? "h-80"
                        : card.size === "wide"
                        ? "h-48"
                        : card.size === "square"
                        ? "h-64"
                        : "h-48"
                    }
                `}
                >
                  <h3 className="font-heading text-xl font-bold text-center leading-tight px-4">
                    {card.title}
                  </h3>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
                <div className="mt-6 px-2">
                  <p className="text-white/90 text-[18px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid view */}
        <div className="hidden md:grid overflow-visible gap-6 auto-rows-auto md:grid-cols-4">
          {cards.map((card, i) => (
            <div key={i} className="md:flex md:flex-col w-full">
              <div
                className={`bg-gradient-to-br ${card.gradient}
                  p-6 text-white flex items-center justify-center 
                  relative group transition-all duration-300 
                  rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105
                  ${card.size === "tall" ? "h-80 md:row-span-2" : ""}
                  ${card.size === "wide" ? "h-48 md:col-span-2" : ""}
                  ${card.size === "square" ? "h-64" : ""}
                  ${!card.size ? "h-48" : ""}
                `}
              >
                <h3 className="font-heading text-xl md:text-2xl font-bold text-center leading-tight px-4">
                  {card.title}
                </h3>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
              <div className="mt-6 px-2">
                <p className="text-white/90 text-[18px] leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferCardsSection;
