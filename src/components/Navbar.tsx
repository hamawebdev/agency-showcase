
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SmoothScroll from './SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Contact', path: '/contact' },
  ];

  // Home page section links
  const isHomePage = location.pathname === '/';
  const homeSectionLinks = [
    { text: 'Services', to: '#services' },
    { text: 'Why Us', to: '#why-choose-us' },
    { text: 'Projects', to: '#case-studies' },
    { text: 'Testimonials', to: '#testimonials' },
  ];

  return (
    <motion.header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-width px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-agency-dark tracking-tight transition-all"
          >
            Agency<span className="text-agency-blue">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {isHomePage ? (
              // Home page sections navigation
              <>
                {homeSectionLinks.map((link) => (
                  <SmoothScroll
                    key={link.to}
                    to={link.to}
                    duration={800}
                    offset={-100}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                      'text-agency-dark/80 hover:text-agency-blue hover:bg-agency-lightBlue'
                    )}
                  >
                    {link.text}
                  </SmoothScroll>
                ))}

                {/* Regular page links */}
                {navLinks.filter(link => link.path !== '/').map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                      'text-agency-dark/80 hover:text-agency-blue hover:bg-agency-lightBlue'
                    )}
                  >
                    {link.text}
                  </Link>
                ))}
              </>
            ) : (
              // Regular navigation for other pages
              navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                    location.pathname === link.path
                      ? 'text-agency-blue'
                      : 'text-agency-dark/80 hover:text-agency-blue hover:bg-agency-lightBlue'
                  )}
                >
                  {link.text}
                </Link>
              ))
            )}

            <Button 
              asChild 
              className="ml-4 bg-agency-blue hover:bg-agency-blue/90 transition-all"
            >
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-agency-dark p-2"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white p-6"
            style={{ top: '60px' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col space-y-4 pt-4">
              {isHomePage ? (
                // Home page sections navigation for mobile
                <>
                  {homeSectionLinks.map((link) => (
                    <SmoothScroll
                      key={link.to}
                      to={link.to}
                      duration={800}
                      offset={-100}
                      className={cn(
                        'px-4 py-3 text-lg font-medium rounded-md transition-all',
                        'text-agency-dark hover:text-agency-blue hover:bg-agency-lightBlue'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.text}
                    </SmoothScroll>
                  ))}

                  {/* Regular page links for mobile */}
                  {navLinks.filter(link => link.path !== '/').map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        'px-4 py-3 text-lg font-medium rounded-md transition-all',
                        'text-agency-dark hover:text-agency-blue hover:bg-agency-lightBlue'
                      )}
                    >
                      {link.text}
                    </Link>
                  ))}
                </>
              ) : (
                // Regular navigation for other pages (mobile)
                navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'px-4 py-3 text-lg font-medium rounded-md transition-all',
                      location.pathname === link.path
                        ? 'text-agency-blue bg-agency-lightBlue'
                        : 'text-agency-dark hover:text-agency-blue hover:bg-agency-lightBlue'
                    )}
                  >
                    {link.text}
                  </Link>
                ))
              )}
              
              <Button 
                asChild 
                className="mt-4 w-full bg-agency-blue hover:bg-agency-blue/90"
              >
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
