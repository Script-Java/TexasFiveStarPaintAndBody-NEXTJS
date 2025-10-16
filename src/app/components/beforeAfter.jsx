"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

/**
 * Place your images in /public/assets/img/baf/{1..6}.jpg
 * or swap the paths below to your actual locations.
 */
import b1 from "../assets/img/baf/1.jpg";
import a1 from "../assets/img/baf/2.jpg";
import b2 from "../assets/img/baf/3.jpg";
import a2 from "../assets/img/baf/4.jpg";
import b3 from "../assets/img/baf/5.jpg";
import a3 from "../assets/img/baf/6.jpg";

// Data for the before and after showcases
const beforeAfterData = [
  {
    before: b1,
    after: a1,
    title: "Precision Collision Restoration",
    description:
      "From minor dings to major repairs, our I-CAR certified technicians restore your vehicle to its pre-accident condition with meticulous care.",
  },
  {
    before: b2,
    after: a2,
    title: "Flawless Paint & Finishing",
    description:
      "Using state-of-the-art color matching technology, we deliver seamless paint jobs that blend perfectly with your factory finish.",
  },
  {
    before: b3,
    after: a3,
    title: "Meticulous Attention to Detail",
    description:
      "We believe perfection is in the details. Every repair is inspected to ensure it meets our five-star standard of quality.",
  },
];

// Reusable Image Comparison Slider Component (Next.js <Image />)
const ImageComparisonSlider = ({ before, after, isLarge = false }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const imageContainerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleInteractionStart = (e) => {
    const onMove = (moveEvent) => {
      const clientX = moveEvent.touches
        ? moveEvent.touches[0].clientX
        : moveEvent.clientX;
      handleMove(clientX);
    };
    const onEnd = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchmove", onMove);
    document.addEventListener("touchend", onEnd);
  };

  return (
    <div
      ref={imageContainerRef}
      className="relative w-full select-none group"
      style={{ aspectRatio: isLarge ? "16/9" : "4/3" }}
    >
      {/* BEFORE */}
      <div className="absolute inset-0">
        <Image
          src={before}
          alt="Before repair"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
          priority={isLarge}
        />
      </div>

      {/* AFTER (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={after}
          alt="After repair"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
          priority={isLarge}
        />
      </div>

      {/* HANDLE */}
      <div
        className="absolute top-0 bottom-0 bg-red-600 w-1 cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
        onTouchStart={handleInteractionStart}
        onMouseDown={handleInteractionStart}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -left-5 h-12 w-12 rounded-full bg-red-600 border-4 border-neutral-900 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
          <FiArrowLeft size={20} />
          <FiArrowRight size={20} />
        </div>
      </div>

      {/* LABELS */}
      <div className="absolute top-2 left-2 bg-black/50 text-white text-xs font-bold uppercase px-2 py-1 rounded">
        Before
      </div>
      <div
        className="absolute top-2 right-2 bg-black/50 text-white text-xs font-bold uppercase px-2 py-1 rounded"
        style={{ opacity: sliderPosition > 5 ? 1 : 0 }}
      >
        After
      </div>
    </div>
  );
};

// Lightbox Component for immersive view
const Lightbox = ({ items, activeIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  const item = items[activeIndex];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50"
        aria-label="Close"
      >
        <FiX size={40} />
      </button>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/20 p-3 rounded-full"
        aria-label="Previous"
      >
        <FiArrowLeft size={32} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/20 p-3 rounded-full"
        aria-label="Next"
      >
        <FiArrowRight size={32} />
      </button>

      <div className="w-full max-w-5xl p-4">
        <div className="animate-fade-in-up">
          <ImageComparisonSlider
            before={item.before}
            after={item.after}
            isLarge
          />
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-1 text-gray-300">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterHome = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextItem = () =>
    setLightboxIndex((prev) => (prev + 1) % beforeAfterData.length);
  const prevItem = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length
    );

  return (
    <div className="bg-neutral-950">
      <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 mx-auto">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-tight">
            Transformations You Can See
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our commitment to quality is evident in every vehicle that leaves
            our shop. Here’s a glimpse of our recent work.
          </p>

          {/* Example Next.js Link usage (optional CTA) */}
          <div className="mt-6">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 transition-colors"
            >
              View Full Gallery
              <FiArrowRight />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {beforeAfterData.map((item, index) => (
            <button
              key={index}
              className="text-left bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-300 hover:scale-105 hover:shadow-red-900/50 cursor-pointer"
              onClick={() => openLightbox(index)}
              aria-label={`Open ${item.title}`}
            >
              <ImageComparisonSlider before={item.before} after={item.after} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={beforeAfterData}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextItem}
          onPrev={prevItem}
        />
      )}
    </div>
  );
};

export default BeforeAfterHome;
