// app/gallery/GalleryContent.jsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiX, FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// ✅ Import images directly from assets folder
import img1 from "../assets/img/gallery/1.jpg";
import img2 from "../assets/img/gallery/2.jpg";
import img3 from "../assets/img/gallery/3.jpg";
import img4 from "../assets/img/gallery/4.jpg";
import img5 from "../assets/img/gallery/5.jpg";
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
  { id: 1, src: img1, category: "paint", alt: "Flawless black custom paint job on a luxury sedan after auto body work in Garland, TX." },
  { id: 2, src: img2, category: "collision", alt: "Expert collision repair on a white SUV after a side impact accident in the DFW metroplex." },
  { id: 3, src: img3, category: "collision", alt: "Close-up of a perfectly repaired and painted car door panel at our Garland body shop." },
  { id: 4, src: img4, category: "paint", alt: "Classic American muscle car with a new custom red paint finish restored in Garland." },
  { id: 5, src: img5, category: "paint", alt: "Modern sports car undergoing professional paint correction and polishing in Dallas area." },
  { id: 7, src: img7, category: "restoration", alt: "Restored vintage truck with a glossy two-tone paint job done in Garland, Texas." },
  { id: 8, src: img8, category: "collision", alt: "Precision alignment of a hood and fender after severe front-end collision repair." },
  { id: 9, src: img9, category: "paint", alt: "Luxury convertible with a deep, reflective custom paint finish by Texas Five Star." },
  { id: 10, src: img10, category: "paint", alt: "High-performance vehicle with custom body modifications and flawless paint matching." },
  { id: 11, src: img11, category: "pdr", alt: "Paintless dent repair (PDR) results on a car door with severe Texas hail damage." },
  { id: 12, src: img12, category: "paint", alt: "European sports car looking brand new after full detailing and auto paint correction." },
  { id: 13, src: img13, category: "paint", alt: "Custom vinyl wrap application on a modern performance car in Garland, TX." },
  { id: 14, src: img14, category: "paint", alt: "Showroom-quality finish on a black SUV after paint correction and sealant application." },
  { id: 15, src: img15, category: "restoration", alt: "Blue classic sports car fully restored at our premier auto body shop in Garland." },
  { id: 16, src: img16, category: "collision", alt: "Luxury white sedan after extensive front-end collision repair and frame straightening." },
  { id: 17, src: img17, category: "paint", alt: "Orange muscle car featuring a flawless custom paint job by our DFW experts." },
  { id: 18, src: img18, category: "collision", alt: "Silver luxury car undergoing meticulous body panel work and auto body repair." },
  { id: 19, src: img19, category: "paint", alt: "Red sports car with a high-gloss, mirror-like paint finish after auto restoration." },
  { id: 20, src: img20, category: "pdr", alt: "White sports car fully restored after paintless dent repair (PDR) for hail damage." },
  { id: 21, src: img21, category: "collision", alt: "Black sedan with perfectly aligned body panels following a major collision repair." },
  { id: 22, src: img22, category: "paint", alt: "Luxury sports car receiving a final polish and buffing at our Garland facility." },
  { id: 23, src: img23, category: "restoration", alt: "Side profile of a meticulously restored classic car showcasing perfect body lines." },
  { id: 24, src: img24, category: "collision", alt: "Detailed shot of a repaired vehicle demonstrating our factory-quality color matching." },
  { id: 25, src: img25, category: "paint", alt: "Vehicle showcasing a vibrant new custom paint color mixed and sprayed in-house." },
  { id: 26, src: img26, category: "collision", alt: "Fully repaired and detailed car ready for customer pickup at Texas Five Star Paint & Body." },
  { id: 27, src: img27, category: "paint", alt: "Close-up of a perfectly matched paint job blending seamlessly with original factory paint." },
  { id: 28, src: img28, category: "collision", alt: "Vehicle looking brand new after extensive body work and structural frame repair." },
  { id: 29, src: img29, category: "restoration", alt: "Restored classic car shining under the lights of our Garland auto body shop." },
  { id: 30, src: img30, category: "paint", alt: "Vehicle with a new set of custom wheels and a fresh, glossy paint application." },
  { id: 31, src: img31, category: "collision", alt: "Close-up of a repaired and polished headlight restoring night driving visibility." },
  { id: 32, src: img32, category: "paint", alt: "Car featuring a precise, custom vinyl wrap design applied by our specialists." },
  { id: 33, src: img33, category: "paint", alt: "Vehicle looking brand new after a full detail service and exterior paint correction." },
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
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2 rounded-full hover:bg-white/10 cursor-pointer"
        aria-label="Close"
      >
        <FiX size={32} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 p-3.5 rounded-full cursor-pointer"
        aria-label="Previous"
      >
        <FiArrowLeft size={24} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 p-3.5 rounded-full cursor-pointer"
        aria-label="Next"
      >
        <FiArrowRight size={24} />
      </button>

      <div className="relative w-full max-w-5xl max-h-[80vh] h-[80vh] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain bg-neutral-950/20"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}

export default function GalleryContent() {
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

      <div className="bg-neutral-950 text-white pt-24 min-h-screen flex flex-col justify-between">
        <div>
          {/* Hero */}
          <section className="py-16 sm:py-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.06),transparent_50%)]" />
            <div className="max-w-4xl mx-auto px-4 relative z-10">
              <span className="text-red-500 font-extrabold text-sm uppercase tracking-widest bg-red-950/40 border border-red-500/20 px-3.5 py-1.5 rounded-full">
                Excellence in Motion
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
                Our Portfolio of Perfection
              </h1>
              <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Explore a collection of our finest work. Each project showcases our commitment to
                five-star quality, from minor touch-ups to major restorations.
              </p>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="w-full aspect-[4/3] relative rounded-xl overflow-hidden group border border-white/5 bg-neutral-900 cursor-pointer shadow-lg hover:shadow-2xl hover:border-white/10 transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={index < 8}
                  />
                  
                  {/* Clean hover overlay with a centered arrow icon */}
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-red-600 rounded-full text-white shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <FiArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.04),transparent_50%)]" />
          <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              Experience the Five-Star Difference
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ready to work with a team that truly cares about your vehicle? Contact us today for a
              free, no-obligation estimate and let us show you why we&apos;re Garland&apos;s top choice.
            </p>
            <a
              href="https://maps.app.goo.gl/P4kbxw5D3ktNxKi59"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50 cursor-pointer"
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
