'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e6d5c3] backdrop-blur-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left: Nav links (desktop) */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === '/'
                    ? 'bg-gray-200 text-[#4b3621]'
                    : 'text-[#4b3621] hover:bg-gray-200 hover:text-[#4b3621]'
                }`}
              >
                Gift Finder
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === '/about'
                    ? 'bg-gray-200 text-[#4b3621]'
                    : 'text-[#4b3621] hover:bg-gray-200 hover:text-[#4b3621]'
                }`}
              >
                About
              </Link>
            </div>
          </div>

          {/* Center: Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-[#4b3621] text-lg font-semibold">Shortcut Gifts</span>
          </div>

          {/* Right: Hamburger (mobile) */}
          <div className="md:hidden flex items-center z-20">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4b3621] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4b3621]"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-[#e6d5c3] border-b border-gray-300 shadow-lg z-10">
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === '/'
                    ? 'bg-gray-200 text-[#4b3621]'
                    : 'text-[#4b3621] hover:bg-gray-200 hover:text-[#4b3621]'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Gift Finder
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === '/about'
                    ? 'bg-gray-200 text-[#4b3621]'
                    : 'text-[#4b3621] hover:bg-gray-200 hover:text-[#4b3621]'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 