const features = [
  "Token Vesting & Locking",
  "Liquidity Locking",
  "Flexible, On-Chain Staking",
  "Transparent Launch Controls",
  "Real-Time Project Dashboards",
  "Full Smart Contract Audit Coverage",
];

const WhatWeOfferGridSection = () => (
  <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-800">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          WHAT WE OFFER
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800/90 backdrop-blur-sm py-6 md:py-8 px-4 md:px-6 text-white font-heading text-base md:text-lg font-semibold shadow-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-slate-700/90"
          >
            {feature}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-white text-[14px] lg:text-[22px] font-semibold leading-relaxed text-center px-4">
          Chaincross is the infrastructure layer projects trust to protect assets, comply with vesting timelines, and
          drive sustainable token economies—all while leveraging Solana's high-speed, low-cost environment.
        </p>
      </div>
    </div>
  </section>
);

export default WhatWeOfferGridSection;
