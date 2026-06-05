"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
import b7 from "../assets/img/baf/13.jpg";
import a7 from "../assets/img/baf/14.jpg";
import b8 from "../assets/img/baf/15.jpg";
import a8 from "../assets/img/baf/16.jpg";
import b9 from "../assets/img/baf/17.jpg";
import a9 from "../assets/img/baf/18.jpg";
import b10 from "../assets/img/baf/19.jpg";
import a10 from "../assets/img/baf/20.jpg";
import b11 from "../assets/img/baf/21.jpg";
import a11 from "../assets/img/baf/22.jpg";
import b12 from "../assets/img/baf/23.jpg";
import a12 from "../assets/img/baf/24.jpg";
import b13 from "../assets/img/baf/25.jpg";
import a13 from "../assets/img/baf/26.jpg";
import b14 from "../assets/img/baf/27.jpg";
import a14 from "../assets/img/baf/28.jpg";

// Data for the before and after showcases
const beforeAfterData = [
  { before: a1, after: b1, title: 'Classic Car Repair & Restoration', description: 'Meticulous classic car repair, paint restoration, and rust repair. Our Garland body shop preserves automotive history with showroom-quality auto body repair work.', altBefore: 'Before repair: Smashed front bumper and damaged classic car grille from collision in Garland, TX', altAfter: 'After repair: Completely restored classic car with factory-quality bodywork and fresh paint' },
  { before: a2, after: b2, title: 'Front-End Collision Repair', description: 'Comprehensive front-end collision repair services, including bumper replacement, frame alignment, and paint matching at our professional auto body shop.', altBefore: 'Before repair: Dented rear side panel with severe collision scrape on a daily driver', altAfter: 'After repair: Seamless auto dent removal and perfect color matching by Texas Five Star' },
  { before: a3, after: b3, title: 'Frontend Collision Repair', description: 'Expert frontend collision repair and auto body panel restoration. We repair hoods, grilles, and structural components after a frontend accident.', altBefore: 'Before repair: Damaged frontend body panels, broken grille, and faded paintwork', altAfter: 'After repair: Restored frontend panels with flawless factory-quality paint finish in DFW' },
  { before: a4, after: b4, title: 'Custom Frontend Conversion', description: 'Specialized frontend conversions and custom car paint designs. Enhance your vehicle\'s aesthetics with custom body kit installations and paint matching.', altBefore: 'Before repair: Damaged rear bumper and trunk lid from a rear-end collision', altAfter: 'After repair: Fully repaired rear end with custom styling conversion and paint matching' },
  { before: a5, after: b5, title: 'Professional Collision Repair', description: 'Certified collision repair and auto body repair services in Garland, TX. We restore passenger cars, trucks, and SUVs back to factory safety specifications.', altBefore: 'Before repair: Smashed side doors and panels from a severe side-impact collision', altAfter: 'After repair: Restored side panel with flawless factory-match auto paint and door replacement' },
  { before: a6, after: b6, title: 'Precision Frame Repair', description: 'Advanced computer-guided frame repair and structural realignment. Our collision center repairs bent frames to restore original chassis integrity.', altBefore: 'Before repair: Severe collision damage affecting the vehicle frame and front panels', altAfter: 'After repair: Restored frame alignment and completed paint work back to factory specs' },
  { before: a7, after: b7, title: 'Front-End Paint Correction', description: 'High-end front-end paint restoration, rock chip repair, and computerized color matching. Bring back your vehicle\'s showroom shine at our auto paint shop.', altBefore: 'Before repair: Smashed fender and crumpled front-end paneling requiring replacement', altAfter: 'After repair: Reshaped front fender and flawless paint correction finish in Garland' },
  { before: a8, after: b8, title: 'Paint & Body Work Restoration', description: 'Full-service auto paint and body work, including dent removal, scratch repair, and panel refinishing at our family-owned auto body shop.', altBefore: 'Before repair: Multi-point door dings and deep key scratches across the side panel', altAfter: 'After repair: Mirror-smooth panel finish with flawless factory paint matching and clear coat' },
  { before: a9, after: b9, title: 'Hood & Front-End Restoration', description: 'Complete hood replacement and front-end alignment after a head-on collision.', altBefore: 'Before repair: Severely damaged hood and misaligned front-end after an accident', altAfter: 'After repair: New hood installation with factory-aligned front-end and paint matching' },
  { before: a10, after: b10, title: 'Truck Bed & Tailgate Repair', description: 'Full repair and respray of a dented truck bed and tailgate.', altBefore: 'Before repair: Dented and heavily scraped truck bed and tailgate from work use', altAfter: 'After repair: Smooth truck bed and tailgate with fresh, durable paint application' },
  { before: a11, after: b11, title: 'Truck Bed Collision Repair', description: 'Expert truck bed collision repair, panel reconstruction, and dent removal. We handle tough truck body repair jobs with factory-match refinishing.', altBefore: 'Before repair: Dented truck bed and scraped tailgate panels needing structural repair', altAfter: 'After repair: Restored truck bed with fresh paint and auto body work completed in Texas' },
  { before: a12, after: b12, title: 'Multi-Panel Collision Repair', description: 'Simultaneous repair of multiple body panels damaged in a side-impact collision.', altBefore: 'Before repair: Multiple vehicle side panels damaged from a major side-impact collision', altAfter: 'After repair: All side panels fully restored with consistent finish and alignment' },
  { before: a13, after: b13, title: 'Paint Correction & Detailing', description: 'Deep paint correction to remove swirl marks, oxidation, and restore gloss.', altBefore: 'Before repair: Highly oxidized and swirl-marked paint surface losing its original shine', altAfter: 'After repair: Mirror-finish paint correction and detailing restoring depth and gloss' },
  { before: a14, after: b14, title: 'Custom Paint Shop Finishes', description: 'High-quality custom auto paint jobs, color matching, and full body refinishing. Elevate your car\'s appearance with durable, vibrant automotive finishes.', altBefore: 'Before repair: Bent frame and damaged paint from a severe rear-end collision in DFW', altAfter: 'After repair: Restored paint and customized bodywork transforming the vehicle\'s look' },
];

// Reusable Image Comparison Slider Component
const ImageComparisonSlider = ({ before, after, altBefore = 'Before repair', altAfter = 'After repair', isLarge = false }) => {
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
      <div className="absolute inset-0">
        <Image src={before} alt={altBefore} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="absolute inset-0">
          <Image src={after} alt={altAfter} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
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
          <ImageComparisonSlider before={item.before} after={item.after} altBefore={item.altBefore} altAfter={item.altAfter} isLarge={true} />
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-1 text-gray-300">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const BeforeAndAfterContent = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextItem = () => setLightboxIndex((prev) => (prev + 1) % beforeAfterData.length);
  const prevItem = () => setLightboxIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);

  return (
    <>
      <Navbar />
      <div className="bg-neutral-950 pt-24">
        <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 mx-auto">
          <div className="max-w-3xl mb-12 lg:mb-16 text-center mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
              The Proof is in the Perfection
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Words can only say so much. Explore our gallery of recent projects and see the dramatic transformations for yourself. Drag the slider on any image to reveal the five-star quality in every repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {beforeAfterData.map((item, index) => (
              <div key={index} className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-red-900/50" onClick={() => openLightbox(index)}>
                  <ImageComparisonSlider before={item.before} after={item.after} altBefore={item.altBefore} altAfter={item.altAfter} />
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
      <Footer />
    </>
  );
};

export default BeforeAndAfterContent;
