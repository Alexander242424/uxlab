'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LogoSVG from '@/assets/logo.svg'
import ArrowUpRightSVG from '@/assets/arrow-up-right.svg'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-bg-black min-h-[72px] sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-10 mt-8 mb-4 max-w-[1512px] mx-auto">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center text-text-700 hover:text-text-500">
            <Link href="/">
              <LogoSVG />
            </Link>
          </div>

          <div className="flex justify-between items-center h-full w-full max-w-[49%]">
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              <Link
                href="/"
                className={`${pathname === '/' ? 'text-text-500' : 'text-text-700 hover:text-text-500'}`}
              >
                Home
              </Link>
              <Link
                href="/work"
                className={`${pathname === '/work' ? 'text-text-500' : 'text-text-700 hover:text-text-500'}`}
              >
                Work
              </Link>
              <Link
                href="/services"
                className={`${pathname === '/services' ? 'text-text-500' : 'text-text-700 hover:text-text-500'}`}
              >
                Services
              </Link>
              <Link
                href="/insights"
                className={`${pathname === '/insights' ? 'text-text-500' : 'text-text-700 hover:text-text-500'}`}
              >
                Insights
              </Link>
            </nav>
            <div className="flex items-center ml-auto">
              <Link href="/" className="text-text-700 hover:text-text-500 flex items-center gap-1">
                Book a Call <ArrowUpRightSVG />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
