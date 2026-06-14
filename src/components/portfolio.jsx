import { useState } from "react";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("graphics");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedWebsite, setSelectedWebsite] = useState(null);

  return (
    <section
      id="portfolio"
      className="py-20 px-6 sm:px-10 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            My Portfolio
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore my graphic designs, social media content,
            reel editing projects, and websites I've worked on.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">

          {["graphics", "social", "reels", "websites"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 shadow"
              }`}
            >
              {tab === "graphics" && "Graphics"}
              {tab === "social" && "Social Media"}
              {tab === "reels" && "Reels"}
              {tab === "websites" && "Websites"}
            </button>
          ))}

        </div>

        {/* Graphics */}
        {activeTab === "graphics" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projectsData.graphics.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />

                <div className="p-4">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Social Media */}
        {activeTab === "social" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projectsData.social.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />

                <div className="p-4">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reels */}
        {activeTab === "reels" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.reels.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
                onClick={() => setSelectedVideo(item.video)}
              >
                <video
                  src={item.video}
                  className="w-full h-[450px] object-cover"
                  muted
                />

                <div className="p-4">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Websites */}
        {activeTab === "websites" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.websites.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition"
                onClick={() => setSelectedWebsite(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <video
            src={selectedVideo}
            controls
            autoPlay
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />
        </div>
      )}

      {/* Website Modal */}
      {selectedWebsite && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWebsite(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedWebsite.image}
              alt={selectedWebsite.title}
              className="w-full"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {selectedWebsite.title}
              </h3>

              {selectedWebsite.description && (
                <p className="text-gray-600 mt-3">
                  {selectedWebsite.description}
                </p>
              )}

              {selectedWebsite.link && (
                <a
                  href={selectedWebsite.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;