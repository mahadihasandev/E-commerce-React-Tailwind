import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold text-blue-600">Our E-Commerce Store</span> —
            your number one destination for quality products, unbeatable prices, and fast delivery.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1542831371-d531d36971e6"
            alt="About Us"
            className="w-full rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is simple — to bring you the best products at amazing prices.
              We believe shopping should be easy, fast, and enjoyable. That's why we
              carefully select every product, partner with trusted suppliers, and ensure
              your orders reach you safely and quickly.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-600">Premium Quality</h3>
              <p className="text-gray-600 mt-2">
                We never compromise on quality — every item is checked and verified.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-600">Fast Delivery</h3>
              <p className="text-gray-600 mt-2">
                We deliver your products quickly and safely across Bangladesh.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-blue-600">24/7 Support</h3>
              <p className="text-gray-600 mt-2">
                Have questions? Our support team is always here to help you.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white p-10 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            We started our journey with a simple idea — making online shopping more reliable
            and affordable for everyone. Today, we serve thousands of customers, offering
            products across multiple categories including electronics, fashion, home goods,
            and more.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our team works continuously to improve your shopping experience and bring
            you the latest trending products at the best prices.
          </p>
        </section>

      </div>
    </div>
  );
}

export default About;