import { useState, useEffect } from "react";
// import ThemeToggle from "./components/ThemeToggle";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TestimonialsSlider from "./components/TestimonialsSlider";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "Projects",
        "pricing",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          const scrollPosition = window.scrollY + 150;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-poppins">
      <Navbar activeSection={activeSection} />
{/* <ThemeToggle /> */}
     
      <Home />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <TestimonialsSlider />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;