"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiTool, FiDroplet, FiStar, FiShield, FiCheck, FiSun, FiRefreshCw } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";  // update path if yours differs

// Image imports
import heroBg from "../assets/img/10.jpg";
import collisionImg from "../assets/img/11.jpg";
import paintImg from "../assets/img/12.jpg";
import restorationImg from "../assets/img/9.jpg";
import pdrImg from "../assets/img/13.jpg";
import headlightImg from "../assets/img/14.jpg";
import leaseReturnImg from "../assets/img/15.jpg";

const servicesData = [
  {
    icon: FiTool,
    title: "Collision Repair",
    slug: "collision-repair",
    description:
      "Frame straightening, panel replacement, and bumper repair that restores your car to pre-accident condition. We handle all insurance claims and offer up to $500 deductible forgiveness.",
    image: collisionImg,
    details: ["Frame Straightening", "Panel Replacement", "Bumper & Fender Repair"],
  },
  {
    icon: FiDroplet,
    title: "Custom Paint & Refinishing",
    slug: "custom-paint-refinishing",
    description:
      "Computerized color matching for invisible repair blending, plus candy, pearl, and metallic custom finishes. Premium PPG and Axalta paints applied in our climate-controlled spray booth.",
    image: paintImg,
    details: ["Factory Color Matching", "Custom Colors & Finishes", "Paint Correction & Polishing"],
  },
  {
    icon: FiStar,
    title: "Auto Restoration",
    slug: "auto-restoration",
    description:
      "Frame-off and rotisserie restorations for classic muscle cars and vintage vehicles. Period-correct paint, factory-spec metalwork, and the craftsmanship to earn top marks at any car show.",
    image: restorationImg,
    details: ["Classic & Muscle Cars", "Frame-Off Restorations", "Period-Correct Finishing"],
  },
  {
    icon: FiShield,
    title: "Paintless Dent Repair (PDR)",
    slug: "paintless-dent-repair",
    description:
      "Hail damage, parking lot dings, and door dents removed same-day without repainting. Your factory finish stays 100% intact - no filler, no color mismatch risk.",
    image: pdrImg,
    details: ["Hail Damage Specialists", "Minor Dent & Ding Removal", "Maintains Factory Finish"],
  },
  {
    icon: FiSun,
    title: "Headlight Restoration",
    slug: "headlight-restoration",
    description:
      "Multi-stage wet sanding removes years of sun damage and yellowing, then we seal with UV protection that keeps headlights clear for 2–3 years. A fraction of the cost of full replacement.",
    image: headlightImg,
    details: ["Oxidation & Yellowing Removal", "Multi-stage Wet Sanding", "UV Protection Sealant"],
  },
  {
    icon: FiRefreshCw,
    title: "Lease Return Reconditioning",
    slug: "lease-return-reconditioning",
    description:
      "We inspect using dealership lease-return standards, then fix every scratch, ding, and bumper scuff the inspector would flag. Our customers routinely save $500–$2,000+ vs. dealer charges.",
    image: leaseReturnImg,
    details: ["Pre-Inspection Assessment", "Scuffs & Scratch Repair", "Dings & Bumper Reconditioning"],
  },
];

function ServiceCard({ icon: Icon, title, slug, description, image, details }) {
  return (
    <Link href={`/services/${slug}`} className="block group">
      <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-900/50">
        <div className="relative h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div className="bg-red-600 p-3 rounded-full">
              <Icon className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-400 mb-4">{description}</p>
          <ul className="space-y-2">
            {details.map((detail) => (
              <li key={detail} className="flex items-center gap-3 text-gray-300">
                <FiCheck className="text-red-500 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 text-red-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn More
            <FiArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesContent() {
  return (
    <>
      <Navbar />

      <div className="bg-neutral-950 text-white pt-24">
        {/* Announcement Banner */}
        <div className="bg-red-600">
          <div className="max-w-[85rem] px-4 py-3 sm:px-6 lg:px-8 mx-auto">
            <p className="text-white text-center font-semibold">
              Up to $500 Deductible Forgiveness - Ask Us How!
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroBg}
              alt="Expert auto body work in progress"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              Five-Star Quality, Down to the Last Detail
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Six specialized services under one roof - from insurance-covered collision
              repair to frame-off classic restorations. Every job backed by our perfect
              5-star Google rating.
            </p>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {servicesData.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              Experience the Five-Star Difference
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Visit us at 214 Range Dr in Garland for a free estimate, or call for same-day
              consultations. We handle all insurance claims and offer up to $500 deductible forgiveness.
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
            {/* Example of internal navigation with Next.js Link */}
            <div className="mt-6">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-white/90 hover:text-white hover:border-white/30 transition"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
