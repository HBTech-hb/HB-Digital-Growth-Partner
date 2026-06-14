import { useState } from "react";
import { FaPaperPlane, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Auto subject
      const subject = `I need help growing my business through digital marketing - ${formData.message.slice(0, 50)}`;

      // Clean email body
      const body = `
Name: ${formData.firstName} ${formData.lastName}

Email: ${formData.email}

Message:
${formData.message}

----------------------
Sent via website contact form (HB Digital Growth Partner)
`;

      // Open default mail app
      window.location.href = `mailto:bansodeharshad098@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      // 🔥 Reload page after mail opens
      setTimeout(() => {
        window.location.reload();
      }, 1200);

    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-[70vh] py-16 px-4 sm:px-10 bg-gray-50">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">

          <a
            href="mailto:bansodeharshad098@gmail.com"
            className="flex items-center gap-2 p-4 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-blue-600" />
            </div>
            <p className="hover:bg-gray-100 transition" >Email Me : bansodeharshad098@gmail.com</p>
          </a>

          <div className="flex items-center gap-2 p-4 border border-gray-300 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center" >
              <FaPhone className="text-green-600" />
            </div>
            <p>
              <a href="tel:+918080224138" >
                +91 8080224138
              </a>
            </p>
          </div>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Opening Mail..." : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </button>

          {/* Status */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg">
              Mail opened successfully. Please click send in your email app.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              Something went wrong. Try again.
            </div>
          )}

        </form>

      </div>
    </section>
  );
};

export default Contact;