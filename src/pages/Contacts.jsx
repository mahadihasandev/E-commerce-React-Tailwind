import React from "react";

function Contacts() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE – Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-5 text-blue-700">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to us. We’ll get back to you within 24 hours!
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Your Email</label>
              <input
                type="email"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Your Message</label>
              <textarea
                rows="5"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE – Company Info + Map */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Our Information</h3>

          <p className="text-gray-600">
            <strong>Address:</strong> Dhaka, Bangladesh
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> support@example.com
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +880 1777-123456
          </p>

          <div className="mt-5">
            <h3 className="text-xl font-semibold mb-2">Find Us on Map</h3>

            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902726527096!2d90.39945287481113!3d23.75086708881664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf579a0a52c3%3A0x584d2fde3e4e34df!2sDhaka!5e0!3m2!1sen!2sbd!4v1701234567890"
              width="100%"
              height="300"
              className="rounded-lg shadow"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
