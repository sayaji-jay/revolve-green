"use client";
import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to use this component?",
      answer:
        "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
    },
    {
      question: "Are there any other components available?",
      answer:
        "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
    },
    {
      question: "Are components responsive?",
      answer:
        "Yes, all components are responsive and can be used on different screen sizes.",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
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
        <p className="text-indigo-600 text-sm font-medium mb-1">FAQ's</p>
        <h1 className="text-3xl font-semibold text-center mb-2">
          Looking for answers?
        </h1>
        <p className="text-sm text-slate-500 text-center mb-10 leading-relaxed">
          Ship Beautiful Frontends Without the Overhead — Customizable, Scalable
          and Developer-Friendly UI Components.
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
