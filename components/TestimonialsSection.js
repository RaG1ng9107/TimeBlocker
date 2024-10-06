"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonials = [
  {
    name: "- Alex Johnson",
    image: "/api/placeholder/64/64",
    feedback:
      "This time blocking tool has revolutionized my workday. I'm now twice as productive!",
  },
  {
    name: "- Samantha Lee",
    image: "/api/placeholder/64/64",
    feedback:
      "I love how easy it is to visualize my day. It's helped me achieve a better work-life balance.",
  },
  {
    name: "- Michael Chen",
    image: "/api/placeholder/64/64",
    feedback:
      "The calendar integration is seamless. It's become an essential part of my daily routine.",
  },
  {
    name: "- Emily Rodriguez",
    image: "/api/placeholder/64/64",
    feedback:
      "The customizable time blocks have been a game-changer for my freelance work.",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl mb-16 tracking-tight">
          What Our Users Say
        </h2>
        <div className="relative h-80 sm:h-96 flex justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-transform duration-700 transform ${
                index === currentTestimonial
                  ? "scale-105 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            >
              {/* Enhanced Testimonial Block with new gradient */}
              <div className="p-8 mx-auto max-w-3xl bg-gradient-to-b from-[#4084f4] to-white rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 ease-out relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="mx-auto rounded-full mb-6 shadow-lg"
                />
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                  {testimonial.feedback}
                </p>
                <p className="font-semibold text-gray-900 text-xl text-center">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}

          {/* Left Arrow - Positioned right against the testimonial block */}
          <button
            onClick={handlePrev}
            className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2 bg-white/60 text-gray-800 p-3 rounded-full hover:bg-white/80 backdrop-blur-lg transition-all shadow-xl"
          >
            <HiChevronLeft size={28} />
          </button>

          {/* Right Arrow - Positioned right against the testimonial block */}
          <button
            onClick={handleNext}
            className="absolute right-0 mr-2 top-1/2 transform -translate-y-1/2 bg-white/60 text-gray-800 p-3 rounded-full hover:bg-white/80 backdrop-blur-lg transition-all shadow-xl"
          >
            <HiChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
