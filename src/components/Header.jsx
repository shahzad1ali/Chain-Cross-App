"use client"
import { useState } from "react"
import Logo from "../assets/Logo/straght logo white.png"

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setIsMobileMenuOpen(false) // Close mobile menu when item is clicked
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="w-full flex items-center justify-between py-4 px-2 md:py-5 md:px-5 bg-gradient-to-br from-indigo-1100 via-purple-1100 to-indigo-900 shadow z-20 relative">
        {/* Logo - Mobile & Desktop */}
        <div className="flex items-center mt-2 pl-5 lg:pl-14 relative">
          <img 
            src={Logo || "/placeholder.svg"} 
            alt="Chain Cross Logo" 
            className="h-[36px] w-[172px] lg:h-[65px] lg:w-[320px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-1 lg:ml-[-30px] gap-12 text-[21px] font-heading text-white">
          <button
            onClick={() => handleNavClick("home")}
            className={`hover:text-cta transition ${currentPage === "home" ? "text-cta" : ""}`}
          >
            Designed for Solana
          </button>
          <button
            onClick={() => handleNavClick("roadmap")}
            className={`hover:text-cta transition ${currentPage === "roadmap" ? "text-cta" : ""}`}
          >
            Roadmap
          </button>
          <button
            onClick={() => handleNavClick("tokenomics")}
            className={`hover:text-cta transition ${currentPage === "tokenomics" ? "text-cta" : ""}`}
          >
            Tokenomics
          </button>
        </nav>

        {/* Desktop CTA Button */}
        <button className="bg-cta h-[37px] w-[165px] text-[20px] justify-center mr-10 text-white font-normal rounded-[8px] shadow hover:bg-cta-hover transition hidden md:block">
          Buy Now
        </button>

        {/* Mobile Hamburger Menu */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </div>
        </button>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="relative inset-0 bg-gradient-to-br from-indigo-1100 via-purple-1100 to-indigo-900 z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
           

            {/* Mobile Navigation */}
            <nav className="flex-1 flex flex-col pb-32 px-6 space-y-6 bg-[#241A3D]">
              <button
                onClick={() => handleNavClick("home")}
                className={`text-left text-xl font-heading text-white hover:text-cta transition py-3 border-b border-white/10 ${currentPage === "home" ? "text-cta" : ""}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("home")}
                className={`text-left text-xl font-heading text-white hover:text-cta transition py-3 border-b border-white/10 ${currentPage === "home" ? "text-cta" : ""}`}
              >
                Design For Solana
              </button>
              <button
                onClick={() => handleNavClick("roadmap")}
                className={`text-left text-xl font-heading text-white hover:text-cta transition py-3 border-b border-white/10 ${currentPage === "roadmap" ? "text-cta" : ""}`}
              >
                Roadmap
              </button>
              <button
                onClick={() => handleNavClick("tokenomics")}
                className={`text-left text-xl font-heading text-white hover:text-cta transition py-3 border-b border-white/10 ${currentPage === "tokenomics" ? "text-cta" : ""}`}
              >
                Toknomics
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className={`text-left text-xl font-heading text-white hover:text-cta transition py-3 border-b border-white/10 ${currentPage === "contact" ? "text-cta" : ""}`}
              >
                Contact Us
              </button>
              <button
                onClick={() => handleNavClick("terms")}
                className={`text-left text-xl font-heading text-white hover:text-cta transition py-3 border-b border-white/10 ${currentPage === "terms" ? "text-cta" : ""}`}
              >
                Terms & Condition
              </button>
                {/* Social Icons - Horizontal layout */}
          {/* <div className="flex gap-1">
            <a
              href="#"
              className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div> */}
            </nav>

         
          </div>
        </div>
      )}
    </>
  )
}

export default Header