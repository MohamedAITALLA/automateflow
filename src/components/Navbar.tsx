
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    let isMounted = true;
    const handleScroll = () => {
      if (!isMounted) return;
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      isMounted = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Templates', path: '/templates' },
    { name: 'About Me', path: '/about-us' },
    { name: 'Contact Me', path: '/contact' },
  ];
  
  const footerLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md' : 'bg-primary/90 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-7 w-7 md:h-8 md:w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-base md:text-lg">AF</span>
              </div>
              <span className={`text-base md:text-lg font-bold ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                AutomateFlow
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? scrolled
                        ? 'text-white bg-primary font-bold shadow-sm'
                        : 'text-primary bg-white font-bold shadow-sm'
                      : scrolled
                        ? 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                        : 'text-white hover:text-blue-100 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
        
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`${
                scrolled 
                  ? 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white' 
                  : 'text-white hover:text-blue-100'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={()  => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Improved animation and styling */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg fixed left-0 right-0 top-14 h-[calc(100vh-3.5rem)] overflow-y-auto transition-opacity duration-200 ease-in-out"
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-white bg-primary font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
