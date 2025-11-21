"use client";
import React from "react";
import Link from "next/link";

const FeaturedProducts = () => {
  const products = [
    {
      id: 12,
      name: "COMPOSTABLE D-CUT BAGS",
      description: "D-Cut Compostable Carry Bags: Convenience Meets Sustainability",
      image: "/uploads/d-cut-bags.png",
      slug: "compostable-d-cut-bags"
    },
    {
      id: 11,
      name: "COMPOSTABLE CARRY BAGS",
      description: "Embrace Sustainability with Our Compostable Carry Bags!",
      image: "/uploads/caryy-bags.png",
      slug: "compostable-carry-bags"
    },
    {
      id: 16,
      name: "COMPOSTABLE GARBAGE BAGS",
      description: "Manage Waste Responsibly with Our Compostable Garbage Bags!",
      image: "/uploads/garbage-bags.png",
      slug: "compostable-garbage-bags"
    },
    {
      id: 21,
      name: "COMPOSTABLE PET POOP BAGS",
      description: "Care for Your Pet, Care for the Planet: Compostable Pet Poop Bags!",
      image: "/uploads/pet-poop-bags.png",
      slug: "compostable-pet-poop-bags"
    },
    {
      id: 19,
      name: "COMPOSTABLE PRASAD BAGS",
      description: "Offer Blessings with Purity and Responsibility: Compostable Prasad Bags",
      image: "/uploads/prashad-bags.png",
      slug: "compostable-prasad-bags"
    },
    {
      id: 18,
      name: "COMPOSTABLE GROCERY BAGS",
      description: "Go Green with Your Groceries: Introducing Our Compostable Grocery Bags!",
      image: "/uploads/grocery-bags.png",
      slug: "compostable-grocery-bags"
    },
    {
      id: 15,
      name: "COMPOSTABLE GIFT BAGS",
      description: "Elevate Your Gifting with Eco-Chic Compostable Gift Bags!",
      image: "/uploads/gift-bags.png",
      slug: "compostable-gift-bags"
    },
    {
      id: 17,
      name: "COMPOSTABLE NURSERY BAGS",
      description: "Nurture Growth, Naturally: Compostable Nursery Bags for a Greener Earth!",
      image: "/uploads/nursery-bags.png",
      slug: "compostable-nursery-bags"
    },
    {
      id: 14,
      name: "COMPOSTABLE THANK YOU BAGS",
      description: "Show Gratitude the Green Way with Our Compostable \"Thank You\" Bags!",
      image: "/uploads/thank-you-bags.png",
      slug: "compostable-thank-you-bags"
    },
    {
      id: 23,
      name: "COMPOSTABLE COURIER BAGS",
      description: "Ship Sustainably with Our Compostable Courier Bags!",
      image: "/uploads/courier-bags.png",
      slug: "compostable-courier-bags"
    },
    {
      id: 20,
      name: "COMPOSTABLE BIO-HAZARD BAGS",
      description: "Advanced Bio-Safety Meets Environmental Consideration: Compostable Bio-Hazard Bags",
      image: "/uploads/bio-hazard-bags.png",
      slug: "compostable-bio-hazard-bags"
    },
    {
      id: 22,
      name: "COMPOSTABLE GARMENT BAGS",
      description: "Protect Your Garments and the Planet with Our Compostable Garment Bags!",
      image: "/uploads/garment-bags.png",
      slug: "compostable-garment-bags"
    }
  ];

  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
            FEATURED PRODUCTS
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our range of sustainable alternatives to everyday plastic products.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-84 object-cover transition-transform duration-500 group-hover:scale-110"
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
