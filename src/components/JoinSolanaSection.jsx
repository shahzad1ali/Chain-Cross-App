const JoinSolanaSection = () => (
  <section className="pt-14 lg:pt-10 bg-background-main max-w-7xl w-full mx-auto">
<div className="text-start px-4 sm:px-6 mb-8">
  <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">
    JOIN THE
  </h2>
  <span
    className="block text-6xl sm:text-7xl md:text-9xl font-rubik-scribble font-black text-transparent"
    style={{
      WebkitTextStroke: '1px #1DE9B6',
      color: 'transparent',
      letterSpacing: '0.05em',
      lineHeight: '0.9',
    }}
  >
    SOLANA
  </span>
  <h3 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold text-white mt-2 mb-4">
    FIRST ECOSYSTEM
  </h3>
</div>
<div className="w-full">
  <div className="bg-gradient-to-r from-blue-600 to-teal-400 w-full py-5 px-4 sm:px-10">
    <p className="text-white text-base sm:text-lg max-w-full sm:max-w-2xl">
      Over 100 Solana teams trust Chaincross for secure token infrastructure, powering launchpads, DAOs, and more in
      the growing Solana economy.
    </p>
  </div>

 <ul className="flex flex-col text-[18px] gap-4 justify-start items-start p-4 sm:p-10 text-white">
  <li className="flex gap-2 items-start">
    <span className="w-4 h-4 mt-2 rounded-full bg-cta-purple block flex-shrink-0"></span>
    <p>Connect with founders, developers, and investors</p>
  </li>
  <li className="flex gap-2 items-start">
    <span className="w-4 h-4 mt-2 rounded-full bg-cta-pink block flex-shrink-0"></span>
    <p>Access exclusive guides and launch toolkits</p>
  </li>
  <li className="flex gap-2 items-start">
    <span className="w-4 h-4 mt-2 rounded-full bg-cta-green block flex-shrink-0"></span>
    <p>Stay informed on governance, updates & releases</p>
  </li>
</ul>

</div>

     
  </section>
);

export default JoinSolanaSection; 