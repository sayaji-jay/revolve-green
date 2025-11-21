"use client";
import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
      `}</style>

      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold font-['Lato'] text-center text-gray-800 mb-3">
            CONTACT US
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or to learn more about our sustainable products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Phone */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
              <a href="tel:+917383070297" className="text-green-600 hover:text-green-700 font-medium">
                +91 73830 70297
              </a>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-7 h-7 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <div className="space-y-1">
                <a href="mailto:sales@revolvegreen.com" className="block text-green-600 hover:text-green-700 font-medium text-sm">
                  sales@revolvegreen.com
                </a>
                <a href="mailto:preet@revolvegreen.com" className="block text-green-600 hover:text-green-700 font-medium text-sm">
                  preet@revolvegreen.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
              <div className="text-gray-700 text-sm space-y-1">
                <p className="font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="font-medium">Sunday: Closed</p>
              </div>
            </div>

            {/* Website */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Website</h3>
              <a href="https://revolvegreen.in" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                revolvegreen.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
