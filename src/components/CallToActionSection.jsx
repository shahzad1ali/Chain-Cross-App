import Logo from "../assets/Logo/Chain Cross Logo 3 1.png"

const CallToActionSection = () => (
  <section className="bg-gradient-to-br m-0 from-indigo-1100 via-purple-1100 to-indigo-900 w-full mx-auto relative overflow-hidden">
    <div className="container px-4 py-12">
      <div className="flex flex-col lg:flex-row justify-between items-start relative">
        {/* Left side - Content */}
      <div className="flex-1 pl-8">
  {/* Buttons */}
  <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:justify-center lg:justify-start items-center w-full pb-10 px-4">
    <button className="bg-[#CB128A] text-white font-medium h-[50px] w-[180px] sm:w-[211px] lg:w-[248px] px-6 rounded-[8px] shadow-lg hover:bg-[#B10A7A] transition-colors">
      Join Discord
    </button>
    <button className="bg-[#09D553] text-white font-medium h-[50px] w-[250px] sm:w-[326px] lg:w-[394px] px-6 rounded-[8px] shadow-lg hover:bg-[#08C04A] transition-colors">
      Subscribe to Newsletter
    </button>
    <button className="bg-[#6705C4] text-white font-medium h-[50px] w-[170px] sm:w-[186px] lg:w-[206px] px-6 rounded-[8px] shadow-lg hover:bg-[#5804A8] transition-colors">
      Follow on X
    </button>
  </div>
</div>


        {/* Right side - Logo visible on all screens */}
<div className="bottom-4 ml-64 lg:ml-0 mt-14 lg:mt-1 lg:right-8 translate-y-0 lg:translate-y-1/2">
  <img
    src={Logo || "/placeholder.svg"}
    alt="Chain Cross Logo"
    className="w-24 h-24 lg:w-48 lg:h-48"
  />
</div>

      </div>
    </div>

    {/* Bottom Banner */}
    <div className="bg-[#8AF1DF] text-center mt-[-85px] lg:mt-[-20px] text-xl font-semibold text-[#CB128A] py-4 px-6">
      <p className="max-w-4xl mx-auto">
        Chaincross is a fully audited, open-source Web3 infrastructure provider committed to transparency, innovation,
        and the long-term success of decentralized finance.
      </p>
    </div>
  </section>
)

export default CallToActionSection
