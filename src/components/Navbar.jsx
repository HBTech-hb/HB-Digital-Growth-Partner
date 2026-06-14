import { useState, useEffect } from 'react';
import logo from '../assets/logo/WEBSITE-LOGO.png';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'} transition-all duration-300` this is for background use 
    <div className={`sticky top-2 z-[9999] px-5 opacity-85`}> 
      <nav className={`flex justify-around  border-2 border-blue-200 border-opacity-75 md:border-opacity-50 items-center h-15 mx-auto max-w-250 px-4 my-4 rounded-lg bg-white shadow-md ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'} transition-all duration-300`} >
  
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="My Portfolio" className="h-12" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            {[
              "home",
              "about",
              "services",
              "portfolio",
              "pricing",
              "contact",
            ].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`capitalize font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === section
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-700"
                  }`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Navigation */}
 {isMenuOpen && (
  <div className="fixed inset-0 bg-white z-40 mt-20">
    <div className="mx-auto max-w-7xl px-4">
      <ul className="flex flex-col gap-2 py-4">

        {[
          "home",
          "about",
          "services",
          "portfolio",
          "pricing",
          "contact",
        ].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="block px-4 py-3 capitalize text-gray-800 hover:bg-blue-50 rounded-xl transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {section}
            </a>
          </li>
        ))}

      </ul>
    </div>
  </div>
)}
      </nav>
    </div>
  );
};

export default Navbar;

