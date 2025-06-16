'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex space-x-4">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === '/'
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Gift Finder
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === '/about'
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                About
              </Link>
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-white text-lg font-semibold">Shortcut Gifts</span>
          </div>
        </div>
      </div>
    </nav>
  );
} 