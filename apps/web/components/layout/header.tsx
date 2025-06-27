import Link from 'next/link'
import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="text-primary-600 font-bold text-2xl mr-1">Prop<span className="text-secondary-800">Go</span></div>
            <div className="text-primary-600 text-sm">.my</div>
          </Link>
          <nav className="hidden md:flex ml-10 space-x-8">
            <span className="text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Features</span>
            <span className="text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Solutions</span>
            <span className="text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Pricing</span>
            <span className="text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Blog</span>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/auth/sign-in" className="hidden md:inline-block text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Login</Link>
          <Link href="/auth/sign-up" className="bg-primary-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-700 transition cursor-pointer">Get Started</Link>
          <button className="md:hidden text-secondary-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
} 