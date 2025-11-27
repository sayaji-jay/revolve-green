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



                {/* Team Photo Section */}
        <div className="card-animate mb-12 md:mb-16">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/teams/all.jpeg"
              alt="Our Bio Plastics Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/30 to-transparent flex items-end">
              <div className="p-6 md:p-8 lg:p-12 w-full">
                {/* <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  Meet Our Team
                </h2> */}
                <p className="text-lg md:text-xl text-lime-200 max-w-2xl">
                  Dedicated professionals working together to create sustainable bio-plastic solutions
                </p>
              </div>
            </div>
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
