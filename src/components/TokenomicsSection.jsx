const tokenomics = [
  {
    category: "Public ICO",
    allocation: "20%",
    tokens: "200,000,000",
    purpose: "Fundraising, community participation",
  },
  {
    category: "Public Sale & Seed",
    allocation: "10%",
    tokens: "100,000,000",
    purpose: "Early investors, partners",
  },
  {
    category: "Team & Founders",
    allocation: "15%",
    tokens: "150,000,000",
    purpose: "Team motivation and long-term vision (vested over 3-4 years)",
  },
  {
    category: "Advisors & Partners",
    allocation: "5%",
    tokens: "50,000,000",
    purpose: "Strategic advisors (1-2 year vesting)",
  },
  {
    category: "Development Fund",
    allocation: "20%",
    tokens: "200,000,000",
    purpose: "Product development, audits, security",
  },
  {
    category: "Marketing & Community",
    allocation: "10%",
    tokens: "100,000,000",
    purpose: "Airdrops, bounties, campaigns, KOLs",
  },
  {
    category: "Ecosystem Growth",
    allocation: "15%",
    tokens: "150,000,000",
    purpose: "Liquidity, rewards, integrations, partnerships",
  },
  {
    category: "Treasury / DAO Reserve",
    allocation: "5%",
    tokens: "50,000,000",
    purpose: "For governance-controlled initiatives",
  },
]

const TokenomicsSection = () => {
  return (
<section className="bg-[#40306985] w-[95%] rounded-2xl ml-2.5 lg:ml-7 shadow-lg mb-10">
  <div className="max-w-6xl mx-auto overflow-hidden">
    
    {/* Desktop Header - Only visible on desktop */}
    <div className="hidden md:grid grid-cols-4 pt-10 text-[24px] pb-7 pl-10 text-white">
      <div className="font-Monda-700 font-bold text-[#C862D1]">Category</div>
      <div className="font-Monda-700 font-bold text-[#2CD3B6]">% Allocation</div>
      <div className="font-Monda-700 font-bold text-[#FD8367]">No. of Tokens</div>
      <div className="font-Monda-700 font-bold text-[#CB128A]">Purpose</div>
    </div>

    {/* Cards */}
    <div className="space-y-4 p-4">
<div className="md:hidden font-Monda-700 font-semibold pl-2 text-xl text-[#C862D1]">Category</div>
      {tokenomics.map((item, index) => (
        <div
          key={index}
          className="bg-[#2A1F4A] rounded-lg p-0 hover:border-2 hover:border-cyan-400 transition-all duration-200"
        >
          {/* Mobile Layout */}
          <div className="flex flex-col md:hidden w-full text-white text-start justify-center">
            {/* Category bar */}
            <div className="bg-[#5B2268] h-[50px] flex items-center px-4 rounded-t-lg">
              <span className="font-bold text-[17px]">{item.category}</span>
            </div>

            {/* Details */}
            <div className="px-4 py-3 space-y-2 text-[15px]">
              <div>
                <span className="font-bold text-[#2CD3B6]">% Allocation :</span> {item.allocation}
              </div>
              <div>
                <span className="font-bold text-[#FD8367]">No. of Tokens :</span> {item.tokens}
              </div>
              <div>
                <span className="font-bold text-[#CB128A]">Purpose :</span> {item.purpose}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-4 pt-4 pb-5 px-6 text-white text-sm md:text-base">
            <div className="font-bold">{item.category}</div>
            <div>{item.allocation}</div>
            <div>{item.tokens}</div>
            <div>{item.purpose}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default TokenomicsSection


