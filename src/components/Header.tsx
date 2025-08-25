import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              UXLab
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
