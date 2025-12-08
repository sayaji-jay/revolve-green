"use client";

import React, { useEffect, useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function ImpactPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('.card-animate');
    cards?.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.6s ease-out';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={containerRef}>

        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16 card-animate">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Heart className="w-16 h-16 md:w-20 md:h-20 text-emerald-700" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-800 mb-4">
            Our Impacts
          </h1>
          <p className="text-xl md:text-2xl text-emerald-600 mb-6">
            Making a Difference Through Sustainable Innovation
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how we're creating positive change in communities and the environment
            through our sustainable initiatives and partnerships.
          </p>
        </div>

        {/* Video and Images Section */}
        <div className="card-animate mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">

            {/* Video Section */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-[560px] md:h-[616px] flex items-center justify-center">
              <video
                className="w-full h-full object-contain"
                controls
              >
                <source src="/impact/video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Images Section - Stacked */}
            <div className="flex flex-col gap-6">
              {/* Image 1 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-64 md:h-72">
                  <img
                    src="/impact/img-1.jpeg"
                    alt="Impact Achievement 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/30 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Community Partnership
                      </h3>
                      <p className="text-white/90 mt-2">
                        Collaborating with government initiatives for sustainable development
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-64 md:h-72">
                  <img
                    src="/impact/img-2.jpeg"
                    alt="Impact Achievement 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/30 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Sustainability Recognition
                      </h3>
                      <p className="text-white/90 mt-2">
                        Honored for our commitment to environmental sustainability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* CTA Section */}
        <div className="card-animate bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Join Us in Making an Impact
          </h2>
          <p className="text-emerald-800 text-lg mb-8 max-w-2xl mx-auto">
            Be part of our journey towards a sustainable future. Together, we can create
            lasting positive change in our communities and environment.
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-colors duration-300"
          >
            Get Involved
          </a>
        </div>

      </div>
    </div>
  );
}
