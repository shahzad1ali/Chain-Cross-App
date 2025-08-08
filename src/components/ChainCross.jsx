import bgImage from "../assets/roadmap.png";

const roadmapPhases = [
  {
    title: "Concept & Foundation",
    period: "(Q2 2025)",
    color: "#A04143",
    items: [
      "Market research identified a gap between Solana and Cardano",
      "Developed whitepaper, tokenomics, and core team",
      "Legal advisory and ecosystem advisors onboarded",
    ],
  },
  {
    title: "Prototype & Community Activation",
    period: "(Q3 2025)",
    color: "#DE6694",
    items: [
      "MVP developed for Solana → Cardano asset transfer",
      "Launched ChainCross.io, built digital presence on social platforms",
      "Raised funds through pre-seed round",
    ],
  },
  {
    title: "Pre-ICO & Strategic Ecosystem Build",
    period: "(Q4 2025)",
    color: "#E072B3",
    items: [
      "Conducted pre-ICO sale with tier-based bonuses",
      "Secured partnerships with DeFi & NFT projects",
      "Launched testnet with user rewards",
    ],
  },
  {
    title: "ICO & Public Launch",
    period: "(Q1 2026)",
    color: "#C862D1",
    items: [
      "Public ICO, listed token on DEXs",
      "Activated token utility with bridge fees & staking",
      "Mainnet launch with Solana–Cardano bridge support",
    ],
  },
  {
    title: "Ecosystem Expansion & Use Case Adoption",
    period: "(Q2–Q3 2026)",
    color: "#5673F5",
    items: [
      "Integrated with DeFi & NFT platforms",
      "Launched enterprise API and BaaS",
      "Implemented community incentives and DAO bootcamps",
    ],
  },
  {
    title: "DAO Governance & Long-Term Expansion",
    period: "(Q4 2026 & Beyond)",
    color: "#69CED1",
    items: [
      "Deployed ChainCross DAO and treasury management",
      "Expanded to Ethereum, Avalanche, Cosmos",
      "Conducted regular audits and global marketing expansion",
    ],
  },
];

