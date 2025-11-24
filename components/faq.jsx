"use client";
import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I choose Revolve Green's products over regular plastic alternatives?",
      answer:
        "Our bio-plastic products are 100% biodegradable and compostable, meaning they break down naturally without harming the environment. Unlike regular plastics that take hundreds of years to decompose, our carry bags, garbage bags, and straws are eco-friendly alternatives that help reduce plastic pollution. We're certified by CIPET and CPCB, ensuring the highest quality and environmental standards.",
    },
    {
      question: "How are your handmade bags and upcycled products made?",
      answer:
        "Our handmade products are lovingly crafted by 25+ rural women artisans who transform textile waste, plastic waste (MLP), and electronic waste into beautiful, functional items. We collect dry waste from schools, institutions, and corporate offices, then our skilled artisans upcycle these materials into coasters, bags, pouches, home decor, pen stands, diaries, and more. Each product is unique and contributes to waste reduction while empowering rural communities.",
    },
    {
      question: "What is Sajja Decor and how can it help make my event sustainable?",
      answer:
        "Sajja Decor is our zero-waste event decoration service that creates stunning installations and decor elements entirely from upcycled materials. We offer rental-based decorations for weddings, corporate events, and institutional functions, ensuring your event is both beautiful and environmentally responsible. Our services include custom installations, office setups, and event decorations - all designed to minimize waste while maximizing impact.",
    },
    {
      question: "What makes Revolve Green different from other eco-friendly companies?",
      answer:
        "We operate across three unique verticals - Bio Plastics, Handmade Upcycled Products, and Sajja Decor Services - making us a comprehensive sustainability solution. We've already saved and upcycled 114 KGs of textile waste, 10 KGs of plastic waste, and 30 KGs of electronic waste. We don't just sell eco-friendly products; we create employment for rural women, conduct sustainability workshops, and actively transform waste into wonder. Our holistic approach tackles multiple environmental challenges while creating positive social impact.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center px-6 md:px-0 py-12 mb-16">
        <p className="text-emerald-600 text-sm font-medium mb-1">FAQ's</p>
        <h1 className="text-3xl font-semibold text-center mb-2">
          Looking for answers?
        </h1>
        <p className="text-sm text-slate-500 text-center mb-10 leading-relaxed">
          Get answers to common questions about our bio-plastics, handmade products, and sustainable solutions.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="border-b border-slate-200 py-5 cursor-pointer w-full transition-all"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.question}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  openIndex === index ? "rotate-180" : ""
                } transition-transform duration-300 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-3"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
