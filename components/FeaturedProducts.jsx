"use client";
import React from "react";
import Link from "next/link";

const FeaturedProducts = () => {
const products = [
  {
    id: 1,
    name: "CARRY BAGS",
    description: "The bio-based choice for everyday needs. Durable, eco-friendly, and fully compostable.",
    // Replace with your actual image path for Bio Carry Bags
    image: "/uploads/1-Item-Bio-Carry-Bags.png",
    slug: "compostable-bio-carry-bags"
  },
  {
    id: 2,
    name: "GARBAGE BAGS",
    description: "The green way to manage waste. Reliable, leak-proof, and breaks down completely.",
    // Replace with your actual image path for Garbage Bags
    image: "/uploads/2-Item-Garbage-Bags.png",
    slug: "compostable-garbage-bags"
  },
  {
    id: 3,
    name: "GROCERY BAGS",
    description: "Shop sustainably. Large capacity, heavy-duty, and 100% compostable for all your groceries.",
    // Replace with your actual image path for Grocery Bags
    image: "/uploads/3-Item-Grocery-Bags.png",
    slug: "compostable-grocery-bags"
  },
  {
    id: 4,
    name: "POUCHES",
    description: "Flexible, sustainable packaging. The perfect compostable solution for small items and snacks.",
    // Replace with your actual image path for Pouches
    image: "/uploads/4-Item-Pouches.png",
    slug: "compostable-pouches"
  },
  {
    id: 5,
    name: "BIN LINERS",
    description: "Tidy up naturally. Fully compostable liners that keep your bins clean and green.",
    // Replace with your actual image path for Liners
    image: "/uploads/5-Item-Bin-Liners.png",
    slug: "compostable-bin-liners"
  },
  {
    id: 6,
    name: "DRINKING STRAWS",
    description: "Sip responsibly with plant-based straws. A sturdy, 100% guilt-free plastic alternative.",
    // Replace with your actual image path for Straws
    image: "/uploads/6-Item-Straws.png",
    slug: "compostable-drinking-straws"
  }
];



  return (
    <section className="py-16 bg-white">
      {/* Content */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
          FEATURED PRODUCTS
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our range of sustainable alternatives to everyday plastic products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-84 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
                {/* <div className="flex justify-between items-center mt-4">
                  <Link
                    href={`/products/${product.slug}`}
                    className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition duration-300"
                  >
                    Show more info
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
