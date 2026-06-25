import { useEffect, useState } from "react";
import reviews from "../data/reviewsData";
import { FaStar } from "react-icons/fa";
import googleLogo from "../assets/google.png";

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="reviews"
      className="py-20 px-6 sm:px-10 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Client Reviews
          </h2>

          <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
            Feedback from businesses and clients I've worked with.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-[var(--surface)] rounded-3xl shadow-md p-8 mb-10 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Excellent
          </h3>

          <div className="flex justify-center text-yellow-400 text-3xl my-3">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>

          <p className="text-[var(--text-muted)]">
            Based on <strong>{reviews.length} Reviews</strong>
          </p>

          <img
            src={googleLogo}
            alt="Google"
            className="h-8 mx-auto mt-4"
          />
        </div>

        {/* Reviews Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {[...Array(2)].map((_, index) => {
            const reviewIndex = (current + index) % reviews.length;
            const r = reviews[reviewIndex];

            return (
              <div
                key={reviewIndex}
                className="bg-[var(--surface)] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-between items-center mb-4">

                  <div>
                    <h4 className="font-bold text-lg text-slate-900">
                      {r.name}
                    </h4>

                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(r.stars)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  <img
                    src={googleLogo}
                    alt="Google"
                    className="h-6"
                  />

                </div>

                <p className="text-[var(--text-muted)] leading-relaxed">
                  "{r.review}"
                </p>
              </div>
            );
          })}

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                current === index
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSlider;