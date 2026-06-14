const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 px-6 sm:px-10 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Choose Your Growth Plan
          </h2>

          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Simple fixed pricing. No hidden charges. No negotiations.
            Choose the package that fits your business needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* 1 Day Plan */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

            <h3 className="text-2xl font-bold text-slate-900">
              ⚡ Quick Launch
            </h3>

            <p className="text-gray-500 mt-2">
              One-day service for urgent content needs.
            </p>

            <div className="mt-6">
              <span className="text-5xl font-bold text-slate-900">
                ₹999
              </span>
            </div>

            <p className="text-blue-600 font-medium mt-2">
              1 Day Service
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✅ 1 Social Media Post</li>
              <li>✅ 1 Reel Edit</li>
              <li>✅ Basic Canva Design</li>
              <li>✅ Delivery Within 24 Hours</li>
              <li>✅ 1 Revision</li>
            </ul>

            <a
              href="https://wa.me/918080224138"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-8 bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition"
            >
              Get Started
            </a>

          </div>

          {/* 7 Day Plan */}
         <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-600 p-8 scale-105 relative z-10">

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                MOST POPULAR
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              🚀 Growth Sprint
            </h3>

            <p className="text-gray-500 mt-2">
              Perfect for businesses wanting consistent content.
            </p>

            <div className="mt-6">
              <span className="text-5xl font-bold text-blue-600">
                ₹4,999
              </span>
            </div>

            <p className="text-blue-600 font-medium mt-2">
              7 Day Service
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✅ 7 Social Media Posts</li>
              <li>✅ 3 Reels Edited</li>
              <li>✅ Canva Creatives</li>
              <li>✅ Caption Writing</li>
              <li>✅ Content Planning</li>
              <li>✅ Priority Support</li>
            </ul>

            <a
              href="https://wa.me/918080224138"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Choose Plan
            </a>

          </div>

          {/* 30 Day Plan */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

            <h3 className="text-2xl font-bold text-slate-900">
              👑 Growth Partner
            </h3>

            <p className="text-gray-500 mt-2">
              Complete monthly content management.
            </p>

            <div className="mt-6">
              <span className="text-5xl font-bold text-slate-900">
                ₹14,999
              </span>
            </div>

            <p className="text-blue-600 font-medium mt-2">
              30 Day Service
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✅ 20+ Social Media Posts</li>
              <li>✅ 8 Reels Edited</li>
              <li>✅ Canva Creatives</li>
              <li>✅ Content Strategy</li>
              <li>✅ Hashtag Research</li>
              <li>✅ Weekly Support</li>
              <li>✅ Performance Review</li>
            </ul>

            <a
              href="https://wa.me/918080224138"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-8 bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition"
            >
              Become a Partner
            </a>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">

          <h3 className="text-2xl font-bold text-slate-900">
            Need Something Custom?
          </h3>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Every business is different. If you need custom content,
            more reels, complete account management, or website services,
            we can create a package tailored to your goals.
          </p>

          <a
            href="https://wa.me/918080224138?text=Hi%20Harshad,%20I%20need%20a%20custom%20package"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Request Custom Package
          </a>

        </div>

      </div>
    </section>
  );
};

export default Pricing;