"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({
  id,
  name,
  description,
  image,
  slug,
  price,
  categoryLabel,
  showMoreInfo = true,
  linkPrefix = "/products"
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="overflow-hidden relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={400}
            height={336}
            className="w-full h-84 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-84 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
            <span className="text-green-500 text-6xl">📦</span>
          </div>
        )}
        {categoryLabel && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold shadow-lg">
            {categoryLabel}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm mt-2">
            {description}
          </p>
        )}
        {price && (
          <p className="text-xl font-bold text-gray-900 mt-3">{price}</p>
        )}
        <div className="flex justify-between items-center mt-4">
          {showMoreInfo && slug && (
            <Link
              href={`${linkPrefix}/${slug}`}
              className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition duration-300"
            >
              Show more info
            </Link>
          )}
          {!showMoreInfo && (
            <button className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition duration-300">
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
