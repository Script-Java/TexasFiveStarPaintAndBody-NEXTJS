"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

// ✅ Static imports for Next.js optimization
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";
import img8 from "../assets/img/8.jpg";

const slides = [
  {
    src: img1,
    alt: "Flawless blue paint restoration on a classic Shelby Cobra at our Garland body shop.",
    headline: "Expert Auto Restoration",
    subheadline: "Award-winning craftsmanship bringing classic cars back to life.",
    details: [
      "Frame-Off & Rotisserie Restorations",
      "Original Factory Spec Painting",
      "Period-Correct Part Sourcing",
    ],
  },
  {
    src: img2,
    alt: "Mercedes-Benz front-end after precision collision repair by Texas Five Star Paint & Body.",
    headline: "Precision Collision Repair",
    subheadline: "I-CAR Gold Class certified work for your luxury vehicle in Garland, TX.",
    details: ["Advanced Structural Repair", "Factory-Match Paint & Finishing", "All Insurance Claims Handled"],
  },
  {
    src: img3,
    alt: "Dodge Challenger with a vibrant custom orange paint job.",
    headline: "Custom Paint & Finishes",
    subheadline: "From full-body color changes to custom graphics, your vision is our command.",
    details: ["Candy, Pearl, & Metallic Finishes", "Custom Airbrushing & Graphics", "Matte & Satin Vinyl Wraps"],
  },
  {
    src: img4,
    alt: "Bentley undergoing detailed body work at our secure facility in Garland, Texas.",
    headline: "Luxury & Exotic Car Specialists",
    subheadline: "Meticulous care and specialized services for high-end vehicles.",
    details: ["Aluminum & Carbon Fiber Repair", "Certified High-End Vehicle Technicians", "Discreet & Secure Facility"],
  },
  {
    src: img5,
    alt: "A red Ford Mustang with a high-gloss finish after paint correction service.",
    headline: "Showroom Paint Correction",
    subheadline: "Eliminating swirls and scratches for a better-than-new shine.",
    details: ["Multi-Stage Compound & Polishing", "Hologram & Swirl Mark Removal", "Ceramic Coating Application"],
  },
  {
    src: img6,
    alt: "A white Porsche receiving paintless dent repair in our Garland shop.",
    headline: "Paintless Dent Repair (PDR)",
    subheadline: "A fast, affordable solution for dings, dents, and hail damage.",
    details: ["Same-Day Service Available", "Maintains Original Factory Paint", "Cost-Effective Dent Removal"],
  },
  {
    src: img7,
    alt: "A black BMW sedan after complete auto body panel alignment.",
    headline: "Full-Service Auto Body Work",
    subheadline: "From minor scratches to major frame damage, we handle it all.",
    details: ["Bumper Repair & Replacement", "Frame Straightening & Alignment", "Scratch & Chip Repair"],
  },
  {
    src: img8,
    alt: "A luxury Maserati getting a final polish on its custom paint job.",
    headline: "High-End Finishes & Detailing",
    subheadline: "Protecting your investment with ceramic coatings and premium detailing.",
    details: ["Graphene & Ceramic Pro Coatings", "Concourse-Level Detailing", "Interior & Exterior Protection"],
  },
];

const googleMapsUrl = "https://maps.app.goo.gl/P4kbxw5D3ktNxKi59";

export default function LandingBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    const id = setInterval(nextSlide, 6000);
    return () => clearInterval(id);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen bg-neutral-950 text-white overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const active = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                active ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="object-cover animate-ken-burns"
                priority={index === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              {/* Text Content */}
              <div className="absolute inset-0 pt-24 pb-12 md:pb-24">
                <div className="w-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                  <div
                    className={`max-w-md md:max-w-xl lg:max-w-3xl transition-all duration-1000 ease-in-out ${
                      active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight drop-shadow-lg">
                      {slide.headline}
                    </h1>
                    <div className="w-20 h-1.5 bg-red-600 my-5 sm:my-6" />
                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed drop-shadow-md">
                      {slide.subheadline}
                    </p>

                    <div className="mt-6 space-y-3">
                      {slide.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-red-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start gap-4">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-md text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50 flex items-center justify-center gap-2"
                      >
                        Get Directions
                        <FiArrowUpRight className="text-xl" />
                      </a>

                      <Link
                        href="/services"
                        className="w-full sm:w-auto bg-gray-800/70 hover:bg-gray-700/90 backdrop-blur-sm text-gray-200 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-md text-base sm:text-lg transition-colors duration-300 flex items-center justify-center"
                      >
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex items-center gap-3">
        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/40 transition-colors duration-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          aria-label="Next Slide"
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/40 transition-colors duration-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-red-600 w-6" : "bg-white/50 hover:bg-white/80 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
