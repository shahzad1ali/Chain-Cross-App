const stats = [
  { value: '26,996,833', label: 'Total SOL Raised' },
  { value: '1.93M', label: 'Tokens Remaining' },
  { value: '13', label: 'Presale Stages' },
  { value: '93.32%', label: 'Current Stage Filled' },
];

const StatsSection = () => (
  <section className="py-12 px-4 bg-background-main">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s, i) => (
        <div key={i} className="bg-card-bg border border-border-color rounded-2xl shadow-card p-8 flex flex-col items-center text-center">
          <span className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">{s.value}</span>
          <span className="text-text-muted text-base font-medium">{s.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
  