
import type { FC } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First column - Logo and social links */}
          <div className="col-span-1 sm:col-span-2">
            
            <div className="flex items-center mb-4">
              <img 
                src="/bti-logo.png" 
                alt="BTI Logo" 
                className="h-8 w-auto mr-3" 
              />
              <span className="font-display text-lg sm:text-xl font-medium text-cyan-200">CODEWARS 2025</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md text-sm sm:text-base">
              Join us for an exciting hackathon experience where you can showcase your skills, 
              collaborate with peers, and win amazing prizes.
            </p>
            <div className="flex space-x-4 mb-8 sm:mb-0">
              <a 
                href="https://www.facebook.com/BTIBANGALORE.ORG/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/bti-bangalore/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@PrincipalBti" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/btibangalore/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links column */}
          <div className="space-y-3">
            <h3 id="quick-links-heading" className="text-lg font-medium mb-4 text-cyan-200">Quick Links</h3>
            <ul className="space-y-2.5" aria-labelledby="quick-links-heading">
              <li>
                <a 
                  href="#overview" 
                  className="text-slate-300 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40 rounded px-2 py-1"
                  aria-label="Navigate to Overview section"
                >
                  Overview
                </a>
              </li>
              <li>
                <a 
                  href="#eligibility" 
                  className="text-slate-300 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40 rounded px-2 py-1"
                  aria-label="Navigate to Eligibility section"
                >
                  Eligibility
                </a>
              </li>
              <li>
                <a 
                  href="#rules" 
                  className="text-slate-300 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40 rounded px-2 py-1"
                  aria-label="Navigate to Rules section"
                >
                  Rules
                </a>
              </li>
              <li>
                <a 
                  href="#prizes" 
                  className="text-slate-300 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40 rounded px-2 py-1"
                  aria-label="Navigate to Prizes section"
                >
                  Prizes
                </a>
              </li>
              <li>
                <a 
                  href="#register" 
                  className="text-slate-300 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40 rounded px-2 py-1"
                  aria-label="Navigate to Registration section"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium mb-4 text-cyan-200">Contact Us</h3>
            <ul className="space-y-2.5 text-slate-300 text-sm sm:text-base">
              <li>K Nivetha</li>
              <li>Computer Engineering Department</li>
              <li>Bangalore Tehcnological Institute, Kodathi Road</li>
              <li>Bengaluru, Karnataka - 560035</li>
              <li className="pt-2">nivetha.ravi91@gmail.com</li>
              <li>+91 98808 45652</li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-slate-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2025 CODEWARS. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            type="button"
            aria-label="Scroll to top of page"
            className="flex items-center text-slate-300 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40 rounded-md px-3 py-2"
          >
            Back to top
            <ArrowUp className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
