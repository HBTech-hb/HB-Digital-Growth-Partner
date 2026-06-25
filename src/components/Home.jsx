import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../assets/smm.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Digital Growth"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* LEFT SIDE CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <p className="text-blue-600 font-semibold mb-3">
           HB Digital Growth Partner
          </p>

          {/* 🔥 TYPEWRITER HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">

            Helping Small Businesses Grow with

            <span className="block text-blue-600 mt-2">
              <Typewriter
                words={[
                  "Social Media Marketing",
                  "Reel Editing",
                  "Content Creation",
                  "AI Growth Systems"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>

          </h1>

          <p className="text-[var(--text-muted)] text-lg mt-6 max-w-xl">
            I help businesses create content, manage social media,
            edit high-performing reels, and use AI tools to grow faster
            and get more customers online.
          </p>

          {/* TRUST LINE */}
          <p className="text-gray-500 mt-4">
            Social Media • Reels • Content Strategy • AI Growth Systems
          </p>

          {/* CTA ICONS */}
          <div className="flex gap-5 mt-8 justify-center md:justify-start">

            <a
              href="https://www.linkedin.com/in/harshadbansode/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-blue-600 transition"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://wa.me/918080224138?text=Hi%20Harshad,%20I%20want%20help%20to%20grow%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-green-600 transition"
            >
              <FaWhatsapp size={28} />
            </a>

          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">

            <a
              href="#portfolio"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-center"
            >
              View My Work
            </a>

            <a
              href="https://wa.me/918080224138?text=Hi%20Harshad,%20I%20want%20help%20to%20grow%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition text-center"
            >
              Message Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;