const ChainCross = () => {
  return (
    <div className="relative w-full mb-10 pt-10 border-t border-white lg:border-none">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          ChainCross Roadmap
        </h1>
        <p className="text-xl md:text-2xl text-orange-400 font-medium">
          (Vision to Cross-Chain Dominance)
        </p>
      </div>

      {/* Mobile Layout Only */}
      <div className="lg:hidden flex flex-col gap-6 px-4 py-6">
        <img
          src={bgImage}
          alt="ChainCross Roadmap"
          className="w-full rounded-2xl mb-6"
        />
        {roadmapPhases.map((phase, index) => (
          <div
            key={index}
            className="rounded-r-xl rounded-l-none text-white p-4 shadow-lg border-l-4 mt-5"
            style={{ borderColor: phase.color }}
          >
            <h3
              className="text-[24px] font-bold font-Monda-700"
              style={{ color: phase.color }}
            >
              {phase.title}
            </h3>
            <p
              className="text-lg font-bold font-Monda-700 mb-2"
              style={{ color: phase.color }}
            >
              {phase.period}
            </p>
            <ul className="list-disc pl-4 text-sm mt-5 text-[16px] space-y-1">
              {phase.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-center relative">
        <div className="relative w-full h-full">
          {/* Background Image */}
          <img
            src={bgImage}
            alt="ChainCross Roadmap"
            className="w-[85%] h-auto rounded-2xl"
          />

          {/* Overlay Phases */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-16 px-10">
            {/* Row 1 */}
            <div className="flex justify-between ml-64">
              <div
                className="w-[60%] h-[45%] text-white  p-6 shadow-lg border-l-2 ml-48   mt-20 bg-opacity-60"
                style={{ borderColor: "#C862D1" }}
              >
                <h3 className="text-xl font-bold text-[#C862D1]">
                  ICO & Public Launch
                </h3>
                <p className="text-lg font-bold text-[#C862D1] mb-2">
                  (Q1 2026)
                </p>
                <ul className="list-disc text-sm pl-4 space-y-1">
                  <li>Public ICO, listed token on DEXs</li>
                  <li>Activated token utility with bridge <br/> fees & staking</li>
                  <li>
                    Mainnet launch with Solana– <br/>Cardano bridge support
                  </li>
                </ul>
              </div>

              <div
                className="w-[40%] h-[55%] text-white p-4 shadow-lg border-l-2 ml-16 mt-44 bg-opacity-60"
                style={{ borderColor: "#69CED1" }}
              >
                <h3 className="text-xl font-bold text-[#69CED1]">
                  DAO Governance & Long-Term Expansion
                </h3>
                <p className="text-lg font-bold text-[#69CED1] mb-2">
                  (Q4 2026 & Beyond)
                </p>
                <ul className="list-disc text-sm pl-4 space-y-1">
                  <li>
                    Deployed ChainCross DAO and treasury management
                  </li>
                  <li>Expanded to Ethereum, Avalanche, Cosmos</li>
                  <li>
                    Conducted regular audits and global marketing expansion
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex">
              <div
                className="h-[100%] w-[40%] text-white justify-end mt-[-220px] shadow-lg border-r-2 bg-opacity-60"
                style={{ borderColor: "#DE6694" }}
              > 

                <h3 className="text-xl font-bold text-[#DE6694]">
                  Prototype & Community Activation
                </h3>
                <p className="text-lg font-bold text-[#DE6694] mb-2">
                  (Q3 2025)
                </p>
                <ul className="list-disc text-sm pl-4 space-y-1">
                  <li>
                    MVP developed for Solana → Cardano <br/> asset transfer
                  </li>
                  <li>
                    Launched ChainCross.io, built digital presence on social
                    platforms
                  </li>
                  <li>Raised funds through pre-seed round</li>
                </ul>
              </div>

              <div
                className="text-white p-4 mt-[-60px] ml-96 shadow-lg border-l-2 bg-opacity-60"
                style={{ borderColor: "#5673F5" }}
              >
                <h3 className="text-xl font-bold text-[#5673F5]">
                  Ecosystem Expansion & Use Case Adoption
                </h3>
                <p className="text-lg font-bold text-[#5673F5] mb-2">
                  (Q2–Q3 2026)
                </p>
                <ul className="list-disc text-sm pl-4 space-y-1">
                  <li>Integrated with DeFi & NFT platforms</li>
                  <li>Launched enterprise API and BaaS</li>
                  <li>
                    Implemented community incentives and DAO bootcamps
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex justify-between gap-6">
              <div
                className="w-1/2 h-full text-white ml-40 mt-[-110px] p-4 shadow-lg border-l-2 bg-opacity-60"
                style={{ borderColor: "#A04143" }}
              >
                <h3 className="text-xl font-bold text-[#A04143]">
                  Concept & Foundation
                </h3>
                <p className="text-lg font-bold text-[#A04143] mb-2">
                  (Q2 2025)
                </p>
                <ul className="list-disc text-sm pl-4 space-y-1">
                  <li>
                    Market research identified a gap between Solana and Cardano
                  </li>
                  <li>Developed whitepaper, tokenomics, and core team</li>
                  <li>
                    Legal advisory and ecosystem advisors onboarded
                  </li>
                </ul>
              </div>

              <div
                className="w-1/2 text-white mt-[-50px] ml-[-40px] p-4 shadow-lg border-l-2 bg-opacity-60"
                style={{ borderColor: "#E072B3" }}
              >
                <h3 className="text-xl font-bold text-[#E072B3]">
                   Pre-ICO & Strategic Ecosystem Build
                </h3>
                <p className="text-lg font-bold text-[#E072B3] mb-2">
                  (Q4 2025)
                </p>
                <ul className="list-disc text-sm pl-4 space-y-1">
                  <li>Conducted pre-ICO sale with tier-based bonuses</li>
                  <li>Secured partnerships with DeFi & NFT projects</li>
                  <li>Launched testnet with user rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ChainCross;