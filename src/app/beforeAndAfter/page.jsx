"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

// Image imports
import b1 from "../assets/img/baf/1.jpg";
import a1 from "../assets/img/baf/2.jpg";
import b2 from "../assets/img/baf/3.jpg";
import a2 from "../assets/img/baf/4.jpg";
import b3 from "../assets/img/baf/5.jpg";
import a3 from "../assets/img/baf/6.jpg";
import b4 from "../assets/img/baf/7.jpg";
import a4 from "../assets/img/baf/8.jpg";
import b5 from "../assets/img/baf/9.jpg";
import a5 from "../assets/img/baf/10.jpg";
import b6 from "../assets/img/baf/11.jpg";
import a6 from "../assets/img/baf/12.jpg";

// Data for the before and after showcases
const beforeAfterData = [
  { before: b1, after: a1, title: 'Front Bumper Collision Repair', description: 'Complete restoration of a heavily damaged front bumper and grille.' },
  { before: b2, after: a2, title: 'Side Panel Dent Removal', description: 'Paintless dent repair and color matching on a rear side panel.' },
  { before: b3, after: a3, title: 'Full Body Paint Job', description: 'A full strip, prep, and repaint with a factory-quality finish.' },
  { before: b4, after: a4, title: 'Rear-End Accident Restoration', description: 'Structural repair and replacement of trunk, bumper, and tail lights.' },
  { before: b5, after: a5, title: 'Classic Car Bodywork', description: 'Meticulous bodywork and rust removal for a classic vehicle.' },
  { before: b6, after: a6, title: 'Hail Damage Repair', description: 'Comprehensive PDR to remove extensive hail damage from all panels.' },
];

// Reusable Image Comparison Slider Component
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
      const clientX = moveEvent.touches ? moveEvent.touches[0].clientX : moveEvent.clientX;
      handleMove(clientX);
    };
    const onEnd = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onEnd);
  };

  return (
    <div
      ref={imageContainerRef}
      className="relative w-full select-none group"
      style={{ aspectRatio: isLarge ? '16/9' : '4/3' }}
    >
      <img
        src={before}
        alt="Before repair"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={after}
          alt="After repair"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
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
      <div className="absolute top-2 left-2 bg-black/50 text-white text-xs font-bold uppercase px-2 py-1 rounded">Before</div>
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs font-bold uppercase px-2 py-1 rounded" style={{ opacity: sliderPosition > 5 ? 1 : 0 }}>After</div>
    </div>
  );
};

// Lightbox Component for immersive view
const Lightbox = ({ items, activeIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  const item = items[activeIndex];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center animate-fade-in">
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50">
        <FiX size={40} />
      </button>
      <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/20 p-3 rounded-full">
        <FiArrowLeft size={32} />
      </button>
      <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/20 p-3 rounded-full">
        <FiArrowRight size={32} />
      </button>
      <div className="w-full max-w-5xl p-4">
        <div className="animate-fade-in-up">
          <ImageComparisonSlider before={item.before} after={item.after} isLarge={true} />
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-1 text-gray-300">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const BeforeAfterPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextItem = () => setLightboxIndex((prev) => (prev + 1) % beforeAfterData.length);
  const prevItem = () => setLightboxIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);

  return (
    <div className="bg-neutral-950">
      <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 mx-auto">
        <div className="max-w-3xl mb-12 lg:mb-16 text-center mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
            The Proof is in the Perfection
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Words can only say so much. Explore our gallery of recent projects and see the dramatic transformations for yourself. Drag the slider on any image to reveal the five-star quality in every repair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {beforeAfterData.map((item, index) => (
            <div key={index} className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-red-900/50" onClick={() => openLightbox(index)}>
                <ImageComparisonSlider before={item.before} after={item.after} />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
            </div>
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

export default BeforeAfterPage;
