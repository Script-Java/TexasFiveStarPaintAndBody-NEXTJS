// app/gallery/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiX, FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/navbar";   // adjust if your path differs
import Footer from "../components/footer";  // adjust if your path differs

// ✅ Import images directly from your assets folder (NOT /public)
import img1 from "../assets/img/gallery/1.jpg";
import img2 from "../assets/img/gallery/2.jpg";
import img3 from "../assets/img/gallery/3.jpg";
import img4 from "../assets/img/gallery/4.jpg";
import img5 from "../assets/img/gallery/5.jpg";
import img6 from "../assets/img/gallery/6.jpg";
import img7 from "../assets/img/gallery/7.jpg";
import img8 from "../assets/img/gallery/8.jpg";
import img9 from "../assets/img/gallery/9.jpg";
import img10 from "../assets/img/gallery/10.jpg";
import img11 from "../assets/img/gallery/11.jpg";
import img12 from "../assets/img/gallery/12.jpg";
import img13 from "../assets/img/gallery/13.jpg";
import img14 from "../assets/img/gallery/14.jpg";

import img15 from "../assets/img/1.jpg";
import img16 from "../assets/img/2.jpg";
import img17 from "../assets/img/3.jpg";
import img18 from "../assets/img/4.jpg";
import img19 from "../assets/img/5.jpg";
import img20 from "../assets/img/6.jpg";
import img21 from "../assets/img/7.jpg";
import img22 from "../assets/img/8.jpg";
import img23 from "../assets/img/9.jpg";
import img24 from "../assets/img/10.jpg";
import img25 from "../assets/img/11.jpg";
import img26 from "../assets/img/12.jpg";
import img27 from "../assets/img/13.jpg";
import img28 from "../assets/img/14.jpg";
import img29 from "../assets/img/15.jpg";
import img30 from "../assets/img/16.jpg";
import img31 from "../assets/img/17.jpg";
import img32 from "../assets/img/18.jpg";
import img33 from "../assets/img/19.jpg";

const galleryImages = [
  { src: img1, alt: "Flawless black paint job on a luxury sedan after body work." },
  { src: img2, alt: "Expert repair on a white SUV after a side collision." },
  { src: img3, alt: "Close-up of a perfectly repaired and painted car door panel." },
  { src: img4, alt: "A classic American muscle car with a new custom red paint finish." },
  { src: img5, alt: "A modern sports car undergoing paint correction and polishing." },
  { src: img6, alt: "Detailed view of a seamless bumper repair on a silver vehicle." },
  { src: img7, alt: "A restored vintage truck with a glossy two-tone paint job." },
  { src: img8, alt: "Precision alignment of a hood and fender after front-end repair." },
  { src: img9, alt: "A luxury convertible with a deep, reflective paint finish." },
  { src: img10, alt: "A high-performance vehicle with custom body modifications." },
  { src: img11, alt: "Paintless dent repair results on a car door with hail damage." },
  { src: img12, alt: "A European sports car looking brand new after full detailing." },
  { src: img13, alt: "Custom vinyl wrap application on a modern performance car." },
  { src: img14, alt: "Showroom-quality finish on a black SUV after paint correction." },
  { src: img15, alt: "Blue classic sports car after full restoration." },
  { src: img16, alt: "Luxury white sedan after front-end collision repair." },
  { src: img17, alt: "Orange muscle car with a custom paint job." },
  { src: img18, alt: "Silver luxury car undergoing body panel work." },
  { src: img19, alt: "Red sports car with a high-gloss paint finish." },
  { src: img20, alt: "White sports car after paintless dent repair." },
  { src: img21, alt: "Black sedan with perfectly aligned body panels." },
  { src: img22, alt: "Luxury sports car receiving a final polish." },
  { src: img23, alt: "Another angle of a restored classic car." },
  { src: img24, alt: "Detailed shot of a repaired vehicle." },
  { src: img25, alt: "A vehicle showcasing a new custom paint color." },
  { src: img26, alt: "A repaired car ready for customer pickup." },
  { src: img27, alt: "A close-up of a perfectly matched paint job." },
  { src: img28, alt: "A vehicle after extensive body work." },
  { src: img29, alt: "A restored car shining under the lights." },
  { src: img30, alt: "A vehicle with a new set of custom wheels and paint." },
  { src: img31, alt: "A close-up of a repaired and polished headlight." },
  { src: img32, alt: "A car with a new vinyl wrap design." },
  { src: img33, alt: "A vehicle looking brand new after a full detail service." },
];

// Lightbox (uses next/image with static imports)
function Lightbox({ images, activeIndex, onClose, onNext, onPrev }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  const image = images[activeIndex];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
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

      <div className="relative w-full max-w-6xl max-h-[80vh] h-[80vh]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextItem = () =>
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryImages.length));
  const prevItem = () =>
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <>
      <Navbar />

      <div className="bg-neutral-950 text-white pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              Our Portfolio of Perfection
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              Explore a collection of our finest work. Each project showcases our commitment to
              five-star quality, from minor touch-ups to major restorations.
            </p>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                className="mb-4 sm:mb-6 break-inside-avoid group relative overflow-hidden rounded-lg focus:outline-none"
                onClick={() => openLightbox(index)}
                aria-label={`Open image ${index + 1}`}
              >
                {/* Static imports include width/height so we can omit explicit props */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="transition-transform duration-500 group-hover:scale-110 w-full h-auto"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-bold drop-shadow-lg text-center p-4">
                    View Project
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              Experience the Five-Star Difference
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to work with a team that truly cares about your vehicle? Contact us today for a
              free, no-obligation estimate and let us show you why we&apos;re Garland&apos;s top choice.
            </p>
            <a
              href="https://maps.app.goo.gl/P4kbxw5D3ktNxKi59"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
            >
              Get Directions
              <FiArrowUpRight />
            </a>
          </div>
        </section>
      </div>

      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextItem}
          onPrev={prevItem}
        />
      )}
    </>
  );
}
