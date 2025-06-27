import { Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-primary-400 font-bold text-2xl mr-1">Prop<span className="text-white">Go</span></div>
              <div className="text-primary-400 text-sm">.my</div>
            </div>
            <p className="text-gray-400 mb-4">Malaysia's AI-Enhanced Real Estate Platform for agents, lawyers, and bankers.</p>
            <div className="flex space-x-4">
              <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Features</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Solutions</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Pricing</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Integrations</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">API</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Blog</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Help Center</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Documentation</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Community</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Webinars</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-white cursor-pointer">About Us</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Careers</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Contact Us</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2023 PropGo.my. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 