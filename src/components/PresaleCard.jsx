import { BiCreditCard } from "react-icons/bi"

const PresaleCard = () => {
  return (
    <div className="mt-5">
    <div className="w-full lg:w-[80vh] mt-5 lg:mb-0 max-w-md bg-[#241A3D] border border-rose-700 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Card Header */}
      <div className="text-center mb-6">
        <h2 className="font-heading text-2xl font-bold text-white">SOL Presale</h2>
        <span className="text-lg font-[600] text-gray-100">Stage 13</span>
      </div>

      {/* Price Row */}
      <div className="flex justify-between items-center text-sm mb-4">
        <span className="font-semibold text-white">
          1 SOL = <span className="">$0.04433</span>
        </span>
        <span className="font-semibold text-white">
          Next Stage = <span className="">$0.0455</span>
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="relative w-full h-6 bg-[#fff] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-between px-3"
            style={{ width: "84.32%" }}
          >
            <span className="text-white text-xs font-medium">Remaining Token: 1.93M</span>
            <span className="text-white text-xs font-medium">93.32%</span>
          </div>
        </div>
      </div>

      {/* Total Raised */}
      <div className="text-white text- mb-4">
        Total Raised: 26,996,833 SOL = <span className="">$892,454.44</span>
      </div>

      {/* ADA Conversion */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="font-normal text-xs text-gray-400">1 ADA is =</span>
          <div className="text-xl text-white font-bold">50,917 SOL</div>
        </div>
        <span className="bg-white text-black text-xs rounded-xl px-3 py-1 font-semibold flex items-center gap-2">
          Stage 13 Bonus
          <span className="bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
            !
          </span>
        </span>
      </div>

      {/* Balance Section */}
      <div className="bg-[#fff] h-[70px] lg:h-auto backdrop-blur-sm rounded-xl p-4 mb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">₳</span>
            </div>
            <div className="">
              <div className="text-black text-sm">
                Balance: 0.0000 ADA <span className="text-blue-400 font-bold cursor-pointer">MAX</span>
              </div>
              <div className="text-black text-xs">0.026 - 800</div>
            </div>
          </div>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold text-sm">ADA</button>
        </div>
      </div>

      {/* Receive Section */}
      <div className="bg-[#fff] backdrop-blur-sm rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">=</span>
            </div>
            <div className="text-black text-sm">Receive =</div>
          </div>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-full font-semibold text-sm">SOL</button>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="mb-6">
        <div className="text-gray-400 text-sm mb-3">Payment Method:</div>
        <div className="grid grid-cols-4 gap-2">
          <button className="bg-blue-500 text-white px-2 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1">
            <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-500 text-xs font-bold">₳</span>
            </div>
            ADA
          </button>
          <button className="bg-gray-700 text-gray-300 px-2 py-2 rounded-lg text-xs font-semibold">BSC</button>
          <button className="bg-gray-700 text-gray-300 px-2 py-2 rounded-lg text-xs font-semibold">OTHERS</button>
          <button className="bg-gray-700 text-gray-300 px-2 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1">
            <BiCreditCard className="w-3 h-3" />
            CARD
          </button>
        </div>
      </div>

    
    </div>
    <div className="">
        {/* Connect to Wallet Button */}
      <button className="w-[80%] ml-7 -translate-y-6 lg:-translate-y-7 border-t-2 border-rose-500 bg-gradient-to-r from-cyan-600 to-teal-500 text-white font-bold py-3 text-lg rounded-lg shadow-lg hover:from-cyan-500 hover:to-teal-600 transition-all">
        Connect to wallet
      </button>
    </div>
    </div>
  )
}

export default PresaleCard
