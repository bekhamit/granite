import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Building2, 
  FileSpreadsheet, 
  ArrowRight, 
  Database, 
  LineChart, 
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { DemoForm } from './components/DemoForm';
import { FadeIn } from './components/ui/FadeIn';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);

  // Smooth scroll handler
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 text-navy-900 font-sans selection:bg-navy-900 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-navy-900 flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-navy-900">Granite</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToId('problem')} className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">Why It Matters</button>
            <button onClick={() => scrollToId('solution')} className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">Platform</button>
            <button onClick={() => scrollToId('audience')} className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">For Teams</button>
            <button 
              onClick={() => scrollToId('demo')}
              className="bg-navy-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-navy-800 transition-colors"
            >
              Book Demo
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-lg">
             <button onClick={() => scrollToId('problem')} className="text-left text-lg font-medium text-gray-800">Why It Matters</button>
             <button onClick={() => scrollToId('solution')} className="text-left text-lg font-medium text-gray-800">Platform</button>
             <button onClick={() => scrollToId('audience')} className="text-left text-lg font-medium text-gray-800">For Teams</button>
             <button onClick={() => scrollToId('demo')} className="bg-navy-900 text-white py-3 text-center mt-2">Book Demo</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 pt-20">
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-4xl mx-auto text-center z-10"
        >
          {/* Removed the badge as requested for a cleaner look */}
          
          <FadeIn delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight md:leading-[1.1] text-navy-900 mb-8">
              Faster underwriting for commercial real estate.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Upload documents. Get structured data and financial models. Spend your time on the story, not the formatting.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToId('demo')}
                className="w-full md:w-auto bg-navy-900 text-white px-8 py-4 text-base font-medium hover:bg-navy-800 transition-colors min-w-[200px]"
              >
                Book a Demo
              </button>
              <button 
                onClick={() => scrollToId('solution')}
                className="w-full md:w-auto bg-transparent border border-gray-300 text-navy-900 px-8 py-4 text-base font-medium hover:border-navy-900 transition-colors min-w-[200px]"
              >
                How It Works
              </button>
            </div>
          </FadeIn>
        </motion.div>

        {/* Abstract Background Element */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gray-200/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-gray-200/40 rounded-full blur-3xl opacity-50" />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 md:py-32 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                  Stop the spreadsheet grind.
                </h2>
                <div className="w-12 h-1 bg-gold-400 mb-8"></div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Every deal starts the same way: pulling numbers from rent rolls, manually entering them into spreadsheets, rebuilding the same cash flow model, and formatting it for clients.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The work that actually requires your expertise—evaluating the deal, advising clients, negotiating—gets squeezed by hours of setup.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/20 to-transparent rounded-lg transform rotate-3"></div>
                <div className="bg-navy-800 border border-navy-700 p-8 rounded-lg relative">
                  <div className="space-y-4 opacity-75">
                    <div className="flex items-center gap-4 border-b border-navy-700 pb-4">
                      <div className="w-8 h-8 rounded bg-navy-700 flex items-center justify-center">
                        <FileSpreadsheet className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="h-2 w-32 bg-navy-700 rounded"></div>
                      <div className="h-2 w-12 bg-navy-700 rounded ml-auto"></div>
                    </div>
                     <div className="flex items-center gap-4 border-b border-navy-700 pb-4">
                      <div className="w-8 h-8 rounded bg-navy-700 flex items-center justify-center">
                        <FileSpreadsheet className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="h-2 w-48 bg-navy-700 rounded"></div>
                      <div className="h-2 w-12 bg-navy-700 rounded ml-auto"></div>
                    </div>
                     <div className="flex items-center gap-4 border-b border-navy-700 pb-4">
                      <div className="w-8 h-8 rounded bg-navy-700 flex items-center justify-center">
                        <FileSpreadsheet className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="h-2 w-24 bg-navy-700 rounded"></div>
                      <div className="h-2 w-12 bg-navy-700 rounded ml-auto"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-navy-900 border border-gold-400/30 px-6 py-3 rounded text-gold-400 font-mono text-sm tracking-wider">
                      STATUS: MANUAL ENTRY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-navy-900 mb-6">We handle the tedious parts.</h2>
            <p className="text-xl text-gray-600">You stay in control. We just get you there faster.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.2}>
              <div className="bg-white p-10 h-full border border-gray-100 hover:border-navy-900/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-navy-900">
                  <Database strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Document Extraction</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI reads rent rolls, T-12s, and operating statements quickly. It parses messy PDFs and pulls the exact data points you need, reducing manual entry errors.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white p-10 h-full border border-gray-100 hover:border-navy-900/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-navy-900">
                  <LineChart strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Model Generation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Generate cash flow projections, debt analysis, and sensitivity tables automatically. It's a starting point, not a black box—fully auditable and editable.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-white p-10 h-full border border-gray-100 hover:border-navy-900/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-navy-900">
                  <FileSpreadsheet strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Clean Outputs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Download native Excel models and formatted summaries ready to send to clients or investment committees. No more hours spent strictly on reformatting.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="audience" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <FadeIn>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-serif text-navy-900 mb-6">Built for volume.</h2>
                <p className="text-gray-600 mb-8">
                  We build tools specifically for professionals who need to process deals at scale and speed.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-navy-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" /> Brokers with active deal flow
                  </li>
                  <li className="flex items-center gap-3 text-navy-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" /> Acquisition analysts screening opps
                  </li>
                  <li className="flex items-center gap-3 text-navy-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" /> High-velocity investment teams
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Multifamily', 'Office', 'Retail', 'Industrial', 'NNN', 'Self-Storage'].map((asset, i) => (
                  <div key={asset} className="bg-gray-50 flex flex-col items-center justify-center p-8 border border-gray-100 rounded hover:bg-white hover:shadow-md transition-all duration-300">
                    <Building2 className="w-8 h-8 text-gray-400 mb-3" strokeWidth={1} />
                    <span className="text-navy-900 font-medium">{asset}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5 pointer-events-none">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-navy-900 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="sticky top-24">
                <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
                  Serious tools for serious teams.
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We don't offer self-serve signup. We partner with firms doing real deal volume to integrate into their workflow.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-serif font-bold text-navy-900">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-1">Book a qualifying call</h4>
                      <p className="text-gray-600 text-sm">We'll walk through the platform using your typical deals.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-serif font-bold text-navy-900">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-1">See the platform</h4>
                      <p className="text-gray-600 text-sm">Live demo using your typical deal documents.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-serif font-bold text-navy-900">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-1">Start Underwriting</h4>
                      <p className="text-gray-600 text-sm">Start using Granite.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <DemoForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-serif font-bold tracking-tight">Granite</span>
            <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} Granite. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:contact@granite.ai" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}