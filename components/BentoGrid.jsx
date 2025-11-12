"use client";

import React, { useEffect, useRef } from 'react';
import { Leaf, Recycle, Users, Sparkles, TreePine, Factory, Heart, TrendingUp, Lightbulb } from 'lucide-react';

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
            <img
              src="/logo.png"
              alt="Revolve Green Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-800">
              SUSTAINABILITY
            </h1>
          </div>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-emerald-600">with purpose</span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-auto">

          {/* Card 1 - Our Story */}
          <div className="card-animate bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl p-5 md:p-6 md:col-span-2 flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl transition-shadow duration-300 min-h-[280px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500 opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-6 h-6 text-lime-300" />
                <span className="text-lime-300 text-xs font-semibold tracking-wider">OUR STORY</span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-white leading-tight mb-3">
                The Seed & The Impact Created
              </h2>
              <div className="space-y-1.5 text-white/90 text-xs leading-relaxed flex-grow">
                <p className="italic">One fine day, we saw waste, & we passed by</p>
                <p className="italic">Another fine day, we again saw it, we passed by</p>
                <p className="font-semibold text-lime-300 mt-2">But that same day, we felt something too.</p>
                <p className="text-sm md:text-base font-bold mt-2">& Then whenever we saw it, we picked it up.</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Our Idea */}
          <div className="card-animate bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-5 md:p-6 md:col-span-2 flex flex-row gap-4 overflow-hidden relative group hover:shadow-xl transition-shadow duration-300 min-h-[280px]">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600 opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

            {/* Text Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-6 h-6 text-emerald-900" />
                <span className="text-emerald-900 text-xs font-semibold tracking-wider">OUR IDEA</span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-emerald-900 leading-tight mb-3">
                Sowed with Purpose
              </h2>
              <p className="text-emerald-800 text-sm md:text-base leading-relaxed font-semibold">
                Transforming waste into wonder through creative upcycling, empowering rural women, and building a sustainable future one piece at a time.
              </p>
            </div>
          </div>

          
           <div className="card-animate md:col-span-2 flex flex-row gap-4 overflow-hidden relative group hover:shadow-xl transition-shadow duration-300 min-h-[280px]">
            {/* Image Section */}
            <div className="relative z-10">
              <img
                src="/peoples.png"
                alt="People working together"
                className="w-full h-full object-fill rounded-2xl shadow-lg"
              />
            </div>
          </div>


          <div className="card-animate  md:col-span-1 flex flex-row gap-4 overflow-hidden relative group hover:shadow-xl transition-shadow duration-300 min-h-[280px]">
            {/* Image Section */}
            <div className="relative z-10">
              <img
                src="/item.png"
                alt="People working together"
                className="w-full h-full object-fill rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="card-animate  md:col-span-1 flex flex-row gap-4 overflow-hidden relative group hover:shadow-xl transition-shadow duration-300 min-h-[280px]">
            {/* Image Section */}
            <div className="relative z-10">
              <img
                src="/logo.png"
                alt="People working together"
                className="w-full h-full object-fill rounded-2xl shadow-lg"
              />
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

          {/* Card 8 - Sajja Services */}
          <div className="card-animate bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-5 md:p-6 hover:scale-105 transition-transform duration-300 relative overflow-hidden flex flex-col">
            {/* Text Content */}
            <div className="relative z-10 mb-4">
              <Heart className="w-10 h-10 text-emerald-900 mb-3" />
              <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">
                Sajja Rentals
              </h3>
              <p className="text-emerald-800 text-sm font-semibold">
                We provide decorations at events, offices & institutions on rental basis
              </p>
            </div>
          </div>


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

          {/* Card 10 - Team Member 1 - Aayushee Shah */}
          <div className="card-animate bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full mb-3 flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">AS</span>
              </div>
              <h4 className="text-lg font-bold text-emerald-800 mb-2">Aayushee Shah</h4>
              <div className="space-y-1">
                <p className="text-xs text-gray-600 font-medium">Co-Founder & Product Designer</p>
                <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Revolve Green
                </div>
              </div>
            </div>
          </div>

          {/* Card 11 - Team Member 2 - Dhvani Sheth */}
          <div className="card-animate bg-gradient-to-br from-white to-lime-50 rounded-3xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full mb-3 flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-emerald-900">DS</span>
              </div>
              <h4 className="text-lg font-bold text-emerald-800 mb-2">Dhvani Sheth</h4>
              <div className="space-y-1">
                <p className="text-xs text-gray-600 font-medium">Founder at Upyukt</p>
                <div className="inline-block bg-lime-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Partner at Sajja
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Message */}
        <div className="mt-8 md:mt-12 text-center card-animate">
          <p className="text-emerald-700 text-sm md:text-base italic max-w-3xl mx-auto">
            This World Environment Day — we urge you to take that step in whatever way possible.
          </p>
        </div>

      </div>
    </div>
  );
}