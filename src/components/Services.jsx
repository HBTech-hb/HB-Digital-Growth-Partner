const services = [
  {
    title: "Social Media Management",
    description:
      "Content planning, scheduling, audience engagement, and account growth strategies.",
    icon: "📱",
  },
  {
    title: "Reel Editing",
    description:
      "Professional short-form videos with captions, transitions, and engaging edits.",
    icon: "🎬",
  },
  {
    title: "Canva Design",
    description:
      "Eye-catching social media posts, banners, stories, and promotional creatives.",
    icon: "🎨",
  },
  {
    title: "Content Strategy",
    description:
      "Content planning and marketing strategies that help businesses grow online.",
    icon: "📈",
  },
  {
    title: "AI Growth Systems",
    description:
      "Using AI tools to improve content creation, workflows, and customer engagement.",
    icon: "🤖",
  },
  {
    title: "Website Development",
    description:
      "Modern, responsive websites that help businesses build credibility online.",
    icon: "🌐",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 sm:px-10 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Services I Offer
          </h2>

          <p className="text-[var(--text-muted)] text-lg mt-4 max-w-3xl mx-auto">
            Helping businesses grow online through content creation,
            social media management, reel editing, and digital marketing.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-[var(--text-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;