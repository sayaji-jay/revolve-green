"use client";

import React, { useEffect, useRef } from 'react';
import { Leaf, Recycle, Users, Sparkles, TreePine, Factory, Heart, TrendingUp, Lightbulb, Package, Palette, PartyPopper } from 'lucide-react';
import Link from 'next/link';

export default function SustainabilityBento() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Simple scroll-triggered animations
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
    <div className="min-h-screen py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 card-animate">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-800">
              REVOLVE GREEN
            </h1>
          </div>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-emerald-600">Transforming Waste Into Wonder</span>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Pioneering sustainable solutions through innovative bio-plastics, handcrafted upcycled products, and zero-waste event services
          </p>
        </div>

        {/* Three Verticals Section */}
        <div id="our-verticals" className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center card-animate">
            Our Three Verticals
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Card 1 - Bio Plastics Vertical */}
            <Link href="/bio-plastics" className="card-animate bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl transition-all duration-300 min-h-[350px] hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500 opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-8 h-8 text-lime-300" />
                  <span className="text-lime-300 text-sm font-semibold tracking-wider">VERTICAL 1</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                  Bio Plastics
                </h2>
                <div className="space-y-2 text-white/90 text-sm leading-relaxed flex-grow">
                  <p className="font-semibold text-lime-300">Eco-Friendly Alternatives</p>
                  <ul className="space-y-1.5 ml-4 mt-2">
                    <li>• Biodegradable Carry Bags</li>
                    <li>• Compostable Garbage Bags</li>
                    <li>• Compostable PLA straws</li>
                  </ul>
                </div>
                <div className="mt-4 text-lime-300 font-semibold flex items-center gap-2 pt-4 border-t border-lime-300/30">
                  Explore Bio Plastics →
                </div>
              </div>
            </Link>

            {/* Card 2 - Handmade Products Vertical */}
            <Link href="/handmade-products" className="card-animate bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-6 flex flex-col gap-4 overflow-hidden relative group hover:shadow-xl transition-all duration-300 min-h-[350px] hover:scale-[1.02]">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600 opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="w-8 h-8 text-emerald-900" />
                    <span className="text-emerald-900 text-sm font-semibold tracking-wider">VERTICAL 2</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 leading-tight mb-3">
                    Handmade Upcycle Decor
                  </h2>
                  <div className="text-emerald-800 text-sm leading-relaxed">
                    <p className="font-semibold mb-2">Crafted by Rural Women Artisans</p>
                    <ul className="space-y-1.5 ml-4">
                      <li>• Coasters & Pouches</li>
                      <li>• Bags & Accessories</li>
                      <li>• Home Decor Items</li>
                      <li>• Daily life style products</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-emerald-900 font-semibold flex items-center gap-2 pt-4 border-t border-emerald-900/30">
                  Discover Products →
                </div>
              </div>
            </Link>

            {/* Card 3 - Sajja Decor Vertical */}
            <Link href="/sajja-decor" className="card-animate bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl transition-all duration-300 min-h-[350px] hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-400 opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <PartyPopper className="w-8 h-8 text-green-300" />
                  <span className="text-green-300 text-sm font-semibold tracking-wider">VERTICAL 3</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                  Sajja Upcycled Decor Services
                </h2>
                <div className="space-y-2 text-white/90 text-sm leading-relaxed flex-grow">
                  <p className="font-semibold text-green-300">Creating Zero-Waste Events</p>
                  <ul className="space-y-1.5 ml-4 mt-2">
                    <li>• Upcycled Event Decorations</li>
                    <li>• Rental-Based Decor</li>
                    <li>• Custom Installations</li>
                    <li>• Upcycled lanyards</li>
                  </ul>
                </div>
                <div className="mt-4 text-green-300 font-semibold flex items-center gap-2 pt-4 border-t border-pink-300/30">
                  View Services →
                </div>
              </div>
            </Link>

          </div>
        </div>

        {/* Bento Grid - Additional Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-auto">

          {/* Card 6 - Women Employed */}
          <div className="card-animate bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl p-5 md:p-6 md:col-span-2 overflow-hidden relative group hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-lime-400 opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            {/* Women Image */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30">
              <img
                src="/womens.png"
                alt="Rural women artisans"
                className="w-full h-full object-cover object-center rounded-3xl"
              />
            </div>
            <div className="relative z-10">
              <Users className="w-10 h-10 text-lime-300 mb-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                25 Women
              </h2>
              <p className="text-lime-300 text-lg md:text-xl font-semibold mb-2">
                From Rural Communities
              </p>
              <p className="text-white/90 text-base">Have Been Employed</p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="card-animate md:col-span-1 bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[280px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600 opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <Lightbulb className="w-10 h-10 text-emerald-900 mb-3" />
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Our Mission</h3>
              <p className="text-emerald-800 text-sm leading-relaxed">
                To revolutionize waste management by transforming discarded materials into valuable, sustainable products while empowering rural communities.
              </p>
            </div>
          </div>

          {/* Impact Card */}
          <div className="card-animate md:col-span-1 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[280px]">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-lime-400 opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <Heart className="w-10 h-10 text-lime-300 mb-3" />
              <h3 className="text-xl font-bold text-white mb-3">Why We Exist</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Every product we create tells a story of transformation—from waste to wonder, from pollution to purpose.
              </p>
              <div className="flex items-center gap-2 text-lime-300 text-xs font-semibold">
                <div className="w-2 h-2 bg-lime-300 rounded-full animate-pulse"></div>
                <span>Making sustainability accessible</span>
              </div>
            </div>
          </div>

  

          {/* Card 4 - Textile Waste */}
          <div className="card-animate bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-5 md:p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            <div>
              <Factory className="w-10 h-10 text-lime-300 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Textile Waste</h3>
              <div className="text-5xl md:text-6xl font-bold text-white mb-1">114</div>
              <p className="text-lime-300 text-base font-semibold">KGS</p>
            </div>
            <p className="text-white/90 text-xs mt-3">Saved & Upcycled</p>
          </div>

          {/* Card 5 - Plastic Waste */}
          <div className="card-animate bg-lime-400 rounded-3xl p-5 md:p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            <div>
              <Recycle className="w-10 h-10 text-emerald-800 mb-3" />
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Plastic Waste (MLP)</h3>
              <div className="text-5xl md:text-6xl font-bold text-emerald-900 mb-1">10</div>
              <p className="text-emerald-700 text-base font-semibold">KGS</p>
            </div>
            <p className="text-emerald-800 text-xs mt-3">Saved & Upcycled</p>
          </div>



            {/* Card 3 - Strategy */}
          <div className="card-animate bg-white rounded-3xl p-5 md:p-6 md:col-span-2 lg:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-emerald-600" />
              <span className="text-emerald-700 text-xs font-semibold tracking-wider">OUR STRATEGY</span>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-emerald-800 mb-4">
              Where Waste Becomes <span className="text-lime-600 italic">Wonderful</span>
            </h2>
            <ul className="space-y-2.5 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Collecting dry wastes from schools, institutions & corporate offices</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Creating decor elements & installations from waste materials</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Handmade products: Coasters, pen stands, diaries, mats, frames</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Organizing sustainability workshops at government institutions</span>
              </li>
            </ul>
          </div>

        

          {/* Card 7 - Electronic Waste */}
          <div className="card-animate bg-white rounded-3xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-7 h-7 text-emerald-600" />
            </div>
            <div className="text-5xl md:text-6xl font-bold text-emerald-800 mb-1">30</div>
            <p className="text-emerald-700 text-base font-semibold mb-2">KGS</p>
            <h3 className="text-lg font-semibold text-gray-800">Electronic Waste</h3>
            <p className="text-gray-600 text-xs mt-2">Saved & Upcycled</p>
          </div>

          {/* Card 8 - Our Story */}
          <div className="card-animate bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-5 md:p-6 hover:scale-105 transition-transform duration-300 relative overflow-hidden flex flex-col">
            <div className="relative z-10 mb-4">
              <Leaf className="w-10 h-10 text-emerald-900 mb-3" />
              <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">
                Our Story
              </h3>
              <div className="text-emerald-800 text-sm space-y-1">
                <p className="italic">"One fine day, we saw waste, & we passed by"</p>
                <p className="font-semibold mt-2">But then we felt something...</p>
                <p className="font-bold">& Then whenever we saw it, we picked it up.</p>
              </div>
            </div>
          </div>



                    {/* Image Card 1 */}
          <div className="card-animate md:col-span-1 flex flex-row gap-4 overflow-hidden relative group hover:shadow-xl transition-all duration-300 h-[280px] rounded-2xl">
            <div className="relative z-10 w-full h-full">
              <img
                src="/made-1.jpeg"
                alt="Handmade craft creation process"
                className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Image Card 2 */}
          <div className="card-animate md:col-span-1 flex flex-row gap-4 overflow-hidden relative group hover:shadow-xl transition-all duration-300 h-[280px] rounded-2xl">
            <div className="relative z-10 w-full h-full">
              <img
                src="/made-2.jpeg"
                alt="Artisans crafting handmade products"
                className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 9 - Call to Action */}
          <div className="card-animate bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-3xl p-6 md:p-8 md:col-span-2 text-center relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500 opacity-5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <TreePine className="w-14 h-14 text-lime-300 mx-auto mb-4" />
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Our Planet Is In <span className="text-lime-300">Our Hands</span>
              </h2>
              <p className="text-white/90 text-sm md:text-base mb-5 max-w-xl mx-auto">
                It's not about a single organisation doing its job, it's always about the impact created when people join hands together.
              </p>
              <div className="inline-block bg-lime-400 text-emerald-900 px-6 py-3 rounded-full font-bold text-base hover:bg-lime-300 transition-colors duration-300 cursor-pointer">
                Let's Go Green!
              </div>
            </div>
          </div>

          {/* Card 10 - Team Member - Side Image Layout, matching Card 9 width */}
          <div className="card-animate bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-6 md:p-8 md:col-span-2 flex flex-col md:flex-row items-center gap-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500 opacity-5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            {/* Image Section */}
            <div className="w-full md:w-1/3 h-48 md:h-56 overflow-hidden rounded-2xl relative z-10">
              <img
                src="/teams/founder.jpeg"
                alt="Preet Shah - Founder"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3 text-center md:text-left relative z-10">
              <h4 className="text-2xl font-bold text-emerald-800 mb-2">Preet Shah</h4>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                Founder of Revolve Green
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Leading the charge towards a sustainable future with innovative compostable solutions that make eco-friendly choices accessible to everyone.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Message */}
        <div className="mt-8 md:mt-12 text-center card-animate">
          <p className="text-emerald-700 text-sm md:text-base italic max-w-3xl mx-auto mb-6">
            This World Environment Day — we urge you to take that step in whatever way possible.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a
              href="/carrybag cipet report.pdf"
              download
              className="group relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>CIPET Carry Bag Report</span>
            </a>

            <a
              href="/CPCB Certificate_Revolve Green Pvt. Ltd..pdf"
              download
              className="group relative bg-gradient-to-r from-lime-500 to-lime-600 text-emerald-900 px-6 py-3 rounded-xl font-semibold text-sm hover:from-lime-600 hover:to-lime-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>CPCB Certificate</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}