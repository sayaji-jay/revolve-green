'use client';

import { ShoppingBag, Leaf, Package, Recycle, Heart, Check, ChevronRight, Sparkles, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import mlpData from '@/database/products/mlp-products.json';
import clothData from '@/database/products/cloth-products.json';
import coconutData from '@/database/products/coconut-products.json';
import specialData from '@/database/products/special-products.json';

// Carousel Component
function ProductCarousel({ products, categoryLabel, Icon }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-green-300 rounded-full p-3 shadow-xl transition-all hover:scale-110 -ml-6"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-green-600" strokeWidth={3} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-green-300 rounded-full p-3 shadow-xl transition-all hover:scale-110 -mr-6"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-green-600" strokeWidth={3} />
      </button>

      {/* Scrollable Products Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-80 flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <div className="overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={336}
                  className="w-full h-84 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-84 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <Icon className="w-20 h-20 text-green-500 opacity-40" strokeWidth={2} />
                </div>
              )}
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold shadow-md">
                  {categoryLabel}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              {product.customizable ? (
                <p className="text-sm text-green-600 mb-3 font-bold">Customizable in different sizes</p>
              ) : (
                <div className="space-y-1 mb-3">
                  {product.diameter && <p className="text-sm text-gray-600">Diameter: {product.diameter}</p>}
                  {product.height && <p className="text-sm text-gray-600">Height: {product.height}</p>}
                  {product.length && <p className="text-sm text-gray-600">Length: {product.length}</p>}
                  {product.width && <p className="text-sm text-gray-600">Width: {product.width}</p>}
                  {product.material && <p className="text-sm text-gray-600">Material: {product.material}</p>}
                  {product.dimensions && <p className="text-sm text-gray-600">Dimensions: {product.dimensions}</p>}
                  {product.size && <p className="text-sm text-gray-600">Size: {product.size}</p>}
                </div>
              )}
              {product.description && <p className="text-sm text-gray-600 mb-3">{product.description}</p>}
              <div className="mt-auto pt-3">
                <p className="text-2xl font-bold text-gray-900">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HandmadeProductsPage() {
  // Product data from JSON files
  const mlpProducts = mlpData.products;
  const clothProducts = clothData.products;
  const coconutProducts = coconutData.products;
  const specialProducts = specialData.products;

  return (
    <div className="min-h-screen relative">
        {/* Background Image for entire page */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/peoples.png"
            alt="Revolve Green Community"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/70"></div>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 pb-24">
        {/* Badge */}
        <a href="#products" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 bg-green-600/80 backdrop-blur-sm hover:bg-green-600/90 transition shadow-lg">
          <span className="bg-green-800 text-white text-xs px-3.5 py-1 rounded-full">
            SUSTAINABLE PRODUCTS
          </span>
          <p className="flex items-center gap-1 text-white">
            <span>Explore our eco-friendly collection</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition duration-300" />
          </p>
        </a>

        {/* Main Heading */}
        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-bold max-w-4xl text-center mt-6 text-gray-900 drop-shadow-lg">
          REVOLVE GREEN
          <span className="block bg-gradient-to-r from-green-500 to-emerald-400 text-transparent bg-clip-text mt-4">
            What you will find here
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-center text-gray-900 max-w-3xl mt-8 leading-relaxed drop-shadow-sm font-semibold">
          MLP Waste Wrapper Products • Cloth Products • Coconut Innovatives • E-Waste Items • Magazine Products
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-12 font-semibold transition shadow-lg hover:shadow-xl">
            Shop Now
          </button>
          <button className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border-2 border-gray-300 hover:bg-white transition rounded-full px-7 h-12 text-gray-900 font-semibold shadow-lg">
            <ShoppingBag className="w-5 h-5" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 mt-12">
          <p className="flex items-center gap-2 bg-green-600/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
            <Check className="size-5 text-white" strokeWidth={3} />
            <span className="text-white font-semibold">100% Handmade</span>
          </p>
          <p className="flex items-center gap-2 bg-emerald-600/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
            <Check className="size-5 text-white" strokeWidth={3} />
            <span className="text-white font-semibold">Eco-Friendly</span>
          </p>
          <p className="flex items-center gap-2 bg-teal-600/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
            <Check className="size-5 text-white" strokeWidth={3} />
            <span className="text-white font-semibold">Unique Designs</span>
          </p>
        </div>
      </div>

      {/* MLP Waste Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-20">
          {/* Content */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              MLP Waste Wrapper Products
            </h2>
            <p className="text-lg text-gray-800 font-semibold mb-6">
              Handwoven from discarded Plastic Wrappers
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-transparent mb-8"></div>

            {/* What is MLP */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-3">What is MLP?</h3>
              <p className="text-gray-800 leading-relaxed font-medium text-base">
                Multi-Layered Packing is mostly used in FMCG sector, is non-biodegradable, non-recyclable and cannot be further used.
                It often ends on landfills and litters our public spaces. <span className="font-bold text-green-700">But we have given it a second life.</span>
              </p>
            </div>
          </div>

          {/* Product Carousel */}
          <ProductCarousel
            products={mlpProducts}
            categoryLabel="MLP"
            Icon={Package}
          />
        </div>
      </section>

      {/* Cloth Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-20">
          {/* Content */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Cloth Products
            </h2>
            <p className="text-lg text-gray-800 font-semibold mb-6">
              Handwoven from Old Sarees/Dupattas
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-transparent mb-8"></div>

            {/* Heritage Message */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-8">
              <p className="text-gray-800 leading-relaxed font-medium text-base">
                In this era of fast fashion, it becomes difficult to stop, pause and spot a saree draping but when we come across it
                in some element or form we love it! Isn't it? <span className="font-bold text-green-700">Here, we continue carrying Indian heritage a little more touch,
                few more breathes before it ends up in a landfill.</span>
              </p>
            </div>
          </div>

          {/* Product Carousel */}
          <ProductCarousel
            products={clothProducts}
            categoryLabel="CLOTH"
            Icon={Heart}
          />
        </div>
      </section>

      {/* Coconut Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-20">
          {/* Content */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Wonders of Coconut
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-transparent mb-8"></div>

            {/* Coconut Info */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-8">
              <p className="text-gray-800 leading-relaxed font-medium mb-4 text-base">
                Coconut is not only good for us & the planet but it's delicious as a substitute for plastic products/cutleries.
                Each and every part of the coconut can be used as a product to be used in daily lives.
              </p>
              <p className="text-green-800 font-bold text-base">
                Each tree has a capacity to grow 75 coconuts yearly. Now, guess what wonders it can create!!
              </p>
            </div>
          </div>

          {/* Product Carousel */}
          <ProductCarousel
            products={coconutProducts}
            categoryLabel="COCONUT"
            Icon={Leaf}
          />
        </div>
      </section>

      {/* Special Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-20">
          {/* Content */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Special Products
            </h2>
            <p className="text-lg text-gray-800 font-semibold mb-6">
              E-Waste & Magazine Upcycled Items
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-transparent mb-8"></div>
          </div>

          {/* Product Carousel */}
          <ProductCarousel
            products={specialProducts}
            categoryLabel="SPECIAL"
            Icon={Recycle}
          />
        </div>
      </section>

      {/* Uniqueness Message */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 md:p-12 text-center border-2 border-green-300">
          <Sparkles className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Each Product is Unique
          </h3>
          <p className="text-lg text-gray-800 leading-relaxed font-medium mb-8">
            As no two people on this planet are same, similarly no products on our workspace is exactly the same as other.
            We love to have those little differences which are not intended.
          </p>
          <p className="text-base text-green-700 font-bold">
            You can always contact us to see the available patterns and designs.
          </p>
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
            It's not about finding a clean space..
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-8 text-white relative z-10 drop-shadow-md">
            It's about making one.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 mb-8 relative z-10">
            <p className="text-lg font-semibold">+91 73830 70297</p>
            <p className="text-lg font-semibold">sales@revolvegreen.com / preet@revolvegreen.com</p>
            <p className="text-lg font-semibold">revolvegreen.in</p>
          </div>

          <button className="bg-white text-green-700 hover:bg-green-50 px-12 py-4 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 relative z-10">
            Contact Us Today
          </button>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
