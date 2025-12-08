'use client';

import { Mail, Phone, MapPin, Send, Clock, Globe, ChevronRight, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xdkyawze");

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
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-center text-gray-900 max-w-3xl mt-8 leading-relaxed drop-shadow-sm font-semibold">
          Have questions about our eco-friendly products or services? We're here to help!
        </p>
      </div>

      {/* Contact Form Section */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <div className="bg-white/95 backdrop-blur-sm border-2 border-green-300 rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Send us a Message
            </h2>

            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-6">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" strokeWidth={2.5} />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-green-800">Thank You!</h3>
                  <p className="text-gray-800 font-medium text-lg">
                    Your message has been sent successfully.
                  </p>
                  <p className="text-gray-700">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
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
                      required
                      disabled={state.submitting}
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your full name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-600 text-sm mt-1"
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
                      required
                      disabled={state.submitting}
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-600 text-sm mt-1"
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
                      required
                      disabled={state.submitting}
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="text-red-600 text-sm mt-1"
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
                      required
                      disabled={state.submitting}
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="How can we help you?"
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                      className="text-red-600 text-sm mt-1"
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
                      required
                      disabled={state.submitting}
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-all bg-white text-gray-900 font-medium resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
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

            {/* Contact Information Box */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
                  <div>
                    <p className="text-gray-900 font-bold text-base">+91 73830 70297</p>
                    <p className="text-gray-600 text-sm">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                {/* <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 mt-1" strokeWidth={2.5} />
                  <div className="space-y-1">
                    <p className="text-gray-900 font-bold text-base">sales@revolvegreen.com</p>
                    <p className="text-gray-900 font-bold text-base">preet@revolvegreen.com</p>
                  </div>
                </div> */}

                {/* Website */}
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
                  <p className="text-gray-900 font-bold text-base">revolve-green.com</p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
                  <p className="text-gray-900 font-bold text-base">India (Serving nationwide)</p>
                </div>
              </div>
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
