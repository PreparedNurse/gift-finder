'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#e6d5c3] backdrop-blur-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex space-x-4">
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
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-[#4b3621] text-lg font-semibold">Shortcut Gifts</span>
          </div>
        </div>
      </div>
    </nav>
  );
} 