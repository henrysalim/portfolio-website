"use client";

import { useState } from "react";
import NavLinks from "./navlink";
import XIcon from "../icons/xicon";
import MenuIcon from "../icons/menuIcon";
import portfolioData from "@/app/data/data";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl text-white">
              {portfolioData.name}
            </span>
          </a>
          <div className="hidden md:block">
            <NavLinks className="flex items-center space-x-4" />
          </div>
          <div className="hidden md:block">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-gray-900">
          <NavLinks className="flex flex-col px-2 pt-2 pb-3 space-y-1" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
