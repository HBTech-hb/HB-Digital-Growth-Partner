import { useState, useEffect } from "react";
import logo from "../assets/logo/WEBSITE-LOGO.png";
import { FaHome, FaUser, FaServicestack, FaImage, FaPhone } from "react-icons/fa";

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= TOP FLOATING LOGO (MOBILE ONLY) ================= */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-[99999]">
        <div className="bg-[var(--surface)]/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-auto object-contain"
          />
        </div>
      </div>

      {/* ================= DESKTOP NAV (ONLY GLASS + BLUE BORDER FIXED) ================= */}
      <div className="hidden md:block sticky top-2 z-[9999] px-5">
        <nav
          className={`flex justify-around items-center mx-auto max-w-6xl px-4 my-4 rounded-lg backdrop-blur-md transition-all duration-300 border

          ${
            isScrolled
              ? "bg-[var(--surface)]/70 shadow-md border-blue-300"
              : "bg-[var(--surface)]/50 border-blue-200"
          }
        `}
        >
          {/* Logo */}
          <img src={logo} alt="logo" className="h-12 w-auto object-contain" />

          {/* Links */}
          <ul className="flex gap-8">
            {["home", "about", "services", "portfolio", "pricing", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`capitalize font-medium transition ${
                      activeSection === section
                        ? "text-blue-600"
                        : "text-[var(--text-muted)] hover:text-blue-500"
                    }`}
                  >
                    {section}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* ================= FLOATING MOBILE NAV (BOTTOM) ================= */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999]">
        <div className="flex items-center gap-6 bg-[var(--surface)]/80 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-gray-200">

          <a href="#home" className="flex flex-col items-center text-xs text-blue-600 hover:text-orange-500 transition">
            <FaHome className="text-xl" />
            Home
          </a>

          <a href="#about" className="flex flex-col items-center text-xs text-blue-600 hover:text-orange-500 transition">
            <FaUser className="text-xl" />
            About
          </a>

          <a href="#services" className="flex flex-col items-center text-xs text-blue-600 hover:text-orange-500 transition">
            <FaServicestack className="text-xl" />
            Services
          </a>

          <a href="#portfolio" className="flex flex-col items-center text-xs text-blue-600 hover:text-orange-500 transition">
            <FaImage className="text-xl" />
            Work
          </a>

          <a href="#contact" className="flex flex-col items-center text-xs text-blue-600 hover:text-orange-500 transition">
            <FaPhone className="text-xl" />
            Contact
          </a>

        </div>
      </div>
    </>
  );
};

export default Navbar;