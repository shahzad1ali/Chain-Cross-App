"use client"

import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import DesignedForSolanaSection from "./components/DesignedForSolanaSection"
import WhatWeOfferGridSection from "./components/WhatWeOfferGridSection"
import CoinspringSection from "./components/CoinspringSection"
import WhatWeOfferCardsSection from "./components/WhatWeOfferCardsSection"
import BuiltForSolanaSection from "./components/BuiltForSolanaSection"
import DeveloperReadySection from "./components/DeveloperReadySection"
import SecurityAuditSection from "./components/SecurityAuditSection"
import JoinSolanaSection from "./components/JoinSolanaSection"
import CallToActionSection from "./components/CallToActionSection"
import RoadmapSection from "./components/RoadmapSection"
import TokenomicsSection from "./components/TokenomicsSection"
import ChainCross from "./components/ChainCross"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <HeroSection />
            <DesignedForSolanaSection />
            <WhatWeOfferGridSection />
            <CoinspringSection />
            <WhatWeOfferCardsSection />
            <BuiltForSolanaSection />
            <DeveloperReadySection />
            <SecurityAuditSection />
            <JoinSolanaSection />
            <CallToActionSection />
          </>
        )
      case "roadmap":
        return (
          <>
               <ChainCross />
              
               <JoinSolanaSection />
            <CallToActionSection />
           </>
        )
      case "tokenomics":
        return (
          <>
          <div className="min-h-screen pt-3 lg:pt-20 border-t border-white lg:border-[#40306985] ">
            <div className="container text-center">
            <div className="text-center mb-12">
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tokenomics</h1>
  <p className="text-[22px] pt-5 lg:pt-1 px-5 lg:text-2xl text-orange-400 md:text-lg mx-auto">
    Our token distribution is designed to ensure the growth, <br /> sustainability, and success of the project. 
    The total token supply is <br /> divided into various categories with clear purposes:
  </p>
</div>
            </div>
                         <TokenomicsSection />
          </div>
          <div className="pt-15">
            <JoinSolanaSection />
            <CallToActionSection />
          </div>
            
            </>
        )
      default:
        return (
          <>
            <HeroSection />
            <DesignedForSolanaSection />
            <WhatWeOfferGridSection />
            <CoinspringSection />
            <WhatWeOfferCardsSection />
            <BuiltForSolanaSection />
            <DeveloperReadySection />
            <SecurityAuditSection />
            <JoinSolanaSection />
            <CallToActionSection />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-1000 via-purple-900 to-indigo-900">
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer />
      </div>

      {/* Bottom notification bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm border-t border-gray-700 px-4 py-3 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          {/* Add your notification content here if needed */}
        </div>
      </div>
    </div>
  )
}

export default App
