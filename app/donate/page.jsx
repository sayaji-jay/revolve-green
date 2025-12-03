'use client';

import { Heart, QrCode, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Donate() {
  const [copied, setCopied] = useState(false);
  const upiId = "revolvegreen@upi"; // Replace with actual UPI ID

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
        * {
          font-family: 'Lato', sans-serif;
        }
      `}</style>

      <div
        className="min-h-screen relative"
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-600/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg mb-6">
              <Heart className="w-5 h-5 text-white fill-white" />
              <span className="text-white font-bold">Support Our Mission</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Make a Difference Today
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-semibold">
              Your contribution helps us create a sustainable future for generations to come
            </p>
          </div>

          {/* Top Section - Why Donate and Need Help Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Why Donate Section */}
            <div className="bg-white/95 backdrop-blur-sm border-2 border-green-300 rounded-3xl shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                Why Donate?
              </h2>

              <div className="space-y-4 text-gray-800">
                <p className="text-base md:text-lg font-medium leading-relaxed">
                  At Revolve Green, we're committed to transforming waste into beautiful, sustainable solutions. Your donation helps us:
                </p>

                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-sm md:text-base font-semibold">
                      Rescue more waste materials from landfills and give them a new life
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-sm md:text-base font-semibold">
                      Create employment opportunities for local artisans and waste workers
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-sm md:text-base font-semibold">
                      Develop innovative eco-friendly products and solutions
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-sm md:text-base font-semibold">
                      Spread awareness about sustainable living and zero-waste practices
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                  <p className="text-base md:text-lg font-bold text-green-800 text-center">
                    Every contribution, no matter how small, makes a significant impact on our environment and community.
                  </p>
                </div>
              </div>
            </div>

            {/* Need Help Section */}
            <div className="bg-white/95 backdrop-blur-sm border-2 border-green-300 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 text-center">
                Need Help?
              </h2>

              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-base md:text-lg text-gray-800 font-semibold mb-4">
                    For donation queries, contact us at:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200">
                      <p className="text-sm text-gray-600 font-semibold mb-1">Email</p>
                      <p className="text-lg md:text-xl font-bold text-green-700">
                        donate@revolvegreen.com
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200">
                      <p className="text-sm text-gray-600 font-semibold mb-1">Phone</p>
                      <p className="text-lg md:text-xl font-bold text-green-700">
                        +91 XXXXX XXXXX
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
                  <p className="text-white font-bold text-sm md:text-base">
                    We're here to help with any questions about your contribution
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Details Section - Full Width */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-green-300 rounded-3xl shadow-2xl p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
                Donate Now
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* QR Code Section */}
                <div className="flex flex-col items-center">
                  <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border-4 border-green-600 mb-4">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      {/* Replace with actual QR code image */}
                      <div className="text-center">
                        <QrCode className="w-32 h-32 md:w-48 md:h-48 text-green-600 mx-auto mb-2" strokeWidth={1.5} />
                        <p className="text-xs md:text-sm text-gray-600 font-semibold">Scan to Donate</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 font-semibold text-center">
                    Scan with any UPI app to donate
                  </p>
                </div>

                {/* UPI ID Section */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                    <p className="text-sm font-bold text-gray-700 mb-3 text-center">
                      UPI ID
                    </p>
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 md:p-4 border-2 border-green-300 shadow-md">
                      <p className="text-base md:text-lg font-bold text-green-800 flex-1 text-center break-all">
                        {upiId}
                      </p>
                      <button
                        onClick={copyToClipboard}
                        className="bg-green-600 hover:bg-green-700 text-white p-2.5 rounded-lg transition-all shadow-md hover:shadow-lg flex-shrink-0"
                        title="Copy UPI ID"
                      >
                        {copied ? (
                          <Check className="w-5 h-5" strokeWidth={3} />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {copied && (
                      <p className="text-sm text-green-700 font-semibold text-center mt-2">
                        UPI ID copied to clipboard!
                      </p>
                    )}
                  </div>

                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-center">
                    <Heart className="w-12 h-12 text-white fill-white mx-auto mb-3" />
                    <p className="text-white font-bold text-sm md:text-base">
                      Your support helps create a sustainable future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thank You Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-600 rounded-3xl shadow-2xl p-12 md:p-16 text-white relative overflow-hidden border-2 border-green-400">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              </div>

              <Heart className="w-16 h-16 text-white fill-white mx-auto mb-4 relative z-10" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 drop-shadow-lg">
                Thank You for Your Support!
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-white relative z-10 drop-shadow-md max-w-3xl mx-auto">
                Together, we're building a greener, more sustainable future. Your generosity makes all the difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
