import mobileImg from "../assets/mobile 2 (1).png"

const CoinspringSection = () => (
  <section className="relative mt-20">
  <div className="mt-15 lg:mt-0 md:mt-0 sm:mt-0 w-[85%] border-2 border-white rounded-3xl px-4 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto overflow-visible relative">

    <div className="flex-1 p-4 md:pl-10 flex flex-col gap-4 md:gap-6 items-start mb-5 lg:mb-0">
  <h2 className="font-heading text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
    Buy Tokens<br />
    <span className="text-[37px] lg:text-[45px]">Securely with </span>
    <span className="text-[#B53AE4] text-[38px] lg:text-[55px]">Coinspring</span>
  </h2>

  <p className="text-white text-[16px] md:text-[18px] lg:text-[21px] max-w-lg">
    Experience a seamless and secure token purchase process with our trusted launchpad, Coin Spring.
    Your transactions are fully protected, and our platform offers a user-friendly interface to guide you every step of the way.
  </p>

  <p className="text-[#FD8367] text-[20px] lg:text-[30px] md:text-xl font-semibold">
    Start investing with confidence today!
  </p>

  <button className="text-white text-[18px] lg:text-[26px] hover:shadow-cta/25 hover:scale-105 transition-all duration-200 font-heading rounded-[9px] h-[37px] w-[165px] lg:h-[51px] lg:w-[242px] bg-[#2CD3B6]">
    Buy Token
  </button>
</div>


      <div className="flex-1 flex justify-center gap-8 relative">
        <div className="p-4 flex flex-col relative justify-end md:mt-20">
          <img
            src={mobileImg || "/placeholder.svg"}
            alt="Mobile App"
            className="w-full h-auto sm:ml-5 md:ml-10 lg:ml-10 rounded-2xl relative z-20"
            style={{
              transform: "translateX(60px) translateY(40px)",
              maxWidth: "none",
            }}
          />
        </div>
      </div>
    </div>
  </section>
)

export default CoinspringSection
