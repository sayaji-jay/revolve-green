'use client';

import { Mail, Phone, MapPin, Send, Clock, Globe, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 pb-24">
        {/* Green Glow Effects */}
        <div className="absolute top-28 -z-1 left-1/4 size-72 bg-green-600 blur-[300px]"></div>
        <div className="absolute top-40 -z-1 right-1/4 size-96 bg-emerald-500 blur-[350px]"></div>

        {/* Badge */}
        <a href="#contact-form" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 bg-green-600/80 backdrop-blur-sm hover:bg-green-600/90 transition shadow-lg">
          <span className="bg-green-800 text-white text-xs px-3.5 py-1 rounded-full">
            GET IN TOUCH
          </span>
          <p className="flex items-center gap-1 text-white">
            <span>We'd love to hear from you</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition duration-300" />
          </p>
        </a>

        {/* Main Heading */}
        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-bold max-w-4xl text-center mt-6 text-gray-900 drop-shadow-lg">
          CONTACT US
          <span className="block bg-gradient-to-r from-green-500 to-emerald-400 text-transparent bg-clip-text mt-4">
            Let's Make Something Great Together
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-center text-gray-900 max-w-3xl mt-8 leading-relaxed drop-shadow-sm font-semibold">
          Have questions about our eco-friendly products or services? We're here to help!
        </p>
      </div>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Phone Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Phone className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
            <p className="text-gray-800 font-semibold text-lg">+91 73830 70297</p>
            <p className="text-gray-600 text-sm mt-2">Mon-Sat: 9:00 AM - 6:00 PM</p>
          </div>

          {/* Email Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Mail className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-800 font-semibold text-sm">sales@revolvegreen.com</p>
            <p className="text-gray-800 font-semibold text-sm mt-1">preet@revolvegreen.com</p>
          </div>

          {/* Website Card */}
          <div className="bg-gradient-to-br from-teal-50 to-green-50 border-2 border-teal-300 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Globe className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us Online</h3>
            <p className="text-gray-800 font-semibold text-lg">revolvegreen.in</p>
            <p className="text-gray-600 text-sm mt-2">Explore our full catalog</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <div className="bg-white/95 backdrop-blur-sm border-2 border-green-300 rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Send us a Message
            </h2>
            <p className="text-gray-800 mb-8 font-medium">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Additional Info */}
          <div className="space-y-8">
            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Why Contact Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold text-gray-900">Custom Orders:</span> Get personalized handmade products tailored to your needs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-600 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold text-gray-900">Bulk Orders:</span> Special pricing available for large quantity orders
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-600 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold text-gray-900">Decor Rental:</span> Inquire about our sustainable decor rental services
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold text-gray-900">Partnerships:</span> Collaborate with us for eco-friendly initiatives
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-emerald-600" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-emerald-200 pb-2">
                  <span className="text-gray-900 font-bold">Monday - Friday</span>
                  <span className="text-gray-800 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-emerald-200 pb-2">
                  <span className="text-gray-900 font-bold">Saturday</span>
                  <span className="text-gray-800 font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold">Sunday</span>
                  <span className="text-gray-800 font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 border-2 border-teal-300 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-teal-600" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Location
                </h3>
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">
                We're based in India, serving customers nationwide with our eco-friendly handmade products and sustainable decor solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-600 rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white relative overflow-hidden border-2 border-green-400">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 drop-shadow-lg">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-white relative z-10 drop-shadow-md">
            Join us in creating a sustainable future
          </p>
          <p className="text-lg text-white/90 relative z-10 drop-shadow-md">
            Every purchase supports eco-friendly practices and reduces waste
          </p>
        </div>
      </section>
    </div>
  );
}
