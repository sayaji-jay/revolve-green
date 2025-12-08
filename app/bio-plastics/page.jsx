"use client";

import React, { useEffect, useRef } from 'react';
import { Package, Leaf, Recycle, TreePine, CheckCircle2, Sprout } from 'lucide-react';

export default function BioPlasticsPage() {
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
            <Package className="w-16 h-16 md:w-20 md:h-20 text-emerald-700" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-800 mb-4">
            Bio Plastics
          </h1>
          <p className="text-xl md:text-2xl text-emerald-600 mb-6">
            Eco-Friendly Alternatives for a Sustainable Future
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our bio-plastic products are designed to replace conventional plastics with biodegradable,
            compostable alternatives that minimize environmental impact.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
              aria-label="Visit our Instagram"
            >
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
              aria-label="Visit our Facebook"
            >
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
              aria-label="Visit our LinkedIn"
            >
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">

          {/* Carry Bags */}
          <div className="card-animate bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                <Package className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
              Biodegradable Carry Bags
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">100% biodegradable material</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Strong and durable</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Decomposes naturally in 3-6 months</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Available in various sizes</span>
              </li>
            </ul>
          </div>

          {/* Garbage Bags */}
          <div className="card-animate bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full flex items-center justify-center">
                <Recycle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
              Compostable Garbage Bags
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Compostable & eco-friendly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Leak-proof design</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Perfect for organic waste</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Multiple capacity options</span>
              </li>
            </ul>
          </div>

          {/* Straws */}
          <div className="card-animate bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Sprout className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
              Sustainable Straws
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Made from natural materials</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Biodegradable & safe</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Suitable for hot & cold beverages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Bulk orders available</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Why Choose Bio Plastics Section */}
        <div className="card-animate bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
            Why Choose Bio Plastics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Leaf className="w-12 h-12 text-lime-300 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-lime-300 mb-2">Environmental Protection</h3>
                <p className="text-white/90">
                  Our bio-plastics decompose naturally, reducing landfill waste and ocean pollution.
                  They break down into harmless organic matter without leaving toxic residues.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <TreePine className="w-12 h-12 text-lime-300 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-lime-300 mb-2">Renewable Resources</h3>
                <p className="text-white/90">
                  Made from plant-based materials and renewable resources, our products reduce
                  dependency on fossil fuels and lower carbon emissions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Recycle className="w-12 h-12 text-lime-300 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-lime-300 mb-2">Circular Economy</h3>
                <p className="text-white/90">
                  Supporting a circular economy model where waste becomes resource. Our bio-plastics
                  can be composted to enrich soil and support plant growth.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-12 h-12 text-lime-300 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-lime-300 mb-2">Quality & Performance</h3>
                <p className="text-white/90">
                  Our bio-plastics match the strength and durability of traditional plastics while
                  being completely biodegradable and environmentally safe.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="card-animate grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-5xl font-bold text-emerald-700 mb-2">100%</div>
            <p className="text-gray-700 font-semibold">Biodegradable</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-5xl font-bold text-emerald-700 mb-2">3-6</div>
            <p className="text-gray-700 font-semibold">Months to Decompose</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-5xl font-bold text-emerald-700 mb-2">0%</div>
            <p className="text-gray-700 font-semibold">Plastic Pollution</p>
          </div>
        </div>


        {/* CTA Section */}
        <div className="card-animate bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-emerald-800 text-lg mb-8 max-w-2xl mx-auto">
            Join us in creating a sustainable future. Contact us to learn more about our bio-plastic
            products and bulk ordering options.
          </p>
          <a
            href="#contact"
            className="inline-block bg-emerald-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </div>
  );
}
