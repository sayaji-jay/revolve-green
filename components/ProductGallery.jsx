"use client";
import React from "react";

export default function ProductGallery() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="w-full py-12">
        <h1 className="text-3xl font-semibold text-center mx-auto">
          Our Latest Creations
        </h1>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
          A visual collection of our most recent works — each piece crafted with
          intention, emotion, and style.
        </p>

        <div className="flex items-center gap-2 h-[400px] w-full max-w-6xl mt-10 mx-auto">
          {[
            "/creations/image-1.png",
            "/creations/image-2.png",
            "/creations/image-3.png",
            "/creations/image-4.png",
            "/creations/image-5.png",
            "/creations/image-6.png"
          ].map((src, index) => (
            <div
              key={index}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
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
