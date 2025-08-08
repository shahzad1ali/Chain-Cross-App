const DesignedForSolanaSection = () => (
  <section className="py-12 px-4 bg-[#241A3D] rounded-3xl max-w-7xl mx-auto mt-12">
    <div className="text-center">
      {/* Main Title */}
      <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">
        DESIGNED FOR
      </h2>

      {/* SOLANA Word with Stroke */}
      <span
        className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-rubik-scribble font-black text-transparent mx-auto"
        style={{
          WebkitTextStroke: '0.8px #1DE9B6',
          color: 'transparent',
          letterSpacing: '0.05em',
          lineHeight: '0.9',
        }}
      >
        SOLANA
      </span>

      {/* Sub-heading */}
      <h3 className="font-heading text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
        BUILT FOR TRUST
      </h3>

      {/* Description */}
      <p className="text-[15px] lg:text-[20px] max-w-xl text-white mx-auto px-2">
        Chaincross is purpose-built to serve projects within the Solana ecosystem. Whether you're launching a new token,
        managing vesting schedules, or building long-term community trust through staking, Chaincross offers the tools to do
        it securely—without compromising on performance or decentralization.
      </p>
    </div>
  </section>
);

export default DesignedForSolanaSection;
