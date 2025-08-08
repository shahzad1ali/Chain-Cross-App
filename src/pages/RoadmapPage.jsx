import RoadmapSection from "../components/RoadmapSection"

const RoadmapPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Roadmap</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover our journey and upcoming milestones for ChainCross development
          </p>
        </div>
        <RoadmapSection />
      </div>
    </div>
  )
}

export default RoadmapPage
