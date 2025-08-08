const roadmap = [
  { title: 'Q1 2024', desc: 'Platform launch, presale, and first cross-chain integrations.' },
  { title: 'Q2 2024', desc: 'Staking, rewards, and analytics dashboard.' },
  { title: 'Q3 2024', desc: 'More chain integrations, mobile app, and governance.' },
  { title: 'Q4 2024', desc: 'Full DAO launch and ecosystem expansion.' },
];

const RoadmapSection = () => (
  <section className="py-20 px-4 bg-background-main">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-12">Roadmap</h2>
      <div className="flex flex-col gap-8">
        {roadmap.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center font-heading text-xl font-bold text-header-bg border-4 border-card-bg shadow-card">{i + 1}</div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-1">{step.title}</h3>
              <p className="text-text-muted text-base">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RoadmapSection;
  