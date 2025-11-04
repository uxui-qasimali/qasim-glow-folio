import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-7 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-[10px]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left Badge with Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`rounded-2xl border border-[hsl(var(--lime)/0.18)] px-5 py-3 transition-all duration-500 ${
              isScrolled
                ? 'bg-[hsl(var(--bg-1)/0.82)] shadow-[0_0_18px_hsl(var(--lime)/0.06)]'
                : 'bg-transparent'
            }`}
          >
            <div className="font-mono text-sm font-bold tracking-wider text-[hsl(var(--text))]">
              QASIM A.
            </div>
            <div className="flex flex-col text-[10px] text-[hsl(var(--muted)/0.7)] mt-0.5">
              <span>@2025</span>
            </div>
          </motion.div>

          {/* Center Navigation Links */}
          <div className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-500 ${
            isScrolled
              ? 'bg-[hsl(var(--bg-1)/0.82)] backdrop-blur-md border-[hsl(var(--lime)/0.12)] shadow-[0_0_18px_hsl(var(--lime)/0.06)]'
              : 'bg-transparent border-[hsl(var(--divider)/0.06)]'
          }`}>
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Work', id: 'projects' },
              { label: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="relative px-5 py-2 text-sm font-medium text-[hsl(var(--text)/0.8)] hover:text-[hsl(var(--lime))] transition-all duration-200 cursor-hover group"
              >
                {/* Frosted pill background */}
                <span 
                  className="absolute inset-0 bg-[hsl(var(--text)/0.03)] backdrop-blur-[6px] rounded-full scale-x-0 origin-left transition-transform duration-180 group-hover:scale-x-100"
                  style={{
                    boxShadow: '0 8px 28px 0 hsl(var(--lime) / 0.06)',
                  }}
                />
                
                <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-180">
                  {item.label}
                </span>
                
                {/* Active indicator */}
                {activeLink === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--lime))]"
                    style={{
                      boxShadow: '0 0 8px hsl(var(--lime) / 0.6)',
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`md:hidden p-3 rounded-xl border transition-all duration-500 cursor-hover ${
              isScrolled
                ? 'bg-[hsl(var(--bg-1)/0.82)] backdrop-blur-md border-[hsl(var(--lime)/0.12)]'
                : 'bg-transparent border-[hsl(var(--divider)/0.06)]'
            }`}
          >
            <svg
              className="w-5 h-5 text-[hsl(var(--text))]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
