'use client';

import { Sparkles, Leaf, Heart, Check, ChevronRight, Video, Recycle, Package, Store } from 'lucide-react';
import sajjaDecorData from '@/database/products/sajja-decor-products.json';
import SajjaDecorCard from '@/components/SajjaDecorCard';
import Image from 'next/image';
import ProductGallery from '@/components/ProductGallery';
export default function UpcycleDecor() {
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
        style={{
          backgroundImage: 'url(/images/1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]"></div>

      {/* Hero Section with Green Theme */}
      <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 pb-24 z-10">
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
        <Image
              src="/Sajja Logo.png"
              alt="Sajja Logo"
              width={600}
              height={600}
              className="mx-auto"
            />

        {/* Subtitle */}
        <p className="text-xl text-center text-gray-900 max-w-2xl leading-relaxed drop-shadow-sm font-semibold">
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

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <a
            href="https://www.instagram.com/sajjaupcycleddecor?igsh=MTcxeTdiMGI1d20wNA=="
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
            href="https://www.linkedin.com/company/105380669/admin/page-posts/published/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
            aria-label="Visit our LinkedIn"
          >
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Combined Section: Our Decor Materials + Why Choose Sajja */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300 shadow-md hover:shadow-xl hover:shadow-green-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-linear-to-br from-green-600 to-emerald-500 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg shrink-0">
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
                <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-linear-to-br from-emerald-600 to-teal-500 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg shrink-0">
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
                <div className="bg-linear-to-br from-teal-50 to-green-50 rounded-2xl p-6 border-2 border-teal-300 shadow-md hover:shadow-xl hover:shadow-teal-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-linear-to-br from-teal-600 to-green-500 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg shrink-0">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
            <div className="flex flex-col items-center justify-center w-full text-center rounded-3xl py-16 md:py-20 bg-linear-to-br from-green-700 to-emerald-600 relative overflow-hidden shadow-2xl border-2 border-green-400">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-white max-w-md relative z-10 px-4 drop-shadow-lg">
                Transform Your Events with Sustainable, Beautiful Decor Solutions
              </h1>
              <div className="h-[3px] w-32 my-4 bg-linear-to-l from-transparent via-white to-transparent"></div>
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
      {/* <section id="offerings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 drop-shadow-md">
          Our Offerings
        </h2>
        <p className="text-center text-gray-800 text-lg mb-16 drop-shadow-sm font-semibold">
          Browse our collection of upcycled decor items available for rental
        </p>

        <div className="space-y-12">
          {sajjaDecorData.products.map((product, index) => (
            <SajjaDecorCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section> */}

      {/* Our Latest Creations Section */}
      <div className="relative z-10">
        <ProductGallery />
      </div>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 relative z-10">
        <div className="bg-linear-to-r from-green-700 via-emerald-700 to-teal-600 rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white relative overflow-hidden border-2 border-green-400">
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
    </>
  );
}
