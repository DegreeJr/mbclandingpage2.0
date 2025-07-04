"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 shadow-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/MBC.webp" alt="MBC Laboratory Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-100 hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link>
            <Link href="/developer" className="text-gray-300 hover:text-blue-400 transition-colors">Developer</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 