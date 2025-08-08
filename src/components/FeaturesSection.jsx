const features = [
  {
    icon: '🚀',
    title: 'Fast Cross-Chain Transfers',
    desc: 'Move assets instantly across supported blockchains with minimal fees and no hassle.'
  },
  {
    icon: '🔒',
    title: 'Institutional Security',
    desc: 'Your funds are protected by industry-leading security and anti-rug mechanisms.'
  },
  {
    icon: '💸',
    title: 'Staking & Rewards',
    desc: 'Stake tokens and earn rewards with transparent, on-chain distribution.'
  },
  {
    icon: '📊',
    title: 'Transparent Analytics',
    desc: 'Track your assets and protocol stats in real time with our analytics dashboard.'
  },
];

const FeaturesSection = () => (
  <section className="py-20 px-4 bg-background-main">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-12">What Makes ChainCross Unique?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-card-bg border border-border-color rounded-2xl shadow-card p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-cta/30 text-3xl mb-2">{f.icon}</div>
            <h3 className="font-heading text-xl font-bold text-white mb-1">{f.title}</h3>
            <p className="text-text-muted text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
  