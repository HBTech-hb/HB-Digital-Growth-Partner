import socialMedia from "../assets/services/social-media.png";
import reelEditing from "../assets/services/reel-editing.png";
import canvaDesign from "../assets/services/canva-design.png";
import contentStrategy from "../assets/services/content-strategy.png";

import creativeContent from "../assets/services/creative-content.png";
import fastResponse from "../assets/services/fast-response.png";
import affordablePricing from "../assets/services/affordable-pricing.png";
import clientSupport from "../assets/services/client-support.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-10 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Helping Businesses Grow Online
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
            I help businesses build a strong online presence through
            social media management, content creation, reel editing,
            and digital marketing strategies that attract more customers.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img
              src={socialMedia}
              alt="Social Media Management"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />

            <h3 className="text-xl font-bold mb-3">
              Social Media Management
            </h3>

            <p className="text-gray-600">
              Content planning, scheduling, engagement,
              and account management.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img
              src={reelEditing}
              alt="Reel Editing"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />

            <h3 className="text-xl font-bold mb-3">
              Reel Editing
            </h3>

            <p className="text-gray-600">
              Engaging reels, captions,
              transitions, and short-form videos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img
              src={canvaDesign}
              alt="Canva Design"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />

            <h3 className="text-xl font-bold mb-3">
              Canva Design
            </h3>

            <p className="text-gray-600">
              Eye-catching social media posts,
              banners, and promotional creatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img
              src={contentStrategy}
              alt="Content Strategy"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />

            <h3 className="text-xl font-bold mb-3">
              Content Strategy
            </h3>

            <p className="text-gray-600">
              Strategic content planning to
              increase visibility and engagement.
            </p>
          </div>

        </div>

        {/* ABOUT CONTENT */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md">

          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Why Businesses Work With Me
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            I work with local businesses, startups, and personal brands
            to create content that attracts attention and builds trust online.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            From managing social media accounts and designing Canva posts
            to editing reels and planning content strategies, I focus on
            helping businesses grow their online presence in practical,
            affordable, and effective ways.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            My goal is simple:
            <span className="font-semibold text-blue-600">
              {" "}help businesses reach more customers, strengthen
              their brand, and grow consistently online.
            </span>
          </p>

        </div>

        {/* WHY CHOOSE ME */}
        <div className="mt-12">

          <h3 className="text-3xl font-bold text-center mb-8">
            Why Choose Me?
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition">
              <img
                src={creativeContent}
                alt="Creative Content"
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />

              <h4 className="font-semibold text-gray-800">
                Creative Content
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition">
              <img
                src={clientSupport}
                alt="Client Support"
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />

              <h4 className="font-semibold text-gray-800">
                Client Support
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition">
              <img
                src={fastResponse}
                alt="Fast Response"
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />

              <h4 className="font-semibold text-gray-800">
                Fast Response
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition">
              <img
                src={affordablePricing}
                alt="Affordable Pricing"
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />

              <h4 className="font-semibold text-gray-800">
                Affordable Pricing
              </h4>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;