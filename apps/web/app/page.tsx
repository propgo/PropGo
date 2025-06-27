import { ArrowRight, Check, Building, Bot, ListChecks, MessageCircle, FileText, Megaphone, MapPin, UserCheck, Scale, Landmark, Menu, Wand2, Bell, FileCheck, Shield, User, Star, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="flex items-center cursor-pointer">
              <div className="text-primary-600 font-bold text-2xl mr-1">Prop<span className="text-secondary-800">Go</span></div>
              <div className="text-primary-600 text-sm">.my</div>
            </span>
            <nav className="hidden md:flex ml-10 space-x-8">
              <span className="text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Features</span>
              <span className="text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Solutions</span>
              <span className="text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Pricing</span>
              <span className="text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Blog</span>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block text-secondary-600 hover:text-primary-600 font-medium cursor-pointer">Login</span>
            <span className="bg-primary-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-700 transition cursor-pointer">Get Started</span>
            <button className="md:hidden text-secondary-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white h-[700px]">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Malaysia's AI-Enhanced Real Estate Platform</h1>
            <p className="text-lg md:text-xl mb-8 text-primary-100">Equipping agents, lawyers, and bankers with AI tools, automation, and integrated pipelines for seamless property transactions.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <span className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition text-center cursor-pointer">Start Free Trial</span>
              <span className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition text-center cursor-pointer">Book a Demo</span>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <p className="ml-4 text-primary-100">Trusted by 500+ real estate professionals in Malaysia</p>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <img className="w-full h-auto rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d78e7a9fcd-934ea62d526633e9e0dc.png" alt="real estate dashboard interface with property listings and AI analytics, clean modern UI design" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Bot className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-secondary-800 font-medium text-sm">AI Generated Listing</p>
                    <p className="text-secondary-500 text-xs">Ready in 5 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-secondary-500 mb-8">Trusted by leading real estate companies in Malaysia</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
              <Building className="inline-block text-4xl text-secondary-400 mr-2" />
              <span className="font-semibold text-secondary-600">IQI Realty</span>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
              <Building className="inline-block text-4xl text-secondary-400 mr-2" />
              <span className="font-semibold text-secondary-600">PropNex</span>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
              <Building className="inline-block text-4xl text-secondary-400 mr-2" />
              <span className="font-semibold text-secondary-600">Hartamas</span>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
              <Building className="inline-block text-4xl text-secondary-400 mr-2" />
              <span className="font-semibold text-secondary-600">Rahim & Co</span>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
              <Landmark className="inline-block text-4xl text-secondary-400 mr-2" />
              <span className="font-semibold text-secondary-600">CBRE Malaysia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Features for Real Estate Professionals</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">Our AI-powered platform streamlines every aspect of the property transaction process, saving you time and increasing your productivity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Listing Generator</h3>
              <p className="text-secondary-600 mb-4">Upload an image and address to instantly create professional property listings with AI-generated descriptions.</p>
              <span className="text-primary-600 font-medium flex items-center cursor-pointer">
                Learn more
                <ArrowRight className="ml-2 text-sm" />
              </span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <ListChecks className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Deal Dashboard</h3>
              <p className="text-gray-600 mb-4">Manage your property deals with a drag-and-drop Monday.com-style dashboard that keeps everyone in sync.</p>
              <div className="text-primary-600 font-medium flex items-center cursor-pointer hover:text-primary-700">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                 <MessageCircle className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">WTB/WTR Requests</h3>
              <p className="text-gray-600 mb-4">Airtasker-style property requests where verified agents can reply with matching listings.</p>
              <div className="text-primary-600 font-medium flex items-center cursor-pointer hover:text-primary-700">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                 <FileText className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Document Management</h3>
              <p className="text-gray-600 mb-4">Upload and manage SPAs, tenancy agreements, bank letters, and other important documents.</p>
              <div className="text-primary-600 font-medium flex items-center cursor-pointer hover:text-primary-700">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                 <Megaphone className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Marketing Content</h3>
              <p className="text-gray-600 mb-4">Create one-click marketing content including flyers, ads, and WhatsApp captions for your listings.</p>
              <div className="text-primary-600 font-medium flex items-center cursor-pointer hover:text-primary-700">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Map-First Browsing</h3>
              <p className="text-gray-600 mb-4">Explore properties with heatmaps, school overlays, and commute distance calculations.</p>
              <div className="text-primary-600 font-medium flex items-center cursor-pointer hover:text-primary-700">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Tailored Solutions for Every Role</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">PropGo.my offers specialized tools for agents, agencies, lawyers, and bankers to streamline their workflows.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">For Real Estate Agents</h3>
                <p className="text-gray-600 mb-4">Create listings instantly with AI, track deals visually, and generate marketing content with one click. Our agent-first design helps you close more deals faster.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    AI-powered listing generation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Visual deal pipeline
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    One-click marketing content
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-purple-100 w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">For Law Firms</h3>
                <p className="text-gray-600 mb-4">Manage property transactions end-to-end with integrated document workflows, automated SPA generation, and seamless agent collaboration.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Automated legal document generation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Transaction pipeline integration
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Client communication tools
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-green-100 w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Landmark className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">For Bankers</h3>
                <p className="text-gray-600 mb-4">Streamline loan applications and property valuations with direct integration to agent pipelines and automated document collection.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Loan application tracking
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Property valuation tools
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Document verification
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-orange-100 w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Client Portals</h3>
                <p className="text-gray-600 mb-4">Dedicated portals for buyers and sellers to track their property transactions, view documents, and communicate with their agent team.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Real-time transaction updates
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Document access and signing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Direct communication channels
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Tools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-secondary-800 mb-4">AI-Powered Tools</h2>
              <p className="text-secondary-600 mb-8">Our platform leverages artificial intelligence to automate tedious tasks and provide valuable insights.</p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Wand2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI Listing Generator</h3>
                    <p className="text-secondary-600">Transform a property image and address into a complete professional listing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Megaphone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">One-Click Marketing</h3>
                    <p className="text-secondary-600">Generate flyers, ads, and WhatsApp captions with a single click.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FileCheck className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI Agreement Generator</h3>
                    <p className="text-secondary-600">Create legally sound tenancy and sale agreements automatically.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Bell className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Smart Alerts</h3>
                    <p className="text-secondary-600">Receive AI-powered price drop alerts and neighborhood scoring updates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img className="w-full h-auto rounded-lg shadow-xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2c684c571d-fa731e36278ae77874d8.png" alt="AI real estate tools interface showing property listing generator and marketing content creation, professional UI design" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">Choose the plan that fits your business needs and scale as you grow.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-secondary-600 text-sm mb-6">Basic features to get started</p>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">RM0</span>
                  <span className="text-secondary-500 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">5 listings per agent</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">3 AI documents per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">Basic dashboard access</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition">Sign Up Free</button>
            </div>

            {/* Agent Basic Plan */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Agent Basic</h3>
              <p className="text-secondary-600 text-sm mb-6">Essential tools for agents</p>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">RM29</span>
                  <span className="text-secondary-500 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">20 listings per agent</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">WTB/WTR reply access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">10 AI documents per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">Basic CRM features</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition">Get Started</button>
            </div>

            {/* Agent Pro Plan - Most Popular */}
            <div className="bg-gradient-to-b from-primary-600 to-primary-700 rounded-xl shadow-lg p-6 text-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agent Pro</h3>
              <p className="text-primary-100 text-sm mb-6">Complete toolkit for professionals</p>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">RM69</span>
                  <span className="text-primary-200 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-white mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">Unlimited listings</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-white mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">Full AI tools access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-white mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">Marketing content generation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-white mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">Advanced dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-white mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-50 transition">Get Started</button>
            </div>

            {/* Law/Bank Firm Plan */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Law/Bank Firm</h3>
              <p className="text-secondary-600 text-sm mb-6">For legal and financial firms</p>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">RM99</span>
                  <span className="text-secondary-500 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">Staff access management</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">AI contract tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">Pipeline integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">Document management</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-secondary-600">Client portal access</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from real estate professionals who have transformed their businesses with PropGo.my.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 bg-gray-300 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ahmad Rizal</h4>
                  <p className="text-gray-500 text-sm">Real Estate Agent, KL</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The AI listing generator has saved me hours each week. I can now create professional listings in seconds, complete with compelling descriptions that actually sell properties."</p>
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 bg-gray-300 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Tan</h4>
                  <p className="text-gray-500 text-sm">Property Lawyer, Penang</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The integrated pipeline has revolutionized how our firm handles property transactions. We can now see exactly where each deal stands and collaborate seamlessly with agents and bankers."</p>
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 bg-gray-300 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">David Wong</h4>
                  <p className="text-gray-500 text-sm">Agency Owner, Johor</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"As an agency owner, the performance dashboards and KPIs have been invaluable. I can now track my team's progress and identify areas for improvement, resulting in a 30% increase in sales."</p>
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">Find answers to common questions about PropGo.my</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How does the AI listing generator work?</h3>
              <p className="text-secondary-600">Our AI listing generator uses computer vision and natural language processing to analyze property images and addresses, automatically creating professional listings with key features, descriptions, and specifications.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Can I integrate PropGo.my with my existing CRM?</h3>
              <p className="text-secondary-600">Yes, PropGo.my offers integration with popular CRM systems, property management software, and tools like Zapier, QuickBooks, Mailchimp, and Google Calendar.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Is my data secure on the platform?</h3>
              <p className="text-secondary-600">Absolutely. We implement PDPA/GDPR compliant security measures, including data encryption, secure authentication, and regular security audits to ensure your data remains protected.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How can I upgrade or downgrade my subscription?</h3>
              <p className="text-secondary-600">You can easily change your subscription plan through your account settings at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Real Estate Business?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">Join hundreds of Malaysian real estate professionals who are already using PropGo.my to streamline their workflows and grow their business.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">Start Free Trial</button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">Book a Demo</button>
          </div>
          <p className="mt-6 text-blue-200 text-sm">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
} 