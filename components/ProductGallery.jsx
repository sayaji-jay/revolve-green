"use client";
import React, { useState, useEffect } from "react";

export default function ProductGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const allImages = [
    "/creations/image-1.png",
    "/creations/image-2.png",
    "/creations/image-3.png",
    "/creations/image-4.png",
    "/creations/image-5.png",
    "/creations/image-6.png"
  ];

  const displayImages = isMobile ? allImages.slice(0, 3) : allImages;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="w-full py-12 px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mx-auto">
          Our Latest Creations
        </h1>
        <p className="text-sm sm:text-base text-slate-500 text-center mt-2 sm:mt-3 max-w-lg mx-auto px-4">
          A visual collection of our most recent works — each piece crafted with
          intention, emotion, and style.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-2 h-auto md:h-[400px] w-full max-w-6xl mt-6 sm:mt-8 md:mt-10 mx-auto">
          {displayImages.map((src, index) => (
            <div
              key={index}
              className="relative group flex-grow transition-all w-full md:w-56 rounded-lg overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] duration-500 md:hover:w-full"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
