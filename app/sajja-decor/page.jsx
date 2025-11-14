'use client';

import { Sparkles, Leaf, Heart, Check, ChevronRight, Video, Recycle, Package, Store } from 'lucide-react';
import Image from 'next/image';
import sajjaDecorData from '@/database/products/sajja-decor-products.json';

export default function SajjaDecor() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Green Theme */}
      <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 pb-24">
        {/* Green Glow Effects */}
        <div className="absolute top-28 -z-1 left-1/4 size-72 bg-green-600 blur-[300px]"></div>
        <div className="absolute top-40 -z-1 right-1/4 size-96 bg-emerald-500 blur-[350px]"></div>

        {/* Badge */}
        <a href="#offerings" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 bg-green-600/80 backdrop-blur-sm hover:bg-green-600/90 transition shadow-lg">
          <span className="bg-green-800 text-white text-xs px-3.5 py-1 rounded-full">
            ECO-FRIENDLY
          </span>
          <p className="flex items-center gap-1 text-white">
            <span>Explore our zero-waste solutions</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition duration-300" />
          </p>
        </a>

        {/* Main Heading */}
        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-bold max-w-3xl text-center mt-6 text-gray-900 drop-shadow-lg">
          UPCYCLED DECOR SERVICES
          <span className="block bg-gradient-to-r from-green-500 to-emerald-400 text-transparent bg-clip-text mt-4">
            Making Decor Waste Free
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-center text-gray-900 max-w-2xl mt-8 leading-relaxed drop-shadow-sm font-semibold">
          Providing upcycled ZERO-WASTE solutions on rental basis for corporates, cafés, exhibitors and events. Join us in revolutionising celebrations that are no more a burden on the environment.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-12 font-semibold transition shadow-lg hover:shadow-xl">
            Get Started
          </button>
          <button className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border-2 border-gray-300 hover:bg-white transition rounded-full px-7 h-12 text-gray-900 font-semibold shadow-lg">
            <Video className="w-5 h-5" />
            <span>View Gallery</span>
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 mt-12">
          <p className="flex items-center gap-2 bg-green-600/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
            <Check className="size-5 text-white" strokeWidth={3} />
            <span className="text-white font-semibold">100% Upcycled</span>
          </p>
          <p className="flex items-center gap-2 bg-emerald-600/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
            <Check className="size-5 text-white" strokeWidth={3} />
            <span className="text-white font-semibold">Rental Basis</span>
          </p>
          <p className="flex items-center gap-2 bg-teal-600/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
            <Check className="size-5 text-white" strokeWidth={3} />
            <span className="text-white font-semibold">Zero Waste</span>
          </p>
        </div>
      </div>

      {/* Combined Section: Our Decor Materials + Why Choose Sajja */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white/95 backdrop-blur-sm border-2 border-green-300 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side: Our Decor is Made From */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800">
                Our Decor is Made From
              </h2>

              {/* Features Row */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b-2 border-green-200">
                <div className="flex items-center gap-2">
                  <Check className="size-5 text-green-600" strokeWidth={3} />
                  <span className="text-gray-800 font-bold text-base">100% Upcycled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-5 text-emerald-600" strokeWidth={3} />
                  <span className="text-gray-800 font-bold text-base">Rental Basis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-5 text-teal-600" strokeWidth={3} />
                  <span className="text-gray-800 font-bold text-base">Zero Waste</span>
                </div>
              </div>

              {/* Materials List */}
              <div className="space-y-3">
                {[
                  'Fabric Scraps',
                  'Used Clothing',
                  'Scrap metal and wood',
                  'Multi layer plastic (MLP) waste',
                  'Discarded papers',
                  'Electronic waste'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2">
                    <Leaf className="w-6 h-6 shrink-0 text-green-600" strokeWidth={2.5} />
                    <span className="text-base text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Why opt for Sajja Decor Service */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800">
                Why opt for Sajja Decor Service?
              </h2>
              <p className="text-gray-800 text-base mb-8 font-semibold">
                Sustainable, customizable, and hassle-free decor solutions
              </p>

              <div className="space-y-6">
                {/* Reason 1 */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300 shadow-md hover:shadow-xl hover:shadow-green-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg shrink-0">
                      <Recycle className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Fully Customised Rental
                      </h3>
                      <p className="text-gray-800 leading-relaxed font-medium text-sm">
                        We provide fully customised decor service on rental basis. We take it back, away from trash & back in reuse.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 2 */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-500 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg shrink-0">
                      <Package className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Save Storage Space
                      </h3>
                      <p className="text-gray-800 leading-relaxed font-medium text-sm">
                        Save space on storing decor at your workplace. Leave that headache on us!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reason 3 */}
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 border-2 border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-teal-600 to-green-500 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg shrink-0">
                      <Leaf className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Economical & Ecological
                      </h3>
                      <p className="text-gray-800 leading-relaxed font-medium text-sm">
                        Avoid single-use plastic and paper decor thereby conserving new resources. That's not only Economical, but also Eco-logical!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services + Banner Section Side by Side */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Our Services */}
          <div className="p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
              Our Services
            </h2>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Store className="w-7 h-7 text-green-600" />
                  Main Service:
                </h3>
                <p className="text-lg text-gray-900 flex items-start p-2 font-semibold">
                  <Sparkles className="w-7 h-7 mr-3 mt-1 text-green-600 shrink-0" strokeWidth={2.5} />
                  Upcycled installations and decor for all occasions
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-7 h-7 text-green-600" />
                  Additional Services:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Zero waste hampers',
                    'Reusable awards and bouquets',
                    'Waste management services',
                    'Reusable Lanyards and Badge Holders'
                  ].map((service, index) => (
                    <li key={index} className="text-lg text-gray-900 flex items-start p-2 font-semibold">
                      <Check className="w-6 h-6 mr-3 mt-1 text-emerald-600 shrink-0" strokeWidth={2.5} />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Banner Card */}
          <div className="flex items-center">
            <div className="flex flex-col items-center justify-center w-full text-center rounded-3xl py-16 md:py-20 bg-gradient-to-br from-green-700 to-emerald-600 relative overflow-hidden shadow-2xl border-2 border-green-400">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-white max-w-md relative z-10 px-4 drop-shadow-lg">
                Transform Your Events with Sustainable, Beautiful Decor Solutions
              </h1>
              <div className="h-[3px] w-32 my-4 bg-gradient-to-l from-transparent via-white to-transparent"></div>
              <p className="text-base text-white max-w-md relative z-10 px-4 drop-shadow-md font-medium">
                From corporate events to cafés, we bring your vision to life with upcycled materials that tell a story of sustainability and creativity.
              </p>
              <button className="px-10 py-3 mt-6 text-base bg-white text-green-700 font-bold hover:scale-105 transition duration-300 rounded-full shadow-xl relative z-10 hover:shadow-2xl">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Product Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 drop-shadow-md">
          Our Offerings
        </h2>
        <p className="text-center text-gray-800 text-lg mb-16 drop-shadow-sm font-semibold">
          Browse our collection of upcycled decor items
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Cards from JSON */}
          {sajjaDecorData.products.map((product) => (
            <div key={product.id} className="flex flex-col bg-white/95 backdrop-blur-sm border-2 border-green-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all rounded-2xl overflow-hidden">
              {/* Product Image */}
              <div className="w-full h-80 bg-gradient-to-br from-green-100 to-emerald-100 relative">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-20 h-20 text-green-500 opacity-40" strokeWidth={2} />
                  </div>
                )}
                <span className="absolute top-4 right-4 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-bold shadow-lg">
                  RENTAL
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                </div>
                <p className="text-sm text-green-600 mb-4 font-bold">{product.category}</p>
                {product.description && (
                  <p className="text-sm text-gray-700 mb-3">{product.description}</p>
                )}
                <p className="text-2xl font-bold text-gray-900">{product.price}<span className="text-sm text-gray-700 font-medium">/event</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-600 rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white relative overflow-hidden border-2 border-green-400">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 drop-shadow-lg">
            Join us in revolutionising celebrations
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-8 text-white relative z-10 drop-shadow-md">
            that are no more a burden on the environment.
          </p>
          <button className="bg-white text-green-700 hover:bg-green-50 px-12 py-4 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 relative z-10">
            Get Started with Sajja
          </button>
        </div>
      </section>
    </div>
  );
}
