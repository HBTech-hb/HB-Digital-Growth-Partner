import { useState } from 'react';
import { FaPaperPlane, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. First try Google Sheets submission
      const response = await fetch('https://script.google.com/macros/s/AKfycbyOGw_uOX5x8iQvQCqEnC_YTgUbTsIxZI_ia2y9r-r9ZeH7FN4H4UOUob3Qbse5OFId/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Failed to save to Google Sheets');

      // 2. Then open Gmail
      const subject = `Message from ${formData.firstName} ${formData.lastName}`;
      const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=bansodeharshad098@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      
      // Fallback to mailto if Sheets submission fails
      const mailto = `mailto:bansodeharshad098@gmail.com?subject=Message from ${formData.firstName}&body=${encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailto;
      setSubmitStatus('partial');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-[70vh] py-16 px-4 sm:px-10 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Contact Me</h2>
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a 
            href="mailto:bansodeharshad098@gmail.com" 
            className="flex items-center gap-2 p-4 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-blue-600" />
            </div>
            <p>bansodeharshad098@gmail.com</p>
          </a>
          <div className="flex items-center gap-2 p-4 border border-gray-300 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <FaPhone className="text-green-600" />
            </div>
            <p><a href="tel:+918080224138">Phone No:- +91 8080224138 </a></p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </button>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg">
              Message sent successfully! A Gmail window should open for you to send.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              Error sending message. Please try again or email me directly.
            </div>
          )}
          
          {submitStatus === 'partial' && (
            <div className="p-4 bg-yellow-100 text-yellow-700 rounded-lg">
              Couldn't connect to database. Opening Email...
            </div>
          )}

          
          
        </form>
        
      </div>
      
    </section>
    
  );
};

export default Contact;