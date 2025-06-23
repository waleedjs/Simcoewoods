"use client"
import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="z-50 xl:sticky overflow-hidden w-full xl:top-0 bg-white shadow-md">
      <div className="container mx-auto px-6 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold tracking-widest flex-shrink-0">
            <Link href="/">SIMCOE<span className="font-light">WOODS</span></Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-base font-medium tracking-wide">
            <a href="#about" className="hover:text-gray-500 transition-colors">
              About
            </a>
            <a href="#location" className="hover:text-gray-500 transition-colors">
              Location
            </a>
            <a href="#amenities" className="hover:text-gray-500 transition-colors">
              Features
            </a>
            <a href="#facts" className="hover:text-gray-500 transition-colors">
              Quick Facts
            </a>
            <a href="#builders" className="hover:text-gray-500 transition-colors">
              Builders
            </a>
            <a href="#contact" className="hover:text-gray-500 transition-colors">
              Register
            </a>
          </nav>

          {/* Desktop Phone Number */}
          <div className="hidden lg:flex items-center space-x-2 text-sm font-semibold text-gray-800 flex-shrink-0">
            <Phone className="h-4 w-4" />
            <a href="tel:705-555-0123" className="hover:text-gray-500 transition-colors whitespace-nowrap">
              (705) 555-0123
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 p-2 -mr-2 flex-shrink-0"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#about"
              className="block py-2 text-base font-medium tracking-wide hover:text-gray-500 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#location"
              className="block py-2 text-base font-medium tracking-wide hover:text-gray-500 transition-colors"
              onClick={toggleMenu}
            >
              Location
            </a>
            <a
              href="#amenities"
              className="block py-2 text-base font-medium tracking-wide hover:text-gray-500 transition-colors"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#facts"
              className="block py-2 text-base font-medium tracking-wide hover:text-gray-500 transition-colors"
              onClick={toggleMenu}
            >
              Quick Facts
            </a>
            <a
              href="#builders"
              className="block py-2 text-base font-medium tracking-wide hover:text-gray-500 transition-colors"
              onClick={toggleMenu}
            >
              Builders
            </a>
            <a
              href="#contact"
              className="block py-2 text-base font-medium tracking-wide hover:text-gray-500 transition-colors"
              onClick={toggleMenu}
            >
              Register
            </a>
            <div className="flex items-center space-x-2 pt-3 mt-3 border-t border-gray-200">
              <Phone className="h-4 w-4 text-gray-700" />
              <a
                href="tel:705-555-0123"
                className="text-sm font-semibold text-gray-800 hover:text-gray-500 transition-colors"
              >
                (705) 555-0123
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
